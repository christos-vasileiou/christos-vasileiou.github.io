// seo-plugin.ts
//
// Build-time SEO for the portfolio. The site is a client-rendered React app, so the
// HTML that crawlers download is otherwise an empty <div id="root">. This module:
//   - builds the <head> tags (canonical, Open Graph, verification, JSON-LD Person),
//   - renders the key profile content as static HTML inside #root (React replaces it
//     on load, so visitors see the normal site; crawlers that don't run JS see text),
//   - adds Google Analytics and the GoatCounter visitor counter when configured,
//   - emits sitemap.xml.
import type { Plugin } from 'vite';
import CONFIG from './gitprofile.config';

const esc = (value: unknown): string =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const seo = CONFIG.seo;
const username = CONFIG.github.username;
const fullName = 'Christos Vasileiou';

export const siteUrl = (
  seo.siteUrl || `https://${username}.github.io${CONFIG.base || '/'}`
).replace(/\/?$/, '/');

const socialProfiles = [
  `https://github.com/${username}`,
  CONFIG.social.linkedin &&
    `https://www.linkedin.com/in/${CONFIG.social.linkedin}`,
  CONFIG.social.twitter && `https://x.com/${CONFIG.social.twitter}`,
  CONFIG.social.googleScholar &&
    `https://scholar.google.com/citations?user=${CONFIG.social.googleScholar}`,
  CONFIG.social.researchGate &&
    `https://www.researchgate.net/profile/${CONFIG.social.researchGate}`,
  ...(seo.sameAs || []),
].filter(Boolean) as string[];

const currentEducation = CONFIG.educations.find((e) => /present/i.test(e.to));

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  url: siteUrl,
  name: seo.title,
  mainEntity: {
    '@type': 'Person',
    name: fullName,
    url: siteUrl,
    image: seo.imageURL || undefined,
    description: seo.description,
    jobTitle: currentEducation
      ? `${currentEducation.degree} Student`
      : undefined,
    affiliation: currentEducation
      ? { '@type': 'CollegeOrUniversity', name: currentEducation.institution }
      : undefined,
    alumniOf: CONFIG.educations
      .filter((e) => e !== currentEducation)
      .map((e) => ({ '@type': 'CollegeOrUniversity', name: e.institution })),
    knowsAbout: seo.knowsAbout,
    sameAs: socialProfiles,
  },
};

const headTags = (): string => {
  const tags = [
    `<link rel="canonical" href="${esc(siteUrl)}" />`,
    `<meta name="author" content="${esc(fullName)}" />`,
    `<meta name="robots" content="index, follow" />`,
    `<meta property="og:type" content="profile" />`,
    `<meta property="og:url" content="${esc(siteUrl)}" />`,
    `<meta property="og:site_name" content="${esc(fullName)}" />`,
    `<meta property="profile:first_name" content="Christos" />`,
    `<meta property="profile:last_name" content="Vasileiou" />`,
  ];
  if (CONFIG.social.twitter) {
    tags.push(
      `<meta name="twitter:creator" content="@${esc(CONFIG.social.twitter)}" />`,
    );
  }
  if (seo.googleSiteVerification) {
    tags.push(
      `<meta name="google-site-verification" content="${esc(seo.googleSiteVerification)}" />`,
    );
  }
  if (seo.bingSiteVerification) {
    tags.push(
      `<meta name="msvalidate.01" content="${esc(seo.bingSiteVerification)}" />`,
    );
  }
  // JSON.stringify drops undefined fields; escape "<" so the JSON can't close the script tag.
  tags.push(
    `<script type="application/ld+json">${JSON.stringify(structuredData).replace(/</g, '\\u003c')}</script>`,
  );
  // Google Analytics goes in the static HTML (not added later by React) so Google's
  // tag checker sees it and it can also verify the site in Search Console.
  const gaId = CONFIG.googleAnalytics?.id;
  if (gaId) {
    tags.push(
      `<script async src="https://www.googletagmanager.com/gtag/js?id=${esc(gaId)}"></script>`,
      `<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config',${JSON.stringify(gaId)});</script>`,
    );
  }
  if (CONFIG.goatcounter?.code) {
    tags.push(
      `<script data-goatcounter="https://${esc(CONFIG.goatcounter.code)}.goatcounter.com/count" async src="https://gc.zgo.at/count.js"></script>`,
    );
  }
  return tags.join('\n    ');
};

const staticContent = (): string => {
  const link = (href: string, text: string) =>
    `<a href="${esc(href)}" rel="me noopener">${esc(text)}</a>`;
  const publications = CONFIG.publications
    .map(
      (p) =>
        `<li><a href="${esc(p.link)}">${esc(p.title)}</a> — ${esc(p.authors)}. <em>${esc(p.conferenceName || p.journalName)}</em>.</li>`,
    )
    .join('');
  const education = CONFIG.educations
    .map(
      (e) =>
        `<li>${esc(e.degree)}, ${esc(e.institution)} (${esc(e.from)}–${esc(e.to)})</li>`,
    )
    .join('');
  const experience = CONFIG.experiences
    .map(
      (e) =>
        `<li>${esc(e.position)}, ${esc(e.company)} (${esc(e.from)} – ${esc(e.to)})</li>`,
    )
    .join('');
  const projects = CONFIG.projects.external.projects
    .map((p: { title: string; description?: string; link?: string }) => {
      const title = p.link
        ? `<a href="${esc(p.link)}">${esc(p.title)}</a>`
        : esc(p.title);
      return `<li>${title}${p.description ? ` — ${esc(p.description)}` : ''}</li>`;
    })
    .join('');
  const profiles = socialProfiles
    .map((url) => link(url, url.replace(/^https?:\/\/(www\.)?/, '')))
    .join(' · ');

  return `<main id="seo-static" style="max-width:48rem;margin:0 auto;padding:2rem 1rem;font-family:system-ui,sans-serif;line-height:1.5;color:#efedf4;background:#08252b;min-height:100vh">
      <h1>${esc(fullName)}</h1>
      <p>${esc(seo.tagline || seo.description)}</p>
      <p>${esc(seo.description)}</p>
      <h2>Publications</h2><ul>${publications}</ul>
      <h2>Projects</h2><ul>${projects}</ul>
      <h2>Experience</h2><ul>${experience}</ul>
      <h2>Education</h2><ul>${education}</ul>
      <h2>Profiles</h2><p>${profiles}</p>
    </main>`;
};

export const seoHtmlData = () => ({
  seoHeadTags: headTags(),
  seoStaticContent: staticContent(),
});

/** Emits sitemap.xml with the build date as lastmod. */
export const sitemapPlugin = (): Plugin => ({
  name: 'gitprofile-sitemap',
  apply: 'build',
  generateBundle() {
    const today = new Date().toISOString().slice(0, 10);
    this.emitFile({
      type: 'asset',
      fileName: 'sitemap.xml',
      source: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${esc(siteUrl)}</loc>
    <lastmod>${today}</lastmod>
  </url>
</urlset>
`,
    });
  },
});
