import "./App.css";

const PROGRAMS_URL =
  "https://wingsarenact.wixstudio.com/gscnewsite/programs";

const LOGIN_URL =
  "https://www.greenwichskatingclub.org/login";

function ArrowIcon() {
  return (
    <svg
      className="button-arrow"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m14 7 5 5-5 5" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      className="button-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <rect x="3.5" y="5.5" width="17" height="15" rx="2" />
      <path d="M7.5 3.5v4" />
      <path d="M16.5 3.5v4" />
      <path d="M3.5 9.5h17" />
      <path d="M8 13h2" />
      <path d="M14 13h2" />
      <path d="M8 17h2" />
      <path d="M14 17h2" />
    </svg>
  );
}

function MemberIcon() {
  return (
    <svg
      className="button-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4.5 21c.5-5 3.1-7.5 7.5-7.5s7 2.5 7.5 7.5" />
    </svg>
  );
}

function App() {
  return (
    <main
      className="mobile-landing-overlay"
      aria-label="Greenwich Skating Club mobile landing links"
    >
      <svg
        width="0"
        height="0"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <clipPath
            id="gsc-shape-clip"
            clipPathUnits="objectBoundingBox"
          >
            <path d="M0,0 C0.02,0.35 0.78,0.60 0.80,1 L0,1 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="shape-border" aria-hidden="true">
        <div className="shape-fill" />
      </div>

      <section className="overlay-content">
        <div className="overlay-logo-row">
          <img
            className="overlay-logo"
            src={`${import.meta.env.BASE_URL}gsc-logo.png`}
            alt="Greenwich Skating Club logo"
          />

          <img
            className="overlay-logo-text"
            src={`${import.meta.env.BASE_URL}gsc-text-logo.png`}
            alt="Greenwich Skating Club"
          />
        </div>

        <div className="heading-divider" />

        <div className="overlay-buttons">
          <a
            className="overlay-button overlay-button--primary"
            href={PROGRAMS_URL}
            target="_top"
          >
            <span className="button-content">
              <CalendarIcon />
              <span>View Programs</span>
            </span>

            <ArrowIcon />
          </a>

          <a
            className="overlay-button overlay-button--secondary"
            href={LOGIN_URL}
            target="_top"
          >
            <span className="button-content">
              <MemberIcon />
              <span>Crossbar Login</span>
            </span>

            <ArrowIcon />
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;