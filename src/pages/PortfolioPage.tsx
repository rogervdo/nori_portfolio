import { useEffect } from "react";
import { ExternalLink } from "lucide-react";
import BanorteLogo from "../assets/images/BanorteLogo.png";
import EdtTree from "../components/EdtTree";
import RequirementsPanel from "../components/RequirementsPanel";
import SectionBlock from "../components/SectionBlock";
import TopNav from "../components/TopNav";
import {
  ACHIEVEMENTS,
  BACKEND_MODULES,
  DIFFICULTIES,
  EDT_TREE,
  FRONTEND_MODULES,
  LEARNINGS,
  LIKERT_RESULTS,
  META,
  NAV_ITEMS,
  OBJECTIVES,
  PROBLEMS,
  RESUMEN_PARAGRAPHS,
  TEAM,
  TECH_STACK,
  UAT_GLOBAL_OUTCOMES,
  UAT_SUCCESS,
  USER_FEEDBACK,
  USER_PROFILES,
  VALUE_ADDED,
} from "../data/portfolioContent";
import "../portfolio.css";

export default function PortfolioPage() {
  useEffect(() => {
    document.title = "Portafolio Ejecutivo — Nori · NortDev";
  }, []);

  return (
    <div className="portfolio-page">
      <header className="portfolio-shell-header portfolio-shell-header--sticky">
        <nav className="portfolio-navbar" aria-label="Principal">
          <div className="portfolio-navbar__brand">
            <img src={BanorteLogo} alt="Banorte" className="portfolio-navbar__logo" />
            <span className="portfolio-navbar__title">NortDev · Portafolio</span>
          </div>
          <div className="portfolio-navbar__actions">
            <a
              href={META.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-navbar__link"
            >
              Ver demo Nori
              <ExternalLink size={14} style={{ marginLeft: 6, verticalAlign: -2 }} />
            </a>
          </div>
        </nav>
        <div className="portfolio-breadcrumb" aria-label="Ruta">
          NortDev / Portafolio / Nori
        </div>
        <TopNav items={NAV_ITEMS} />
      </header>

      <main className="portfolio-content">
        <SectionBlock
          id="portada"
          number="01"
          eyebrow="Portafolio ejecutivo"
          title="Nori — Levantamiento de requerimientos con IA"
          lead={`${META.client}. ${META.institution} · ${META.course}.`}
        >
          <div className="portfolio-meta-grid">
            <div className="portfolio-meta-item">
              <span className="portfolio-meta-item__label">Proyecto</span>
              <span className="portfolio-meta-item__value">{META.project}</span>
            </div>
            <div className="portfolio-meta-item">
              <span className="portfolio-meta-item__label">Equipo</span>
              <span className="portfolio-meta-item__value">{META.team}</span>
            </div>
            <div className="portfolio-meta-item">
              <span className="portfolio-meta-item__label">Versión</span>
              <span className="portfolio-meta-item__value">{META.version}</span>
            </div>
            <div className="portfolio-meta-item">
              <span className="portfolio-meta-item__label">Fecha</span>
              <span className="portfolio-meta-item__value">{META.date}</span>
            </div>
          </div>

          <h3 className="portfolio-subheading">Integrantes</h3>
          <div className="portfolio-members">
            {TEAM.map((m) => (
              <span key={m.name} className="portfolio-member-chip">
                {m.name} · {m.role}
              </span>
            ))}
          </div>
        </SectionBlock>

        <SectionBlock
          id="resumen"
          number="02"
          eyebrow="Resumen"
          title="Resumen ejecutivo"
        >
          {RESUMEN_PARAGRAPHS.map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}
        </SectionBlock>

        <SectionBlock
          id="descripcion"
          number="03"
          eyebrow="Producto"
          title="Descripción del software, propósito y usuario objetivo"
        >
          <h3 className="portfolio-subheading">¿Qué es Nori?</h3>
          <p>
            Nori es un <strong>espacio de trabajo inteligente</strong> que conecta requerimientos,
            arquitectura y equipos. Actúa como asistente virtual: recibe una iniciativa, formula
            preguntas dinámicas, organiza la información en once secciones (S0–S10) y produce un
            documento formal exportable.
          </p>
          <h3 className="portfolio-subheading">Propósito</h3>
          <p>
            Crear documentos del ciclo de vida de software de forma eficiente, con contexto
            conversacional, validación organizacional y exportación estructurada.
          </p>
          <p className="portfolio-highlight">{META.oneLiner}</p>
          <h3 className="portfolio-subheading">Usuarios objetivo</h3>
          <div className="portfolio-table-wrap">
            <table className="portfolio-table">
              <thead>
                <tr>
                  <th>Perfil</th>
                  <th>Necesidad principal</th>
                </tr>
              </thead>
              <tbody>
                {USER_PROFILES.map((u) => (
                  <tr key={u.role}>
                    <td>{u.role}</td>
                    <td>{u.need}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionBlock>

        <SectionBlock
          id="problema"
          number="04"
          eyebrow="Negocio"
          title="Planteamiento del problema y objetivos"
        >
          <h3 className="portfolio-subheading">Necesidad o problemática detectada</h3>
          <ul className="portfolio-list">
            {PROBLEMS.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <h3 className="portfolio-subheading">Objetivo general</h3>
          <p>
            Implementar un <strong>asistente virtual web con IA</strong> que guíe el levantamiento
            estructurado de requerimientos y genere documentación formal alineada a la plantilla
            corporativa de Banorte.
          </p>
          <h3 className="portfolio-subheading">Objetivos específicos</h3>
          <ol className="portfolio-list">
            {OBJECTIVES.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ol>
          <h3 className="portfolio-subheading">Valor agregado</h3>
          <div className="portfolio-table-wrap">
            <table className="portfolio-table">
              <thead>
                <tr>
                  <th>Dimensión</th>
                  <th>Valor para Banorte</th>
                </tr>
              </thead>
              <tbody>
                {VALUE_ADDED.map((v) => (
                  <tr key={v.dim}>
                    <td>{v.dim}</td>
                    <td>{v.val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionBlock>

        <SectionBlock
          id="requerimientos"
          number="05"
          eyebrow="Especificación"
          title="Análisis de requerimientos"
        >
          <h3 className="portfolio-subheading">Requerimientos funcionales y no funcionales</h3>
          <RequirementsPanel mode="requirements" />

          <h3 className="portfolio-subheading">Historias de usuario</h3>
          <RequirementsPanel mode="stories" />
        </SectionBlock>

        <SectionBlock
          id="desarrollo"
          number="06"
          eyebrow="Técnico"
          title="Desarrollo e implementación"
        >
          <h3 className="portfolio-subheading">Tecnologías utilizadas</h3>
          <div className="portfolio-table-wrap">
            <table className="portfolio-table">
              <thead>
                <tr>
                  <th>Capa</th>
                  <th>Tecnología</th>
                  <th>Propósito</th>
                </tr>
              </thead>
              <tbody>
                {TECH_STACK.map((t) => (
                  <tr key={t.layer}>
                    <td>{t.layer}</td>
                    <td>{t.tech}</td>
                    <td>{t.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="portfolio-subheading">Descripción de módulos</h3>
          <h4 className="portfolio-subheading portfolio-subheading--minor">Frontend</h4>
          <div className="portfolio-table-wrap">
            <table className="portfolio-table">
              <thead>
                <tr>
                  <th>Módulo</th>
                  <th>Función</th>
                </tr>
              </thead>
              <tbody>
                {FRONTEND_MODULES.map((m) => (
                  <tr key={m.name}>
                    <td>{m.name}</td>
                    <td>{m.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h4 className="portfolio-subheading portfolio-subheading--minor">Backend (microservicios)</h4>
          <div className="portfolio-table-wrap">
            <table className="portfolio-table">
              <thead>
                <tr>
                  <th>Servicio</th>
                  <th>Responsabilidad</th>
                </tr>
              </thead>
              <tbody>
                {BACKEND_MODULES.map((m) => (
                  <tr key={m.name}>
                    <td>{m.name}</td>
                    <td>{m.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionBlock>

        <SectionBlock
          id="usabilidad"
          number="07"
          eyebrow="Validación"
          title="Pruebas de usabilidad"
        >
          <h3 className="portfolio-subheading">Resultados obtenidos</h3>
          <div className="portfolio-two-col">
            <div className="portfolio-meta-item">
              <span className="portfolio-meta-item__label">50 ejecuciones (5 × 10 tareas)</span>
              <span className="portfolio-meta-item__value">
                {UAT_GLOBAL_OUTCOMES.map((o) => `${o.count} ${o.label} (${o.pct})`).join(" · ")}
              </span>
            </div>
            <div className="portfolio-meta-item">
              <span className="portfolio-meta-item__label">Criterios cumplidos</span>
              <span className="portfolio-meta-item__value">Promedio 77.5%</span>
            </div>
          </div>

          <div className="portfolio-table-wrap">
            <table className="portfolio-table">
              <thead>
                <tr>
                  <th>Tarea</th>
                  <th>Foco</th>
                  <th>% Éxito</th>
                  <th>Tasa criterios</th>
                </tr>
              </thead>
              <tbody>
                {UAT_SUCCESS.map((row) => (
                  <tr key={row.task}>
                    <td>{row.task}</td>
                    <td>{row.focus}</td>
                    <td>{row.success}</td>
                    <td>{row.criteria}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="portfolio-table-wrap">
            <table className="portfolio-table">
              <thead>
                <tr>
                  <th>Dimensión (Likert 1–5)</th>
                  <th>Promedio</th>
                </tr>
              </thead>
              <tbody>
                {LIKERT_RESULTS.map((l) => (
                  <tr key={l.dim}>
                    <td>{l.dim}</td>
                    <td>
                      <strong>{l.avg}</strong>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="portfolio-subheading">Retroalimentación de usuarios finales</h3>
          <div className="portfolio-table-wrap">
            <table className="portfolio-table">
              <thead>
                <tr>
                  <th>Participante</th>
                  <th>Problemas</th>
                  <th>Mejoras sugeridas</th>
                </tr>
              </thead>
              <tbody>
                {USER_FEEDBACK.map((f) => (
                  <tr key={f.id}>
                    <td>
                      {f.name}
                      <span className="portfolio-table__sub">{f.id}</span>
                    </td>
                    <td>{f.problems}</td>
                    <td>{f.improvements}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionBlock>

        <SectionBlock
          id="conclusiones"
          number="08"
          eyebrow="Cierre"
          title="Conclusiones y lecciones aprendidas"
        >
          <h3 className="portfolio-subheading">Logros del proyecto</h3>
          <ul className="portfolio-list">
            {ACHIEVEMENTS.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
          <h3 className="portfolio-subheading">Dificultades enfrentadas</h3>
          <ul className="portfolio-list">
            {DIFFICULTIES.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          <h3 className="portfolio-subheading">Aprendizajes del proceso</h3>
          <ul className="portfolio-list">
            {LEARNINGS.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </SectionBlock>

        <SectionBlock id="anexos" number="09" eyebrow="EDT" title="Anexos — Estructura de desglose de trabajo">
          <p>
            Estructura de Desglose de Trabajo del proyecto{" "}
            <strong>NORI — Aplicación Web con IA para Levantamiento de Requerimientos</strong>.
          </p>
          <EdtTree root={EDT_TREE} />
          <img
            src="/edt-wbs.png"
            alt="Diagrama EDT del proyecto Nori"
            className="portfolio-edt-img"
          />
        </SectionBlock>
      </main>

      <footer className="portfolio-footer">
        <div className="portfolio-footer__brand">
          <span className="portfolio-footer__logo">NortDev</span>
          <span>· {META.institution}</span>
        </div>
        <p className="portfolio-footer__meta">
          {META.course} · {META.date} · Nori v1.1 demo
        </p>
      </footer>
    </div>
  );
}
