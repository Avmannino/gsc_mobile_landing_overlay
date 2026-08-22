import { useEffect } from "react";
import "./App.css";

const LOGIN_URL =
  "https://www.greenwichskatingclub.org/login";

const MEMBERSHIP_URL =
  "https://wingsarenact.wixstudio.com/gscnewsite/admissions";

const FACEBOOK_URL =
  "https://www.facebook.com/thegreenwichskatingclub/";

const INSTAGRAM_URL =
  "https://www.instagram.com/thegreenwichskatingclub/?hl=en";

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
              Greenwich, CT
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
              11 Cardinal Rd. Greenwich, CT 06830
            </span>
          </span>
          */}
        </div>

        <div className="overlay-social">
          <a
            className="overlay-social-icon"
            href={FACEBOOK_URL}
            target="_top"
            rel="noopener"
            aria-label="Follow Greenwich Skating Club on Facebook"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fill="currentColor"
                d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z"
              />
            </svg>
          </a>

          <a
            className="overlay-social-icon"
            href={INSTAGRAM_URL}
            target="_top"
            rel="noopener"
            aria-label="Follow Greenwich Skating Club on Instagram"
          >
            <svg
              viewBox="-2.4 -2.4 28.8 28.8"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fill="currentColor"
                d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07c-1.28.06-2.15.26-2.91.56a5.9 5.9 0 0 0-2.13 1.39A5.9 5.9 0 0 0 .62 4.14c-.3.76-.5 1.63-.56 2.91C0 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.26 2.15.56 2.91.31.79.72 1.47 1.39 2.13a5.9 5.9 0 0 0 2.13 1.39c.76.3 1.63.5 2.91.56C8.33 24 8.74 24 12 24s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.39 5.9 5.9 0 0 0 1.39-2.13c.3-.76.5-1.63.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.39-2.13A5.9 5.9 0 0 0 19.86.62c-.76-.3-1.63-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84Zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4Zm6.41-10.4a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44Z"
              />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;