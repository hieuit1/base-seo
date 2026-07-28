import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';
import dotenv from 'dotenv';
import { seoManualConfig } from '../src/test-data/seoManualConfig';
import { SeoPageTestData } from '../src/test-data/seoData';

// Load environment variables
dotenv.config();

const BASE_URL = process.env.BASE_URL;

async function fetchSitemapUrls(sitemapUrl: string, maxLimit?: number): Promise<string[]> {
  try {
    const response = await fetch(sitemapUrl);
    if (!response.ok) {
      console.warn(`Sitemap not found at ${sitemapUrl} (${response.status})`);
      return [];
    }
    const xml = await response.text();
    const $ = cheerio.load(xml, { xmlMode: true });

    const isSitemapIndex = $('sitemapindex').length > 0;

    if (isSitemapIndex) {
      console.log(`Found sitemap index at ${sitemapUrl}. Fetching sub-sitemaps...`);
      const sitemapPromises: Promise<string[]>[] = [];
      $('sitemap > loc, sitemap loc').each((_, el) => {
        const subSitemapUrl = $(el).text().trim();
        if (subSitemapUrl) {
          let limit = undefined;
          if (subSitemapUrl.includes('sitemap_product')) limit = 5;
          else if (subSitemapUrl.includes('sitemap_blog')) limit = 5;
          sitemapPromises.push(fetchSitemapUrls(subSitemapUrl, limit));
        }
      });

      const results = await Promise.all(sitemapPromises);
      return results.flat();
    } else {
      const urls: string[] = [];
      $('url > loc, loc').each((_, el) => {
        const url = $(el).text().trim();
        // Bỏ qua các URL sitemap nếu vô tình lọt vào
        if (url && !url.endsWith('.xml')) {
          urls.push(url);
        }
      });
      // Lọc các kết quả trùng lặp nếu query selector lấy dư
      let uniqueUrls = Array.from(new Set(urls));
      if (maxLimit && uniqueUrls.length > maxLimit) {
        // Shuffle array
        uniqueUrls = uniqueUrls.sort(() => 0.5 - Math.random());
        uniqueUrls = uniqueUrls.slice(0, maxLimit);
      }
      return uniqueUrls;
    }
  } catch (error) {
    console.error('Error fetching sitemap:', error);
    return [];
  }
}

async function extractMetaKeyword(url: string): Promise<{ keyword: string, name: string }> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return { keyword: '', name: '' };
    }
    const html = await response.text();
    const $ = cheerio.load(html);
    let keyword = $('meta[name="keywords"]').attr('content') || '';
    if (!keyword) {
      // Fallback to primary keyword from title or H1 if needed, or leave empty
      // For now, we leave it empty to force manual definition or accept no keyword
    }

    let name = $('title').text().trim() || $('h1').first().text().trim() || url;
    // Extract a cleaner name
    if (name.includes('|')) name = name.split('|')[0].trim();
    if (name.includes('-')) name = name.split('-')[0].trim();

    return { keyword, name };
  } catch (error) {
    console.error(`Error fetching ${url}:`, error);
    return { keyword: '', name: '' };
  }
}

async function run() {
  console.log('Starting SEO data generation...');

  const sitemapUrl = new URL('/sitemap.xml', BASE_URL).toString();
  console.log(`Fetching sitemap from: ${sitemapUrl}`);

  const sitemapUrls = await fetchSitemapUrls(sitemapUrl);
  console.log(`Found ${sitemapUrls.length} URLs in sitemap.`);

  const finalData: SeoPageTestData[] = [];

  // Track manual configs that have been processed to ensure we don't miss ones not in sitemap
  const processedPaths = new Set<string>();

  for (const fullUrl of sitemapUrls) {
    // Extract relative path to match with manual config
    const urlObj = new URL(fullUrl);
    const relativePath = urlObj.pathname;
    processedPaths.add(relativePath);

    // Find manual config
    const manualEntry = seoManualConfig.find(item => item.path === relativePath);

    // Fetch meta data if not overridden by manual config
    let keyword = manualEntry?.keyword;
    let name = manualEntry?.name;

    if (!keyword || !name) {
      console.log(`Fetching metadata for ${fullUrl}...`);
      const meta = await extractMetaKeyword(fullUrl);
      keyword = keyword || meta.keyword || 'Keyword chưa xác định';
      name = name || meta.name;
    }

    // Default configuration for auto-generated items
    const baseEntry: SeoPageTestData = {
      name: name!,
      path: relativePath,
      keyword: keyword!,
      expectIndexable: true,
      checkSocialOg: true,
      priority: "medium",
      severity: "normal",
      checkCoreWebVitals: false
    };

    // Merge manual overrides over the defaults
    finalData.push({
      ...baseEntry,
      ...manualEntry
    });
  }

  // Add any manual entries that were NOT in the sitemap
  for (const manualEntry of seoManualConfig) {
    if (!processedPaths.has(manualEntry.path)) {
      console.log(`Adding manual entry not found in sitemap: ${manualEntry.path}`);
      const baseEntry: SeoPageTestData = {
        name: manualEntry.name || manualEntry.path,
        path: manualEntry.path,
        keyword: manualEntry.keyword || 'Keyword chưa xác định',
        priority: "medium",
        severity: "normal"
      };
      finalData.push({ ...baseEntry, ...manualEntry });
    }
  }

  // Generate the TypeScript file content
  const fileContent = `// TẬP TIN NÀY ĐƯỢC TẠO TỰ ĐỘNG BỞI scripts/generateSeoData.ts
// Không nên sửa trực tiếp file này. Hãy sửa src/test-data/seoManualConfig.ts

import { SeoPageTestData } from "./seoData";

export const seoTestData: SeoPageTestData[] = ${JSON.stringify(finalData, null, 2)};
`;

  const outputPath = path.join(__dirname, '../src/test-data/seoGeneratedData.ts');
  fs.writeFileSync(outputPath, fileContent, 'utf-8');
  console.log(`SEO data generated successfully with ${finalData.length} items.`);
  console.log(`Output written to ${outputPath}`);
}

run().catch(console.error);
