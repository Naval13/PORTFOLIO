// portfolio_google_script.js
(() => {
  // ---- CONFIG ----
  const SHEETS_API =
    document.querySelector('meta[name="sheets-api"]')?.content ||
    window.SHEETS_API || "";

  if (!SHEETS_API) console.warn("[Portfolio] Missing <meta name='sheets-api'>.");

  // Optional: if you use a Google Form, put its public form URL here or on the container via data-contact-form-url
  const CONTACT_FORM_URL =
    document.querySelector('[data-contact-form-url]')?.getAttribute('data-contact-form-url') ||
    ""; // e.g., "https://docs.google.com/forms/d/e/FORM_ID/viewform?embedded=true"

  // ---- UTILS ----
  const $  = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
  const driveImg = idOrUrl =>
    idOrUrl && !String(idOrUrl).startsWith("http")
      ? `https://lh3.googleusercontent.com/d/${idOrUrl}=w1600`
      : (idOrUrl || "");

  async function getData(){
    const res = await fetch(SHEETS_API, { cache:"no-store" });
    if(!res.ok) throw new Error("[Portfolio] Fetch failed: " + res.status);
    return res.json(); // { skills, projects, caseStudies, beyondCode, testimonials }
  }

  // ---------------- SKILLS (flip + dots) ----------------
  function renderSkills(rows = []) {
    const grid =
      document.querySelector('#skills .grid') ||
      document.querySelector('[data-skills-grid]');
    if (!grid) { console.warn("[Portfolio] Skills grid not found."); return; }

    const byGroup = rows.reduce((acc, r) => {
      const g = (r.Group || "General").trim();
      (acc[g] ||= []).push(r);
      return acc;
    }, {});

    const totalDots = 5;
    const dotRow = lvl => {
      const n = Math.max(0, Math.min(totalDots, parseInt(lvl || 0, 10)));
      return Array.from({ length: totalDots }, (_, i) =>
        `<span class="skill-dot${i < n ? ' is-filled' : ''}" aria-hidden="true"></span>`
      ).join('');
    };

    grid.innerHTML = Object.entries(byGroup).map(([group, items]) => `
      <div class="group perspective-1000">
        <div class="skill-card preserve-3d">
          <!-- FRONT -->
          <div class="skill-face front backface-hidden">
            <div>
              <h3 class="skill-heading">${group}</h3>
              <p class="skill-sub">Tap to view skills</p>
            </div>
            <div class="skill-tip">Click to flip →</div>
          </div>

          <!-- BACK -->
          <div class="skill-face back backface-hidden rotate-y-180" role="list">
            <h3 class="skill-heading">${group}</h3>
            <ul class="skill-list" aria-label="${group}">
              ${items.map(s => `
                <li class="skill-line" role="listitem">
                  <span class="skill-name">${s.Skill || ''}</span>
                  <span class="skill-dots" title="Level ${s.Proficiency_1_to_5 || 0} of ${totalDots}">
                    ${dotRow(s.Proficiency_1_to_5)}
                  </span>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Flip handler (no alerts, no legacy onclick)
  document.addEventListener("click", (e) => {
    const card = e.target.closest(".group .skill-card");
    if (card) card.classList.toggle("rotate-y-180");
  });

  // ---------------- PROJECTS + MODAL ----------------
  function tagPills(tags){
    return String(tags || "").split(",").map(s => s.trim()).filter(Boolean)
      .map(t => `<span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">${t}</span>`).join('');
  }

  function renderProjects(projects = [], caseStudies = []) {
    const grid =
      document.querySelector('#projects .grid') ||
      document.querySelector('#projects-grid') ||
      document.querySelector('[data-projects-grid]');
    if(!grid){ console.warn("[Portfolio] Projects grid not found."); return; }
    grid.setAttribute("aria-busy","false");
    grid.innerHTML = "";

    const csIndex = Object.fromEntries(
      caseStudies.map(c => [String(c.Case_Title || '').toLowerCase(), c])
    );

    // in-memory modal source
    window.projectsData = {};

    projects.forEach(p => {
      if(String(p.Status || '').toLowerCase() === "draft") return;
      const title = p.Title || "Untitled";
      const key = title.toLowerCase().replace(/\s+/g,'-');
      const cs  = csIndex[title.toLowerCase()] || null;

      const card = document.createElement("article");
      card.className = "project-card";
      card.innerHTML = `
        <div class="project-cover">
          <img src="${driveImg(p.Image_URL_or_DriveID)}" alt="${title}" loading="lazy">
          <div class="project-gradient" aria-hidden="true"></div>
        </div>
        <div class="p-6 flex flex-col gap-4 flex-grow">
          <div>
            <h3 class="text-xl font-bold mb-1 text-black">${title}</h3>
            <p class="text-neutral-700">${p.Short_Description || ""}</p>
          </div>
          <div class="flex flex-wrap gap-2">${tagPills(p.Tags_Comma)}</div>
          <div class="mt-auto flex gap-3">
            ${p.Case_Study_URL ? `<a class="btn btn-outline" target="_blank" rel="noopener" href="${p.Case_Study_URL}">Read Case Study</a>` : ``}
            <button class="btn btn-solid" data-modal="${key}">Quick View</button>
          </div>
        </div>
      `;
      grid.appendChild(card);

      // Modal payload
      window.projectsData[key] = {
        title,
        shortDesc: p.Short_Description || "",
        fullDesc:  (cs && cs.Brief) || p.Short_Description || "",
        tools:     (cs && cs.Tools_Comma
                      ? String(cs.Tools_Comma).split(",").map(s=>s.trim())
                      : String(p.Tags_Comma || "").split(",").map(s=>s.trim())
                   ).filter(Boolean),
        challenges:(cs && cs.Approach) || "",
        outcome:   (cs && cs.Outcome_Summary_Semis) || "",
        imageSrc:  driveImg(p.Image_URL_or_DriveID) || "",
        links:     { demo: p.Case_Study_URL || "#" }
      };
    });
  }

  // Modal plumbing (replaces any legacy alert)
  function ensureModal(){
    let modal = document.getElementById("project-modal");
    if (modal) return modal;

    modal = document.createElement("div");
    modal.id = "project-modal";
    modal.className = "modal-wrap";
    modal.innerHTML = `
      <div class="modal-dim" data-close-modal></div>
      <div class="modal-card" id="project-modal-card">
        <button class="modal-close" aria-label="Close" data-close-modal>&times;</button>
        <div id="project-modal-content">Loading…</div>
      </div>`;
    document.body.appendChild(modal);
    return modal;
  }
  function wireModal(){
    ensureModal();
    document.addEventListener("click",(e)=>{
      const btn = e.target.closest("[data-modal]");
      const closeHit = e.target.hasAttribute("data-close-modal") || e.target.closest("[data-close-modal]");
      if(btn){
        e.preventDefault();
        const key = btn.getAttribute("data-modal");
        const data = (window.projectsData||{})[key];
        if(!data) return;

        const wrap = document.getElementById("project-modal");
        const card = document.getElementById("project-modal-card");
        const content = document.getElementById("project-modal-content");

        wrap.classList.add("show");
        requestAnimationFrame(()=> card.classList.add("show"));

        content.innerHTML = `
          <div class="grid md:grid-cols-2 gap-6">
            <img src="${data.imageSrc}" alt="${data.title}" class="w-full h-full object-cover rounded">
            <div>
              <h3 class="text-2xl font-bold mb-2">${data.title}</h3>
              <p class="text-gray-700 mb-4">${data.fullDesc}</p>
              ${data.tools?.length ? `<div class="flex flex-wrap gap-2 mb-4">${data.tools.map(t=>`<span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">${t}</span>`).join('')}</div>`:''}
              ${data.challenges ? `<h4 class="font-semibold mt-4 mb-1">Approach</h4><p class="text-gray-700">${data.challenges}</p>`:''}
              ${data.outcome ? `<h4 class="font-semibold mt-4 mb-1">Outcome</h4><p class="text-gray-700">${data.outcome}</p>`:''}
            </div>
          </div>`;
      }
      if(closeHit){
        const wrap = document.getElementById("project-modal");
        const card = document.getElementById("project-modal-card");
        card.classList.remove("show");
        setTimeout(()=> wrap.classList.remove("show"), 150);
      }
    });
  }

  // ---------------- CASE STUDIES ----------------
  function renderCaseStudies(rows = []) {
    const grid = document.querySelector('[data-case-grid]');
    if (!grid) return;

    grid.classList.add('case-grid');
    grid.innerHTML = rows.map(cs => {
      const tools = String(cs.Tools_Comma || "")
        .split(",").map(s => s.trim()).filter(Boolean)
        .map(t => `<span>${t}</span>`).join("");

      const outcomes = String(cs.Outcome_Summary_Semis || "")
        .split(/[;•]/).map(s => s.trim()).filter(Boolean)
        .map(o => `<li>${o}</li>`).join("");

      const more = cs.Link ? `<a class="btn btn-outline" target="_blank" rel="noopener" href="${cs.Link}">View Case</a>` : "";

      return `
      <article class="case-card">
        <div class="case-meta">
          <h3 class="case-title">${cs.Case_Title || "Case study"}</h3>
          ${tools ? `<div class="case-tools">${tools}</div>`:""}
        </div>
        ${cs.Brief ? `<p class="text-neutral-700">${cs.Brief}</p>`:""}
        ${cs.Approach ? `<p class="text-neutral-700"><strong>Approach:</strong> ${cs.Approach}</p>`:""}
        ${outcomes ? `<ul class="case-outcomes">${outcomes}</ul>`:""}
        ${more ? `<div class="mt-2">${more}</div>`:""}
      </article>`;
    }).join('');
  }

  // ---------------- TESTIMONIALS (carousel) ----------------
  function renderTestimonials(rows = []) {
    const strip = document.querySelector('[data-testimonials-strip]');
    if (!strip) return;

    const visible = rows.filter(t => String(t.Status || '').toLowerCase() !== 'draft');

    strip.innerHTML = visible.map(t => `
      <figure class="testi-card">
        <blockquote class="testi-quote">“${t.Quote || ''}”</blockquote>
        <figcaption class="testi-meta">${t.Name || ''}${t.Role ? `, ${t.Role}`:''}${t.Company ? ` — ${t.Company}`:''}</figcaption>
        ${t.Link ? `<a class="text-sm underline mt-2 inline-block" href="${t.Link}" target="_blank" rel="noopener">Source</a>`:''}
      </figure>
    `).join('');
  }

  function wireTestimonialsNav(){
    const wrap = document.querySelector('.testi-wrap');
    if (!wrap) return;
    const strip = wrap.querySelector('[data-testimonials-strip]');
    wrap.querySelector('[data-testi-prev]')?.addEventListener('click', () => strip.scrollBy({left:-360,behavior:'smooth'}));
    wrap.querySelector('[data-testi-next]')?.addEventListener('click', () => strip.scrollBy({left:360,behavior:'smooth'}));

    // keyboard access
    wrap.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft')  strip.scrollBy({left:-360,behavior:'smooth'});
      if (e.key === 'ArrowRight') strip.scrollBy({left:360,behavior:'smooth'});
    });
  }

// 3a) Enhance renderBeyond to include large image + meta for the lightbox
function renderBeyond(items = []) {
  const strip = document.querySelector('[data-beyond-strip]');
  if(!strip){ console.warn("[Portfolio] Beyond strip not found."); return; }

  const drive = id => id && !String(id).startsWith('http')
    ? `https://lh3.googleusercontent.com/d/${id}=w1600` : (id || '');

  strip.innerHTML = items.map((b,i)=> {
    const img = drive(b.Image_URL_or_DriveID);
    const large = drive(b.Large_Image_URL_or_DriveID || b.Image_URL_or_DriveID);
    const title = b.Title || `Sketch ${i+1}`;
    const cap = b.Caption || '';
    const credit = b.Photo_Credit || '';
    return `
      <button class="bc-card sketch-item" data-bc='${JSON.stringify({img: large, title, cap, credit}).replace(/'/g,"&#39;")}'>
        <div class="bc-overlay">
          <h3 class="bc-title">${title}</h3>
          ${cap ? `<p class="bc-cap">${cap}</p>`:''}
        </div>
        <img class="bc-img" src="${img}" alt="${title}" loading="lazy">
      </button>
    `;
  }).join('');
}

// 3b) Wire scroll arrows
function wireBeyondScroll(){
  const scroller = document.querySelector('.bc-scroller');
  document.querySelector('[data-bc-prev]')?.addEventListener('click',()=> scroller?.scrollBy({left:-360,behavior:'smooth'}));
  document.querySelector('[data-bc-next]')?.addEventListener('click',()=> scroller?.scrollBy({left: 360,behavior:'smooth'}));
}

// 3c) Lightbox: open on click of any sketch-item
function wireBeyondLightbox(){
  const modal = document.getElementById('beyond-modal');
  const content = document.getElementById('beyond-modal-content');
  if (!modal || !content) return;

  document.addEventListener('click', (e)=>{
    const btn = e.target.closest('.sketch-item');
    if(!btn) return;

    const data = btn.getAttribute('data-bc');
    if(!data) return;
    const { img, title, cap, credit } = JSON.parse(data);

    content.innerHTML = `
      <div class="relative h-64 md:h-96 mb-6 overflow-hidden rounded-lg">
        <img src="${img}" alt="${title}" class="w-full h-full object-cover">
        ${credit ? `<div class="absolute bottom-2 right-2 text-xs text-white bg-black/60 px-2 py-1 rounded">${credit}</div>`:''}
      </div>
      <h2 class="text-2xl md:text-3xl font-bold mb-2">${title}</h2>
      ${cap ? `<p class="text-neutral-700 mb-6">${cap}</p>`:''}
    `;
    modal.classList.add('show');
  });

  modal.addEventListener('click', (e)=>{
    if (e.target.hasAttribute('data-close') || e.target.closest('[data-close]')) {
      modal.classList.remove('show');
    }
  });

  // close on Escape
  document.addEventListener('keydown', (e)=>{
    if (e.key === 'Escape' && modal.classList.contains('show')) modal.classList.remove('show');
  });
}

  // ---------------- BOOT ----------------
  async function init(){
    try{
      const { skills, projects, caseStudies, beyondCode, testimonials } = await getData();

      if (skills)        renderSkills(skills);
      if (projects)      renderProjects(projects, caseStudies || []);
      if (caseStudies)   renderCaseStudies(caseStudies);
      if (testimonials)  renderTestimonials(testimonials);
      if (beyondCode)    renderBeyond(beyondCode);

      renderContactForm();
      wireModal();
      wireTestimonialsNav();
      wireBeyondScroll();
      wireBeyondLightbox();

      // Year in footer
      const y = document.getElementById("year");
      if (y) y.textContent = new Date().getFullYear();
    }catch(err){
      console.error("[Portfolio] Hydration error:", err);
    }
  }

  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", init, { once: true })
    : init();
})();

(() => {
  const form = document.getElementById('contact-form');
  const note = document.getElementById('cf-note');
  const modal = document.getElementById('success-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!form) return;

  const openModal = () => modal?.classList.add('show');
  const closeModal = () => modal?.classList.remove('show');

  modal?.addEventListener('click', (e) => {
    if (e.target.matches('[data-close]')) closeModal();
  });
  closeBtn?.addEventListener('click', closeModal);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    note.textContent = 'Sending…';
    note.className = 'form-note';

    const endpoint = form.getAttribute('data-endpoint') || '';
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      if (!endpoint) throw new Error('Missing form endpoint');

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        form.reset();
        note.textContent = '';
        openModal();
      } else {
        note.textContent = 'Could not send. Please email me directly.';
        note.className = 'form-note error';
      }
    } catch (err) {
      note.textContent = 'Network error. Please email me directly.';
      note.className = 'form-note error';
      console.error(err);
    }
  });
})();