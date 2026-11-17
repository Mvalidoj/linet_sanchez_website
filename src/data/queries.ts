/**
 * Data-access layer — the ONLY module that may call `getCollection` (pages
 * and components import these queries, never the collections directly).
 *
 * Owns everything collection-related the schema does not already guarantee:
 * deterministic ordering, draft filtering, sorting by displayOrder. If the
 * data source ever changes, only this layer moves.
 */
import { getCollection } from 'astro:content';
import { toSlideshow } from '../domain/mappers/home';
import type { SlideshowEntry } from '../domain/types';

export async function getHomeSlideshow(): Promise<SlideshowEntry[]> {
  const entries = await getCollection('home');
  const entry = entries[0];
  return entry ? toSlideshow(entry) : [];
}

// Phase 2+ queries (getFeaturedProjects, getPublishedProjects, getPressSorted,
// getExhibitionsSorted…) are added here when their consuming pages exist.
