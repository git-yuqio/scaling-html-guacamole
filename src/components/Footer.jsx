import BorderGlow from './BorderGlow'

export default function Footer() {
  return (
    <section id="footer" className="footer-section">
      {/* Background */}
      <div className="footer__bg">
        <div className="footer__mesh footer__mesh--1" />
        <div className="footer__mesh footer__mesh--2" />
      </div>

      <div className="footer__content">
        <p className="footer__label">旅途回望</p>
        <blockquote className="footer__quote">
          <p className="footer__quote-text">
            "如今回望，那片碧海、那座奇峰、那道城墙、那条霓虹街，
            <br />都不再是远方的地名。"
          </p>
          <p className="footer__quote-text">
            "它们融进我的呼吸里，让我在面对陌生时不再慌张，
            <br />在遇见不同时学会微笑。"
          </p>
        </blockquote>
        <p className="footer__closing">
          世界这本书，我读得不多，但每一页都认真地折过角。
        </p>
        <p className="footer__closing footer__closing--highlight">
          而我知道，最好的章节，还在下一程。
        </p>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__credit">
            &copy; 2026 山河行记 · Made with wanderlust
          </p>
          <div className="footer__social">
            <BorderGlow borderRadius={10} glowRadius={8} glowIntensity={0.4} edgeSensitivity={35} colors={['#6d8cff', '#a78bfa', '#38bdf8']} noBorder>
            <a href="#" className="footer__social-link" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            </BorderGlow>
            <BorderGlow borderRadius={10} glowRadius={8} glowIntensity={0.4} edgeSensitivity={35} colors={['#6d8cff', '#a78bfa', '#38bdf8']} noBorder>
            <a href="#" className="footer__social-link" aria-label="微博">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M8 12c0-2.5 2-4 4-4s4 1.5 4 4"/>
              </svg>
            </a>
            </BorderGlow>
            <BorderGlow borderRadius={10} glowRadius={8} glowIntensity={0.4} edgeSensitivity={35} colors={['#6d8cff', '#a78bfa', '#38bdf8']} noBorder>
            <a href="#" className="footer__social-link" aria-label="小红书">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
              </svg>
            </a>
            </BorderGlow>
          </div>
        </div>
      </div>
    </section>
  )
}
