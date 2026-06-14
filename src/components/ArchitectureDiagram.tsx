export default function ArchitectureDiagram() {
  return (
    <div className="portfolio-arch" aria-label="Arquitectura de alto nivel">
      <div className="portfolio-arch__layer portfolio-arch__layer--client">
        <span className="portfolio-arch__label">Cliente</span>
        <div className="portfolio-arch__box">SPA React · Vite · TypeScript</div>
      </div>
      <div className="portfolio-arch__arrow" aria-hidden>
        ↓ JWT / REST
      </div>
      <div className="portfolio-arch__layer portfolio-arch__layer--services">
        <span className="portfolio-arch__label">Microservicios Node.js</span>
        <div className="portfolio-arch__grid">
          <div className="portfolio-arch__box">auth :3003</div>
          <div className="portfolio-arch__box portfolio-arch__box--accent">chat :3001</div>
          <div className="portfolio-arch__box">document :3004</div>
          <div className="portfolio-arch__box">rag :3002</div>
        </div>
      </div>
      <div className="portfolio-arch__arrow" aria-hidden>
        ↓
      </div>
      <div className="portfolio-arch__layer portfolio-arch__layer--data">
        <span className="portfolio-arch__label">Persistencia e IA</span>
        <div className="portfolio-arch__grid portfolio-arch__grid--2">
          <div className="portfolio-arch__box">PostgreSQL 16 + pgvector</div>
          <div className="portfolio-arch__box">Google Gemini 2.5 Flash</div>
        </div>
      </div>
      <p className="portfolio-arch__note">
        Patrón dual en chat: respuesta conversacional + actualización JSON de sección del documento.
      </p>
    </div>
  );
}
