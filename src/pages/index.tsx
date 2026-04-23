import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

/* ── Data ── */

const modules = [
  { num: 1,  title: 'Swift Programming Foundation', desc: 'Variables, control flow, OOP, optionals, generics, error handling, and async/await — the language behind every modern Apple app.', weeks: '3 Weeks', topics: '4 Topics', link: '/docs/swift-foundation/overview' },
  { num: 2,  title: 'iOS Fundamentals & UIKit',     desc: 'iOS architecture, app lifecycle, sandbox, Xcode, view controllers, Auto Layout, navigation, and UICollectionView.', weeks: '3 Weeks', topics: '4 Topics', link: '/docs/ios-fundamentals/overview' },
  { num: 3,  title: 'Modern UI with SwiftUI',       desc: 'Declarative views, modifiers, state, navigation stacks, animations, Combine, and SwiftUI ↔ UIKit interop.', weeks: '4 Weeks', topics: '4 Topics', link: '/docs/swiftui/overview' },
  { num: 4,  title: 'Architecture & Design Patterns', desc: 'MVVM with SwiftUI, Clean Architecture, Repository, Coordinator, dependency injection, TCA intro, modular Swift Packages.', weeks: '3 Weeks', topics: '3 Topics', link: '/docs/architecture-patterns/overview' },
  { num: 5,  title: 'Data Persistence & Storage',   desc: 'UserDefaults, @AppStorage, Core Data, SwiftData (@Model/@Query), Keychain Services, and CloudKit.', weeks: '2 Weeks', topics: '2 Topics', link: '/docs/data-persistence/overview' },
  { num: 6,  title: 'Networking & API Integration', desc: 'URLSession, Codable, async/await, Alamofire, image caching, WebSocket, GraphQL with Apollo, OAuth 2.0 + token refresh.', weeks: '3 Weeks', topics: '3 Topics', link: '/docs/networking-api/overview' },
  { num: 7,  title: 'Firebase & Backend Services',  desc: 'Apple/Google sign-in, Firestore real-time, Cloud Storage, APNs push, Analytics, Crashlytics + dSYM, Remote Config, App Distribution.', weeks: '3 Weeks', topics: '3 Topics', link: '/docs/firebase-cloud/overview' },
  { num: 8,  title: 'Advanced iOS Components',      desc: 'Share/Widget/iMessage extensions, BGTaskScheduler, Core Location + MapKit, AVFoundation, Core Bluetooth, WidgetKit, App Clips.', weeks: '3 Weeks', topics: '3 Topics', link: '/docs/advanced-components/overview' },
  { num: 9,  title: 'Testing & Quality Assurance',  desc: 'XCTest + Swift Testing, protocol-based mocks, XCUITest, snapshot tests, TDD/BDD, code coverage analysis.', weeks: '2 Weeks', topics: '2 Topics', link: '/docs/testing-quality/overview' },
  { num: 10, title: 'Performance & Optimization',   desc: 'Instruments (Time Profiler, Allocations, Leaks), ARC, app launch tuning, network optimization, App Thinning, MetricKit.', weeks: '2 Weeks', topics: '2 Topics', link: '/docs/performance/overview' },
  { num: 11, title: 'App Store Connect & Publishing', desc: 'Certificates, provisioning, code signing, TestFlight, App Store listing, In-App Purchases, StoreKit 2, ad monetization, ASO.', weeks: '2 Weeks', topics: '2 Topics', link: '/docs/publishing/overview' },
  { num: 12, title: 'Advanced & Trending Topics',   desc: 'Swift Concurrency (actors, AsyncSequence), Core ML, ARKit, HealthKit, watchOS, visionOS, accessibility, adaptive design.', weeks: '3 Weeks', topics: '3 Topics', link: '/docs/advanced-trending/overview' },
  { num: 13, title: 'Package Management & Collaboration', desc: 'Swift Package Manager, CocoaPods, Git workflows, Xcode Cloud, and Fastlane automation.', weeks: '1 Week', topics: '1 Topic', link: '/docs/package-collaboration/overview' },
];

const features = [
  { icon: '🍎', title: 'Apple-First Curriculum',  desc: 'Built around Swift, SwiftUI, and Apple\'s recommended frameworks — what you\'ll actually ship in 2026.' },
  { icon: '🎨', title: 'SwiftUI + UIKit Both',    desc: 'Declarative SwiftUI for new work, UIKit for enterprise and legacy — be effective in any iOS codebase.' },
  { icon: '🏗️', title: 'Clean MVVM + TCA',       desc: 'Layered MVVM with Combine and an introduction to The Composable Architecture for state-heavy apps.' },
  { icon: '🧪', title: 'Test Like Apple',         desc: 'XCTest, Swift Testing, XCUITest, snapshot testing, and protocol-based mocks for every layer.' },
  { icon: '⚡', title: 'Production Performance',   desc: 'Instruments-driven profiling, ARC mastery, app launch tuning, App Thinning, and MetricKit in production.' },
  { icon: '🚀', title: 'Ship to App Store',       desc: 'Certificates, provisioning, TestFlight, StoreKit 2 IAPs, ASO — the entire release pipeline end-to-end.' },
];

const techStack = [
  'Swift', 'SwiftUI', 'UIKit', 'Xcode', 'Combine',
  'Swift Concurrency', 'Actors', 'Core Data', 'SwiftData', 'CloudKit',
  'URLSession', 'Codable', 'Alamofire', 'Apollo', 'Firebase',
  'APNs', 'WidgetKit', 'Core ML', 'ARKit', 'HealthKit',
  'MapKit', 'AVFoundation', 'Core Bluetooth', 'XCTest', 'XCUITest',
  'Swift Testing', 'StoreKit 2', 'Instruments', 'SPM', 'Fastlane',
];

const projects = [
  { icon: '🛒', title: 'E-Commerce App',         desc: 'Catalog, cart, and checkout with Apple Pay, SwiftUI, MVVM, and Codable APIs.' },
  { icon: '💬', title: 'Social Media App',       desc: 'Feed, real-time messaging with Firestore, push notifications via APNs, media upload.' },
  { icon: '💪', title: 'Health & Fitness App',   desc: 'HealthKit data, charts, workout tracking, and an Apple Watch companion app.' },
  { icon: '🕶️', title: 'AR Shopping Experience', desc: 'ARKit + RealityKit room placement, 3D models, and SwiftUI overlay UI.' },
  { icon: '💰', title: 'Expense Tracker',        desc: 'SwiftData persistence, Charts framework, and Home Screen + Lock Screen widgets.' },
];

const careers = [
  { icon: '🍎', title: 'iOS Developer',           desc: 'Build native iOS apps with Swift and SwiftUI for product companies and agencies' },
  { icon: '🦅', title: 'Swift Developer',         desc: 'Server-side Swift, full-Apple-stack, and Swift tooling roles' },
  { icon: '🛠️', title: 'Apple Platform Engineer', desc: 'macOS, watchOS, visionOS, iPadOS — the full Apple ecosystem' },
  { icon: '📱', title: 'Mobile App Developer',    desc: 'Cross-functional engineer across iOS and adjacent mobile platforms' },
];

const prerequisites = [
  { icon: '💻', title: 'A Mac (Required)',        desc: 'MacBook, iMac, or Mac Mini — Xcode runs only on macOS. M-series strongly recommended.' },
  { icon: '📜', title: 'Any Programming Basics',  desc: 'Familiarity with one language (Java, Python, JavaScript, C, etc.) — variables, loops, functions.' },
  { icon: '🛠️', title: 'Xcode + Apple ID',        desc: 'Xcode (free from the Mac App Store) and a free Apple ID. We\'ll set everything up in Module 02.' },
  { icon: '🎯', title: 'Curiosity & Persistence', desc: 'No prior iOS or Swift experience required — just a willingness to build and debug real apps.' },
];

/* ── Trust Icons ── */

function CheckShield() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  );
}
function Phone() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2"/>
      <line x1="12" y1="18" x2="12.01" y2="18"/>
    </svg>
  );
}
function Zap() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  );
}
function Award() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6"/>
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
    </svg>
  );
}
function BookOpen() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  );
}

/* ── Page ── */

export default function Home(): React.JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  const brochureUrl = (siteConfig.customFields?.brochureUrl as string) ?? '#';
  const contactEmail = (siteConfig.customFields?.contactEmail as string) ?? 'sitharaj.info@gmail.com';

  return (
    <Layout
      title="iOS Development Training — Swift, SwiftUI, Architecture, App Store"
      description={siteConfig.tagline}
    >
      <header className="hero-section">
        <div className="hero-bg">
          <div className="hero-float-shape" />
          <div className="hero-float-shape" />
          <div className="hero-float-shape" />
        </div>

        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            <span>By Sitharaj Seenivasan — Senior Software Engineer</span>
          </div>

          <h1 className="hero-title">
            iOS Development<br />
            <span className="hero-title-accent">Complete Guide</span>
          </h1>

          <p className="hero-description">
            A comprehensive, production-focused curriculum covering every iOS topic from
            Swift fundamentals to App Store publishing. Built for students,
            self-learners, and developers expanding into the Apple ecosystem with
            Swift &amp; SwiftUI.
          </p>

          <div className="hero-actions">
            <Link to="/docs/intro" className="btn-primary">
              Explore Curriculum
              <span aria-hidden="true">→</span>
            </Link>
            <Link to="/docs/roadmap" className="btn-secondary">
              View Roadmap
            </Link>
            <Link
              href={brochureUrl}
              className="btn-secondary"
            >
              Brochure PDF
            </Link>
          </div>

          <div className="hero-stats">
            <div className="hero-stat"><div className="hero-stat-value">13</div><div className="hero-stat-label">Modules</div></div>
            <div className="hero-stat"><div className="hero-stat-value">72+</div><div className="hero-stat-label">Topics</div></div>
            <div className="hero-stat"><div className="hero-stat-value">32</div><div className="hero-stat-label">Weeks</div></div>
            <div className="hero-stat"><div className="hero-stat-value">115h</div><div className="hero-stat-label">Content</div></div>
            <div className="hero-stat"><div className="hero-stat-value">5</div><div className="hero-stat-label">Projects</div></div>
          </div>
        </div>
      </header>

      <main>
        <section className="trust-bar">
          <div className="trust-bar-inner">
            <div className="trust-label">Modern Apple Standards</div>
            <div className="trust-items">
              <div className="trust-item"><CheckShield /> Production Ready</div>
              <div className="trust-item"><Phone /> Swift + SwiftUI</div>
              <div className="trust-item"><Zap /> Swift Concurrency</div>
              <div className="trust-item"><Award /> MVVM &amp; Clean Arch</div>
              <div className="trust-item"><BookOpen /> Hands-On Projects</div>
            </div>
          </div>
        </section>

        <section className="landing-section">
          <div className="section-inner">
            <div className="section-header">
              <div className="section-overline">Why Choose This Guide</div>
              <h2 className="section-title">Everything You Need, Nothing You Don't</h2>
              <p className="section-description">
                A structured roadmap that starts from zero and ends at the App Store —
                covering architecture, testing, performance, and modern Apple
                framework best practices.
              </p>
            </div>
            <div className="features-grid">
              {features.map((f, i) => (
                <div className="feature-card" key={i}>
                  <div className="feature-icon-wrap">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="landing-section landing-section--alt">
          <div className="section-inner">
            <div className="section-header">
              <div className="section-overline">Complete Curriculum</div>
              <h2 className="section-title">13 Training Modules</h2>
              <p className="section-description">
                A structured learning path from Swift fundamentals to App Store
                publishing — each module building on the previous.
              </p>
            </div>
            <div className="modules-grid">
              {modules.map((m) => (
                <Link to={m.link} className="module-card" key={m.num}>
                  <div className="module-card-header">
                    <div className="module-num">{String(m.num).padStart(2, '0')}</div>
                    <h3>{m.title}</h3>
                  </div>
                  <p>{m.desc}</p>
                  <div className="module-meta">
                    <span className="module-tag">{m.weeks}</span>
                    <span className="module-tag">{m.topics}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="landing-section">
          <div className="section-inner">
            <div className="section-header">
              <div className="section-overline">Tools &amp; Technologies</div>
              <h2 className="section-title">Master the Modern iOS Stack</h2>
              <p className="section-description">
                30+ frameworks and tools — every layer of a production iOS app, from
                UI to CI/CD.
              </p>
            </div>
            <div className="tech-container">
              {techStack.map((tech, i) => (
                <span className="tech-badge" key={i}>{tech}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="landing-section landing-section--alt">
          <div className="section-inner">
            <div className="section-header">
              <div className="section-overline">Hands-On Experience</div>
              <h2 className="section-title">Projects You'll Build</h2>
              <p className="section-description">
                Real apps that demonstrate enterprise-level iOS development skills.
              </p>
            </div>
            <div className="projects-grid">
              {projects.map((p, i) => (
                <div className="project-card" key={i}>
                  <div className="project-icon">{p.icon}</div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="landing-section">
          <div className="section-inner">
            <div className="section-header">
              <div className="section-overline">Before You Start</div>
              <h2 className="section-title">Prerequisites</h2>
              <p className="section-description">What you need before beginning this program.</p>
            </div>
            <div className="prereq-grid">
              {prerequisites.map((p, i) => (
                <div className="prereq-card" key={i}>
                  <div className="prereq-icon-wrap">{p.icon}</div>
                  <div>
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="landing-section landing-section--alt">
          <div className="section-inner">
            <div className="section-header">
              <div className="section-overline">Your Future</div>
              <h2 className="section-title">Career Paths</h2>
              <p className="section-description">Roles you'll be prepared for after completing this program.</p>
            </div>
            <div className="career-grid">
              {careers.map((c, i) => (
                <div className="career-card" key={i}>
                  <div className="career-icon">{c.icon}</div>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="instructor-section">
          <div className="section-inner">
            <div className="section-header">
              <div className="section-overline">Your Instructor</div>
              <h2 className="section-title">Learn from an Expert</h2>
            </div>
            <div className="instructor-card">
              <div className="instructor-avatar">SS</div>
              <div className="instructor-info">
                <h3>Sitharaj Seenivasan</h3>
                <div className="instructor-title">Full Stack &amp; Senior Software Engineer</div>
                <p>
                  Experienced engineer specializing in iOS, Swift, Android, React Native,
                  and full-stack development. Passionate about helping teams build
                  high-quality mobile applications and adopt modern best practices.
                </p>
                <div className="instructor-links">
                  <a href="https://www.sitharaj.in" className="instructor-link" target="_blank" rel="noopener noreferrer">sitharaj.in</a>
                  <a href="https://github.com/sitharaj88" className="instructor-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href="https://linkedin.com/in/sitharaj08" className="instructor-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a href="mailto:sitharaj.info@gmail.com" className="instructor-link">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-inner">
            <h2>Ready to Build Production iOS Apps?</h2>
            <p>Start the complete iOS development guide — Swift, SwiftUI, and beyond.</p>
            <div className="cta-actions">
              <Link to="/docs/intro" className="btn-primary">
                Start the Curriculum
                <span aria-hidden="true">→</span>
              </Link>
              <Link href={`mailto:${contactEmail}`} className="btn-secondary">
                Contact for Training
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
