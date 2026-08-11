// Shared rates content (CLAUDE.md §11 / formula §1 & §17).
// Phase 1 displays these values. It never lets the customer compute a
// custom price in the UI. Phase 2's pricing engine reuses this exact file.

export const RATE_FORMULA = {
  base: 299,
  baseHours: 1,
  basePax: 2,
  perExtraHour: 200,
  perExtraGuestPerHour: 50,
  partyModeAddOn: 49,
  reservationFee: 500,
  reservationFeeMinTotal: 500, // below this, fee = 50% of total
} as const

// total = base + perExtraHour * (hours - 1) + perExtraGuestPerHour * hours * (pax - basePax)
// Used only to keep the presets below honest against the formula; not exposed as a
// customer-facing calculator in Phase 1.
export function computeTotal(hours: number, pax: number, partyMode = false): number {
  const { base, baseHours, basePax, perExtraHour, perExtraGuestPerHour, partyModeAddOn } =
    RATE_FORMULA
  let total = base + perExtraHour * (hours - baseHours) + perExtraGuestPerHour * hours * (pax - basePax)
  if (partyMode) total += partyModeAddOn
  return total
}

export interface RatePackage {
  id: 'A' | 'B' | 'C'
  label: string
  price: number
  hours: number
  pax: number
  popular?: boolean
}

export const FLEXIBLE_BASE = {
  price: RATE_FORMULA.base,
  hours: RATE_FORMULA.baseHours,
  pax: RATE_FORMULA.basePax,
  note: `+₱${RATE_FORMULA.perExtraHour} every succeeding hour · +₱${RATE_FORMULA.perExtraGuestPerHour}/hour per additional guest`,
}

export const PACKAGES: RatePackage[] = [
  { id: 'A', label: 'Package A', price: computeTotal(2, 2), hours: 2, pax: 2 },
  { id: 'B', label: 'Package B', price: computeTotal(5, 4), hours: 5, pax: 4 },
  { id: 'C', label: 'Package C', price: computeTotal(6, 6), hours: 6, pax: 6 },
]

export const PARTY_MODE_ADDON = {
  label: 'Party Mode',
  price: RATE_FORMULA.partyModeAddOn,
  description: 'Disco / RGB sync',
}

export const RESERVATION_POLICY = [
  'Strictly by reservation, no walk-ins.',
  `₱${RATE_FORMULA.reservationFee} non-refundable reservation fee.`,
  'Totals under ₱500 require a 50% reservation fee.',
]

// Provisional; client to confirm exact rounding + wording (blocking input #6).
export const RESERVATION_POLICY_PROVISIONAL = true
