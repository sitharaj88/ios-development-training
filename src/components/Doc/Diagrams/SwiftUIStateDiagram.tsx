import React from 'react';

/**
 * SwiftUI state → body invalidation flow.
 */
export default function SwiftUIStateDiagram() {
  return (
    <svg viewBox="0 0 760 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="SwiftUI state and re-render flow">
      <defs>
        <linearGradient id="sui-state" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#34C759" /><stop offset="100%" stopColor="#1D8B3E" />
        </linearGradient>
        <linearGradient id="sui-vm" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5E5CE6" /><stop offset="100%" stopColor="#3634A3" />
        </linearGradient>
        <linearGradient id="sui-body" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#007AFF" /><stop offset="100%" stopColor="#0040A0" />
        </linearGradient>
        <linearGradient id="sui-render" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF9500" /><stop offset="100%" stopColor="#C66900" />
        </linearGradient>
        <filter id="sui-shadow"><feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#0A84FF" floodOpacity="0.18" /></filter>
        <marker id="sui-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#5E5CE6" />
        </marker>
      </defs>

      <g filter="url(#sui-shadow)">
        <rect x="40" y="120" width="160" height="120" rx="14" fill="url(#sui-state)" />
        <text x="120" y="148" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" letterSpacing="0.12em">STATE</text>
        <text x="120" y="174" textAnchor="middle" fill="white" fontSize="14" fontWeight="800">@State</text>
        <text x="120" y="194" textAnchor="middle" fill="white" fontSize="13" fontWeight="700">@Binding</text>
        <text x="120" y="214" textAnchor="middle" fill="white" fontSize="13" fontWeight="700">@Observable</text>
      </g>

      <g filter="url(#sui-shadow)">
        <rect x="240" y="120" width="180" height="120" rx="14" fill="url(#sui-vm)" />
        <text x="330" y="148" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" letterSpacing="0.12em">DEPENDENCY GRAPH</text>
        <text x="330" y="178" textAnchor="middle" fill="white" fontSize="14" fontWeight="800">Tracked reads</text>
        <text x="330" y="200" textAnchor="middle" fill="white" fontSize="11" opacity="0.9">Only views that read</text>
        <text x="330" y="216" textAnchor="middle" fill="white" fontSize="11" opacity="0.9">the changed key invalidate</text>
      </g>

      <g filter="url(#sui-shadow)">
        <rect x="460" y="120" width="160" height="120" rx="14" fill="url(#sui-body)" />
        <text x="540" y="148" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" letterSpacing="0.12em">BODY</text>
        <text x="540" y="178" textAnchor="middle" fill="white" fontSize="14" fontWeight="800">var body: some View</text>
        <text x="540" y="200" textAnchor="middle" fill="white" fontSize="11" opacity="0.9">Pure value tree</text>
        <text x="540" y="216" textAnchor="middle" fill="white" fontSize="11" opacity="0.9">Cheap to recompute</text>
      </g>

      <g filter="url(#sui-shadow)">
        <rect x="660" y="120" width="60" height="120" rx="14" fill="url(#sui-render)" />
        <text x="690" y="170" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" letterSpacing="0.12em" transform="rotate(-90 690 170)">RENDER</text>
      </g>

      <g stroke="#5E5CE6" strokeWidth="2.5" fill="none" opacity="0.6" markerEnd="url(#sui-arrow)">
        <line x1="200" y1="180" x2="240" y2="180" />
        <line x1="420" y1="180" x2="460" y2="180" />
        <line x1="620" y1="180" x2="658" y2="180" />
      </g>

      <text x="380" y="60" textAnchor="middle" fill="#0A84FF" fontSize="14" fontWeight="800">State mutation → tracked read invalidation → body recompute → diff &amp; render</text>
      <text x="380" y="84" textAnchor="middle" fill="#5E5CE6" fontSize="11" opacity="0.85">SwiftUI compares new view value to previous; only changed nodes update</text>

      <text x="380" y="290" textAnchor="middle" fill="#0A84FF" fontSize="12" fontWeight="700">Use @State for view-local truth · @Observable for shared models · @Environment for ambient values</text>
      <text x="380" y="312" textAnchor="middle" fill="#666" fontSize="11">Avoid `@StateObject` for new code in iOS 17+ — prefer `@Observable` macro</text>
    </svg>
  );
}
