// @ts-check
import { defineConfig } from 'astro/config'

import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.SITE_URL || "https://irfannm.dev",
  integrations: [react(), tailwind(), sitemap()],
  redirects: {
    '/blog/2022-04-10-generasi-gigih-critical-thinking': {
      status: 301,
      destination: '/blog/generasi-gigih-soft-skill-critical-thinking',
    },
    '/blog/2022-04-01-menyambut-ramadan-dengan-berinvestasi-syariah': {
      status: 301,
      destination: '/blog/menyambut-ramadan-dengan-berinvestasi-syariah',
    }, 
    '/blog/2020-08-08-perancangan-arsitektur-perangkat-lunak': {
      status: 301,
      destination: '/blog/perancangan-arsitektur-perangkat-lunak',
    },
    '/blog/2020-08-11-kebutuhan-fungsional-dan-nonfungsional': {
      status: 301,
      destination: '/blog/kebutuhan-fungsional-dan-nonfungsional',
    },
    '/blog/2020-07-21-perbedaan-bahasa-pemrograman': {
      status: 301,
      destination: '/blog/perbandingan-bahasa-pemrograman-cpp-java-dan-c',
    }
  }
})
