import { useMemo, useState } from "react";
import {
  functionalRequirements,
  nonFunctionalRequirements,
  userStoriesDetailed,
} from "../data/portfolioContent";

type Tab = "functional" | "non-functional";
type PanelMode = "requirements" | "stories";

interface RequirementsPanelProps {
  mode: PanelMode;
}

export default function RequirementsPanel({ mode }: RequirementsPanelProps) {
  const [tab, setTab] = useState<Tab>("functional");
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();

  const filteredFunctional = useMemo(
    () =>
      functionalRequirements.filter(
        (r) =>
          !q ||
          r.id.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q),
      ),
    [q],
  );

  const filteredNonFunctional = useMemo(
    () =>
      nonFunctionalRequirements.filter(
        (r) =>
          !q ||
          r.id.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q) ||
          r.category.toLowerCase().includes(q),
      ),
    [q],
  );

  const filteredStories = useMemo(
    () =>
      userStoriesDetailed.filter(
        (s) =>
          !q ||
          s.id.toLowerCase().includes(q) ||
          s.summary.toLowerCase().includes(q) ||
          s.acceptanceCriteria.some((c) => c.toLowerCase().includes(q)),
      ),
    [q],
  );

  return (
    <div className="portfolio-req-panel">
      <div className="portfolio-req-panel__toolbar">
        {mode === "requirements" && (
          <div className="portfolio-req-tabs">
            <button
              type="button"
              className={`portfolio-req-tabs__btn${tab === "functional" ? " is-active" : ""}`}
              onClick={() => setTab("functional")}
            >
              Funcionales ({functionalRequirements.length})
            </button>
            <button
              type="button"
              className={`portfolio-req-tabs__btn${tab === "non-functional" ? " is-active" : ""}`}
              onClick={() => setTab("non-functional")}
            >
              No funcionales ({nonFunctionalRequirements.length})
            </button>
          </div>
        )}
        <input
          type="search"
          className="portfolio-req-search"
          placeholder="Buscar por ID o texto…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Buscar requerimientos"
        />
      </div>

      {mode === "requirements" && tab === "functional" && (
        <ul className="portfolio-req-list">
          {filteredFunctional.map((r) => (
            <li key={r.id} className="portfolio-req-card">
              <span className="portfolio-req-card__id">{r.id}</span>
              <p className="portfolio-req-card__text">{r.description}</p>
            </li>
          ))}
        </ul>
      )}

      {mode === "requirements" && tab === "non-functional" && (
        <ul className="portfolio-req-list">
          {filteredNonFunctional.map((r) => (
            <li key={r.id} className="portfolio-req-card">
              <div className="portfolio-req-card__row">
                <span className="portfolio-req-card__id">{r.id}</span>
                <span className="portfolio-tag">{r.category}</span>
              </div>
              <p className="portfolio-req-card__text">{r.description}</p>
            </li>
          ))}
        </ul>
      )}

      {mode === "stories" && (
        <ul className="portfolio-req-list">
          {filteredStories.map((s) => (
            <li key={s.id} className="portfolio-req-card portfolio-req-card--story">
              <div className="portfolio-req-story-head">
                <span className="portfolio-req-card__id">{s.id}</span>
                <span className="portfolio-req-story-summary">{s.summary}</span>
                <span className="portfolio-tag">{s.priority}</span>
              </div>
              <div className="portfolio-req-story-detail">
                <p className="portfolio-req-story-role">{s.role}</p>
                <ul className="portfolio-list">
                  {s.acceptanceCriteria.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
                <p className="portfolio-req-story-owner">Responsable: {s.owner}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
