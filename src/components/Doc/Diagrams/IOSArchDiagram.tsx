import React from 'react';

/**
 * iOS Clean Architecture layers: View → ViewModel → Use Case → Repository → Sources.
 */
export default function IOSArchDiagram() {
  return (
    <svg viewBox="0 0 760 460" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="iOS Clean Architecture layers">
      <defs>
        <linearGradient id="ios-arch-view" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5AC8FA" /><stop offset="100%" stopColor="#007AFF" />
        </linearGradient>
        <linearGradient id="ios-arch-vm" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5E5CE6" /><stop offset="100%" stopColor="#3634A3" />
        </linearGradient>
        <linearGradient id="ios-arch-domain" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF9500" /><stop offset="100%" stopColor="#C66900" />
        </linearGradient>
        <linearGradient id="ios-arch-data" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#34C759" /><stop offset="100%" stopColor="#1D8B3E" />
        </linearGradient>
        <linearGradient id="ios-arch-source" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF2D55" /><stop offset="100%" stopColor="#B81841" />
        </linearGradient>
        <filter id="ios-arch-shadow"><feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#0A84FF" floodOpacity="0.18" /></filter>
      </defs>

      <g filter="url(#ios-arch-shadow)">
        <rect x="60" y="30" width="640" height="64" rx="14" fill="url(#ios-arch-view)" />
        <text x="380" y="56" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" letterSpacing="0.12em">PRESENTATION · SwiftUI / UIKit</text>
        <text x="380" y="78" textAnchor="middle" fill="white" fontSize="15" fontWeight="800">Views • @State • Bindings • View Modifiers</text>
      </g>

      <g filter="url(#ios-arch-shadow)">
        <rect x="60" y="116" width="640" height="64" rx="14" fill="url(#ios-arch-vm)" />
        <text x="380" y="142" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" letterSpacing="0.12em">VIEW MODELS · @Observable / ObservableObject</text>
        <text x="380" y="164" textAnchor="middle" fill="white" fontSize="14" fontWeight="700">UI state • Intent handlers • Combine pipelines</text>
      </g>

      <g filter="url(#ios-arch-shadow)">
        <rect x="60" y="202" width="640" height="64" rx="14" fill="url(#ios-arch-domain)" />
        <text x="380" y="228" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" letterSpacing="0.12em">DOMAIN · Use Cases & Entities</text>
        <text x="380" y="250" textAnchor="middle" fill="white" fontSize="14" fontWeight="700">Pure Swift business rules • Protocol contracts</text>
      </g>

      <g filter="url(#ios-arch-shadow)">
        <rect x="60" y="288" width="640" height="64" rx="14" fill="url(#ios-arch-data)" />
        <text x="380" y="314" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" letterSpacing="0.12em">DATA · Repositories</text>
        <text x="380" y="336" textAnchor="middle" fill="white" fontSize="14" fontWeight="700">Mappers • Caching • Source orchestration</text>
      </g>

      <g filter="url(#ios-arch-shadow)">
        <rect x="60" y="374" width="310" height="62" rx="14" fill="url(#ios-arch-source)" />
        <text x="215" y="398" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" letterSpacing="0.12em">REMOTE</text>
        <text x="215" y="420" textAnchor="middle" fill="white" fontSize="13" fontWeight="700">URLSession • Codable • REST/GraphQL</text>
      </g>
      <g filter="url(#ios-arch-shadow)">
        <rect x="390" y="374" width="310" height="62" rx="14" fill="url(#ios-arch-source)" />
        <text x="545" y="398" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" letterSpacing="0.12em">LOCAL</text>
        <text x="545" y="420" textAnchor="middle" fill="white" fontSize="13" fontWeight="700">SwiftData • Core Data • Keychain</text>
      </g>

      <g fill="#5E5CE6" opacity="0.55">
        <path d="M 376 94 L 380 112 L 384 94 Z" />
        <path d="M 376 180 L 380 198 L 384 180 Z" />
        <path d="M 376 266 L 380 284 L 384 266 Z" />
        <path d="M 376 352 L 380 370 L 384 352 Z" />
      </g>
    </svg>
  );
}
