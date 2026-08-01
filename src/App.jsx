import "./App.css";

const PROGRAMS_URL =
  "https://wingsarenact.wixstudio.com/gscnewsite/programs";

const LOGIN_URL =
  "https://www.greenwichskatingclub.org/login";

/*
  Diagonal overlay proportions based on the reference design.

  The blue panel begins approximately 52% down the left side
  and reaches approximately 61% down the right side.

  Because the SVG uses preserveAspectRatio="none", those
  proportions remain consistent across mobile screen sizes.
*/
const PANEL_PATH = `
  M 0 520
  L 1000 610
  V 1000
  H 0
  Z
`;

const PANEL_EDGE_PATH = `
  M 0 520
  L 1000 610
`;

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

function DiagonalPanel() {
  return (
    <svg
      className="overlay-panel"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient
          id="panel-gradient"
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="1000"
          x2="1000"
          y2="250"
        >
          <stop
            offset="0%"
            stopColor="#0c2763"
          />

          <stop
            offset="48%"
            stopColor="#12357e"
          />

          <stop
            offset="100%"
            stopColor="#244b9d"
          />
        </linearGradient>

        <radialGradient
          id="panel-highlight"
          gradientUnits="userSpaceOnUse"
          cx="720"
          cy="560"
          r="720"
        >
          <stop
            offset="0%"
            stopColor="#4169b6"
            stopOpacity="0.22"
          />

          <stop
            offset="52%"
            stopColor="#2c54a0"
            stopOpacity="0.08"
          />

          <stop
            offset="100%"
            stopColor="#102e74"
            stopOpacity="0"
          />
        </radialGradient>

        <linearGradient
          id="panel-sheen"
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="300"
          x2="1000"
          y2="1000"
        >
          <stop
            offset="0%"
            stopColor="#ffffff"
            stopOpacity="0.035"
          />

          <stop
            offset="48%"
            stopColor="#ffffff"
            stopOpacity="0"
          />

          <stop
            offset="100%"
            stopColor="#ffffff"
            stopOpacity="0.025"
          />
        </linearGradient>

        <filter
          id="panel-shadow"
          x="-15%"
          y="-15%"
          width="130%"
          height="140%"
        >
          <feDropShadow
            dx="0"
            dy="8"
            stdDeviation="10"
            floodColor="#00132f"
            floodOpacity="0.24"
          />
        </filter>
      </defs>

      <g opacity="0.8">
        <path
          d={PANEL_PATH}
          fill="url(#panel-gradient)"
          filter="url(#panel-shadow)"
        />

        <path
          d={PANEL_PATH}
          fill="url(#panel-highlight)"
        />

        <path
          d={PANEL_PATH}
          fill="url(#panel-sheen)"
        />
      </g>

      <path
        className="panel-red-edge"
        d={PANEL_EDGE_PATH}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function App() {
  return (
    <main
      className="mobile-landing-overlay"
      aria-label="Greenwich Skating Club mobile landing links"
    >
      <style>{`
        @font-face {
          font-family: "Microgramma";
          src: url("${import.meta.env.BASE_URL}fonts/Microgramma Regular.ttf") format("truetype");
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }
      `}</style>

      <DiagonalPanel />

      <section className="overlay-content">
        <div className="overlay-logo-lockup">
          <img
            className="overlay-logo"
            src={`${import.meta.env.BASE_URL}gsc-logo.png`}
            alt=""
            aria-hidden="true"
          />

          <img
            className="overlay-logo-text"
            src={`${import.meta.env.BASE_URL}gsc-text-logo.png`}
            alt="Greenwich Skating Club, established 1954"
          />
        </div>

        <div
          className="heading-divider"
          aria-hidden="true"
        />

        <img
          className="overlay-est-logo"
          src={`${import.meta.env.BASE_URL}est-logo.png`}
          alt=""
          aria-hidden="true"
        />

        <div className="overlay-buttons">
          <a
            className="overlay-button overlay-button--primary"
            href={PROGRAMS_URL}
            target="_top"
          >
            <span className="button-label">
              View Programs
            </span>

            <span className="button-arrow-shell">
              <ArrowIcon />
            </span>
          </a>

          <a
            className="overlay-button overlay-button--secondary"
            href={LOGIN_URL}
            target="_top"
          >
            <span className="button-label">
              Crossbar Login
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