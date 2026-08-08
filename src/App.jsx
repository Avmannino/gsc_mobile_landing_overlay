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
      <style>
        {`
          @font-face {
            font-family: "Microgramma";
            src: url("${import.meta.env.BASE_URL}fonts/Microgramma Regular.ttf")
              format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: "Microgramma Extend Medium";
            src: url("${import.meta.env.BASE_URL}fonts/Microgramma Extend Medium.otf")
              format("opentype");
            font-weight: 500;
            font-style: normal;
            font-display: swap;
          }
        `}
      </style>

      <div
        className="bottom-atmosphere"
        aria-hidden="true"
      />

      <section
        className="overlay-content"
        aria-label="Greenwich Skating Club"
      >
        <div className="identity-card">
          <div className="identity-logo-column">
            <img
              className="identity-logo"
              src={`${import.meta.env.BASE_URL}gsc-logo.png`}
              alt=""
              aria-hidden="true"
            />
          </div>

          <div
            className="identity-divider"
            aria-hidden="true"
          />

          <div className="identity-brand">
            <img
              className="identity-wordmark"
              src={`${import.meta.env.BASE_URL}gsc-text-logo.png`}
              alt="Greenwich Skating Club"
            />

            <div className="identity-location">
              <span
                className="location-red-line"
                aria-hidden="true"
              />

              <span className="location-text">
                11 Cardinal Rd. Greenwich, CT
              </span>
            </div>
          </div>
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
      </section>
    </main>
  );
}

export default App;