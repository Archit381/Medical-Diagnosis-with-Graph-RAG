export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "ClinGraph",
  description: "AI-powered diagnosis from your symptoms and history, instantly",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Implementation",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  links: {
    github: "https://github.com/Archit381/Medical-Diagnosis-with-Graph-RAG.git"
  },
  colorSchemes: {
    primary: '#101828',
    secondary: '#667085'
  },
};
