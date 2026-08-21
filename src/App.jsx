import "./App.css";

const LOGIN_URL =
  "https://www.greenwichskatingclub.org/login";

const MEMBERSHIP_URL =
  "https://wingsarenact.wixstudio.com/gscnewsite/admissions";

function App() {
  return (
    <main className="mobile-landing-overlay">
      <style>
        {`
          @font-face {
            font-family: "Microgramma Extend Medium";
            src: url("${import.meta.env.BASE_URL}fonts/Microgramma Extend Medium.otf")
              format("opentype");
            font-weight: 500;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: "Oswald Medium";
            src: url("${import.meta.env.BASE_URL}fonts/Oswald-Medium.ttf")
              format("truetype");
            font-weight: 500;
            font-style: normal;
            font-display: swap;
          }
        `}
      </style>

      <div
        className="bottom-gradient"
        aria-hidden="true"
      />

      <section
        className="overlay-content"
        aria-label="Greenwich Skating Club"
      >
        <div className="identity-card">
          {/* OLD DESIGN — circle badge + G logo. Uncomment to restore.
          <div
            className="identity-badge"
            aria-hidden="true"
          >
            <img
              className="identity-logo"
              src={`${import.meta.env.BASE_URL}gsc-logo.png`}
              alt=""
            />
          </div>
          */}

          <div className="identity-content">
            <div className="identity-text-block">
              {/* OLD DESIGN — text wordmark. Uncomment to restore.
              <img
                className="identity-wordmark"
                src={`${import.meta.env.BASE_URL}gsc-text.png`}
                alt="Greenwich Skating Club"
              />
              */}

              <img
                className="identity-circle-logo"
                src={`${import.meta.env.BASE_URL}gsc-circle-logo.png`}
                alt="Greenwich Skating Club"
              />
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
          </a>

          <span className="location-text overlay-address">
            <svg
              className="location-pin-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fill="currentColor"
                d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"
              />
            </svg>

            <span>
              11 Cardinal Rd. Greenwich, CT 06830
            </span>
          </span>
        </div>
      </section>
    </main>
  );
}

export default App;