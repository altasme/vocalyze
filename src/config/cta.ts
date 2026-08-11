// Single source of truth for BOOK NOW routing (CLAUDE.md §4).
// Phase 1 has no /book page yet — the client owes the temporary destination
// (blocking input #3). Every BOOK NOW / BOOK YOUR EXPERIENCE / BOOK THIS
// PACKAGE / ADD PARTY MODE button must read from this constant, never a
// scattered href.
//
// Phase 2: flip mode to 'internal' and href to '/book'. Zero component changes.
export type BookNowMode = 'messenger' | 'form' | 'external' | 'internal'

export const BOOK_NOW: { mode: BookNowMode; href: string } = {
  mode: 'messenger',
  // TODO(client): confirm official Messenger link / inquiry destination (blocking input #3).
  href: 'https://m.me/vocalyzelounge',
} as const
