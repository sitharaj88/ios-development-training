import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  curriculumSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Module 01 · Swift Foundation',
      collapsed: true,
      items: ['swift-foundation/overview'],
    },
    {
      type: 'category',
      label: 'Module 02 · iOS Fundamentals & UIKit',
      collapsed: true,
      items: ['ios-fundamentals/overview'],
    },
    {
      type: 'category',
      label: 'Module 03 · Modern UI with SwiftUI',
      collapsed: true,
      items: ['swiftui/overview'],
    },
    {
      type: 'category',
      label: 'Module 04 · Architecture & Patterns',
      collapsed: true,
      items: ['architecture-patterns/overview'],
    },
    {
      type: 'category',
      label: 'Module 05 · Data Persistence',
      collapsed: true,
      items: ['data-persistence/overview'],
    },
    {
      type: 'category',
      label: 'Module 06 · Networking & API',
      collapsed: true,
      items: ['networking-api/overview'],
    },
    {
      type: 'category',
      label: 'Module 07 · Firebase & Cloud',
      collapsed: true,
      items: ['firebase-cloud/overview'],
    },
    {
      type: 'category',
      label: 'Module 08 · Advanced iOS Components',
      collapsed: true,
      items: ['advanced-components/overview'],
    },
    {
      type: 'category',
      label: 'Module 09 · Testing & Quality',
      collapsed: true,
      items: ['testing-quality/overview'],
    },
    {
      type: 'category',
      label: 'Module 10 · Performance',
      collapsed: true,
      items: ['performance/overview'],
    },
    {
      type: 'category',
      label: 'Module 11 · Publishing',
      collapsed: true,
      items: ['publishing/overview'],
    },
    {
      type: 'category',
      label: 'Module 12 · Advanced & Trending',
      collapsed: true,
      items: ['advanced-trending/overview'],
    },
    {
      type: 'category',
      label: 'Module 13 · Package Management & Collaboration',
      collapsed: true,
      items: ['package-collaboration/overview'],
    },
    {
      type: 'html',
      value: '<div style="margin: 1rem 0 0.5rem; padding: 0 1rem; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--ifm-color-emphasis-600);">Reference</div>',
      defaultStyle: true,
    },
    {
      type: 'category',
      label: 'Architecture Guide',
      collapsed: true,
      items: [
        'architecture/overview',
        'architecture/clean-architecture',
        'architecture/project-structure',
      ],
    },
    {
      type: 'category',
      label: 'Design Patterns',
      collapsed: true,
      items: [
        'patterns/design-patterns',
        'patterns/state-patterns',
        'patterns/component-patterns',
      ],
    },
  ],
};

export default sidebars;
