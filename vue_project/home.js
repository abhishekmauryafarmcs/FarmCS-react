const Home = {
  template: /* html */`
    <div class="home-page">
      <div class="popup-overlay" :class="{ show: popupVisible }" @click.self="closePopup">
        <div class="popup animate">
          <button class="popup-close" @click="closePopup" aria-label="Close welcome message">
            <i class="fas fa-times"></i>
          </button>
          <h2>Welcome to The FarmCS!</h2>
          <p>Empowering Indian Farmers with Smart Irrigation Solutions.</p>
          <p>If you're a FarmCS customer, please <strong>log in</strong> to access your dashboard and explore real-time data of your fields.</p>
        </div>
      </div>

      <header>
        <a href="index.html" class="logo">
          <img src="images/FarmCSlogo.png" alt="FarmCS Logo">
        </a>
        <nav>
          <div class="nav-links" :class="{ active: isNavOpen }">
            <a href="#home" data-translate="nav.home" @click.prevent="navigateSection('home')">Home</a>
            <a href="#features" data-translate="nav.features" @click.prevent="navigateSection('features')">Features</a>
            <a href="pages/cropdata.html" data-translate="nav.cropdata">Crop Data</a>
            <a href="pages/learn-more.html" data-translate="nav.learn-more">Learn More</a>
            <a href="pages/about.html" data-translate="nav.about">About Us</a>
            <a href="pages/contact.html" data-translate="nav.contact">Contact</a>
          </div>
        </nav>
        <div class="auth-buttons">
          <template v-if="isLoggedIn">
            <a href="pages/dashboard.html" class="dashboard-btn">
              <i class="fas fa-tachometer-alt"></i> Dashboard
            </a>
          </template>
          <template v-else>
            <a href="login.html" class="login-btn">Login</a>
            <a href="signup.html" class="signup-btn">Sign Up</a>
          </template>
          <div class="language-selector">
            <div id="google_translate_element"></div>
          </div>
        </div>
        <div class="hamburger-menu" :class="{ active: isNavOpen }" @click.stop="toggleNav" aria-label="Toggle navigation" role="button" tabindex="0">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
      </header>

      <section class="hero" id="home">
        <div class="founder-area">
          <div class="founder-tooltip">FarmCS Founder</div>
        </div>
        <div class="hero-content" data-aos="fade-up">
          <h1 data-translate="hero.title">Empowering Indian Farmers with Smart Irrigation Solutions</h1>
          <p data-translate="hero.subtitle">Save water, improve yields, and embrace innovation in agriculture with India's first smart sprinkler system.</p>
          <div class="hero-buttons">
            <a href="pages/learn-more.html" class="btn" data-translate="hero.cta_button">Learn More</a>
            <a href="signup.html" class="btn btn-primary">Get Started</a>
          </div>
        </div>
      </section>

      <section class="features" id="features">
        <div class="section-title" data-aos="fade-up">
          <h2 data-translate="features.title">Smart Features for Modern Farming</h2>
          <p data-translate="features.subtitle">Discover how FarmCS revolutionizes irrigation</p>
        </div>
        <div class="feature-cards">
          <div class="feature-card" data-aos="fade-up" data-aos-delay="100">
            <i class="fas fa-chart-line feature-icon"></i>
            <h3 data-translate="features.real-time-data">Real-Time Field Data</h3>
            <p data-translate="features.real-time-data-description">Monitor soil moisture, temperature, and humidity in real-time</p>
          </div>
          <div class="feature-card" data-aos="fade-up" data-aos-delay="200">
            <i class="fas fa-seedling feature-icon"></i>
            <h3 data-translate="features.smart-fertilization">Smart Fertilization</h3>
            <p data-translate="features.smart-fertilization-description">Optimize nutrient delivery with intelligent fertigation control</p>
          </div>
          <div class="feature-card" data-aos="fade-up" data-aos-delay="300">
            <i class="fas fa-fire-extinguisher feature-icon"></i>
            <h3 data-translate="features.fire-detection">Fire Detection</h3>
            <p data-translate="features.fire-detection-description">Early warning system for fire prevention and control</p>
          </div>
          <div class="feature-card" data-aos="fade-up" data-aos-delay="400">
            <i class="fas fa-dove feature-icon"></i>
            <h3 data-translate="features.bird-deterrence">Bird Deterrence</h3>
            <p data-translate="features.bird-deterrence-description">Protect your crops with smart bird control system</p>
          </div>
        </div>
      </section>

      <section class="utility-section" id="utility">
        <div class="section-title" data-aos="fade-up">
          <h2>Utility of Project: FarmCS – Smart Irrigation System</h2>
        </div>
        <div class="utility-container" data-aos="fade-up">
          <p class="utility-intro">
            FarmCS offers a high-utility, scalable solution to one of agriculture's most pressing problems: inefficient water use. By integrating IoT sensors, adjustable smart sprinklers, and a remote monitoring system, the project delivers real-time, need-based irrigation and fertigation. Here's how it benefits stakeholders:
          </p>

          <div class="utility-grid">
            <div class="utility-card" data-aos="fade-up">
              <h3><i class="fas fa-user-alt"></i> For Farmers:</h3>
              <ul>
                <li>Reduces water usage by up to 90%, lowering irrigation costs.</li>
                <li>Increases crop yield by 85-95% through precise water and nutrient delivery.</li>
                <li>Saves labor via automation and remote control via a mobile app.</li>
                <li>Reduces exposure to harmful fertilizers with smart fertigation.</li>
              </ul>
            </div>

            <div class="utility-card" data-aos="fade-up" data-aos-delay="100">
              <h3><i class="fas fa-leaf"></i> For the Environment:</h3>
              <ul>
                <li>Promotes sustainable farming practices.</li>
                <li>Minimizes groundwater depletion.</li>
                <li>Reduces chemical runoff with targeted fertilizer use.</li>
                <li>Eco-friendly bird deterrence and fire detection systems help protect crops without harming wildlife.</li>
              </ul>
            </div>

            <div class="utility-card" data-aos="fade-up" data-aos-delay="200">
              <h3><i class="fas fa-building"></i> For Policymakers & Agribusinesses:</h3>
              <ul>
                <li>Aligns with government goals like PMKSY (Per Drop More Crop).</li>
                <li>Can be integrated into large-scale precision agriculture strategies.</li>
                <li>Encourages adoption of clean, renewable energy through solar integration.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="metrics" data-aos="fade-up">
        <div class="metrics-grid">
          <div class="metric-item">
            <h3>90%</h3>
            <p>Water Savings</p>
          </div>
          <div class="metric-item">
            <h3>95%</h3>
            <p>Yield Improvement</p>
          </div>
          <div class="metric-item">
            <h3>24/7</h3>
            <p>Remote Monitoring</p>
          </div>
          <div class="metric-item">
            <h3>100+</h3>
            <p>Farms Empowered</p>
          </div>
        </div>
      </section>

      <section class="testimonials" data-aos="fade-up">
        <div class="section-title">
          <h2>What Farmers Say</h2>
          <p>Stories from the fields that adopted FarmCS.</p>
        </div>
        <div class="testimonial-carousel">
          <div class="testimonial-card">
            <img src="../images/FarmCSlogo.png" alt="Farmer testimonial placeholder">
            <p>“Our irrigation costs dropped drastically and we gained more control over every acre.”</p>
            <strong>- Suresh Kumar, Maharashtra</strong>
          </div>
          <div class="testimonial-card">
            <img src="../images/FarmCSlogo.png" alt="Farmer testimonial placeholder">
            <p>“Fire alerts and bird deterrence saved two harvests already. FarmCS just works.”</p>
            <strong>- Anita Devi, Punjab</strong>
          </div>
          <div class="testimonial-card">
            <img src="../images/FarmCSlogo.png" alt="Farmer testimonial placeholder">
            <p>“Integration with weather insights keeps my team informed and proactive.”</p>
            <strong>- Dev Patel, Gujarat</strong>
          </div>
        </div>
      </section>

      <footer>
        <div class="footer-content">
          <div class="footer-logo">
            <img src="../images/FarmCSlogo.png" alt="FarmCS Logo">
            <p data-translate="footer.description">Revolutionizing agriculture through smart irrigation and IoT technology. Making farming smarter, sustainable, and more efficient.</p>
          </div>

          <div class="footer-links">
            <div class="footer-links-column">
              <h4 data-translate="footer.features.title">Our Features</h4>
              <a href="#smart-irrigation" data-translate="footer.features.smart-irrigation">Smart Irrigation</a>
              <a href="#soil-monitoring" data-translate="footer.features.soil-monitoring">Soil Monitoring</a>
              <a href="#weather-integration" data-translate="footer.features.weather-integration">Weather Integration</a>
              <a href="#mobile-control" data-translate="footer.features.mobile-control">Mobile Control</a>
              <a href="#data-analytics" data-translate="footer.features.data-analytics">Data Analytics</a>
            </div>

            <div class="footer-links-column">
              <h4 data-translate="footer.resources.title">Resources</h4>
              <a href="#" data-translate="footer.resources.documentation">Documentation</a>
              <a href="#" data-translate="footer.resources.support-center">Support Center</a>
              <a href="#" data-translate="footer.resources.installation-guide">Installation Guide</a>
              <a href="#" data-translate="footer.resources.system-updates">System Updates</a>
              <a href="#" data-translate="footer.resources.user-manual">User Manual</a>
            </div>

            <div class="footer-links-column">
              <h4 data-translate="footer.contact.title">Contact & Legal</h4>
              <a href="../contact.php" data-translate="footer.contact.contact-us">Contact Us</a>
              <a href="#" data-translate="footer.contact.privacy-policy">Privacy Policy</a>
              <a href="#" data-translate="footer.contact.terms-of-service">Terms of Service</a>
              <a href="#" data-translate="footer.contact.warranty-info">Warranty Info</a>
              <a href="#" data-translate="footer.contact.support-policy">Support Policy</a>
            </div>
          </div>

          <div class="social-links">
            <h4 data-translate="footer.social.title">Connect With Us</h4>
            <div class="social-icons">
              <a href="#" aria-label="Facebook" data-translate="footer.social.facebook"><i class="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter" data-translate="footer.social.twitter"><i class="fab fa-twitter"></i></a>
              <a href="#" aria-label="LinkedIn" data-translate="footer.social.linkedin"><i class="fab fa-linkedin-in"></i></a>
              <a href="#" aria-label="Instagram" data-translate="footer.social.instagram"><i class="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="copyright-container">
            <div class="copyright-front">
              <p data-translate="footer.copyright">&copy; 2023 FarmCS. All rights reserved.</p>
            </div>
            <div class="copyright-back">
              <p data-translate="footer.made-with-love">Made with <span class="heart">❤</span> in India</p>
            </div>
          </div>
        </div>
      </footer>

      <button class="dark-mode-toggle" @click="toggleDarkMode" :title="darkMode ? 'Switch to light mode' : 'Switch to dark mode'">
        <i :class="darkMode ? 'fas fa-sun' : 'fas fa-moon'"></i>
      </button>
    </div>
  `,
  data() {
    return {
      isLoggedIn: false,
      user: null,
      isNavOpen: false,
      darkMode: false,
      popupVisible: false,
      popupTimer: null,
      supabaseClient: null,
      authSubscription: null,
      googleTranslateStyleTimer: null
    };
  },
  mounted() {
    this.applyDarkModePreference();
    this.setupAOS();
    this.initSupabase();
    this.schedulePopup();
    document.addEventListener('click', this.handleDocumentClick);
    this.googleTranslateStyleTimer = setInterval(this.styleGoogleTranslateWidget, 1500);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleDocumentClick);
    if (this.popupTimer) {
      clearTimeout(this.popupTimer);
    }
    if (this.googleTranslateStyleTimer) {
      clearInterval(this.googleTranslateStyleTimer);
    }
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
      this.authSubscription = null;
    }
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
    closeNav() {
      this.isNavOpen = false;
    },
    handleDocumentClick(event) {
      if (!this.isNavOpen) return;
      const nav = this.$el.querySelector('.nav-links');
      const hamburger = this.$el.querySelector('.hamburger-menu');
      if (nav && hamburger && !nav.contains(event.target) && !hamburger.contains(event.target)) {
        this.closeNav();
      }
    },
    navigateSection(id) {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      this.closeNav();
    },
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      document.body.classList.toggle('dark-mode', this.darkMode);
      localStorage.setItem('darkMode', this.darkMode ? 'enabled' : 'disabled');
    },
    applyDarkModePreference() {
      const enabled = localStorage.getItem('darkMode') === 'enabled';
      this.darkMode = enabled;
      document.body.classList.toggle('dark-mode', enabled);
    },
    setupAOS() {
      if (window.AOS) {
        window.AOS.init({ duration: 1000, once: true });
      }
    },
    initSupabase() {
      if (!window.supabase || !window.__SUPABASE_URL__ || !window.__SUPABASE_ANON_KEY__) {
        console.warn('Supabase credentials are missing. Defaulting to logged-out state.');
        this.isLoggedIn = false;
        return;
      }
      try {
        this.supabaseClient = window.supabase.createClient(window.__SUPABASE_URL__, window.__SUPABASE_ANON_KEY__);
        this.checkAuthState();
        const { data } = this.supabaseClient.auth.onAuthStateChange((_event, session) => {
          this.applySession(session);
        });
        this.authSubscription = data?.subscription ?? null;
      } catch (error) {
        console.error('Failed to initialize Supabase client', error);
        this.isLoggedIn = false;
      }
    },
    async checkAuthState() {
      if (!this.supabaseClient) return;
      try {
        const { data } = await this.supabaseClient.auth.getSession();
        this.applySession(data?.session ?? null);
      } catch (error) {
        console.error('Error fetching Supabase session', error);
        this.applySession(null);
      }
    },
    applySession(session) {
      this.isLoggedIn = !!session;
      this.user = session?.user ?? null;
      if (this.isLoggedIn) {
        this.popupVisible = false;
      } else {
        this.schedulePopup(true);
      }
    },
    schedulePopup(resetTimer = false) {
      if (resetTimer && this.popupTimer) {
        clearTimeout(this.popupTimer);
        this.popupTimer = null;
      }
      if (this.popupTimer || this.isLoggedIn) return;
      this.popupTimer = setTimeout(() => {
        if (!this.isLoggedIn) {
          this.popupVisible = true;
        }
      }, 2000);
    },
    closePopup() {
      this.popupVisible = false;
    },
    styleGoogleTranslateWidget() {
      const select = document.querySelector('.goog-te-combo');
      if (!select) {
        return;
      }
      select.style.border = '1px solid var(--primary-green)';
      select.style.borderRadius = '8px';
      select.style.padding = '8px 12px';
      select.style.backgroundColor = 'transparent';
      select.style.color = 'var(--dark-text)';
      select.style.cursor = 'pointer';
      select.style.fontSize = '14px';
      select.style.outline = 'none';
    }
  }
};
