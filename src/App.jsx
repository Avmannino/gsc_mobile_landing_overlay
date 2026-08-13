import "./App.css";

const LOGIN_URL =
  "https://www.greenwichskatingclub.org/login";

const MEMBERSHIP_URL =
  "https://wingsarenact.wixstudio.com/gscnewsite/membership";

function ArrowIcon() {
  return (
    <svg
      className="button-arrow"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M5 12H19" />
      <path d="M14 7L19 12L14 17" />
    </svg>
  );
}

function App() {
  return (
    <main className="mobile-landing-overlay">
      <div
        className="bottom-gradient"
        aria-hidden="true"
      />

      <section
        className="overlay-content"
        aria-label="Greenwich Skating Club"
      >
        <div className="brand-lockup">
          <img
            className="brand-logo"
            src={`${import.meta.env.BASE_URL}gsc-logo.png`}
            alt="Greenwich Skating Club"
          />

          <div
            className="brand-divider"
            aria-hidden="true"
          />
        </div>

        <div className="overlay-buttons">
          <a
            className="overlay-button overlay-button--primary"
            href={LOGIN_URL}
            target="_top"
            rel="noopener"
          >
            <span className="button-label">
              Crossbar Login
            </span>

            <span className="button-arrow-shell">
              <ArrowIcon />
            </span>
          </a>

          <a
            className="overlay-button overlay-button--secondary"
            href={MEMBERSHIP_URL}
            target="_top"
            rel="noopener"
          >
            <span className="button-label">
              Memberships
            </span>

            <span className="button-arrow-shell">
              <ArrowIcon />
            </span>
          </a>
        </div>

        <p className="brand-address">
          11 Cardinal Rd. Greenwich, CT
        </p>
      </section>
    </main>
  );
}

export default App;