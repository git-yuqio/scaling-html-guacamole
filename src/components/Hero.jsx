import { useState } from 'react'

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false)

  return (
    <section id="hero" className="hero-section">
      {/* Full-screen background video */}
      <div className="hero__bg">
        {!videoLoaded && (
          <div className="hero__video-placeholder" />
        )}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className={`hero__bg-video ${videoLoaded ? 'hero__video--loaded' : ''}`}
          onLoadedData={() => setVideoLoaded(true)}
        >
          <source src="./hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="hero__overlay" />
        <div className="hero__vignette" />
      </div>

      {/* Content */}
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
          <a href="#gallery" className="hero__btn hero__btn--primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
            浏览作品
          </a>
          <a href="#about" className="hero__btn hero__btn--secondary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            了解我
          </a>
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
