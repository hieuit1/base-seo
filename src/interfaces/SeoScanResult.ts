import { StaticSeoData } from "../services/CheerioService";

export interface SeoScanResult {
  titleVal: string;
  metaVal: string | null;
  h1Texts: string[];
  allHeadings: { tag: string; text: string }[];
  headingHierarchy: { valid: boolean; issues: string[] };
  currentUrl: string;
  urlPath: string;
  wordCount: number;
  first100Words: string;
  keywordDensity: number;
  staticData?: StaticSeoData;
  images: {
    src: string;
    alt: string | null;
    width: string | null;
    height: string | null;
    extension: string;
    isModernFormat: boolean;
    sizeBytes: number | null;
  }[];
  missingAltCount: number;
  imagesWithBadNames: number;
  imagesWithDimensions: number;
  internalLinks: { href: string; text: string }[];
  externalLinks: { href: string; text: string; rel: string | null }[];
  canonical: string | null;
  robots: string | null;
  hasSchema: boolean;
  ogTitle: string | null;
  ogDesc: string | null;
  ogImage: string | null;
  twitterTags: Record<string, string>;
  lang: string | null;
  charset: string | null;
  hasFavicon: boolean;
  hasViewport: boolean;
  isHttps: boolean;
  mixedContent: string[];
  bodyText: string;
  hreflangs: { rel: string; href: string; lang: string }[];
  pageHeaders: Record<string, string>;
  cssFiles: string[];
  jsFiles: string[];
  totalPageSizeBytes: number;
  hasHtml5Doctype: boolean;
  minFontSize: number;
  badTouchTargets: number;
}

export default SeoScanResult;
