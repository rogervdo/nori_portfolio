import type { ReactNode } from "react";

interface SectionBlockProps {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  lead?: string;
  children: ReactNode;
}

export default function SectionBlock({
  id,
  number,
  eyebrow,
  title,
  lead,
  children,
}: SectionBlockProps) {
  return (
    <section id={id} className="portfolio-section-block">
      <div className="portfolio-section-block__head">
        <div className="portfolio-section-block__meta">
          <span className="portfolio-section-block__number">{number}</span>
          <span className="portfolio-section-block__eyebrow">{eyebrow}</span>
        </div>
        <h2 className="portfolio-section-block__title">{title}</h2>
        {lead ? <p className="portfolio-section-block__lead">{lead}</p> : null}
      </div>
      <div className="portfolio-section-block__body">{children}</div>
    </section>
  );
}
