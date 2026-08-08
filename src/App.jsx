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

function LockIcon() {
  return (
    <svg
      className="button-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <rect
        x="5"
        y="10"
        width="14"
        height="10"
        rx="2"
      />

      <path d="M8 10V7.5C8 5.01 9.79 3 12 3C14.21 3 16 5.01 16 7.5V10" />

      <path d="M12 14V16" />
    </svg>
  );
}

function MembershipIcon() {
  return (
    <svg
      className="button-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        cx="9"
        cy="8"
        r="3"
      />

      <path d="M3.5 19V17.5C3.5 14.46 5.96 12 9 12C12.04 12 14.5 14.46 14.5 17.5V19" />

      <circle
        cx="16.5"
        cy="8.5"
        r="2.5"
      />

      <path d="M15 13.3C15.5 13.1 16 13 16.5 13C18.99 13 21 15.01 21 17.5V19" />
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
                Greenwich, CT
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
            <span className="button-icon-shell">
              <LockIcon />
            </span>

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
            <span className="button-icon-shell">
              <MembershipIcon />
            </span>

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