import fs from 'node:fs'
import path from 'node:path'

const HOST = 'https://free-color-picker.web-free.site'
const dist = path.resolve('dist')
const baseHtml = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')

const homeFaq = [
  {
    q: 'Is this color picker free?',
    a: 'Yes. Free Color Picker is free to use with no account. All processing happens in your browser.',
  },
  {
    q: 'Which color formats are supported?',
    a: 'You can work with HEX, RGB, HSL, HSV, HWB, and OKLCH, including alpha when your browser supports it.',
  },
  {
    q: 'Do you store my colors?',
    a: 'No server uploads. Your chosen color may be saved in local storage on your device for convenience.',
  },
]

const pages = [
  {
    path: '/hex-color-picker',
    title: 'HEX Color Picker — copy hex codes online',
    description:
      'Free HEX color picker with live preview. Convert between hex, RGB, and HSL without installing software.',
    h1: 'HEX color picker',
    snippet:
      '<p>Use the sliders or type a #RRGGBB value. The tool validates your hex and shows matching RGB and HSL codes.</p>',
    faq: [
      {
        q: 'What is a HEX color code?',
        a: 'HEX uses six digits (and optional alpha) after # to describe red, green, and blue, for example #3366FF.',
      },
      {
        q: 'Can I paste a hex code?',
        a: 'Yes. Paste into the hex field; the picker updates all other formats automatically.',
      },
    ],
  },
  {
    path: '/color-picker-from-image',
    title: 'Color Picker from Image — sample colors locally',
    description:
      'Upload an image and click to pick a pixel color. Get HEX and RGB in the browser — no upload to a server.',
    h1: 'Color picker from image',
    snippet:
      '<p>Choose a photo from your device, then click anywhere on the image to sample that pixel&apos;s color.</p>',
    faq: [
      {
        q: 'Is my image uploaded to the internet?',
        a: 'No. The file stays on your device; sampling uses the browser canvas API only.',
      },
      {
        q: 'Which image formats work?',
        a: 'Common formats such as JPEG, PNG, WebP, and GIF are supported by modern browsers.',
      },
    ],
  },
  {
    path: '/rgb-to-hex',
    title: 'RGB to HEX Converter — free online',
    description:
      'Convert RGB values to hexadecimal color codes and copy the result. Free browser tool with live preview.',
    h1: 'RGB to HEX converter',
    snippet:
      '<p>Adjust RGB channels or paste rgb(…) syntax. The hex field updates instantly so you can copy for CSS or design tools.</p>',
    faq: [
      {
        q: 'How do I convert RGB to hex?',
        a: 'Enter three numbers from 0–255 per channel; the picker shows the equivalent #RRGGBB code.',
      },
      {
        q: 'Does it support alpha?',
        a: 'Eight-digit hex (#RRGGBBAA) is available when you use RGBA or adjust the alpha slider.',
      },
    ],
  },
  {
    path: '/privacy',
    title: 'Privacy Policy — Free Color Picker',
    description: 'How Free Color Picker handles data, ads, and analytics on web-free.site.',
    h1: 'Privacy policy',
    snippet: '<p>This page explains what Free Color Picker collects and how third-party services may appear on the site.</p>',
  },
  {
    path: '/terms',
    title: 'Terms of Use — Free Color Picker',
    description: 'Terms for using the Free Color Picker tool and related pages.',
    h1: 'Terms of use',
    snippet: '<p>By using this site you agree to these terms. The tool is provided as-is without warranty.</p>',
  },
  {
    path: '/about',
    title: 'About — Free Color Picker',
    description: 'About Free Color Picker, the MIT open-source base, and web-free.site.',
    h1: 'About Free Color Picker',
    snippet:
      '<p>Free Color Picker is a browser-based color tool on the web-free.site network, built on Brandon Mathis&apos;s MIT color picker.</p>',
  },
  {
    path: '/contact',
    title: 'Contact — Free Color Picker',
    description: 'Contact the Free Color Picker maintainers.',
    h1: 'Contact',
    snippet: '<p>Questions about the site or upstream project? Use the contact details on this page.</p>',
  },
]

function jsonLdScript(page) {
  const url = page.path === '/' ? `${HOST}/` : `${HOST}${page.path}`
  const graph = [
    {
      '@type': 'WebApplication',
      name: 'Free Color Picker',
      url,
      applicationCategory: 'DesignApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      inLanguage: 'en',
    },
  ]
  if (page.faq?.length) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: page.faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    })
  }
  const data = { '@context': 'https://schema.org', '@graph': graph }
  return `<script type="application/ld+json">${JSON.stringify(data)}</script>`
}

function buildPage(page) {
  const url = page.path === '/' ? `${HOST}/` : `${HOST}${page.path}`
  let html = baseHtml
  html = html.replace(/<html lang="[^"]*"/, '<html lang="en"')
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${page.title}</title>`)
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${page.description}" />`,
  )
  if (!html.includes('rel="canonical"')) {
    html = html.replace('</head>', `    <link rel="canonical" href="${url}" />\n  </head>`)
  } else {
    html = html.replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${url}" />`)
  }
  html = html.replace(/<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/, `<meta property="og:url" content="${url}" />`)
  html = html.replace(/<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${page.title}" />`)
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${page.description}" />`,
  )
  const seoBlock = `<section id="seo-prerender" class="seo-prerender"><h1>${page.h1}</h1>${page.snippet}</section>`
  if (html.includes('id="seo-prerender"')) {
    html = html.replace(/<section id="seo-prerender"[\s\S]*?<\/section>/, seoBlock)
  } else {
    html = html.replace('<div id="root"></div>', `${seoBlock}<div id="root"></div>`)
  }
  html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/g, '')
  html = html.replace('</head>', `${jsonLdScript(page)}\n  </head>`)
  return html
}

for (const page of pages) {
  const dir = path.join(dist, page.path.replace(/^\//, ''))
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.join(dir, 'index.html'), buildPage(page))
}

// Refresh home index with canonical trailing slash consistency
fs.writeFileSync(path.join(dist, 'index.html'), buildPage({
  path: '/',
  title: 'Free Color Picker — HEX, RGB, HSL & OKLCH converter',
  description:
    'Pick colors online and copy HEX, RGB, HSL, HSV, HWB, or OKLCH. No sign-up — everything runs in your browser.',
  h1: 'Free Color Picker',
  snippet:
    '<p>Choose a color with sliders or paste a code. Copy HEX and RGB in one click. Based on the MIT colorpicker.dev project.</p>',
  faq: homeFaq,
}))

console.log('Prerendered', pages.length + 1, 'route shells from Vite index.html')