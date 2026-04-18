import React from 'react';

/**
 * SwiftUI App + Scene + View lifecycle phases.
 */
export default function AppLifecycleDiagram() {
  return (
    <svg viewBox="0 0 760 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="SwiftUI App and Scene lifecycle">
      <defs>
        <linearGradient id="life-app" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#007AFF" /><stop offset="100%" stopColor="#0040A0" />
        </linearGradient>
        <linearGradient id="life-scene" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5AC8FA" /><stop offset="100%" stopColor="#0A84FF" />
        </linearGradient>
        <linearGradient id="life-view" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5E5CE6" /><stop offset="100%" stopColor="#3634A3" />
        </linearGradient>
        <linearGradient id="life-state" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#34C759" /><stop offset="100%" stopColor="#1D8B3E" />
        </linearGradient>
        <filter id="life-shadow"><feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#0A84FF" floodOpacity="0.18" /></filter>
      </defs>

      <g filter="url(#life-shadow)">
        <rect x="40" y="40" width="200" height="100" rx="14" fill="url(#life-app)" />
        <text x="140" y="68" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" letterSpacing="0.12em">APP</text>
        <text x="140" y="92" textAnchor="middle" fill="white" fontSize="15" fontWeight="800">@main App</text>
        <text x="140" y="114" textAnchor="middle" fill="white" fontSize="11" opacity="0.9">init() → body</text>
        <text x="140" y="130" textAnchor="middle" fill="white" fontSize="11" opacity="0.9">Process launch</text>
      </g>

      <g filter="url(#life-shadow)">
        <rect x="280" y="40" width="200" height="100" rx="14" fill="url(#life-scene)" />
        <text x="380" y="68" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" letterSpacing="0.12em">SCENE</text>
        <text x="380" y="92" textAnchor="middle" fill="white" fontSize="15" fontWeight="800">WindowGroup</text>
        <text x="380" y="114" textAnchor="middle" fill="white" fontSize="11" opacity="0.9">scenePhase: active</text>
        <text x="380" y="130" textAnchor="middle" fill="white" fontSize="11" opacity="0.9">inactive · background</text>
      </g>

      <g filter="url(#life-shadow)">
        <rect x="520" y="40" width="200" height="100" rx="14" fill="url(#life-view)" />
        <text x="620" y="68" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" letterSpacing="0.12em">VIEW</text>
        <text x="620" y="92" textAnchor="middle" fill="white" fontSize="15" fontWeight="800">View body</text>
        <text x="620" y="114" textAnchor="middle" fill="white" fontSize="11" opacity="0.9">onAppear / onDisappear</text>
        <text x="620" y="130" textAnchor="middle" fill="white" fontSize="11" opacity="0.9">task { } async work</text>
      </g>

      <g stroke="#5E5CE6" strokeWidth="2.5" fill="none" opacity="0.6" markerEnd="url(#life-arrow)">
        <line x1="240" y1="90" x2="280" y2="90" />
        <line x1="480" y1="90" x2="520" y2="90" />
      </g>

      <g filter="url(#life-shadow)">
        <rect x="40" y="200" width="680" height="120" rx="16" fill="url(#life-state)" />
        <text x="380" y="228" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" letterSpacing="0.12em">SCENEPHASE TRANSITIONS</text>
        <text x="160" y="262" textAnchor="middle" fill="white" fontSize="14" fontWeight="800">.background</text>
        <text x="160" y="284" textAnchor="middle" fill="white" fontSize="11" opacity="0.9">Suspend timers</text>
        <text x="160" y="300" textAnchor="middle" fill="white" fontSize="11" opacity="0.9">Persist state</text>
        <text x="380" y="262" textAnchor="middle" fill="white" fontSize="14" fontWeight="800">.inactive</text>
        <text x="380" y="284" textAnchor="middle" fill="white" fontSize="11" opacity="0.9">Pause animations</text>
        <text x="380" y="300" textAnchor="middle" fill="white" fontSize="11" opacity="0.9">App switcher snapshot</text>
        <text x="600" y="262" textAnchor="middle" fill="white" fontSize="14" fontWeight="800">.active</text>
        <text x="600" y="284" textAnchor="middle" fill="white" fontSize="11" opacity="0.9">Resume work</text>
        <text x="600" y="300" textAnchor="middle" fill="white" fontSize="11" opacity="0.9">Refresh data</text>
      </g>

      <defs>
        <marker id="life-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#5E5CE6" />
        </marker>
      </defs>
    </svg>
  );
}
