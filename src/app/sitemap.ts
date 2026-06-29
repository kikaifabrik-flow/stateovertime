import type { MetadataRoute } from 'next';
import { STATES_DATA } from '../data/states';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://stateovertime.com';
  const lastModified = new Date();
  
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  const statePages: MetadataRoute.Sitemap = STATES_DATA.map((state) => ({
    url: `${baseUrl}/overtime-calculator/${state.slug}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...statePages];
}
