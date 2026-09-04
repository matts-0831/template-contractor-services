export const THEME_IDS = [
  "landscape-grove",
  "electric-blue",
  "electric-amber",
  "stone-forge",
  "charcoal-bronze",
  "navy-steel",
  "black-titanium",
] as const;

export type ThemeId = (typeof THEME_IDS)[number];

export type HeaderStyle = "grove" | "volt" | "mason" | "atelier";

export const THEMES: Record<
  ThemeId,
  { headerStyle: HeaderStyle; themeColor: string; label: string }
> = {
  "landscape-grove": {
    headerStyle: "grove",
    themeColor: "#2f6a3a",
    label: "Lawn & landscaping",
  },
  "electric-blue": {
    headerStyle: "volt",
    themeColor: "#0e141c",
    label: "Electrical",
  },
  "electric-amber": {
    headerStyle: "volt",
    themeColor: "#16120a",
    label: "Electrical",
  },
  "stone-forge": {
    headerStyle: "mason",
    themeColor: "#1a1c1e",
    label: "Concrete & masonry",
  },
  "charcoal-bronze": {
    headerStyle: "atelier",
    themeColor: "#161412",
    label: "General construction",
  },
  "navy-steel": {
    headerStyle: "atelier",
    themeColor: "#0f1724",
    label: "General construction",
  },
  "black-titanium": {
    headerStyle: "atelier",
    themeColor: "#0a0a0b",
    label: "General construction",
  },
};

export function resolveTheme(themeId: string) {
  if (themeId in THEMES) return THEMES[themeId as ThemeId];
  return THEMES["charcoal-bronze"];
}
