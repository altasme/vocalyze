import { create } from 'zustand'

interface UiState {
  navOpen: boolean
  setNavOpen: (open: boolean) => void
  lightboxIndex: number | null
  openLightbox: (index: number) => void
  closeLightbox: () => void
}

export const useUiStore = create<UiState>((set) => ({
  navOpen: false,
  setNavOpen: (open) => set({ navOpen: open }),
  lightboxIndex: null,
  openLightbox: (index) => set({ lightboxIndex: index }),
  closeLightbox: () => set({ lightboxIndex: null }),
}))
