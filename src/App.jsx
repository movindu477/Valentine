import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeCard, setActiveCard] = useState(null)
  const [noButtonStyle, setNoButtonStyle] = useState({})
  const [isAccepted, setIsAccepted] = useState(false)
  const proposalRef = useRef(null)
  const valentineRef = useRef(null)
  const timelineRef = useRef(null)
  const galleryRef = useRef(null)
  const storyRef = useRef(null)

  const [showTopBtn, setShowTopBtn] = useState(false)
  const [expandedItem, setExpandedItem] = useState(null)

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedFood, setSelectedFood] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true)
      } else {
        setShowTopBtn(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const scrollToValentine = () => {
    valentineRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToTimeline = () => {
    timelineRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToGallery = () => {
    galleryRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToProposal = () => {
    proposalRef.current?.scrollIntoView({ behavior: 'smooth' })
  }



  const scrollToStory = () => {
    storyRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

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
          <span onClick={scrollToStory}>Story</span>
          <span onClick={scrollToGallery}>Gallery</span>
          <span onClick={scrollToProposal}>Proposal</span>
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
            <span onClick={() => { toggleMenu(); scrollToStory(); }}>Story</span>
            <span onClick={() => { scrollToGallery(); toggleMenu() }}>Gallery</span>
            <span onClick={() => { scrollToProposal(); toggleMenu() }}>Proposal</span>
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
          <button className="btn-explore" onClick={scrollToValentine}>
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
      <section className="valentine-section" ref={valentineRef}>
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

      {/* Modern Story Section */}
      <section className="story-section" ref={storyRef}>
        <div className="section-header">
          <h2 className="section-title">Our Love Story</h2>
          <p className="section-subtitle">Every love story is beautiful, but ours is my favorite</p>
        </div>
        <div className="story-timeline">
          <div className="story-card">
            <div className="story-icon">💫</div>
            <h3>The First Glance</h3>
            <p>The moment our eyes met, I knew something special was about to begin. Your smile lit up the entire room.</p>
          </div>
          <div className="story-card">
            <div className="story-icon">💬</div>
            <h3>First Conversation</h3>
            <p>Our first conversation felt like we'd known each other forever. Time flew by as we talked about everything and nothing.</p>
          </div>
          <div className="story-card">
            <div className="story-icon">❤️</div>
            <h3>Falling in Love</h3>
            <p>With every passing day, I fell deeper. Your kindness, humor, and the way you care about others made me realize you're the one.</p>
          </div>
          <div className="story-card">
            <div className="story-icon">🌟</div>
            <h3>Our Journey</h3>
            <p>Through ups and downs, laughter and tears, we've grown together. Every moment with you is a treasure I hold dear.</p>
          </div>
          <div className="story-card">
            <div className="story-icon">💝</div>
            <h3>Forever Together</h3>
            <p>You're not just my Valentine, you're my best friend, my partner, and my everything. I choose you today and always.</p>
          </div>
          <div className="story-card">
            <div className="story-icon">🌹</div>
            <h3>My Promise</h3>
            <p>I promise to love you more each day, to support your dreams, and to be by your side through every adventure life brings.</p>
          </div>
        </div>
      </section>

      {/* New Modern Section: Gallery */}
      <section className="gallery-section" ref={galleryRef}>
        <div className="section-header gallery-header">
          <img src="/images/home9.png" alt="Decorative Left" className="header-decor" />
          <div className="header-content">
            <h2 className="section-title">Our Sweet Memories</h2>
            <p className="section-subtitle">Captured moments of happiness and love.</p>
          </div>
          <img src="/images/home8.gif" alt="Decorative Right" className="header-decor" />
        </div>
        <div className="gallery-grid">
          {Array.from({ length: 30 }, (_, i) => i + 1).map((num) => (
            <div key={num} className="gallery-item">
              <img src={`/images/bathali${num}.jpeg`} alt={`Memory ${num}`} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* New Modern Section: Love Notes */}


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
                Yes, Absolutely!
              </button>
              <button
                className="btn-no"
                style={noButtonStyle}
                onMouseEnter={moveButton}
                onClick={moveButton}
              >
                No
              </button>
            </div>
          </div>
        ) : (
          <div className="accepted-message">
            <img src="/images/home7.gif" alt="Accepted" className="accepted-gif" />
            <h2>Yay! I'm the luckiest!</h2>
            <p>I can't wait to make this Valentine's Day unforgettable with you. I love you!</p>
          </div>
        )}
      </section >
      {
        showTopBtn && (
          <button className="scroll-top-btn" onClick={scrollToTop}>
            ↑
          </button>
        )
      }
    </div >
  )
}

export default App
