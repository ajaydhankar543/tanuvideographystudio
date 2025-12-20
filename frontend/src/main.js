import './style.css'

// ============================================
// STATE MANAGEMENT
// ============================================
let currentPage = 'home'

// ============================================
// HELPER FUNCTIONS
// ============================================

function createNavButton(id, emoji, label, page) {
  const isActive = currentPage === page
  const activeClass = isActive ? getButtonActiveClass(page) : 'hover:bg-white/5'
  const glowHTML = isActive ? `<div class="nav-button-glow ${page}"></div>` : ''
  
  return `
    <button id="${id}" class="nav-button ${activeClass}">
      <span class="nav-button-content">
        <span class="nav-button-emoji">${emoji}</span>
        <span>${label}</span>
      </span>
      ${glowHTML}
    </button>
  `
}

function getButtonActiveClass(page) {
  const classes = {
    'home': 'bg-gradient-to-r from-rose-600 to-amber-600',
    'frontend': 'bg-gradient-to-r from-purple-600 to-pink-600',
    'backend': 'bg-gradient-to-r from-blue-600 to-cyan-600'
  }
  return classes[page] || ''
}

function createFeatureCard(icon, title, description, tags, gradientFrom, gradientTo, delay) {
  return `
    <div class="feature-card" data-delay="${delay}">
      <div class="feature-card-content">
        <div class="feature-card-gradient ${gradientFrom} ${gradientTo}"></div>
        <div class="feature-card-blob ${gradientFrom}"></div>
        
        <div class="feature-card-inner">
          <div class="feature-icon ${gradientFrom} ${gradientTo}">${icon}</div>
          <h3 class="feature-title">${title}</h3>
          <p class="feature-description">${description}</p>
          <div class="feature-tags">
            ${tags.map(tag => `<span class="feature-tag ${tag.color}">${tag.text}</span>`).join('')}
          </div>
        </div>
      </div>
    </div>
  `
}

function createStatCard(value, label, gradient) {
  return `
    <div class="stat-card">
      <div class="stat-value ${gradient}">${value}</div>
      <div class="stat-label">${label}</div>
    </div>
  `
}

function createQuickContactCard(icon, label, value, href, gradient) {
  return `
    <a href="${href}" class="quick-contact-card ${gradient}">
      <div class="quick-contact-icon">${icon}</div>
      <div class="quick-contact-info">
        <p class="quick-contact-label">${label}</p>
        <p class="quick-contact-value">${value}</p>
      </div>
    </a>
  `
}

// ============================================
// PAGE TEMPLATES
// ============================================

function getHomePageHTML() {
  return `
    <div id="home-section">
      <div class="page-header">
        <div class="availability-badge">
          <span class="availability-pulse"></span>
          <span class="availability-text">Available for Bookings</span>
        </div>
        

        
        
        <h1 class="main-title">
          <span class="title-gradient">Capturing Forever</span>
        </h1>
        
        <p class="main-description">
          Professional cinematic videography for your 
          <span class="highlight-rose">dream weddings</span>, 
          and <span class="highlight-amber">unforgettable events</span>
        </p>

        <div class="cta-buttons">
          <button onclick="switchPage('frontend')" class="btn-primary">
            <span class="btn-content">
              View Portfolio
              <span class="btn-arrow">→</span>
            </span>
            <div class="btn-glow"></div>
          </button>
          <button onclick="switchPage('backend')" class="btn-secondary">
            <span class="btn-content-simple">
              Contact Me
              <span>📞</span>
            </span>
          </button>
        </div>
      </div>

      <!-- About Me Profile Card -->
      <div class="profile-section">
        <div class="profile-card">
          <div class="profile-card-bg"></div>
          <div class="profile-card-glow"></div>
          
          <div class="profile-content">
            <!-- Profile Image -->
            <div class="profile-image-wrapper">
              <div class="profile-image-ring"></div>
              <div class="profile-image-ring ring-2"></div>
              <div class="profile-image-container">
                <img src="/Profile.JPG" alt="Abhay - Cinematographer" class="profile-image" />
                <div class="profile-image-overlay"></div>
              </div>
              <div class="profile-verified">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
            </div>
            
            <!-- Profile Info -->
            <div class="profile-info">
              <div class="profile-badge-row">
                <span class="profile-role-badge">Founder & Cinematographer</span>
              </div>
              
              <h2 class="profile-name">Abhay Pratap Singh</h2>
              
              <p class="profile-tagline">
                Crafting cinematic stories that capture the <span class="text-rose-400">magic</span> of your special moments
              </p>
              
              <div class="profile-details">
                <div class="profile-detail-item">
                  <span class="profile-detail-icon">🎬</span>
                  <span>5+ Years Experience</span>
                </div>
                <div class="profile-detail-item">
                  <span class="profile-detail-icon">📍</span>
                  <span>Based in India</span>
                </div>
                <div class="profile-detail-item">
                  <span class="profile-detail-icon">✈️</span>
                  <span>Available Worldwide</span>
                </div>
              </div>
              
              <div class="profile-equipment">
                <span class="equipment-tag">Sony FX3</span>
                <span class="equipment-tag">DJI Ronin</span>
                <span class="equipment-tag">4K Cinema</span>
                <span class="equipment-tag">Drone</span>
              </div>
              
              <div class="profile-actions">
                <a href="https://www.instagram.com/TANU_VIDEOGRAPHY_STUDIO" target="_blank" class="profile-social-btn instagram">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://wa.me/917704866570" target="_blank" class="profile-social-btn whatsapp">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </a>
                <button onclick="switchPage('backend')" class="profile-hire-btn">
                  <span>Let's Work Together</span>
                  <span class="hire-arrow">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="quick-contact-section">
        <h2 class="quick-contact-title">📞 Get In Touch</h2>
        <div class="quick-contact-grid">
          ${createQuickContactCard(
            '📱',
            'Call / WhatsApp',
            '+91 7704866570',
            'tel:+917704866570',
            'gradient-green'
          )}
          ${createQuickContactCard(
            '📧',
            'Email Us',
            'Contact@tanuvideography.studio',
            'mailto:contact@tanuvideography.studio',
            'gradient-blue'
          )}
          ${createQuickContactCard(
            '💬',
            'WhatsApp Chat',
            'Chat Now',
            'https://wa.me/917704866570',
            'gradient-emerald'
          )}
        </div>
      </div>

      <div class="features-grid">
        ${createFeatureCard(
          '💍',
          'Wedding Cinematography',
          'Your love story deserves to be told beautifully. Cinematic wedding films that capture every precious moment and emotion.',
          [
            { text: 'Cinematic', color: 'tag-rose' },
            { text: '4K Quality', color: 'tag-pink' },
            { text: 'Romantic', color: 'tag-purple' }
          ],
          'from-rose-600',
          'to-pink-600',
          '0.4s'
        )}
        ${createFeatureCard(
          '🎉',
          'Event Coverage',
          'From corporate events to celebrations, we capture every important moment with professional expertise and creativity.',
          [
            { text: 'Professional', color: 'tag-amber' },
            { text: 'Multi-Cam', color: 'tag-yellow' },
            { text: 'Live Edit', color: 'tag-orange' }
          ],
          'from-amber-600',
          'to-yellow-600',
          '0.5s'
        )}
        ${createFeatureCard(
          '🎬',
          'Post-Production Magic',
          'Professional color grading, sound design, and editing to create stunning films that you\'ll treasure forever.',
          [
            { text: 'Color Grade', color: 'tag-purple' },
            { text: 'Audio Mix', color: 'tag-blue' },
            { text: 'Fast Delivery', color: 'tag-indigo' }
          ],
          'from-purple-600',
          'to-blue-600',
          '0.6s'
        )}
      </div>

      <div class="stats-grid">
        ${createStatCard('100+', 'Weddings Shot', 'stat-gradient-rose')}
        ${createStatCard('300+', 'Happy Clients', 'stat-gradient-amber')}
        ${createStatCard('5 Years', 'Experience', 'stat-gradient-purple')}
        ${createStatCard('4K , Log', 'Cinema Quality', 'stat-gradient-green')}
      </div>
    </div>
  `
}

// Portfolio video data - Add your YouTube/Vimeo video IDs here
const portfolioVideos = [
  {
    id: 1,
    title: 'Romantic Wedding Film',
    subtitle: 'Rahul & Priya',
    thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    videoUrl: 'https://youtu.be/J-JcxmSP3fM', // Replace with your video
    category: 'Wedding',
    duration: '4:32',
    tags: ['4K', 'Cinematic', 'Drone'],
    gradient: 'from-rose-500 to-pink-600'
  },
  {
    id: 2,
    title: 'Grand Celebration',
    subtitle: 'Amit & Neha',
    thumbnail: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80',
    videoUrl: 'https://youtu.be/3I-PINTueA0', // Replace with your video
    category: 'Wedding',
    duration: '5:18',
    tags: ['4K', 'Traditional', 'Multi-Cam'],
    gradient: 'from-amber-500 to-orange-600'
  },
  {
    id: 3,
    title: 'Dreamy Pre-Wedding',
    subtitle: 'Vikram & Ananya',
    thumbnail: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80',
    videoUrl: 'https://youtu.be/XnrLSoAOXxY', // Replace with your video
    category: 'Pre-Wedding',
    duration: '3:45',
    tags: ['4K', 'Romantic', 'Outdoor'],
    gradient: 'from-purple-500 to-indigo-600'
  }
]

function createVideoCard(video, index) {
  return `
    <div class="video-card" data-delay="${0.1 + index * 0.15}s">
      <div class="video-card-inner">
        <!-- Thumbnail Container -->
        <div class="video-thumbnail-container" onclick="openVideoModal(${video.id})">
          <img src="${video.thumbnail}" alt="${video.title}" class="video-thumbnail" />
          
          <!-- Gradient Overlay -->
          <div class="video-overlay bg-gradient-to-t ${video.gradient}"></div>
          
          <!-- Play Button -->
          <div class="video-play-btn">
            <div class="play-btn-ring"></div>
            <div class="play-btn-inner">
              <svg class="play-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
          
          <!-- Duration Badge -->
          <div class="video-duration">${video.duration}</div>
          
          <!-- Category Badge -->
          <div class="video-category bg-gradient-to-r ${video.gradient}">${video.category}</div>
        </div>
        
        <!-- Video Info -->
        <div class="video-info">
          <div class="video-info-header">
            <h3 class="video-title">${video.title}</h3>
            <p class="video-subtitle">${video.subtitle}</p>
          </div>
          
          <div class="video-tags-container">
            ${video.tags.map(tag => `<span class="video-tag-pill">${tag}</span>`).join('')}
          </div>
          
          <button class="video-watch-btn bg-gradient-to-r ${video.gradient}" onclick="openVideoModal(${video.id})">
            <span>Watch Film</span>
            <svg class="watch-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `
}

function getPortfolioPageHTML() {
  return `
    <div id="frontend-section">
      <!-- Hero Section -->
      <div class="portfolio-hero">
        <div class="portfolio-hero-bg"></div>
        <div class="portfolio-hero-content">
          <div class="portfolio-badge">
            <span class="portfolio-badge-dot"></span>
            <span>Featured Work</span>
          </div>
          <h1 class="portfolio-main-title">
            <span class="title-line">Our Cinematic</span>
            <span class="title-line title-gradient-shine">Portfolio</span>
          </h1>
          <p class="portfolio-hero-desc">
            Every love story deserves to be told beautifully. Watch our handcrafted 
            <span class="text-rose-400">wedding films</span> and 
            <span class="text-amber-400">event highlights</span>.
          </p>
        </div>
      </div>

      <!-- Video Grid -->
      <div class="video-grid-section">
        <div class="video-grid">
          ${portfolioVideos.map((video, index) => createVideoCard(video, index)).join('')}
        </div>
      </div>

      <!-- Stats Banner -->
      <div class="portfolio-stats-banner">
        <div class="portfolio-stat">
          <span class="portfolio-stat-number">100+</span>
          <span class="portfolio-stat-label">Films Created</span>
        </div>
        <div class="portfolio-stat-divider"></div>
        <div class="portfolio-stat">
          <span class="portfolio-stat-number">4K</span>
          <span class="portfolio-stat-label">Ultra HD Quality</span>
        </div>
        <div class="portfolio-stat-divider"></div>
        <div class="portfolio-stat">
          <span class="portfolio-stat-number">300+</span>
          <span class="portfolio-stat-label">Happy Couples</span>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="portfolio-cta">
        <div class="portfolio-cta-bg"></div>
        <div class="portfolio-cta-content">
          <div class="portfolio-cta-icon">🎬</div>
          <h2 class="portfolio-cta-title">Ready to Create Your Story?</h2>
          <p class="portfolio-cta-desc">Let's capture your special moments in cinematic excellence</p>
          <button onclick="switchPage('backend')" class="portfolio-cta-btn">
            <span>Book Your Session</span>
            <span class="cta-btn-arrow">→</span>
          </button>
        </div>
      </div>

      <!-- Video Modal -->
      <div id="video-modal" class="video-modal" onclick="closeVideoModal(event)">
        <div class="video-modal-content">
          <button class="video-modal-close" onclick="closeVideoModal(event)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
          <div class="video-modal-player">
            <iframe id="video-iframe" src="" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  `
}

function getContactPageHTML() {
  return `
    <div id="backend-section">
      <div class="page-header-simple">
        <h1 class="section-title">
          <span class="title-gradient-blue">Get In Touch</span>
        </h1>
        <p class="section-description">Let's create something beautiful together</p>
      </div>

      <div class="contact-cards-grid">
        <a href="tel:+917704866570" class="contact-card">
          <div class="contact-card-bg gradient-green"></div>
          <div class="contact-card-content">
            <div class="contact-icon">📱</div>
            <h3 class="contact-title">Call Me</h3>
            <p class="contact-value green">+91 7704866570</p>
            <p class="contact-label">Available 24/7</p>
          </div>
        </a>

        <a href="mailto:contact@tanuvideography.studio" class="contact-card" data-delay="0.1s">
          <div class="contact-card-bg gradient-blue"></div>
          <div class="contact-card-content">
            <div class="contact-icon">📧</div>
            <h3 class="contact-title">Email Me</h3>
            <p class="contact-value blue">contact@tanuvideography.studio</p>
            <p class="contact-label">Quick response</p>
          </div>
        </a>

        <a href="https://wa.me/917704866570" target="_blank" class="contact-card" data-delay="0.2s">
          <div class="contact-card-bg gradient-green"></div>
          <div class="contact-card-content">
            <div class="contact-icon">💬</div>
            <h3 class="contact-title">WhatsApp</h3>
            <p class="contact-value emerald">+91 7704866570</p>
            <p class="contact-label">Instant chat</p>
          </div>
        </a>
      </div>

      <div class="contact-main-grid">
        <div class="contact-form-wrapper">
          <div class="contact-form">
            <div class="form-header">
              <div class="form-icon">📝</div>
              <div>
                <h2 class="form-title">Send a Message</h2>
                <p class="form-subtitle">I'll get back to you soon</p>
              </div>
            </div>
            
            <div class="form-fields">
              <input type="text" placeholder="Your Name" class="form-input">
              <input type="email" placeholder="Your Email" class="form-input">
              <input type="tel" placeholder="Your Phone" class="form-input">
              <textarea placeholder="Tell me about your event..." rows="4" class="form-textarea"></textarea>
              
              <button class="form-submit">
                <span class="form-submit-content">
                  Send Message
                  <span class="form-submit-arrow">→</span>
                </span>
                <div class="form-submit-glow"></div>
              </button>
            </div>
          </div>
        </div>

        <div class="contact-info-cards">
          <div class="info-card">
            <div class="info-card-header">
              <div class="info-icon gradient-rose-bg">📍</div>
              <div>
                <h3 class="info-title">Location</h3>
                <p class="info-text">Based in India</p>
                <p class="info-subtext">Available for destination weddings</p>
              </div>
            </div>
          </div>

          <div class="info-card">
            <div class="info-card-header">
              <div class="info-icon gradient-amber-bg">🕐</div>
              <div>
                <h3 class="info-title">Availability</h3>
                <p class="info-text">Mon - Sun: 9:00 AM - 9:00 PM</p>
                <p class="info-subtext">24/7 WhatsApp support</p>
              </div>
            </div>
          </div>

          <div class="info-card">
            <div class="info-card-header">
              <div class="info-icon gradient-blue-bg">📱</div>
              <div class="info-card-social">
                <h3 class="info-title">Follow Me</h3>
                <div class="social-links">
                  <a href="https://www.instagram.com/TANU_VIDEOGRAPHY_STUDIO" class="social-link" target="_blank">Instagram</a>
                  
                </div>
              </div>
            </div>
          </div>

          <div class="response-time-card">
            <div class="response-time-content">
              <span class="response-pulse"></span>
              <p class="response-text">Usually responds within 1 hour</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}

// ============================================
// APP INITIALIZATION
// ============================================

function initApp() {
  const app = document.getElementById('app')
  
  app.innerHTML = `
    <div class="app-container">
      <div class="blob blob-purple"></div>
      <div class="blob blob-blue"></div>
      <div class="blob blob-pink"></div>

      <nav class="navbar">
        <div class="navbar-container">
          <div class="navbar-content">
            <div class="navbar-brand">
              <div class="brand-icon">🎬</div>
              <div>
                <h1 class="brand-title">Tanu Videography Studio</h1>
                <p class="brand-subtitle">Cinematic Wedding & Event Films</p>
              </div>
            </div>
            <div class="navbar-buttons">
              ${createNavButton('home-btn', '🏠', 'Home', 'home')}
              ${createNavButton('frontend-btn', '💍', 'Portfolio', 'frontend')}
              ${createNavButton('backend-btn', '📞', 'Contact US', 'backend')}
            </div>
          </div>
        </div>
      </nav>

      <div id="content" class="main-content"></div>

      <footer class="footer">
        <p>© 2024 Tanu Videography Studio. All rights reserved.</p>
        <p>Professional Wedding Cinematic Videographer & Event Videographer</p>
        <p class="footer-tagline">Capturing memories that last forever 🎬</p>
      </footer>
    </div>
  `

  showPage(currentPage)
  
  document.getElementById('home-btn').addEventListener('click', () => switchPage('home'))
  document.getElementById('frontend-btn').addEventListener('click', () => switchPage('frontend'))
  document.getElementById('backend-btn').addEventListener('click', () => switchPage('backend'))
}

// ============================================
// PAGE SWITCHING & NAVIGATION
// ============================================

function switchPage(page) {
  currentPage = page
  updateNavButtons()
  showPage(page)
}

function updateNavButtons() {
  const buttons = {
    'home': document.getElementById('home-btn'),
    'frontend': document.getElementById('frontend-btn'),
    'backend': document.getElementById('backend-btn')
  }
  
  Object.entries(buttons).forEach(([key, btn]) => {
    const isActive = key === currentPage
    
    btn.className = 'nav-button hover:bg-white/5'
    
    if (isActive) {
      btn.className = `nav-button ${getButtonActiveClass(key)}`
      
      const existingGlow = btn.querySelector('.nav-button-glow')
      if (existingGlow) existingGlow.remove()
      
      const glow = document.createElement('div')
      glow.className = `nav-button-glow ${key}`
      btn.appendChild(glow)
    } else {
      const existingGlow = btn.querySelector('.nav-button-glow')
      if (existingGlow) existingGlow.remove()
    }
  })
}

function showPage(page) {
  const content = document.getElementById('content')
  
  switch(page) {
    case 'home':
      content.innerHTML = getHomePageHTML()
      break
    case 'frontend':
      content.innerHTML = getPortfolioPageHTML()
      break
    case 'backend':
      content.innerHTML = getContactPageHTML()
      break
  }
  
  applyAnimations()
}

function applyAnimations() {
  const elements = document.querySelectorAll('[data-delay]')
  elements.forEach(el => {
    const delay = el.getAttribute('data-delay')
    el.style.animationDelay = delay
    el.classList.add('animate-slide-in')
  })
}

// ============================================
// GLOBAL EXPORTS & INITIALIZATION
// ============================================

window.switchPage = switchPage

// Video Modal Functions
function openVideoModal(videoId) {
  const video = portfolioVideos.find(v => v.id === videoId)
  if (!video) return
  
  const modal = document.getElementById('video-modal')
  const iframe = document.getElementById('video-iframe')
  
  // Convert YouTube URLs to embed format
  let embedUrl = video.videoUrl
  
  // Handle youtu.be short links
  if (embedUrl.includes('youtu.be/')) {
    const videoIdMatch = embedUrl.match(/youtu\.be\/([a-zA-Z0-9_-]+)/)
    if (videoIdMatch) {
      embedUrl = `https://www.youtube.com/embed/${videoIdMatch[1]}`
    }
  }
  // Handle youtube.com/watch links
  else if (embedUrl.includes('youtube.com/watch')) {
    const videoIdMatch = embedUrl.match(/[?&]v=([a-zA-Z0-9_-]+)/)
    if (videoIdMatch) {
      embedUrl = `https://www.youtube.com/embed/${videoIdMatch[1]}`
    }
  }
  
  // Add autoplay parameter
  iframe.src = embedUrl + '?autoplay=1'
  modal.classList.add('active')
  document.body.style.overflow = 'hidden'
}

function closeVideoModal(event) {
  if (event.target.closest('.video-modal-player') && !event.target.closest('.video-modal-close')) {
    return
  }
  
  const modal = document.getElementById('video-modal')
  const iframe = document.getElementById('video-iframe')
  
  modal.classList.remove('active')
  iframe.src = ''
  document.body.style.overflow = ''
}

// Make video functions globally accessible
window.openVideoModal = openVideoModal
window.closeVideoModal = closeVideoModal

document.addEventListener('DOMContentLoaded', initApp)
