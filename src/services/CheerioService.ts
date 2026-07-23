import { load } from 'cheerio';

export interface StaticSeoData {
  title: string;
  metaDesc: string | null;
  h1: string[];
}

export class CheerioService {
  /**
   * Parse HTML thô (Raw HTML) để lấy thông tin SEO cơ bản.
   * Dữ liệu này sẽ được dùng để so sánh với DOM đã render bằng JavaScript.
   */
  public static parseStaticHtml(html: string): StaticSeoData {
    const $ = load(html);
    
    // Lấy Title tag
    const title = $('title').first().text().trim();
    
    // Lấy Meta Description
    let metaDesc = $('meta[name="description"]').attr('content');
    if (!metaDesc) {
      // Thử trường hợp property og:description
      metaDesc = $('meta[property="og:description"]').attr('content');
    }

    // Lấy danh sách H1
    const h1: string[] = [];
    $('h1').each((_, el) => {
      h1.push($(el).text().trim().replace(/\s+/g, ' '));
    });

    return {
      title,
      metaDesc: metaDesc ? metaDesc.trim() : null,
      h1
    };
  }
}
