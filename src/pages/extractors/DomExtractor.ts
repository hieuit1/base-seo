import { BasePage } from "../BasePage";

export class DomExtractor extends BasePage {
  async getTitle(): Promise<string> {
    return await this.page.title();
  }

  async getMetaDescription(): Promise<string | null> {
    return await this.getMetaContent("description");
  }

  async getH1Elements(): Promise<string[]> {
    return await this.getAllElementsText("h1");
  }

  async getAllHeadings(): Promise<{ tag: string; text: string }[]> {
    return await this.page.evaluate(() => {
      const headings: { tag: string; text: string }[] = [];
      document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((el) => {
        headings.push({ tag: el.tagName.toLowerCase(), text: (el.textContent || "").trim() });
      });
      return headings;
    });
  }

  async getBodyText(): Promise<string> {
    return await this.page.evaluate(() => {
      const clone = document.body.cloneNode(true) as HTMLElement;
      clone.querySelectorAll("script, style, noscript, iframe").forEach((el) => el.remove());
      return (clone.textContent || "").replace(/\s+/g, " ").trim();
    });
  }

  async getImages(): Promise<{ src: string; alt: string | null; width: string | null; height: string | null; extension: string; isModernFormat: boolean; sizeBytes: number | null }[]> {
    return await this.page.evaluate(() => {
      return Array.from(document.querySelectorAll("img")).map((img) => {
        const src = img.getAttribute("src") || (img as HTMLImageElement).currentSrc || "";
        let extension = "";
        try {
          const urlObj = new URL(src, window.location.origin);
          const extMatch = urlObj.pathname.match(/\.([a-zA-Z0-9]+)$/);
          if (extMatch) extension = extMatch[1].toLowerCase();
        } catch (e) { }

        let isModernFormat = extension === "webp" || extension === "avif";

        const parent = img.parentElement;
        if (!isModernFormat && parent && parent.tagName.toLowerCase() === "picture") {
          const sources = Array.from(parent.querySelectorAll("source"));
          const modernSource = sources.find(s => s.type === "image/webp" || s.type === "image/avif");
          if (modernSource) isModernFormat = true;
        }

        return {
          src,
          alt: img.getAttribute("alt"),
          width: img.getAttribute("width") || img.style.width || null,
          height: img.getAttribute("height") || img.style.height || null,
          extension,
          isModernFormat,
          sizeBytes: null
        };
      });
    });
  }

  async getInternalLinks(): Promise<{ href: string; text: string }[]> {
    const currentHost = new URL(this.getCurrentUrl()).hostname;
    return await this.page.evaluate((host) => {
      return Array.from(document.querySelectorAll("a[href]"))
        .filter((a) => {
          const href = a.getAttribute("href") || "";
          try {
            const url = new URL(href, window.location.origin);
            return url.hostname === host || href.startsWith("/") || href.startsWith("#");
          } catch { return href.startsWith("/") || href.startsWith("#"); }
        })
        .map((a) => {
          let text = (a.textContent || "").trim();
          if (!text) {
            const img = a.querySelector("img");
            if (img) text = (img.getAttribute("alt") || "").trim();
          }
          if (!text) {
            text = (a.getAttribute("aria-label") || "").trim();
          }
          return { href: a.getAttribute("href") || "", text };
        });
    }, currentHost);
  }

  async getExternalLinks(): Promise<{ href: string; text: string; rel: string | null }[]> {
    const currentHost = new URL(this.getCurrentUrl()).hostname;
    return await this.page.evaluate((host) => {
      return Array.from(document.querySelectorAll("a[href]"))
        .filter((a) => {
          const href = a.getAttribute("href") || "";
          try {
            const url = new URL(href, window.location.origin);
            return url.hostname !== host && !href.startsWith("/") && !href.startsWith("#");
          } catch { return false; }
        })
        .map((a) => {
          let text = (a.textContent || "").trim();
          if (!text) {
            const img = a.querySelector("img");
            if (img) text = (img.getAttribute("alt") || "").trim();
          }
          if (!text) {
            text = (a.getAttribute("aria-label") || "").trim();
          }
          return { href: a.getAttribute("href") || "", text, rel: a.getAttribute("rel") };
        });
    }, currentHost);
  }

  async getCanonicalUrl(): Promise<string | null> {
    return await this.page.evaluate(() => {
      const link = document.querySelector('link[rel="canonical"]');
      return link ? link.getAttribute("href") : null;
    });
  }

  async getRobotsContent(): Promise<string | null> {
    return await this.getMetaContent("robots");
  }

  async hasSchemaMarkup(): Promise<boolean> {
    return await this.page.evaluate(() => {
      if (document.querySelectorAll('script[type="application/ld+json"]').length > 0) return true;
      if (document.querySelectorAll("[itemscope]").length > 0) return true;
      return document.querySelectorAll("[vocab]").length > 0;
    });
  }

  async getOpenGraphTags(): Promise<Record<string, string>> {
    return await this.page.evaluate(() => {
      const tags: Record<string, string> = {};
      document.querySelectorAll('meta[property^="og:"]').forEach((meta) => {
        const p = meta.getAttribute("property"), c = meta.getAttribute("content");
        if (p && c) tags[p] = c;
      });
      return tags;
    });
  }

  async getTwitterCardTags(): Promise<Record<string, string>> {
    return await this.page.evaluate(() => {
      const tags: Record<string, string> = {};
      document.querySelectorAll('meta[name^="twitter:"]').forEach((meta) => {
        const n = meta.getAttribute("name"), c = meta.getAttribute("content");
        if (n && c) tags[n] = c;
      });
      return tags;
    });
  }

  async getLangAttribute(): Promise<string | null> {
    return await this.page.evaluate(() => document.documentElement.getAttribute("lang"));
  }

  async getCharset(): Promise<string | null> {
    return await this.page.evaluate(() => {
      const meta = document.querySelector("meta[charset]");
      if (meta) return meta.getAttribute("charset");
      const httpEquiv = document.querySelector('meta[http-equiv="Content-Type"]');
      if (httpEquiv) {
        const match = (httpEquiv.getAttribute("content") || "").match(/charset=([^\s;]+)/i);
        return match ? match[1] : null;
      }
      return null;
    });
  }

  async hasFavicon(): Promise<boolean> {
    return await this.page.evaluate(() => {
      return document.querySelector('link[rel="icon"], link[rel="shortcut icon"], link[rel="apple-touch-icon"]') !== null;
    });
  }

  async hasViewportMeta(): Promise<boolean> {
    const content = await this.getMetaContent("viewport");
    return content !== null && content.length > 0;
  }

  isHttps(): boolean {
    return this.getCurrentUrl().startsWith("https://");
  }

  async getMixedContent(): Promise<string[]> {
    if (!this.isHttps()) return [];
    return await this.page.evaluate(() => {
      const mixed: string[] = [];
      document.querySelectorAll("img[src], script[src], link[href], iframe[src], video[src], audio[src], source[src]").forEach((el) => {
        const url = el.getAttribute("src") || el.getAttribute("href") || "";
        if (url.startsWith("http://")) mixed.push(url);
      });
      return mixed;
    });
  }

  async getHreflangs(): Promise<{ rel: string; href: string; lang: string }[]> {
    return await this.page.evaluate(() => {
      return Array.from(document.querySelectorAll('link[rel="alternate"][hreflang]')).map(link => ({
        rel: link.getAttribute("rel") || "",
        href: link.getAttribute("href") || "",
        lang: link.getAttribute("hreflang") || ""
      }));
    });
  }

  async getCssFiles(): Promise<string[]> {
    return await this.page.evaluate(() => {
      return Array.from(document.querySelectorAll('link[rel="stylesheet"]'))
        .map(link => link.getAttribute("href") || "");
    });
  }

  async getJsFiles(): Promise<string[]> {
    return await this.page.evaluate(() => {
      return Array.from(document.querySelectorAll('script[src]'))
        .map(s => s.getAttribute("src") || "");
    });
  }

  async hasHtml5Doctype(): Promise<boolean> {
    return await this.page.evaluate(() => {
      const doctype = document.doctype;
      return doctype !== null && doctype.name === 'html';
    });
  }

  async getMobileMetrics(): Promise<{ minFontSize: number; badTouchTargets: number }> {
    return await this.page.evaluate(() => {
      let minSize = Infinity;
      const textSelectors = "body, p, span, a, li, td, th, label, h1, h2, h3, h4, h5, h6, input, textarea, select, div";
      document.querySelectorAll(textSelectors).forEach((el) => {
        const style = window.getComputedStyle(el);
        // Bỏ qua element ẩn
        if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') return;
        const size = parseFloat(style.fontSize);
        if (size > 0 && size < minSize) minSize = size;
      });

      let badTargets = 0;
      document.querySelectorAll("button, a, input, select, textarea, [role='button']").forEach((el) => {
        const style = window.getComputedStyle(el);
        // Bỏ qua element ẩn
        if (style.display === 'none' || style.visibility === 'hidden') return;
        const rect = el.getBoundingClientRect();
        // Chỉ check element visible và trong viewport
        if (rect.width > 0 && rect.height > 0 && rect.top < window.innerHeight) {
          if (rect.width < 48 || rect.height < 48) badTargets++;
        }
      });
      return {
        minFontSize: Math.round(minSize === Infinity ? 16 : minSize),
        badTouchTargets: badTargets,
      };
    });
  }
}
