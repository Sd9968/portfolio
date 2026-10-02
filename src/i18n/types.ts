export type Locale = "en" | "fr" | "ar";

export type WorkItem = {
  name: string;
  tag: string;
  summary: string;
  points: string[];
  status: string;
  stack: string[];
  detailLabel: string;
  href?: string;
  linkLabel?: string;
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    work: string;
    projects: string;
    about: string;
    experience: string;
    contact: string;
    language: string;
  };
  hero: {
    selectedWork: string;
    role: string;
    headline: string;
    sub: string;
    email: string;
    resume: string;
    basedIn: string;
  };
  about: {
    label: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
  };
  work: {
    label: string;
    title: string;
    items: WorkItem[];
  };
  projects: {
    label: string;
    title: string;
    intro: string;
    visit: string;
    items: WorkItem[];
  };
  capabilities: {
    label: string;
    title: string;
    skillsLabel: string;
    skills: string[];
    steps: Array<{ title: string; body: string }>;
  };
  experience: {
    label: string;
    title: string;
    roles: Array<{
      company: string;
      title: string;
      period: string;
      location: string;
      bullets: string[];
    }>;
  };
  education: {
    label: string;
    title: string;
    schools: Array<{
      school: string;
      degree: string;
      period: string;
      detail: string;
    }>;
    certsLabel: string;
    certs: string[];
  };
  contact: {
    label: string;
    title: string;
    sub: string;
    email: string;
    linkedin: string;
    resume: string;
  };
  footer: {
    rights: string;
  };
};
