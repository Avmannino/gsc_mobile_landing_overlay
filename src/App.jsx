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

          <div className="identity-content">
            <div className="identity-text-block">
              <img
                className="identity-wordmark"
                src={`${import.meta.env.BASE_URL}gsc-text.png`}
                alt="Greenwich Skating Club"
              />

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
        </div>
      </section>
    </main>
  );
}

export default App;
