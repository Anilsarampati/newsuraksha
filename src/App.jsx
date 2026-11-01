import { useEffect, useState } from 'react'
import './App.css'

const products = [
  { name: 'Svara Baffle', type: 'Suspended acoustic', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85', detail: 'Soft, sculptural baffles that bring clarity to open ceilings without interrupting the architecture.' },
  { name: 'Avara Cloud', type: 'Ceiling cloud', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=85', detail: 'Lightweight ceiling forms that absorb reverberation and make shared spaces feel considered.' },
  { name: 'Reva Panel', type: 'Wall acoustic', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85', detail: 'Textured wall panels designed to turn acoustic performance into a quiet material language.' },
]

const heroProducts = [
  { name: 'Svara', label: 'Baffle', color: '#f8c958', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=700&q=85' },
  { name: 'Avara', label: 'Cloud', color: '#c9c4ff', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=700&q=85' },
  { name: 'Reva', label: 'Panel', color: '#ff765e', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=700&q=85' },
  { name: 'Mora', label: 'Raft', color: '#7ed3c7', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=700&q=85' },
  { name: 'Tara', label: 'Screen', color: '#8fa7ff', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=85' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProduct, setActiveProduct] = useState('All')
  const [heroProduct, setHeroProduct] = useState(0)

  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.target.classList.toggle('is-visible', entry.isIntersecting)), { threshold: 0.12 })
    revealItems.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  const visibleProducts = activeProduct === 'All' ? products : products.filter((product) => product.type.toLowerCase().includes(activeProduct.toLowerCase()))

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Suraksha Acoustics home"><span className="brand-orbit">◌</span>suraksha<span>®</span></a>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          <a href="#collections" onClick={() => setMenuOpen(false)}>Collections</a><a href="#approach" onClick={() => setMenuOpen(false)}>Our approach</a><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <a className="header-cta" href="#contact"><span className="header-dot"></span>Talk to us <span>↗</span></a>
        <button className="menu-toggle" type="button" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '×' : '☰'}</button>
      </header>
      <main id="top">
        <section className="hero"><div className="hero-geometry" aria-hidden="true"><span className="geometry-wave geometry-wave-one"></span><span className="geometry-wave geometry-wave-two"></span><span className="geometry-tile geometry-tile-one"></span><span className="geometry-tile geometry-tile-two"></span><span className="geometry-capsule"></span></div><div className="hero-copy reveal is-visible"><p className="eyebrow">Acoustic architecture / 01</p><h1>Quiet spaces.<br /><em>Clear thinking.</em></h1><p className="hero-intro">We create high-performance acoustic surfaces for places where people gather, focus and feel at home.</p><a className="text-link" href="#collections">Explore collections <span>↘</span></a></div><div className="hero-stage"><div className="hero-stage-backdrop"></div><div className="hero-stage-shadow"></div><div className="hero-product" key={heroProducts[heroProduct].name}><div className="hero-product-image" style={{ '--product-image': `url(${heroProducts[heroProduct].image})` }}><img src={heroProducts[heroProduct].image} alt={`${heroProducts[heroProduct].name} ${heroProducts[heroProduct].label} acoustic product`} /></div><div className="hero-product-label"><span>0{heroProduct + 1} / 05</span><strong>{heroProducts[heroProduct].name}</strong><em>{heroProducts[heroProduct].label}</em></div></div><div className="hero-caption"><span>Hover a system to explore</span><span>Suraksha / Bengaluru</span></div></div><div className="hero-product-rail" aria-label="Featured acoustic products">{heroProducts.map((product, index) => <button key={product.name} className={heroProduct === index ? 'hero-product-tab active' : 'hero-product-tab'} style={{ '--product-color': product.color }} onMouseEnter={() => setHeroProduct(index)} onFocus={() => setHeroProduct(index)} onClick={() => setHeroProduct(index)}><span className="product-tab-number">0{index + 1}</span><span className="product-tab-name">{product.name}</span><span className="product-tab-label">{product.label}</span></button>)}</div><div className="hero-note">Designed for the<br />way sound moves.</div></section>
        <section className="statement reveal" id="approach"><p className="eyebrow">Our approach</p><h2>Acoustics should be felt,<br /><span>not noticed.</span></h2><p className="statement-copy">Suraksha Acoustics brings together spatial thinking, honest materials and technical precision to make interiors more comfortable, more productive and more human.</p></section>
        <section className="collection-section" id="collections"><div className="section-heading reveal"><div><p className="eyebrow">Selected systems / 02</p><h2>Made to meet the room.</h2></div><p>Products that perform quietly<br />and belong beautifully.</p></div><div className="filter-row" role="tablist" aria-label="Filter products">{['All', 'Suspended', 'Ceiling', 'Wall'].map((filter) => <button key={filter} className={activeProduct === filter ? 'active' : ''} onClick={() => setActiveProduct(filter)} role="tab" aria-selected={activeProduct === filter}>{filter}</button>)}</div><div className="product-grid">{visibleProducts.map((product, index) => <article className="product-card reveal is-visible" key={product.name} style={{ '--delay': `${index * 100}ms` }}><div className="product-image"><img src={product.image} alt={`${product.name} acoustic installation`} /><span className="product-number">0{index + 1}</span></div><p className="product-type">{product.type}</p><h3>{product.name}</h3><p>{product.detail}</p><a href="#contact" className="arrow-link" aria-label={`Learn more about ${product.name}`}><span>View details</span><strong>↗</strong></a></article>)}</div><a className="outline-link" href="#contact">View all systems <span>↗</span></a></section>
        <section className="project-feature reveal" id="projects"><div className="project-image"><img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1500&q=85" alt="Acoustic ceiling installation in a contemporary office" /></div><div className="project-copy"><p className="eyebrow">A closer look / 03</p><h2>The ceiling is a<br /><em>fifth wall.</em></h2><p>From first sketch to final install, we help architects turn overhead space into an active part of the room. Absorption, rhythm and light, resolved as one.</p><a className="text-link" href="#contact">See our process <span>↘</span></a></div></section>
        <section className="contact-section" id="contact"><div><p className="eyebrow">Start a conversation / 04</p><h2>Let’s make room<br /><em>for better sound.</em></h2></div><div className="contact-detail"><p>Tell us what you’re imagining. We’ll bring the right questions.</p><a className="contact-email" href="mailto:hello@surakshaacoustics.com">hello@surakshaacoustics.com <span>↗</span></a><p className="small-detail">Bengaluru · Mumbai · Working across India</p></div></section>
      </main>
      <footer className="site-footer"><a className="brand" href="#top">suraksha<span>®</span></a><p>Acoustic surfaces for considered spaces.</p><div className="footer-links"><a href="#collections">Instagram</a><a href="#contact">LinkedIn</a><a href="#contact">Contact</a></div><p className="copyright">© 2026 Suraksha Acoustics</p></footer>
    </div>
  )
}

export default App
