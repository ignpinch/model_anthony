import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 35)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)

    return () => {
      document.body.classList.remove('menu-open')
    }
  }, [menuOpen])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
          }
        })
      },
      {
        threshold: 0.12,
      }
    )

    const elements = document.querySelectorAll('.reveal')

    elements.forEach((element) => {
      observer.observe(element)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <a className="logo" href="#home" onClick={closeMenu}>
          Anthony Constantino
        </a>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#stats" onClick={closeMenu}>
              Stats
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={closeMenu}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#career" onClick={closeMenu}>
              Career
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>

        <button
          className="menu-button"
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Filipino-American Model · Actor</p>

            <h1>
              Anthony
              <span>Constantino.</span>
            </h1>

            <p className="hero-description">
              Anthony Constantino is a Filipino-American model and actor known
              for his strong editorial presence, commercial versatility, and
              work across fashion and entertainment in the Philippines and the
              United States.
            </p>

            <div className="hero-actions">
              <a className="btn" href="#portfolio">
                View Portfolio
                <span>↘</span>
              </a>

              <a className="text-link" href="#stats">
                Model Details
              </a>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="https://mediaslide-us.storage.googleapis.com/dtmodelmanagement/pictures/1224/6444/large-1733775698-e428e306960a6f1c124238425048d700.jpg"
              alt="Anthony Constantino portrait"
            />
            <div className="photo-label">Anthony Constantino</div>
          </div>
        </section>

        <div className="ticker">
          <div className="ticker-track">
            <span>Fashion</span>
            <span>Editorial</span>
            <span>Commercial</span>
            <span>Film</span>
            <span>Television</span>
            <span>Lifestyle</span>
            <span>Fashion</span>
            <span>Editorial</span>
            <span>Commercial</span>
            <span>Film</span>
            <span>Television</span>
            <span>Lifestyle</span>
          </div>
        </div>

        <section className="section about" id="about">
          <div>
            <p className="section-number">01</p>
            <p className="section-label">About</p>
          </div>

          <div className="reveal">
            <h2>
              Filipino roots.
              <br />
              <em>International presence.</em>
            </h2>

            <div className="about-copy">
              <p>
                Born and raised in California to Filipino parents, Anthony
                began modeling in Los Angeles and later expanded his career to
                the Philippines. His work spans fashion, editorial, commercial
                campaigns, television, film, and digital content.
              </p>

              <p>
                He modeled the Philippine delegation&apos;s Francis
                Libiran-designed barong for the Paris 2024 Olympics and later
                joined Sparkle GMA Artist Center, continuing his transition
                from international modeling into Philippine entertainment.
              </p>
            </div>
          </div>
        </section>

        <section className="stats" id="stats">
          <div className="stats-head reveal">
            <div>
              <p className="section-number">02</p>
              <h2>
                Model
                <br />
                Details.
              </h2>
            </div>

            <p className="stats-note">
              Current published model statistics from DT Model Management.
            </p>
          </div>

          <div className="stats-grid reveal">
            <div className="stat">
              <small>Height</small>
              <strong>6&apos;1&quot;</strong>
            </div>

            <div className="stat">
              <small>Suit</small>
              <strong>40R</strong>
            </div>

            <div className="stat">
              <small>Neck</small>
              <strong>16&quot;</strong>
            </div>

            <div className="stat">
              <small>Waist</small>
              <strong>32&quot;</strong>
            </div>

            <div className="stat">
              <small>Inseam</small>
              <strong>31&quot;</strong>
            </div>

            <div className="stat">
              <small>Shoes</small>
              <strong>10½</strong>
            </div>

            <div className="stat">
              <small>Eyes</small>
              <strong>Brown</strong>
            </div>

            <div className="stat">
              <small>Hair</small>
              <strong>Black</strong>
            </div>
          </div>
        </section>

        <section className="portfolio" id="portfolio">
          <div className="portfolio-head reveal">
            <div>
              <p className="section-number">03</p>
              <h2>
                Selected
                <br />
                Images.
              </h2>
            </div>

            <p className="portfolio-note">
              Editorial portraits, fashion imagery, and public appearances
              from Anthony&apos;s modeling and entertainment work.
            </p>
          </div>

          <div className="gallery">
            <article className="gallery-item g1 reveal">
              <img
                src="https://images.preview.ph/preview/dynsto/1753975922-SaveVid.Net_525520921_18523129003039245_8805461188817860374_n.jpg"
                alt="Anthony Constantino fashion editorial"
              />
              <span className="gallery-caption">Fashion</span>
            </article>

            <article className="gallery-item g2 reveal">
              <img
                src="https://thechronicle.com.ph/wp-content/uploads/2025/04/Anthony-Constantino.jpg"
                alt="Anthony Constantino portrait"
              />
              <span className="gallery-caption">Portrait</span>
            </article>

            <article className="gallery-item g3 reveal">
              <img
                src="https://aphrodite.gmanetwork.com/entertainment/photos/photo/anthony_constantino_signs_contract_with_sparkle_proud_1744110376.jpg"
                alt="Anthony Constantino at Sparkle"
              />
              <span className="gallery-caption">Sparkle</span>
            </article>

            <article className="gallery-item g4 reveal">
              <img
                src="https://mediaslide-us.storage.googleapis.com/dtmodelmanagement/pictures/1224/6444/large-1733775869-352e7bce2bcb8aef2a1b6894cd58631b.jpg"
                alt="Anthony Constantino studio model portrait"
              />
              <span className="gallery-caption">Studio</span>
            </article>

            <article className="gallery-item g5 reveal">
              <img
                src="https://images.preview.ph/preview/dynsto/1753975922-SaveVid.Net_525149912_18523129012039245_6407628699168998173_n.jpg"
                alt="Anthony Constantino fashion portrait"
              />
              <span className="gallery-caption">Editorial</span>
            </article>

            <article className="gallery-item g6 reveal">
              <img
                src="https://images.cosmo.ph/dynsto/1750059331-anthony.constantino_1722226018_3422602367483941003_1179815244.jpg"
                alt="Anthony Constantino Filipino fashion portrait"
              />
              <span className="gallery-caption">Heritage</span>
            </article>
          </div>
        </section>

        <section className="career" id="career">
          <div className="career-layout">
            <div className="career-title">
              <p className="section-number">04</p>
              <h2>
                Selected
                <br />
                Career.
              </h2>
            </div>

            <div className="reveal">
              <div className="career-item">
                <span className="career-year">2022</span>
                <span className="career-name">Los Angeles Modeling</span>
                <span className="career-type">Career Start</span>
              </div>

              <div className="career-item">
                <span className="career-year">2024</span>
                <span className="career-name">
                  Paris Olympics Philippine Uniform
                </span>
                <span className="career-type">Francis Libiran</span>
              </div>

              <div className="career-item">
                <span className="career-year">2024</span>
                <span className="career-name">
                  California Lutheran University
                </span>
                <span className="career-type">Graduated</span>
              </div>

              <div className="career-item">
                <span className="career-year">2025</span>
                <span className="career-name">Sparkle GMA Artist Center</span>
                <span className="career-type">Artist Signing</span>
              </div>

              <div className="career-item">
                <span className="career-year">2025</span>
                <span className="career-name">Fashion & Editorial Work</span>
                <span className="career-type">Modeling</span>
              </div>

              <div className="career-item">
                <span className="career-year">2026</span>
                <span className="career-name">Film & Television</span>
                <span className="career-type">Acting</span>
              </div>
            </div>
          </div>
        </section>

        <section className="quote">
          <p className="reveal">
            “Fashion, movement, character — every frame should feel alive.”
          </p>
        </section>

        <section className="contact" id="contact">
          <div className="contact-layout">
            <div>
              <p className="section-number">05</p>
              <h2>
                Anthony
                <br />
                <em>Constantino.</em>
              </h2>
            </div>

            <div className="contact-info">
              <p>
                Filipino-American model and actor available for fashion,
                commercial, editorial, entertainment, digital, and brand
                projects.
              </p>

              <div>
                <p>Representation</p>
                <div className="contact-link">
                  Main Models Philippines · Sparkle GMA
                </div>
              </div>

              <div className="socials">
                <a
                  href="https://www.instagram.com/anthony.constantino/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram ↗
                </a>

                <a
                  href="https://www.dtmodelmanagement.com/men/1224-anthony-constantino/"
                  target="_blank"
                  rel="noreferrer"
                >
                  DT Models ↗
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
