import { SITE } from "../site";

export type SeoPage = {
  path: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  faq: { q: string; a: string }[];
  kind: "tool" | "guide" | "legal";
};

export const SEO_PAGES: SeoPage[] = [
  {
    path: "/",
    kind: "tool",
    title: "Free Color Picker — HEX, RGB, HSL & OKLCH converter",
    description:
      "Pick colors online and copy HEX, RGB, HSL, HSV, HWB, or OKLCH. No sign-up — everything runs in your browser.",
    h1: "Free Color Picker",
    intro:
      "Choose a color with sliders or paste a code. Copy HEX and RGB in one click. Based on the open-source colorpicker.dev project.",
    faq: [
      {
        q: "Is this color picker free?",
        a: "Yes. Free Color Picker is free to use with no account. All processing happens in your browser.",
      },
      {
        q: "Which color formats are supported?",
        a: "You can work with HEX, RGB, HSL, HSV, HWB, and OKLCH, including alpha when your browser supports it.",
      },
      {
        q: "Do you store my colors?",
        a: "No server uploads. Your chosen color may be saved in local storage on your device for convenience.",
      },
    ],
  },
  {
    path: "/hex-color-picker",
    kind: "guide",
    title: "HEX Color Picker — copy hex codes online",
    description:
      "Free HEX color picker with live preview. Convert between hex, RGB, and HSL without installing software.",
    h1: "HEX color picker",
    intro:
      "Use the sliders or type a #RRGGBB value. The tool validates your hex and shows matching RGB and HSL codes.",
    faq: [
      {
        q: "What is a HEX color code?",
        a: "HEX uses six digits (and optional alpha) after # to describe red, green, and blue, for example #3366FF.",
      },
      {
        q: "Can I paste a hex code?",
        a: "Yes. Paste into the hex field; the picker updates all other formats automatically.",
      },
    ],
  },
  {
    path: "/color-picker-from-image",
    kind: "guide",
    title: "Color Picker from Image — sample colors locally",
    description:
      "Upload an image and click to pick a pixel color. Get HEX and RGB in the browser — no upload to a server.",
    h1: "Color picker from image",
    intro:
      "Choose a photo from your device, then click anywhere on the image to sample that pixel's color.",
    faq: [
      {
        q: "Is my image uploaded to the internet?",
        a: "No. The file stays on your device; sampling uses the browser canvas API only.",
      },
      {
        q: "Which image formats work?",
        a: "Common formats such as JPEG, PNG, WebP, and GIF are supported by modern browsers.",
      },
    ],
  },
  {
    path: "/rgb-to-hex",
    kind: "guide",
    title: "RGB to HEX Converter — free online",
    description:
      "Convert RGB values to hexadecimal color codes and copy the result. Free browser tool with live preview.",
    h1: "RGB to HEX converter",
    intro:
      "Adjust RGB channels or paste rgb(…) syntax. The hex field updates instantly so you can copy for CSS or design tools.",
    faq: [
      {
        q: "How do I convert RGB to hex?",
        a: "Enter three numbers from 0–255 per channel; the picker shows the equivalent #RRGGBB code.",
      },
      {
        q: "Does it support alpha?",
        a: "Eight-digit hex (#RRGGBBAA) is available when you use RGBA or adjust the alpha slider.",
      },
    ],
  },
  {
    path: "/privacy",
    kind: "legal",
    title: "Privacy Policy — Free Color Picker",
    description: "How Free Color Picker handles data, ads, and analytics on web-free.site.",
    h1: "Privacy policy",
    intro: "This page explains what Free Color Picker collects and how third-party services may appear on the site.",
    faq: [],
  },
  {
    path: "/terms",
    kind: "legal",
    title: "Terms of Use — Free Color Picker",
    description: "Terms for using the Free Color Picker tool and related pages.",
    h1: "Terms of use",
    intro: "By using this site you agree to these terms. The tool is provided as-is without warranty.",
    faq: [],
  },
  {
    path: "/about",
    kind: "legal",
    title: "About — Free Color Picker",
    description: "About Free Color Picker, the MIT open-source base, and web-free.site.",
    h1: "About Free Color Picker",
    intro:
      "Free Color Picker is a browser-based color tool on the web-free.site network, built on Brandon Mathis's MIT color picker.",
    faq: [],
  },
  {
    path: "/contact",
    kind: "legal",
    title: "Contact — Free Color Picker",
    description: "Contact the Free Color Picker maintainers.",
    h1: "Contact",
    intro: "Questions about the site or upstream project? Use the contact details below.",
    faq: [],
  },
];

export function pageForPath(path: string): SeoPage {
  return SEO_PAGES.find((p) => p.path === path) ?? SEO_PAGES[0];
}

export function canonicalFor(path: string): string {
  if (path === "/") return `${SITE.canonicalHost}/`;
  return `${SITE.canonicalHost}${path}`;
}