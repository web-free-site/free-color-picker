import { type FC, type ReactNode, createContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { JsonLd } from "../components/JsonLd";
import { pageForPath, canonicalFor } from "./pages";
import { SITE } from "../site";

const Ctx = createContext({});

export const HelmetProvider: FC<{ children: ReactNode }> = ({ children }) => (
  <Ctx.Provider value={{}}>{children}</Ctx.Provider>
);

function usePageMeta() {
  const { pathname } = useLocation();
  const page = pageForPath(pathname || "/");

  useEffect(() => {
    document.title = page.title;
    const setMeta = (name: string, content: string, prop?: boolean) => {
      const sel = prop ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let el = document.querySelector(sel) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        if (prop) el.setAttribute("property", name);
        else el.name = name;
        document.head.appendChild(el);
      }
      el.content = content;
    };
    setMeta("description", page.description);
    setMeta("og:title", page.title, true);
    setMeta("og:description", page.description, true);
    const url = canonicalFor(page.path);
    setMeta("og:url", url, true);
    setMeta("og:site_name", SITE.name, true);
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;
    document.documentElement.lang = "en";
  }, [page, pathname]);
}

export const RouteMeta: FC = () => {
  usePageMeta();
  const { pathname } = useLocation();
  const page = pageForPath(pathname || "/");
  return page.faq.length > 0 ? <JsonLd page={page} /> : null;
};