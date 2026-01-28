import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Yunus Emre Kaplan",
  EMAIL: "yekpassage@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Yunus Emre Kaplan'ın mobil uygulama geliştirme odaklı kişisel blogu ve portfolyosu.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Mobil ve web geliştirme ile ilgili, ilgi duyduğum konularda yazılar.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Çalıştığım şirketler ve üstlendiğim roller.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "Kişisel ve profesyonel projelerimden seçkiler.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "twitter-x",
    HREF: "https://twitter.com/yunusemrekaplan",
  },
  { 
    NAME: "github",
  HREF: "https://github.com/yekaplan"
  },
  { 
    NAME: "linkedin",
  HREF: "https://www.linkedin.com/in/yekaplan/",
  }
];
