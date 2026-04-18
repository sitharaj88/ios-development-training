import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const BROCHURE_URL =
  'https://pub-4bd5087c503a41ccafd70ad5588f3220.r2.dev/brochures/iOS_Development_Training_Sitharaj.pdf';

const config: Config = {
  title: 'iOS Development Training',
  tagline: 'Swift, SwiftUI, UIKit, Architecture, Apple Frameworks — the complete guide',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
    experimental_faster: true,
  },

  url: 'https://sitharaj88.github.io',
  baseUrl: '/ios-development-training/',

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

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/sitharaj88/ios-development-training/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
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
      {name: 'keywords', content: 'iOS, Swift, SwiftUI, UIKit, Xcode, Combine, SwiftData, Core Data, Apple, training'},
      {name: 'twitter:card', content: 'summary_large_image'},
    ],
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'brochure-banner',
      content:
        '📘 Download the printable brochure: <a target="_blank" rel="noopener" href="' +
        BROCHURE_URL +
        '">iOS Development Training PDF</a>',
      backgroundColor: '#5AC8FA',
      textColor: '#0F172A',
      isCloseable: true,
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
        {to: '/docs/architecture/overview', label: 'Architecture', position: 'left'},
        {to: '/docs/patterns/design-patterns', label: 'Patterns', position: 'left'},
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
          href: 'https://github.com/sitharaj88',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Training Modules',
          items: [
            {label: 'Swift Foundation', to: '/docs/swift-foundation/overview'},
            {label: 'SwiftUI', to: '/docs/swiftui/overview'},
            {label: 'Architecture & Patterns', to: '/docs/architecture-patterns/overview'},
            {label: 'Networking & APIs', to: '/docs/networking-api/overview'},
          ],
        },
        {
          title: 'Advanced Topics',
          items: [
            {label: 'Firebase & Cloud', to: '/docs/firebase-cloud/overview'},
            {label: 'Testing', to: '/docs/testing-quality/overview'},
            {label: 'Performance', to: '/docs/performance/overview'},
            {label: 'Publishing', to: '/docs/publishing/overview'},
          ],
        },
        {
          title: 'Reference',
          items: [
            {label: 'Architecture Guide', to: '/docs/architecture/overview'},
            {label: 'Design Patterns', to: '/docs/patterns/design-patterns'},
            {label: 'State Patterns', to: '/docs/patterns/state-patterns'},
            {label: 'Component Patterns', to: '/docs/patterns/component-patterns'},
          ],
        },
        {
          title: 'Connect',
          items: [
            {label: 'Sitharaj.in', href: 'https://www.sitharaj.in'},
            {label: 'GitHub', href: 'https://github.com/sitharaj88'},
            {label: 'LinkedIn', href: 'https://linkedin.com/in/sitharaj08'},
            {label: 'Email', href: 'mailto:sitharaj.info@gmail.com'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Sitharaj Seenivasan. iOS Development Training.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'swift', 'objectivec', 'ruby', 'markup', 'yaml', 'toml', 'diff'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
