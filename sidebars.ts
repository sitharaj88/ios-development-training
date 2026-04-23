import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  curriculumSidebar: [
    'intro',
    'roadmap',
    {
      type: 'category',
      label: 'Module 01 · Swift Foundation',
      collapsed: true,
      link: {type: 'doc', id: 'swift-foundation/overview'},
      items: [
        'swift-foundation/topic-1-basics',
        'swift-foundation/topic-2-oop-value-types',
        'swift-foundation/topic-3-optionals-safety',
        'swift-foundation/topic-4-advanced',
      ],
    },
    {
      type: 'category',
      label: 'Module 02 · iOS Fundamentals & UIKit',
      collapsed: true,
      link: {type: 'doc', id: 'ios-fundamentals/overview'},
      items: [
        'ios-fundamentals/topic-1-platform',
        'ios-fundamentals/topic-2-lifecycle-xcode',
        'ios-fundamentals/topic-3-uikit-essentials',
        'ios-fundamentals/topic-4-layout-navigation',
      ],
    },
    {
      type: 'category',
      label: 'Module 03 · Modern UI with SwiftUI',
      collapsed: true,
      link: {type: 'doc', id: 'swiftui/overview'},
      items: [
        'swiftui/topic-1-basics',
        'swiftui/topic-2-state-dataflow',
        'swiftui/topic-3-navigation-lists',
        'swiftui/topic-4-animations-interop',
      ],
    },
    {
      type: 'category',
      label: 'Module 04 · Architecture & Patterns',
      collapsed: true,
      link: {type: 'doc', id: 'architecture-patterns/overview'},
      items: [
        'architecture-patterns/topic-1-mvvm',
        'architecture-patterns/topic-2-clean-architecture',
        'architecture-patterns/topic-3-dependency-injection',
      ],
    },
    {
      type: 'category',
      label: 'Module 05 · Data Persistence',
      collapsed: true,
      link: {type: 'doc', id: 'data-persistence/overview'},
      items: [
        'data-persistence/topic-1-swiftdata-coredata',
        'data-persistence/topic-2-keychain-cloudkit',
      ],
    },
    {
      type: 'category',
      label: 'Module 06 · Networking & API',
      collapsed: true,
      link: {type: 'doc', id: 'networking-api/overview'},
      items: [
        'networking-api/topic-1-urlsession-codable',
        'networking-api/topic-2-realtime-transport',
        'networking-api/topic-3-auth-resilience',
      ],
    },
    {
      type: 'category',
      label: 'Module 07 · Firebase & Cloud',
      collapsed: true,
      link: {type: 'doc', id: 'firebase-cloud/overview'},
      items: [
        'firebase-cloud/topic-1-auth-firestore',
        'firebase-cloud/topic-2-push-analytics',
        'firebase-cloud/topic-3-remoteconfig-distribution',
      ],
    },
    {
      type: 'category',
      label: 'Module 08 · Advanced iOS Components',
      collapsed: true,
      link: {type: 'doc', id: 'advanced-components/overview'},
      items: [
        'advanced-components/topic-1-extensions-background',
        'advanced-components/topic-2-location-media-sensors',
        'advanced-components/topic-3-widgets-clips-bluetooth',
      ],
    },
    {
      type: 'category',
      label: 'Module 09 · Testing & Quality',
      collapsed: true,
      link: {type: 'doc', id: 'testing-quality/overview'},
      items: [
        'testing-quality/topic-1-unit-testing',
        'testing-quality/topic-2-ui-testing',
      ],
    },
    {
      type: 'category',
      label: 'Module 10 · Performance',
      collapsed: true,
      link: {type: 'doc', id: 'performance/overview'},
      items: [
        'performance/topic-1-instruments',
        'performance/topic-2-optimisation',
      ],
    },
    {
      type: 'category',
      label: 'Module 11 · Publishing',
      collapsed: true,
      link: {type: 'doc', id: 'publishing/overview'},
      items: [
        'publishing/topic-1-signing-testflight',
        'publishing/topic-2-storekit-aso',
      ],
    },
    {
      type: 'category',
      label: 'Module 12 · Advanced & Trending',
      collapsed: true,
      link: {type: 'doc', id: 'advanced-trending/overview'},
      items: [
        'advanced-trending/topic-1-concurrency-deep',
        'advanced-trending/topic-2-coreml-arkit-healthkit',
        'advanced-trending/topic-3-platforms-accessibility',
      ],
    },
    {
      type: 'category',
      label: 'Module 13 · Packages & Collaboration',
      collapsed: true,
      link: {type: 'doc', id: 'package-collaboration/overview'},
      items: [
        'package-collaboration/topic-1-spm-git-ci',
      ],
    },
    {
      type: 'html',
      value: '<div style="margin: 1.5rem 0 0.5rem; padding: 0 1rem; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--ifm-color-emphasis-600);">Reference</div>',
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
    {
      type: 'category',
      label: 'Cheatsheets',
      collapsed: true,
      items: [
        'cheatsheets/swift',
        'cheatsheets/swiftui',
        'cheatsheets/concurrency',
        'cheatsheets/testing',
      ],
    },
    'glossary',
    'faq',
  ],
};

export default sidebars;
