// Business facts (CLAUDE.md §1). Single-room rule (§5): KTV, Private Room, and
// Content Creation are use-cases of the one room — never phrase these as
// separate physical spaces.

export const SITE = {
  name: 'Vocalyze Lounge',
  tagline: 'Where moments find their voice',
  city: 'Rosario, Cavite',
  phone: '0991 914 1290',
  phoneHref: 'tel:+639919141290',
  email: 'vocalyzelounge08@gmail.com',
  capacity: 8,
  // Provisional — client to confirm 24/7 hours before launch (blocking input #6).
  hoursProvisional: true,
  hoursLabel: 'Open 24/7',
} as const

// TODO(client): official social links (blocking input #4). Placeholder hrefs
// point at '#' until provided — do not fabricate handles.
export const SOCIALS = [
  { id: 'facebook', label: 'Facebook', href: '#' },
  { id: 'instagram', label: 'Instagram', href: '#' },
  { id: 'tiktok', label: 'TikTok', href: '#' },
] as const

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Experience', href: '#experience' },
  { label: 'Room', href: '#room' },
  { label: 'Rates', href: '#rates' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#location' },
] as const

export const SERVICES = [
  {
    id: 'ktv',
    title: 'KTV',
    description: 'Sing your heart out on a pro karaoke system built for real performances.',
  },
  {
    id: 'private-room',
    title: 'Private Room',
    description: 'A private space just for you and your group — birthdays, reunions, hangouts.',
  },
  {
    id: 'content-creation',
    title: 'Content Creation',
    description: 'Camera-ready lighting and props to shoot TikToks, reels, and photos.',
  },
] as const

export const SIGNAGE_WORDS = ['Sing', 'Private', 'Celebrate', 'Connect'] as const

export const FEATURED_AMENITIES = [
  '65" Smart TV',
  'Pro karaoke system',
  '2 wireless mics',
  'Signature RGB lighting',
  'Spotlight stage',
  'Lounge seating',
  'Fully air-conditioned',
  'Drink chiller',
  'Parking',
] as const

export const FULL_AMENITIES = [
  'Air-conditioned room',
  '65" Smart TV',
  'Signature RGB lighting',
  'Lounge seating',
  'Sofa bed',
  'Caterpillar couches',
  'Pro karaoke system',
  '2 premium wireless mics',
  'Spotlight stage',
  'Drink chiller',
  'Parking',
  'Stylish CR',
  'Bidet',
  'Towel rack',
  'Color-changing LED mirror',
  'Hand dryer',
  'Free indoor slippers',
  'Pro tripod',
  'Sunglasses props',
] as const

export const HOW_IT_WORKS = [
  { step: '01', title: 'Choose your experience' },
  { step: '02', title: 'Reserve your time' },
  { step: '03', title: 'Show up & enjoy' },
] as const
