"use client";

import Image from "next/image";
import { useState } from "react";
import { EMAIL, LINKEDIN, RESUME_HREF } from "@/i18n/dictionaries";
import { useLocale } from "@/i18n/LocaleProvider";
import { useActiveSection } from "@/hooks/useActiveSection";
import { HeroParallax } from "./HeroParallax";
import { InteractiveItem } from "./InteractiveItem";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MagneticButton } from "./MagneticButton";
import { Reveal } from "./Reveal";
import { ScrollProgress } from "./ScrollProgress";
import { SignalField } from "./SignalField";

export function Portfolio() {
  const { dict } = useLocale();
  const active = useActiveSection();
  const [openProject, setOpenProject] = useState<string | null>("NidahAI");

  const navLinks = [
    { id: "work", label: dict.nav.work },
    { id: "projects", label: dict.nav.projects },
    { id: "about", label: dict.nav.about },
    { id: "experience", label: dict.nav.experience },
    { id: "contact", label: dict.nav.contact },
  ] as const;

  return (
    <>
      <ScrollProgress />
      <header className="site-header">
        <LanguageSwitcher />
        <nav className="site-nav" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? "is-active" : undefined}
              aria-current={active === link.id ? "true" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <HeroParallax>
          <div className="hero__media" aria-hidden="true">
            <Image
              src="/images/hero-ai-ops-meeting.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="hero__photo"
            />
            <SignalField />
            <div className="hero__spotlight" />
          </div>
          <div className="hero__veil" aria-hidden="true" />
          <div className="hero__content">
            <p className="hero__role anim-fade-up" style={{ animationDelay: "80ms" }}>
              {dict.hero.role}
            </p>
            <h1 className="hero__brand anim-fade-up" style={{ animationDelay: "160ms" }}>
              <span className="hero__brand-line">Atheeq</span>{" "}
              <span className="hero__brand-line">Syed</span>
            </h1>
            <p className="hero__headline anim-fade-up" style={{ animationDelay: "260ms" }}>
              {dict.hero.headline}
            </p>
            <p className="hero__sub anim-fade-up" style={{ animationDelay: "360ms" }}>
              {dict.hero.sub}
            </p>
            <div className="hero__cta anim-fade-up" style={{ animationDelay: "460ms" }}>
              <MagneticButton className="btn btn--primary" href={`mailto:${EMAIL}`}>
                {dict.hero.email}
              </MagneticButton>
              <MagneticButton
                className="btn btn--ghost"
                href={RESUME_HREF}
                download="Atheeq_Syed_Resume.pdf"
              >
                {dict.hero.resume}
              </MagneticButton>
            </div>
            <p className="hero__meta anim-fade-up" style={{ animationDelay: "560ms" }}>
              {dict.hero.basedIn}
            </p>
            <a href="#work" className="hero__scroll" aria-label={dict.nav.work}>
              <span className="hero__scroll-dot" />
            </a>
          </div>
        </HeroParallax>

        <section id="work" className="section work">
          <Reveal>
            <p className="section__label">{dict.work.label}</p>
            <h2 className="section__title">{dict.work.title}</h2>
          </Reveal>
          <div className="work__list">
            {dict.work.items.map((item, i) => (
              <Reveal key={item.name} delay={i * 80}>
                <InteractiveItem className="work-item">
                  <div className="work-item__index" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="work-item__body">
                    <p className="work-item__tag">{item.tag}</p>
                    <h3 className="work-item__name">{item.name}</h3>
                    <p className="work-item__summary">{item.summary}</p>
                    <ul className="work-item__points">
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </InteractiveItem>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects">
          <Reveal>
            <p className="section__label">{dict.projects.label}</p>
            <h2 className="section__title">{dict.projects.title}</h2>
            <p className="projects__intro">{dict.projects.intro}</p>
          </Reveal>
          <div className="work__list">
            {dict.projects.items.map((item, i) => {
              const isOpen = openProject === item.name;
              return (
                <Reveal key={item.name} delay={i * 80}>
                  <InteractiveItem
                    className={`work-item work-item--project${isOpen ? " is-open" : ""}`}
                  >
                    <button
                      type="button"
                      className="work-item__toggle"
                      aria-expanded={isOpen}
                      onClick={() =>
                        setOpenProject((prev) => (prev === item.name ? null : item.name))
                      }
                    >
                      <div className="work-item__index" aria-hidden="true">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="work-item__body">
                        <p className="work-item__tag">{item.tag}</p>
                        <h3 className="work-item__name">
                          {item.name}
                          <span className="work-item__chev" aria-hidden="true" />
                        </h3>
                        <p className="work-item__summary">{item.summary}</p>
                        <div className="work-item__details">
                          <ul className="work-item__points">
                            {item.points.map((point) => (
                              <li key={point}>{point}</li>
                            ))}
                          </ul>
                          {item.href && (
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="project-visit"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {dict.projects.visit}
                              <span aria-hidden="true"> →</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </button>
                  </InteractiveItem>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section id="about" className="section about">
          <Reveal>
            <p className="section__label">{dict.about.label}</p>
            <h2 className="section__title">{dict.about.title}</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="about__copy">
              <p>{dict.about.p1}</p>
              <p>{dict.about.p2}</p>
              <p>{dict.about.p3}</p>
            </div>
          </Reveal>
        </section>

        <section id="experience" className="section experience">
          <Reveal>
            <p className="section__label">{dict.experience.label}</p>
            <h2 className="section__title">{dict.experience.title}</h2>
          </Reveal>
          <div className="experience__list">
            {dict.experience.roles.map((role, i) => (
              <Reveal key={role.company} delay={i * 70}>
                <InteractiveItem className="exp-item">
                  <div className="exp-item__meta">
                    <h3 className="exp-item__company">{role.company}</h3>
                    <p className="exp-item__period">{role.period}</p>
                    <p className="exp-item__location">{role.location}</p>
                  </div>
                  <div className="exp-item__body">
                    <p className="exp-item__title">{role.title}</p>
                    <ul>
                      {role.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </InteractiveItem>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section education">
          <Reveal>
            <p className="section__label">{dict.education.label}</p>
            <h2 className="section__title">{dict.education.title}</h2>
          </Reveal>
          <div className="education__grid">
            {dict.education.schools.map((school, i) => (
              <Reveal key={school.school} delay={i * 80}>
                <InteractiveItem className="edu-item" as="div">
                  <h3>{school.school}</h3>
                  <p className="edu-item__degree">{school.degree}</p>
                  <p className="edu-item__period">{school.period}</p>
                  <p className="edu-item__detail">{school.detail}</p>
                </InteractiveItem>
              </Reveal>
            ))}
          </div>
          <Reveal delay={160}>
            <div className="certs">
              <h3 className="certs__label">{dict.education.certsLabel}</h3>
              <ul>
                {dict.education.certs.map((cert) => (
                  <li key={cert}>{cert}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>

        <section id="contact" className="section contact">
          <Reveal>
            <p className="section__label">{dict.contact.label}</p>
            <h2 className="section__title contact__title">{dict.contact.title}</h2>
            <p className="contact__sub">{dict.contact.sub}</p>
            <div className="contact__links">
              <a className="contact__link" href={`mailto:${EMAIL}`}>
                <span>{dict.contact.email}</span>
                <strong>{EMAIL}</strong>
              </a>
              <a
                className="contact__link"
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{dict.contact.linkedin}</span>
                <strong>atheeq-syed</strong>
              </a>
              <a
                className="contact__link"
                href={RESUME_HREF}
                download="Atheeq_Syed_Resume.pdf"
              >
                <span>{dict.contact.resume}</span>
                <strong>PDF</strong>
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Atheeq Syed</p>
        <p>{dict.footer.rights}</p>
      </footer>
    </>
  );
}
