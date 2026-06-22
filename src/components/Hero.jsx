import BorderGlow from './BorderGlow'

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      {/* Background atmosphere */}
      <div className="hero__bg">
        <div className="hero__mesh hero__mesh--1" />
        <div className="hero__mesh hero__mesh--2" />
        <div className="hero__mesh hero__mesh--3" />
        <div className="hero__mesh hero__mesh--4" />
        <div className="hero__overlay" />
        <div className="hero__vignette" />
      </div>

      {/* Left: Content */}
      <div className="hero__left">
        <div className="hero__label">视觉设计师 · 摄影爱好者</div>
        <h1 className="hero__title">
          我的<span className="hero__title-accent">山河</span>行记
        </h1>
        <p className="hero__description">
          用镜头丈量世界，以设计记录旅途。
          <br />
          走过的每一座城，都是内心版图的一部分。
        </p>
        <div className="hero__actions">
          <BorderGlow
            borderRadius={12}
            glowRadius={16}
            glowIntensity={0.8}
            edgeSensitivity={25}
            backgroundColor="var(--color-accent)"
            colors={['#6d8cff', '#a78bfa', '#38bdf8']}
            animated
            noBorder
          >
          <a href="#gallery" className="hero__btn hero__btn--primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
            浏览作品
          </a>
          </BorderGlow>
          <BorderGlow
            borderRadius={12}
            glowRadius={16}
            glowIntensity={0.6}
            edgeSensitivity={25}
            colors={['#6d8cff', '#a78bfa', '#38bdf8']}
            animated
            noBorder
          >
          <a href="#about" className="hero__btn hero__btn--secondary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            了解我
          </a>
          </BorderGlow>
        </div>
      </div>

      {/* Right: Atmospheric image */}
      <div className="hero__right">
        <div className="hero__image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85&auto=format&fit=crop"
            alt="山河景观"
            className="hero__image"
          />
          <div className="hero__image-overlay" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <div className="hero__scroll-line" />
        <span>向下滚动</span>
      </div>
    </section>
  )
}
