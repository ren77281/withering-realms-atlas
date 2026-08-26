/**
 * Site configuration — the single source of truth for game-specific metadata.
 *
 * 👉 APPLY TEMPLATE: Change every field here when building a new game wiki.
 * This is part of the CONFIG LAYER — framework code reads from here, never the reverse.
 */

export interface SiteConfig {
  /** Full site name, used in <title> suffix and Organization JSON-LD. e.g. "Anvil Quest Wiki" */
  name: string;
  /** Short name for PWA manifest and mobile logo. e.g. "AQ Wiki" */
  shortName: string;
  /** Site description for Organization JSON-LD and og:site_name. */
  description: string;
  /** Domain without protocol or trailing slash. e.g. "anvilquestwiki.wiki" */
  domain: string;
  /** Hero tagline shown under the site title. */
  tagline: string;
  /** Copyright / legal disclaimer line shown in footer. */
  legalNotice: string;
  social: {
    /** Official game website URL (the game itself, not the wiki). */
    official: string;
    discord?: string;
    youtube?: string;
    twitter?: string;
    reddit?: string;
  };
  /**
   * Canonical URLs about the GAME (Steam page, official site, Wikipedia entry…).
   * Emitted as Organization JSON-LD `sameAs` — helps Google / AI engines link
   * this wiki to the game's knowledge-graph entity.
   */
  sameAs?: string[];
  game: {
    /** Full game name. */
    name: string;
    /** Platform: "Roblox" | "Steam" | "Epic Games" | "Mobile" | ... */
    platform: string;
    /** Developer / studio name. */
    developer: string;
    /** Genre description. */
    genre: string;
    /** ISO release date (optional). */
    releaseDate?: string;
  };
  /**
   * Dimensions of the default OG/Twitter share image (public/images/hero.webp).
   * Emitted as og:image:width / og:image:height so social crawlers can render
   * the share card without downloading the image first.
   */
  ogImageWidth: number;
  ogImageHeight: number;
  /** Default author name for articles without an explicit `author` in frontmatter (E-E-A-T signal). */
  defaultAuthor?: string;
}

export const site: SiteConfig = {
  name: 'Withering Realms Wiki',
  shortName: 'WR Wiki',
  description: 'Independent Withering Realms wiki covering release details, confirmed gameplay systems, locations, weapons, allies, and official updates.',
  domain: 'withering-realms.gamefieldhq.com',
  tagline: 'The independent guide to Withering Realms',
  legalNotice: 'Withering Realms Wiki is a fan-made guide. Not affiliated with or endorsed by Moonless Formless.',
  social: {
    official: 'https://witheringrealms.com',
    discord: 'https://discord.gg/hVhhQU8YM9',
    youtube: 'https://www.youtube.com/@moonlessformless',
    twitter: 'https://x.com/WitheringRooms',
  },
  sameAs: [
    'https://witheringrealms.com',
    'https://store.steampowered.com/app/3441990/Withering_Realms/',
    'https://www.moonlessformless.com',
  ],
  game: {
    name: 'Withering Realms',
    platform: 'Windows PC (Steam)',
    developer: 'Moonless Formless',
    genre: 'Horror Action RPG',
    releaseDate: '2026-09-02',
  },
  // og:image dims of the SHIPPED hero.webp — if you replace public/images/hero.webp,
  // update these in src/config/site.ts to match (wrong dims mis-crop share cards).
  ogImageWidth: 1200,
  ogImageHeight: 630,
  defaultAuthor: 'Withering Realms Wiki Editorial Team',
};

/** Absolute site URL (no trailing slash). Falls back to the Astro `site` config. */
export const siteUrl: string = (process.env.SITE_URL || `https://${site.domain}`).replace(
  /\/$/,
  '',
);
