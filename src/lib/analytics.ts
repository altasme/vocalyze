// Analytics events (CLAUDE.md §13). Ships as a thin wrapper around whichever
// provider the client picks (GA4 or Plausible) — swap the implementation in
// `dispatch` only, call sites never change.

export type AnalyticsEvent =
  | 'page_view'
  | 'cta_book_now_click'
  | 'cta_view_rates_click'
  | 'gallery_interaction'
  | 'contact_click'
  | 'social_click'
  | 'directions_click'

type EventPayload = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    plausible?: (event: string, options?: { props?: EventPayload }) => void
  }
}

function dispatch(event: AnalyticsEvent, payload?: EventPayload) {
  if (typeof window === 'undefined') return

  if (typeof window.gtag === 'function') {
    window.gtag('event', event, payload)
  }
  if (typeof window.plausible === 'function') {
    window.plausible(event, { props: payload })
  }
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.debug('[analytics]', event, payload ?? {})
  }
}

export function trackEvent(event: AnalyticsEvent, payload?: EventPayload) {
  dispatch(event, payload)
}
