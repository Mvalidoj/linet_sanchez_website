/**
 * Mapper: content-collection entry → domain type (anti-corruption layer).
 * The only place allowed to know the `CollectionEntry` shape of `home`.
 */
import type { CollectionEntry } from 'astro:content';
import type { SlideshowEntry } from '../types';

export function toSlideshow(entry: CollectionEntry<'home'>): SlideshowEntry[] {
  return entry.data.slideshow.map((item, i) => ({ ...item, index: i + 1 }));
}
