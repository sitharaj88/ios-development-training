import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const BROCHURE_URL =
  'https://pub-4bd5087c503a41ccafd70ad5588f3220.r2.dev/brochures/iOS_Development_Training_Sitharaj.pdf';
const REPO_URL = 'https://github.com/sitharaj88/ios-development-training';
const SITE_URL = 'https://sitharaj88.github.io';
const BASE_URL = '/ios-development-training/';

const config: Config = {
  title: 'iOS Development Training',
  tagline: 'Swift, SwiftUI, UIKit, Architecture, Apple Frameworks — the complete guide',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
    faster: true,
  },

  url: SITE_URL,
  baseUrl: BASE_URL,

  organizationName: 'sitharaj88',
  projectName: 'ios-development-training',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  customFields: {
    brochureUrl: BROCHURE_URL,
    repoUrl: REPO_URL,
    instructorUrl: 'https://www.sitharaj.in',
    instructorTrainingUrl: 'https://www.sitharaj.in/training/ios-development',
    contactEmail: 'sitharaj.info@gmail.com',
    githubProfile: 'https://github.com/sitharaj88',
    linkedinProfile: 'https://linkedin.com/in/sitharaj08',
  },

  headTags: [
    {
      tagName: 'link',
      attributes: {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
    },
    {
      tagName: 'link',
      attributes: {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous'},
    },
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: 'iOS Development Training',
        description:
          'Comprehensive production-focused iOS curriculum: Swift, SwiftUI, UIKit, architecture, Apple frameworks, performance, and App Store delivery.',
        provider: {
          '@type': 'Person',
          name: 'Sitharaj Seenivasan',
          url: 'https://www.sitharaj.in',
        },
        hasCourseInstance: {
          '@type': 'CourseInstance',
          courseMode: 'Self-paced',
          courseWorkload: 'PT115H',
        },
        inLanguage: 'en',
        url: `${SITE_URL}${BASE_URL}`,
      }),
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: `${REPO_URL}/edit/main/`,
          showLastUpdateTime: true,
          showLastUpdateAuthor: false,
          breadcrumbs: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: '/docs',
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    metadata: [
      {name: 'keywords', content: 'iOS, Swift, SwiftUI, UIKit, Xcode, Combine, SwiftData, Core Data, CloudKit, Apple, training, async/await, actors, XCTest, Instruments, StoreKit, TestFlight'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:site', content: '@sitharaj08'},
      {name: 'og:type', content: 'website'},
      {name: 'author', content: 'Sitharaj Seenivasan'},
    ],
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'brochure-banner-2026',
      content:
        '📘 New in 2026: SwiftData queries, Swift 6 strict concurrency, visionOS, and Swift Testing. <a target="_blank" rel="noopener" href="' +
        BROCHURE_URL +
        '">Download the brochure →</a>',
      backgroundColor: '#5AC8FA',
      textColor: '#0F172A',
      isCloseable: true,
    },
    docs: {
      sidebar: {
        hideable: false,
        autoCollapseCategories: false,
      },
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    navbar: {
      title: 'iOS Training',
      logo: {
        alt: 'iOS Development Training',
        src: 'img/logo.svg',
      },
      hideOnScroll: true,
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'curriculumSidebar',
          position: 'left',
          label: 'Curriculum',
        },
        {to: '/docs/roadmap', label: 'Roadmap', position: 'left'},
        {to: '/docs/architecture/overview', label: 'Architecture', position: 'left'},
        {to: '/docs/patterns/design-patterns', label: 'Patterns', position: 'left'},
        {
          type: 'dropdown',
          label: 'Reference',
          position: 'left',
          items: [
            {to: '/docs/cheatsheets/swift', label: 'Swift Cheatsheet'},
            {to: '/docs/cheatsheets/swiftui', label: 'SwiftUI Cheatsheet'},
            {to: '/docs/cheatsheets/concurrency', label: 'Concurrency Cheatsheet'},
            {to: '/docs/cheatsheets/testing', label: 'Testing Cheatsheet'},
            {to: '/docs/glossary', label: 'Glossary'},
            {to: '/docs/faq', label: 'FAQ'},
          ],
        },
        {
          href: BROCHURE_URL,
          label: 'Brochure',
          position: 'right',
        },
        {
          href: 'https://www.sitharaj.in/training/ios-development',
          label: 'Sitharaj.in',
          position: 'right',
        },
        {
          href: REPO_URL,
          label: 'GitHub',
          position: 'right',
          className: 'navbar-github',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Curriculum',
          items: [
            {label: 'Welcome', to: '/docs/intro'},
            {label: 'Roadmap', to: '/docs/roadmap'},
            {label: 'Swift Foundation', to: '/docs/swift-foundation/overview'},
            {label: 'SwiftUI', to: '/docs/swiftui/overview'},
            {label: 'Architecture & Patterns', to: '/docs/architecture-patterns/overview'},
            {label: 'Networking & APIs', to: '/docs/networking-api/overview'},
          ],
        },
        {
          title: 'Advanced',
          items: [
            {label: 'Firebase & Cloud', to: '/docs/firebase-cloud/overview'},
            {label: 'Testing & Quality', to: '/docs/testing-quality/overview'},
            {label: 'Performance', to: '/docs/performance/overview'},
            {label: 'Publishing', to: '/docs/publishing/overview'},
            {label: 'Advanced & Trending', to: '/docs/advanced-trending/overview'},
          ],
        },
        {
          title: 'Reference',
          items: [
            {label: 'Architecture Guide', to: '/docs/architecture/overview'},
            {label: 'Design Patterns', to: '/docs/patterns/design-patterns'},
            {label: 'Swift Cheatsheet', to: '/docs/cheatsheets/swift'},
            {label: 'Glossary', to: '/docs/glossary'},
            {label: 'FAQ', to: '/docs/faq'},
          ],
        },
        {
          title: 'Connect',
          items: [
            {label: 'Sitharaj.in', href: 'https://www.sitharaj.in'},
            {label: 'Brochure (PDF)', href: BROCHURE_URL},
            {label: 'Repository', href: REPO_URL},
            {label: 'GitHub Profile', href: 'https://github.com/sitharaj88'},
            {label: 'LinkedIn', href: 'https://linkedin.com/in/sitharaj08'},
            {label: 'Email', href: 'mailto:sitharaj.info@gmail.com'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Sitharaj Seenivasan · iOS Development Training · Built with Docusaurus`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'swift', 'objectivec', 'ruby', 'markup', 'yaml', 'toml', 'diff', 'graphql'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
