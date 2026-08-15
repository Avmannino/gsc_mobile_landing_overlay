import { useEffect, useState } from "react";
import "./App.css";

const LOGIN_URL =
  "https://www.greenwichskatingclub.org/login";

const MEMBERSHIP_URL =
  "https://wingsarenact.wixstudio.com/gscnewsite/admissions";

/*
  Add your carousel images here.

  Put the actual files in:
  public/images/

  With the current list below, the files should be:
  public/images/carousel-1.jpg
  public/images/carousel-2.jpg
  public/images/carousel-3.jpg
  public/images/carousel-4.jpg
  public/images/carousel-5.jpg
  public/images/carousel-6.jpg
  public/images/carousel-7.jpg
  public/images/carousel-8.jpg
  public/images/carousel-9.jpg

  You can add or remove image entries from this array at any time.
*/
const CAROUSEL_IMAGES = [
  `${import.meta.env.BASE_URL}images/carousel-1.jpg`,
  `${import.meta.env.BASE_URL}images/carousel-2.jpg`,
  `${import.meta.env.BASE_URL}images/carousel-3.jpg`,
  `${import.meta.env.BASE_URL}images/carousel-4.jpg`,
  `${import.meta.env.BASE_URL}images/carousel-5.jpg`,
  `${import.meta.env.BASE_URL}images/carousel-6.jpg`,
  `${import.meta.env.BASE_URL}images/carousel-7.jpg`,
  `${import.meta.env.BASE_URL}images/carousel-8.jpg`,
  `${import.meta.env.BASE_URL}images/carousel-9.jpg`,
];

/*
  How long each image remains fully visible before the next slide begins.
*/
const CAROUSEL_HOLD_MS = 4800;

/*
  How long the right-to-left slide animation takes.
*/
const CAROUSEL_TRANSITION_MS = 900;

function BackgroundCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(
    CAROUSEL_IMAGES.length > 1 ? 1 : 0,
  );
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (
      CAROUSEL_IMAGES.length <= 1 ||
      isAnimating
    ) {
      return undefined;
    }

    const holdTimer = window.setTimeout(() => {
      setIsAnimating(true);
    }, CAROUSEL_HOLD_MS);

    return () => {
      window.clearTimeout(holdTimer);
    };
  }, [currentIndex, isAnimating]);

  const handleSlideAnimationEnd = () => {
    if (!isAnimating || CAROUSEL_IMAGES.length <= 1) {
      return;
    }

    setCurrentIndex(nextIndex);
    setNextIndex(
      (nextIndex + 1) % CAROUSEL_IMAGES.length,
    );
    setIsAnimating(false);
  };

  if (CAROUSEL_IMAGES.length === 0) {
    return null;
  }

  return (
    <div
      className={`background-carousel${
        isAnimating ? " is-animating" : ""
      }`}
      style={{
        "--carousel-transition-duration":
          `${CAROUSEL_TRANSITION_MS}ms`,
      }}
      aria-hidden="true"
    >
      <img
        className="carousel-slide carousel-slide--current"
        src={CAROUSEL_IMAGES[currentIndex]}
        alt=""
        draggable="false"
        decoding="async"
        fetchPriority="high"
      />

      {CAROUSEL_IMAGES.length > 1 && (
        <img
          className="carousel-slide carousel-slide--next"
          src={CAROUSEL_IMAGES[nextIndex]}
          alt=""
          draggable="false"
          decoding="async"
          onAnimationEnd={handleSlideAnimationEnd}
        />
      )}
    </div>
  );
}

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

      <BackgroundCarousel />

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
