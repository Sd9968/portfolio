import type { Dictionary, WorkItem } from "@/i18n/types";

export function ProductCaseStudy({ item, labels }: { item: WorkItem; labels: Dictionary["caseStudy"] }) {
  return (
    <div className="case-study">
      <div className="case-study__sections">
        {item.caseStudy.sections.map((section) => (
          <section key={section.title} className="case-study__section">
            <h4>{section.title}</h4>
            <p>{section.body}</p>
          </section>
        ))}
      </div>
      <section className="case-study__metrics">
        <h4>{labels.metricsLabel}</h4>
        <p className="case-study__note">{labels.metricsNote}</p>
        <dl>
          {item.caseStudy.metrics.map((metric) => (
            <div key={metric.name}><dt>{metric.name}</dt><dd>{metric.definition}</dd></div>
          ))}
        </dl>
      </section>
    </div>
  );
}
