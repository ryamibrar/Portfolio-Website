const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const caseVisual = (project) => `
  <div class="case-visual image-visual ${project.color || ""}" aria-label="${project.imageAlt || project.title}">
    ${
      project.image
        ? `<img src="${project.image}" alt="${project.imageAlt || project.title}" loading="lazy" />`
        : `
          <div class="visual-sheet large">
            <div class="sheet-title"></div>
            <div class="sheet-line" style="width: 88%"></div>
            <div class="sheet-line" style="width: 72%"></div>
            <div class="sheet-line" style="width: 64%"></div>
            <div class="sheet-box"></div>
          </div>
          <div class="visual-sheet small dark">
            <div class="sheet-title"></div>
            <div class="sheet-line" style="width: 80%"></div>
            <div class="sheet-line" style="width: 66%"></div>
            <div class="sheet-box"></div>
          </div>
        `
    }
    <p class="visual-caption">${project.imageLabel || "Selected project preview"}</p>
  </div>
`;

function renderFeaturedProjects() {
  const root = $('#featured-projects');
  if (!root || !window.featuredProjects) return;

  root.innerHTML = window.featuredProjects.map((project, index) => `
    <article class="case-card reveal" style="z-index:${index + 1}">
      <div class="case-copy">
        <div>
          <p class="eyebrow">${project.eyebrow}</p>
          <h3>${project.title}</h3>
          <p>${project.summary}</p>
          <div class="case-meta">
            <span>${project.timeline}</span>
            <span>${project.status}</span>
            <span>${project.tools.slice(0, 2).join(' + ')}</span>
          </div>
        </div>
        <a class="button ghost" href="project.html?id=${project.id}">Open Case Study</a>
      </div>
      ${caseVisual(project)}
    </article>
  `).join('');
}

function renderArchive() {
  const filterBar = $('#filterBar');
  const archiveGrid = $('#archiveGrid');
  if (!filterBar || !archiveGrid || !window.archiveItems) return;

  const categories = ['All', ...new Set(window.archiveItems.map(item => item.category))];

  filterBar.innerHTML = categories.map(category => `
    <button type="button" data-filter="${category}" class="${category === 'All' ? 'is-active' : ''}">
      ${category}
    </button>
  `).join('');

  const draw = (filter = 'All') => {
    const items = filter === 'All'
      ? window.archiveItems
      : window.archiveItems.filter(item => item.category === filter);

    archiveGrid.innerHTML = items.map(item => `
      <article class="archive-item">
        <div>
          <div class="archive-thumb">
            ${item.thumb ? `<img src="${item.thumb}" alt="${item.title}" loading="lazy" />` : ""}
          </div>
          <h3>${item.title}</h3>
          <p>${item.purpose}</p>
        </div>
        <div class="archive-foot">
          <span>${item.category}</span>
          <span>${item.tool}</span>
        </div>
      </article>
    `).join('');
  };

  filterBar.addEventListener('click', event => {
    if (!event.target.matches('button')) return;
    $$('#filterBar button').forEach(button => button.classList.remove('is-active'));
    event.target.classList.add('is-active');
    draw(event.target.dataset.filter);
  });

  draw();
}

function renderSkills() {
  const root = $('#skillsGrid');
  if (!root || !window.skills) return;

  root.innerHTML = Object.entries(window.skills).map(([group, list]) => `
    <article class="skill-card">
      <h3>${group}</h3>
      <ul>${list.map(item => `<li>${item}</li>`).join('')}</ul>
    </article>
  `).join('');
}

function renderProjectPage() {
  const root = $('#projectRoot');
  if (!root || !window.featuredProjects) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id') || window.featuredProjects[0].id;
  const project = window.featuredProjects.find(item => item.id === id) || window.featuredProjects[0];

  document.title = `${project.deckTitle} — Ryam Ibrar Portfolio`;

  const otherProjects = window.featuredProjects.filter(item => item.id !== project.id).slice(0, 3);

  root.innerHTML = `
    <section class="project-hero section-shell reveal">
      <p class="eyebrow">${project.eyebrow}</p>
      <h1>${project.deckTitle}</h1>
      <p class="project-summary">${project.summary}</p>
      <div class="project-meta-grid">
        <article><span>Role</span>${project.role}</article>
        <article><span>Tools</span>${project.tools.join(', ')}</article>
        <article><span>Timeline</span>${project.timeline}</article>
        <article><span>Status</span>${project.status}</article>
      </div>
    </section>

    <section class="project-showcase section-shell reveal">
      ${caseVisual(project)}
    </section>

    <section class="project-content section-shell">
      <aside class="project-toc reveal" aria-label="Case study sections">
        <a href="#context">Context</a>
        <a href="#challenge">Challenge</a>
        <a href="#process-block">Process</a>
        <a href="#solution">Design Solution</a>
        <a href="#impact">What Improved</a>
        <a href="#reflection">Reflection</a>
      </aside>

      <div class="project-article">
        <article class="project-block reveal" id="context">
          <h2>Context</h2>
          <p>${project.summary}</p>
        </article>

        <article class="project-block reveal" id="challenge">
          <h2>Challenge</h2>
          <p>${project.challenge}</p>
        </article>

        <article class="project-block reveal" id="process-block">
          <h2>Design Process</h2>
          <ul>${project.process.map(step => `<li>${step}</li>`).join('')}</ul>
        </article>

        <article class="project-block reveal" id="solution">
          <h2>Design Solution</h2>
          <p>${project.solution}</p>
        </article>

        <article class="project-block reveal" id="impact">
          <h2>What I Improved</h2>
          <p>${project.impact}</p>
          <ul>${project.improvements.map(item => `<li>${item}</li>`).join('')}</ul>
        </article>

        <article class="project-block reveal" id="reflection">
          <h2>Reflection</h2>
          <p>${project.reflection}</p>
        </article>
      </div>
    </section>

    <section class="next-projects section-shell reveal">
      <p class="eyebrow">More Case Studies</p>
      <div class="next-grid">
        ${otherProjects.map(item => `
          <a href="project.html?id=${item.id}">
            <span>${item.eyebrow}</span>
            <strong>${item.deckTitle}</strong>
          </a>
        `).join('')}
      </div>
    </section>
  `;
}

function setupReveal() {
  const items = $$('.reveal');

  if (!('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  }, { threshold: 0.12 });

  items.forEach(el => observer.observe(el));
}

function setupMobileMenu() {
  const button = $('.menu-button');
  const nav = $('.mobile-nav');

  if (!button || !nav) return;

  button.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(isOpen));
  });

  nav.addEventListener('click', event => {
    if (event.target.matches('a')) {
      nav.classList.remove('is-open');
      button.setAttribute('aria-expanded', 'false');
    }
  });
}

function setupCursorGlow() {
  const glow = $('.cursor-glow');
  if (!glow) return;

  window.addEventListener('pointermove', event => {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
  });
}

function setupYear() {
  $$('#year').forEach(el => {
    el.textContent = new Date().getFullYear();
  });
}

renderFeaturedProjects();
renderArchive();
renderSkills();
renderProjectPage();
setupReveal();
setupMobileMenu();
setupCursorGlow();
setupYear();
