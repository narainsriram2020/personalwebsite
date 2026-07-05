// Central design tokens for the whole site.
// Swap the values in `color` to retheme everything at once
// (e.g. a light "paper" variant) without touching components.
export const theme = {
  color: {
    bg: '#0B1A2E',          // deep midnight navy (page background)
    bgElevated: '#11253C',  // cards, island nav
    bgInset: '#0E2138',     // subtle inset fills
    ink: '#EAF0F7',         // primary text (soft white, never pure)
    inkSoft: '#C5D3E2',     // lead paragraphs
    muted: '#8FA3BB',       // secondary / meta text
    line: 'rgba(170, 200, 230, 0.12)', // hairline borders & rules
    lineStrong: 'rgba(170, 200, 230, 0.22)',
    accent: '#62A4DE',      // primary blue accent (replaces the teal)
    accentSky: '#9BC4E8',   // lighter sky blue (hover / highlights)
    accentDeep: '#25496E',  // deep blue (timeline, dividers)
    warm: '#E0A45C',        // complementary amber — the "something else"
  },
  font: {
    display: "'Space Grotesk', system-ui, -apple-system, sans-serif",
    body: "'Hanken Grotesk', system-ui, -apple-system, sans-serif",
    mono: "'IBM Plex Mono', ui-monospace, 'SFMono-Regular', monospace",
  },
  maxWidth: '1080px',
  radius: '14px',
};

export default theme;
