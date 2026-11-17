/**
 * Domain types — clean-architecture layer that must stay Astro-free at
 * runtime. The single source of truth for shapes is the zod schema in
 * `src/content.config.ts`; types here are *derived* with z.infer (never
 * duplicated). All astro references below are `import type`-only, which the
 * compiler erases — the architecture check greps for value imports.
 */
import type { z } from 'astro/zod';
import type { exhibitionSchema, homeSchema, pressSchema, profileSchema, projectSchema } from '../content.config';

export type HomeData = z.infer<typeof homeSchema>;
export type Profile = z.infer<typeof profileSchema>;
export type Project = z.infer<typeof projectSchema>;
export type PressItem = z.infer<typeof pressSchema>;
export type Exhibition = z.infer<typeof exhibitionSchema>;

export type SlideshowItem = HomeData['slideshow'][number];

export interface SlideshowEntry extends SlideshowItem {
  /** 1-based position in the slideshow (mapper normalization). */
  index: number;
}
