import { useEffect } from "react";
import "./App.css";

const LOGIN_URL =
  "https://www.greenwichskatingclub.org/login";

const MEMBERSHIP_URL =
  "https://wingsarenact.wixstudio.com/gscnewsite/admissions";

function App() {
  useEffect(() => {
    // Safari/iOS can restore this page from the back/forward cache after
    // the buttons navigate the top-level frame away and the user swipes
    // back. A bfcache-restored page can end up unresponsive to touch, so
    // force a fresh reload when that happens.
    const handlePageShow = (event) => {
      if (event.persisted) {
        window.location.reload();
      }
    };

    window.addEventListener("pageshow", handlePageShow);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);

  return (
    <main className="mobile-landing-overlay">
      <style>
        {`
          @font-face {
            font-family: "Microgramma Extend Medium";
            src: url("${import.meta.env.BASE_URL}fonts/Microgramma Extend Medium.otf")
              format("opentype");
            font-weight: 200;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: "Microgramma Regular";
            src: url("${import.meta.env.BASE_URL}fonts/Microgramma Regular.ttf")
              format("truetype");
            font-weight: 200;
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
          <img
            className="identity-circle-logo"
            src={`${import.meta.env.BASE_URL}gsc-circle-logo.png`}
            alt="Greenwich Skating Club"
          />

          <div className="identity-details">
            <div
              className="identity-founded-row"
              aria-label="Established 1954"
            >
              <div className="identity-founded-side">
                <img
                  className="identity-founded-art identity-founded-art--est"
                  src={`${import.meta.env.BASE_URL}est-logo.png`}
                  alt="Established"
                />

                <span
                  className="identity-founded-line"
                  aria-hidden="true"
                />
              </div>

              <img
                className="identity-founded-star"
                src={`${import.meta.env.BASE_URL}star.png`}
                alt=""
                aria-hidden="true"
              />

              <div className="identity-founded-side">
                <img
                  className="identity-founded-art identity-founded-art--year"
                  src={`${import.meta.env.BASE_URL}1954.png`}
                  alt="1954"
                />

                <span
                  className="identity-founded-line"
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className="identity-city">
              Greenwich, CT
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

          {/* OLD DESIGN — address. Uncomment to restore.
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
          */}
        </div>
      </section>
    </main>
  );
}

export default App;