import React from 'react';

/**
 * Swift Concurrency primitives — Task, async/await, Actor, MainActor, TaskGroup.
 */
export default function SwiftConcurrencyDiagram() {
  return (
    <svg viewBox="0 0 760 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Swift Concurrency primitives">
      <defs>
        <linearGradient id="conc-task" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#007AFF" /><stop offset="100%" stopColor="#0040A0" />
        </linearGradient>
        <linearGradient id="conc-actor" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF9500" /><stop offset="100%" stopColor="#C66900" />
        </linearGradient>
        <linearGradient id="conc-main" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF2D55" /><stop offset="100%" stopColor="#B81841" />
        </linearGradient>
        <linearGradient id="conc-group" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5E5CE6" /><stop offset="100%" stopColor="#3634A3" />
        </linearGradient>
        <linearGradient id="conc-async" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#34C759" /><stop offset="100%" stopColor="#1D8B3E" />
        </linearGradient>
        <filter id="conc-shadow"><feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#0A84FF" floodOpacity="0.18" /></filter>
      </defs>

      <g filter="url(#conc-shadow)">
        <rect x="60" y="30" width="640" height="60" rx="14" fill="url(#conc-task)" />
        <text x="380" y="56" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" letterSpacing="0.12em">TASK · Unit of asynchronous work</text>
        <text x="380" y="78" textAnchor="middle" fill="white" fontSize="13" fontWeight="700">Task &#123; await load() &#125; · Task.detached · cancellation propagates</text>
      </g>

      <g filter="url(#conc-shadow)">
        <rect x="60" y="110" width="310" height="100" rx="14" fill="url(#conc-async)" />
        <text x="215" y="138" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" letterSpacing="0.12em">ASYNC / AWAIT</text>
        <text x="215" y="166" textAnchor="middle" fill="white" fontSize="14" fontWeight="800">Suspending functions</text>
        <text x="215" y="186" textAnchor="middle" fill="white" fontSize="11" opacity="0.9">Compiler-rewritten continuations</text>
        <text x="215" y="202" textAnchor="middle" fill="white" fontSize="11" opacity="0.9">Cooperative scheduling</text>
      </g>

      <g filter="url(#conc-shadow)">
        <rect x="390" y="110" width="310" height="100" rx="14" fill="url(#conc-group)" />
        <text x="545" y="138" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" letterSpacing="0.12em">TASKGROUP · async let</text>
        <text x="545" y="166" textAnchor="middle" fill="white" fontSize="14" fontWeight="800">Structured Concurrency</text>
        <text x="545" y="186" textAnchor="middle" fill="white" fontSize="11" opacity="0.9">Parallel children, awaited together</text>
        <text x="545" y="202" textAnchor="middle" fill="white" fontSize="11" opacity="0.9">Cancellation cascades</text>
      </g>

      <g filter="url(#conc-shadow)">
        <rect x="60" y="230" width="310" height="100" rx="14" fill="url(#conc-actor)" />
        <text x="215" y="258" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" letterSpacing="0.12em">ACTOR</text>
        <text x="215" y="286" textAnchor="middle" fill="white" fontSize="14" fontWeight="800">Reentrant isolation</text>
        <text x="215" y="306" textAnchor="middle" fill="white" fontSize="11" opacity="0.9">Serializes mutable state</text>
        <text x="215" y="322" textAnchor="middle" fill="white" fontSize="11" opacity="0.9">No data races · awaitable methods</text>
      </g>

      <g filter="url(#conc-shadow)">
        <rect x="390" y="230" width="310" height="100" rx="14" fill="url(#conc-main)" />
        <text x="545" y="258" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" letterSpacing="0.12em">@MainActor</text>
        <text x="545" y="286" textAnchor="middle" fill="white" fontSize="14" fontWeight="800">UI thread guarantee</text>
        <text x="545" y="306" textAnchor="middle" fill="white" fontSize="11" opacity="0.9">All UI mutations serialized</text>
        <text x="545" y="322" textAnchor="middle" fill="white" fontSize="11" opacity="0.9">Apply to ViewModels / Views</text>
      </g>

      <g filter="url(#conc-shadow)">
        <rect x="60" y="350" width="640" height="50" rx="12" fill="url(#conc-task)" opacity="0.85" />
        <text x="380" y="376" textAnchor="middle" fill="white" fontSize="12" fontWeight="700" letterSpacing="0.1em">SENDABLE · Compiler-checked thread-safe values cross actor boundaries</text>
      </g>
    </svg>
  );
}
