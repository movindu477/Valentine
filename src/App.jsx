import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeCard, setActiveCard] = useState(null)
  const [noButtonStyle, setNoButtonStyle] = useState({})
  const [isAccepted, setIsAccepted] = useState(false)
  const proposalRef = useRef(null)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleCard = (id) => setActiveCard(activeCard === id ? null : id)

  const moveButton = () => {
    if (proposalRef.current) {
      const container = proposalRef.current
      const rect = container.getBoundingClientRect()

      // Calculate random position within container bounds
      // Subtracting button size approx (100x50) to keep it inside
      const maxX = rect.width - 150
      const maxY = rect.height - 80

      const x = Math.max(0, Math.random() * maxX)
      const y = Math.max(0, Math.random() * maxY)

      setNoButtonStyle({
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        zIndex: 100
      })
    }
  }
  return (
    <div className="app">
      <nav className="navbar">
        <div className="navbar-logo">
          princess.
        </div>

        {/* Desktop Links */}
        <div className="navbar-links desktop-only">
          <span>Story</span>
          <span>Gallery</span>
          <span>Letters</span>
        </div>

        {/* Hamburger Icon */}
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Mobile Slide Panel */}
        <div className={`mobile-panel ${isMenuOpen ? 'open' : ''}`}>
          <div className="panel-links">
            <span onClick={toggleMenu}>Story</span>
            <span onClick={toggleMenu}>Gallery</span>
            <span onClick={toggleMenu}>Letters</span>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>

        <div className="hero-content">
          <h1 className="hero-title">
            Happy Valentines Day <br /> My Princess
          </h1>
          <p className="hero-description">
            To the most beautiful girl in the world, may your day be as sweet
            and amazing as you are. Each moment with you is a gift I treasure
            forever. I love you more with every passing heartbeat.
          </p>
          <button className="btn-explore">
            Explore My Love
          </button>
        </div>

        <div className="hero-image-container">
          <img
            src="/images/love.png"
            alt="Princess of my life"
            className="hero-image"
          />
        </div>
      </section>

      {/* New Modern Section: Why I Love You */}
      <section className="valentine-section">
        <div className="section-header">
          <h2 className="section-title">Reasons Why I Love You</h2>
          <p className="section-subtitle">Since the moment we met, you've changed my world in so many ways.</p>
        </div>

        <div className="cards-grid">
          <div
            className={`val-card image-card ${activeCard === 1 ? 'revealed' : ''}`}
            onClick={() => toggleCard(1)}
          >
            <img src="/images/home1.jpg" alt="Love moment 1" className="card-bg" />
            <div className="card-overlay">
              <h3>Your Kindness</h3>
              <p>The way you treat everyone with such love and genuine care is simply beautiful.</p>
            </div>
          </div>
          <div
            className={`val-card image-card ${activeCard === 2 ? 'revealed' : ''}`}
            onClick={() => toggleCard(2)}
          >
            <img src="/images/home2.jpg" alt="Love moment 2" className="card-bg" />
            <div className="card-overlay">
              <h3>Your Smile</h3>
              <p>Your smile is like sunshine on a rainy day, instantly making everything better.</p>
            </div>
          </div>
          <div
            className={`val-card image-card ${activeCard === 3 ? 'revealed' : ''}`}
            onClick={() => toggleCard(3)}
          >
            <img src="/images/home3.jpg" alt="Love moment 3" className="card-bg" />
            <div className="card-overlay">
              <h3>Your Strength</h3>
              <p>I admire your resilience and the way you handle every challenge with grace.</p>
            </div>
          </div>
          <div
            className={`val-card image-card ${activeCard === 4 ? 'revealed' : ''}`}
            onClick={() => toggleCard(4)}
          >
            <img src="/images/home4.jpg" alt="Love moment 4" className="card-bg" />
            <div className="card-overlay">
              <h3>And Your...</h3>
              <p>Never Mind</p>
            </div>
          </div>
          <div
            className={`val-card image-card ${activeCard === 5 ? 'revealed' : ''}`}
            onClick={() => toggleCard(5)}
          >
            <img src="/images/home5.jpg" alt="Love moment 5" className="card-bg" />
            <div className="card-overlay">
              <h3>Your Passion</h3>
              <p>The fire in your soul when you talk about things you love is truly inspiring.</p>
            </div>
          </div>
          <div
            className={`val-card image-card ${activeCard === 6 ? 'revealed' : ''}`}
            onClick={() => toggleCard(6)}
          >
            <img src="/images/home6.jpg" alt="Love moment 6" className="card-bg" />
            <div className="card-overlay">
              <h3>Your Presence</h3>
              <p>Just being near you makes my world feel complete and at peace.</p>
            </div>
          </div>
        </div>
      </section>

      {/* New Modern Section: Love Timeline */}
      <section className="timeline-section">
        <div className="section-header">
          <h2 className="section-title">Our Beautiful Journey</h2>
          <p className="section-subtitle">Every moment spent with you is a memory I'll cherish forever.</p>
        </div>

        <div className="timeline-container">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-date">The Beginning</span>
              <h3>The Day We Met</h3>
              <p>Everything changed for the better when you walked into my life. That spark was real.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-date">Growing Together</span>
              <h3>Endless Late Night Talks</h3>
              <p>Countless hours spent discovering everything about each other. Those are my favorite nights.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-date">Our Bond</span>
              <h3>Creating Memories</h3>
              <p>From simple walks to biggest laughs, every second with you feels like a dream come true.</p>
            </div>
          </div>
        </div>
      </section>

      {/* New Modern Section: Love Notes */}
      <section className="notes-section">
        <div className="section-header">
          <h2 className="section-title">Little Love Notes</h2>
          <p className="section-subtitle">Bits and pieces of my heart, just for you.</p>
        </div>

        <div className="notes-grid">
          <div className="love-note">
            <div className="note-pin"></div>
            <p>"I promise to always be your biggest supporter and your safest place to land."</p>
            <span className="note-footer">— Always Yours</span>
          </div>
          <div className="love-note">
            <div className="note-pin"></div>
            <p>"Thank you for being the person who makes my world feel complete."</p>
            <span className="note-footer">— Forever & Ever</span>
          </div>
          <div className="love-note">
            <div className="note-pin"></div>
            <p>"The best parts of my day are always the ones I spend with you."</p>
            <span className="note-footer">— My Heart</span>
          </div>
        </div>
      </section>

      {/* New Interactive Proposal Section */}
      <section className="proposal-section" ref={proposalRef}>
        {!isAccepted ? (
          <div className="proposal-container">
            <h2 className="proposal-title">Will You Be My Valentine?</h2>
            <p className="proposal-text">There's no one else I'd rather share this day (and every day) with.</p>
            <div className="proposal-buttons">
              <button
                className="btn-yes"
                onClick={() => setIsAccepted(true)}
              >
                Yes, Absolutely! 💖
              </button>
              <button
                className="btn-no"
                style={noButtonStyle}
                onMouseEnter={moveButton}
                onClick={moveButton}
              >
                No 😢
              </button>
            </div>
          </div>
        ) : (
          <div className="accepted-message">
            <div className="confetti-icon">🎉</div>
            <h2>Yay! I'm the luckiest!</h2>
            <p>I can't wait to make this Valentine's Day unforgettable with you. I love you! ❤️</p>
          </div>
        )}
      </section>
    </div>
  )
}

export default App
