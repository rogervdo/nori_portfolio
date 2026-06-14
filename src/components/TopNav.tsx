import { useScrollSpy } from "../hooks/useScrollSpy";
import type { NavItem } from "../data/portfolioContent";

interface TopNavProps {
  items: NavItem[];
}

export default function TopNav({ items }: TopNavProps) {
  const ids = items.map((i) => i.id);
  const active = useScrollSpy(ids, 200);

  function go(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <nav className="portfolio-topnav" aria-label="Contenido del portafolio">
      <div className="portfolio-topnav__inner">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`portfolio-topnav__link${active === item.id ? " is-active" : ""}`}
            onClick={() => go(item.id)}
          >
            <span className="portfolio-topnav__num">{item.number}</span>
            <span className="portfolio-topnav__label">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
