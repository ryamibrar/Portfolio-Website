const featuredRoot = document.querySelector("#featured-projects");
const archiveGrid = document.querySelector("#archiveGrid");
const filterBar = document.querySelector("#filterBar");
const skillsGrid = document.querySelector("#skillsGrid");

// CASE STUDY CARDS
if (featuredRoot && window.featuredProjects) {
  featuredRoot.innerHTML = "";

  window.featuredProjects.forEach(function (project, index) {
    const card = document.createElement("article");
    card.className = "case-card reveal is-visible";
    card.style.zIndex = index + 1;

    card.innerHTML =
      '<div class="case-copy">' +
        '<div>' +
          '<p class="eyebrow">' + project.eyebrow + '</p>' +
          '<h3>' + project.title + '</h3>' +
          '<p>' + project.summary + '</p>' +
          '<div class="case-meta">' +
            '<span>' + project.timeline + '</span>' +
            '<span>' + project.status + '</span>' +
            '<span>' + project.tools.slice(0, 2).join(" + ") + '</span>' +
          '</div>' +
        '</div>' +
        '<a class="button ghost" href="project.html?id=' + project.id + '">Open Case Study</a>' +
      '</div>' +
      '<div class="case-visual image-visual ' + (project.color || "") + '">' +
        (
          project.image
            ? '<img src="' + project.image + '" alt="' + (project.imageAlt || project.title) + '" loading="lazy">'
            : '<div class="visual-sheet large"><div class="sheet-title"></div><div class="sheet-line" style="width:88%"></div><div class="sheet-line" style="width:72%"></div><div class="sheet-line" style="width:64%"></div><div class="sheet-box"></div></div><div class="visual-sheet small dark"><div class="sheet-title"></div><div class="sheet-line" style="width:80%"></div><div class="sheet-line" style="width:66%"></div><div class="sheet-box"></div></div>'
        ) +
        '<p class="visual-caption">' + (project.imageLabel || "Selected project preview") + '</p>' +
      '</div>';

    featuredRoot.appendChild(card);
  });
}

// ARCHIVE CARDS
if (archiveGrid && filterBar && window.archiveItems) {
  const categories = ["All"];

  window.archiveItems.forEach(function (item) {
    if (!categories.includes(item.category)) {
      categories.push(item.category);
    }
  });

  filterBar.innerHTML = "";

  categories.forEach(function (category) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = category;
    button.dataset.filter = category;

    if (category === "All") {
      button.className = "is-active";
    }

    filterBar.appendChild(button);
  });

  function drawArchive(filter) {
    archiveGrid.innerHTML = "";

    const items =
      filter === "All"
        ? window.archiveItems
        : window.archiveItems.filter(function (item) {
            return item.category === filter;
          });

    items.forEach(function (item) {
      const card = document.createElement("article");
      card.className = "archive-item";

      card.innerHTML =
        '<div>' +
          '<div class="archive-thumb">' +
            (item.thumb ? '<img src="' + item.thumb + '" alt="' + item.title + '">' : "") +
          '</div>' +
          '<h3>' + item.title + '</h3>' +
          '<p>' + item.purpose + '</p>' +
        '</div>' +
        '<div class="archive-foot">' +
          '<span>' + item.category + '</span>' +
          '<span>' + item.tool + '</span>' +
        '</div>';

      archiveGrid.appendChild(card);
    });
  }

  filterBar.addEventListener("click", function (event) {
    if (event.target.tagName !== "BUTTON") return;

    document.querySelectorAll("#filterBar button").forEach(function (button) {
      button.classList.remove("is-active");
    });

    event.target.classList.add("is-active");
    drawArchive(event.target.dataset.filter);
  });

  drawArchive("All");
}

// SKILLS
if (skillsGrid && window.skills) {
  skillsGrid.innerHTML = "";

  Object.keys(window.skills).forEach(function (group) {
    const card = document.createElement("article");
    card.className = "skill-card";

    let listItems = "";

    window.skills[group].forEach(function (item) {
      listItems += "<li>" + item + "</li>";
    });

    card.innerHTML =
      "<h3>" + group + "</h3>" +
      "<ul>" + listItems + "</ul>";

    skillsGrid.appendChild(card);
  });
}

// PROJECT PAGE
const projectRoot = document.querySelector("#projectRoot");

if (projectRoot && window.featuredProjects) {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || window.featuredProjects[0].id;
  const project =
    window.featuredProjects.find(function (item) {
      return item.id === id;
    }) || window.featuredProjects[0];

  document.title = project.deckTitle + " — Ryam Ibrar Portfolio";

  projectRoot.innerHTML =
    '<section class="project-hero section-shell reveal is-visible">' +
      '<p class="eyebrow">' + project.eyebrow + '</p>' +
      '<h1>' + project.deckTitle + '</h1>' +
      '<p class="project-summary">' + project.summary + '</p>' +
      '<div class="project-meta-grid">' +
        '<article><span>Role</span>' + project.role + '</article>' +
        '<article><span>Tools</span>' + project.tools.join(", ") + '</article>' +
        '<article><span>Timeline</span>' + project.timeline + '</article>' +
        '<article><span>Status</span>' + project.status + '</article>' +
      '</div>' +
    '</section>' +

    '<section class="project-showcase section-shell reveal is-visible">' +
      '<div class="case-visual image-visual ' + (project.color || "") + '">' +
        (
          project.image
            ? '<img src="' + project.image + '" alt="' + (project.imageAlt || project.title) + '">' 
            : ''
        ) +
        '<p class="visual-caption">' + (project.imageLabel || "Selected project preview") + '</p>' +
      '</div>' +
    '</section>' +

    '<section class="project-content section-shell">' +
      '<aside class="project-toc reveal is-visible">' +
        '<a href="#context">Context</a>' +
        '<a href="#challenge">Challenge</a>' +
        '<a href="#process-block">Process</a>' +
        '<a href="#solution">Design Solution</a>' +
        '<a href="#impact">What Improved</a>' +
        '<a href="#reflection">Reflection</a>' +
      '</aside>' +

      '<div class="project-article">' +
        '<article class="project-block reveal is-visible" id="context"><h2>Context</h2><p>' + project.summary + '</p></article>' +
        '<article class="project-block reveal is-visible" id="challenge"><h2>Challenge</h2><p>' + project.challenge + '</p></article>' +
        '<article class="project-block reveal is-visible" id="process-block"><h2>Design Process</h2><ul>' + project.process.map(function (step) { return "<li>" + step + "</li>"; }).join("") + '</ul></article>' +
        '<article class="project-block reveal is-visible" id="solution"><h2>Design Solution</h2><p>' + project.solution + '</p></article>' +
        '<article class="project-block reveal is-visible" id="impact"><h2>What I Improved</h2><p>' + project.impact + '</p><ul>' + project.improvements.map(function (item) { return "<li>" + item + "</li>"; }).join("") + '</ul></article>' +
        '<article class="project-block reveal is-visible" id="reflection"><h2>Reflection</h2><p>' + project.reflection + '</p></article>' +
      '</div>' +
    '</section>';
}

// MOBILE MENU
const menuButton = document.querySelector(".menu-button");
const mobileNav = document.querySelector(".mobile-nav");

if (menuButton && mobileNav) {
  menuButton.addEventListener("click", function () {
    mobileNav.classList.toggle("is-open");
  });
}

// YEAR
document.querySelectorAll("#year").forEach(function (item) {
  item.textContent = new Date().getFullYear();
});
