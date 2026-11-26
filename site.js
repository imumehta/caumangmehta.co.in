// Renders both pages from content.js. You never need to edit this file.
(function () {
  const P = window.PROFILE;
  const $ = (id) => document.getElementById(id);
  const has = (id) => !!$(id);
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const set = (id, html) => { if (has(id)) $(id).innerHTML = html; };

  const ICONS = {
    email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 6L2 7"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64z"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57v-2.02c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .3"/></svg>',
    snapchat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 3c-3 0-5 2.2-5 5v2.2l-1.6.6c-.5.2-.4.9.1 1l1.3.4c-.5 1.5-1.7 3-3.3 3.5.4 1 1.7 1.2 2.6 1.4.2.7.4 1.3 1.1 1.2 1.3-.2 2.4.1 3.4.9.8.6 2 .6 2.8 0 1-.8 2.1-1.1 3.4-.9.7.1.9-.5 1.1-1.2.9-.2 2.2-.4 2.6-1.4-1.6-.5-2.8-2-3.3-3.5l1.3-.4c.5-.1.6-.8.1-1L17 10.2V8c0-2.8-2-5-5-5z"/></svg>',
    tool: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
    link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88zm8.41-18.3A11.81 11.81 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.48-8.41z"/></svg>'
  };

  // simple text fields: <span data-f="name">
  document.querySelectorAll("[data-f]").forEach((el) => (el.textContent = P[el.dataset.f] || ""));
  if (has("photo")) $("photo").src = P.photo;
  if (has("aboutPhoto")) $("aboutPhoto").src = P.aboutPhoto;
  document.querySelectorAll(".yr-now").forEach((el) => (el.textContent = new Date().getFullYear()));

  // ── home ──
  set("stats", (P.stats || []).map((s) => `<div class="stat rv"><b data-count="${esc(s.value)}">${esc(s.value === "{tools}" ? "–" : s.value)}</b><span>${esc(s.label)}</span></div>`).join(""));
  set("note", (P.note || []).map((p) => `<p>${esc(p)}</p>`).join("") + (P.signature ? `<div class="sign">— ${esc(P.signature)}</div>` : ""));
  set("interests", (P.interests || []).map((s) => `<span class="tag n">${esc(s)}</span>`).join(""));
  set("skills", (P.topSkills || []).map((s) => `<span class="tag">${esc(s)}</span>`).join(""));
  set("now", (P.now || []).map((n, i) => `
    <div class="now-item rv"><span class="n">0${i + 1}</span><h3>${esc(n.title)}</h3><p>${esc(n.text)}</p></div>`).join(""));
  set("journeyList", (P.milestones || []).map((m) => `
    <div class="jr rv"><div class="y">${esc(m.year)}</div><p>${esc(m.text)}</p></div>`).join(""));
  const talk = (t) => `
    <div class="talk rv"><div class="ph">${t.img ? `<img src="${esc(t.img)}" alt="${esc(t.title)}" loading="lazy">` : "🎤"}</div>
      <div class="bd"><div class="d">${esc(t.date)}</div><h3>${esc(t.title)}</h3><p>${esc(t.org)}</p></div></div>`;
  set("talks", (P.speaking || []).map(talk).join(""));
  set("gallery", (P.gallery || []).map((g) => `
    <figure class="rv"><img src="${esc(g.src)}" alt="${esc(g.caption)}" loading="lazy"><figcaption>${esc(g.caption)}</figcaption></figure>`).join(""));
  set("channels", (P.channels || []).map((c) => `
    <a class="channel rv" href="${esc(c.url)}" target="_blank" rel="noopener">
      <div class="wa">${ICONS.whatsapp}</div>
      <div><h3>${esc(c.name)}</h3><p>${esc(c.tagline)}</p><span>Follow on WhatsApp →</span></div>
    </a>`).join(""));
  set("posts", (P.posts || []).map((p) => `
    <div class="post rv"><div class="d">${esc(p.tag)}</div><h3>${esc(p.title)}</h3><p>${esc(p.summary)}</p>
      <a href="${esc(p.url)}" target="_blank" rel="noopener">Read on LinkedIn →</a></div>`).join(""));
  set("miniSocials", (P.socials || []).map((s) =>
    `<a href="${esc(s.url)}" target="_blank" rel="noopener" aria-label="${esc(s.label)}" title="${esc(s.label)}">${ICONS[s.icon] || ""}</a>`).join(""));
  const allLinks = (P.socials || []).concat((P.channels || []).map((c) => ({ icon: "whatsapp", label: "WhatsApp channel", handle: c.name, url: c.url })));
  set("socials", allLinks.map((s) => `
    <a class="social" href="${esc(s.url)}" target="_blank" rel="noopener">${ICONS[s.icon] || ""}<div>${esc(s.label)}<small>${esc(s.handle)}</small></div></a>`).join(""));

  // ── profile ──
  set("pfMeta", [
    `<span>📍 ${esc(P.location)}</span>`,
    `<a href="mailto:${esc(P.email)}">✉ ${esc(P.email)}</a>`,
    ...(P.socials || []).filter((s) => s.icon === "linkedin").map((s) => `<a href="${esc(s.url)}" target="_blank" rel="noopener">in/${esc(s.handle)}</a>`),
    `<a href="https://caumangmehta.co.in/">caumangmehta.co.in</a>`
  ].join(""));
  set("summary", `<p class="summary">${esc(P.summary || P.intro)}</p>`);
  set("experienceList", (P.experience || []).map((e) => `
    <div class="xp rv"><div class="when">${esc(e.dates)}${e.current ? "<b>Current</b>" : ""}</div>
      <div><h3>${esc(e.title)}</h3><div class="org">${esc(e.org)} · ${esc(e.place)}</div>
      ${e.points && e.points.length ? `<ul>${e.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>` : ""}</div></div>`).join(""));
  set("speakingList", (P.speaking || []).map((t) => `
    <div class="xp rv"><div class="when">${esc(t.date)}</div><div><h3>${esc(t.title)}</h3><div class="org">${esc(t.org)}</div></div></div>`).join(""));
  const rows = (list) => (list || []).map((i) => `
    <div class="list-item"><div><b>${esc(i.title)}</b><small>${esc(i.org)}</small></div>${i.dates ? `<span class="yr">${esc(i.dates)}</span>` : ""}</div>`).join("");
  set("education", rows(P.education));
  set("certs", rows(P.certifications));
  set("memberships", rows(P.memberships));
  set("languages", (P.languages || []).map((s) => `<span class="tag n">${esc(s)}</span>`).join(""));
  set("pfLinks", (P.socials || []).filter((s) => s.icon !== "email").map((s) =>
    `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} · <span style="color:var(--muted)">${esc(s.handle)}</span></a></li>`).join(""));
  if (has("updated")) $("updated").textContent = "Last updated " + P.lastUpdated;

  // ── tools (live from the CA Toolkit README) ──
  let toolCount = null;
  const paintCount = () => document.querySelectorAll('[data-count="{tools}"]').forEach((el) => {
    el.dataset.count = String(toolCount);
    countUp(el);
  });
  if (P.toolkit) {
    const T = P.toolkit;
    const md = (t) => t.replace(/\*\*|\*|`/g, "").trim();
    if (has("toolkitLink")) $("toolkitLink").href = T.site;
    fetch(`https://raw.githubusercontent.com/${T.repo}/${T.branch}/README.md`, { cache: "no-cache" })
      .then((r) => (r.ok ? r.text() : Promise.reject()))
      .then((readme) => {
        const sec = readme.split(/^## .*Tools\s*$/m)[1] || "";
        const table = sec.split(/^---|^## /m)[0];
        const tools = [];
        table.split(/\r?\n/).forEach((line) => {
          const c = line.split("|").map((x) => x.trim());
          const m = c[2] && c[2].match(/\[(.+?)\]\((.+?)\)/);
          if (!m) return;
          const folder = m[2].replace(/^\.\//, "");
          const type = md(c[3] || "");
          const url = /html/i.test(type) ? T.site + folder : `https://github.com/${T.repo}/tree/${T.branch}/${folder}`;
          tools.push({ no: c[1], name: md(m[1]), type, description: md(c[4] || ""), url });
        });
        if (!tools.length) return;
        toolCount = tools.length;
        paintCount();
        set("toolList", tools.map((t) => `
      <a class="svc tool" href="${esc(t.url)}" target="_blank" rel="noopener">
        <div class="d">Tool ${esc(t.no)}${t.type ? " · " + esc(t.type) : ""}</div>
        <h3>${esc(t.name)}</h3><p>${esc(t.description)}</p><span>Open tool →</span></a>`).join(""));
        set("pfTools", tools.map((t) => `<li><a href="${esc(t.url)}" target="_blank" rel="noopener">${esc(t.name)}</a></li>`).join(""));
        if (has("tools")) $("tools").hidden = false;
      })
      .catch(() => {});
  }

  // ── instagram ──
  if (P.instagram && has("igPosts")) {
    const IG = P.instagram;
    const show = (html) => {
      $("igPosts").innerHTML = html;
      if (has("igHandle")) $("igHandle").textContent = IG.handle;
      if (has("igFollow")) $("igFollow").href = `https://www.instagram.com/${IG.handle}/`;
      $("instagram").hidden = false;
    };
    const embeds = () => {
      if (!IG.posts || !IG.posts.length) return;
      show(IG.posts.slice(0, IG.count || 3).map((u) => `
      <div class="ig-embed"><blockquote class="instagram-media" data-instgrm-permalink="${esc(u)}" data-instgrm-version="14"><a href="${esc(u)}" target="_blank" rel="noopener">View this post on Instagram</a></blockquote></div>`).join(""));
      const sc = document.createElement("script");
      sc.async = true;
      sc.src = "https://www.instagram.com/embed.js";
      document.body.appendChild(sc);
    };
    if (!IG.feed) embeds();
    else fetch(IG.feed)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data) => {
        const posts = (Array.isArray(data) ? data : data.posts || []).slice(0, IG.count || 3);
        if (!posts.length) return embeds();
        const img = (p) => (p.sizes && p.sizes.medium && p.sizes.medium.mediaUrl) || p.thumbnailUrl || p.mediaUrl;
        const when = (t) => (t ? new Date(t).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) : "");
        show(posts.map((p) => `
      <a class="ig" href="${esc(p.permalink)}" target="_blank" rel="noopener">
        <div class="ig-media"><img src="${esc(img(p))}" alt="${esc((p.prunedCaption || p.caption || "Instagram post").slice(0, 120))}" loading="lazy"></div>
        <div class="ig-body"><div class="tool"><div class="d">${esc(when(p.timestamp))}</div></div><p>${esc(p.prunedCaption || p.caption || "")}</p></div>
      </a>`).join(""));
      })
      .catch(embeds);
  }

  // ── motion: count-up numbers, reveal on scroll, nav ──
  function countUp(el) {
    const raw = el.dataset.count || "";
    const m = raw.match(/^(\d+)(.*)$/);
    if (!m) return;
    if (el.dataset.done === raw) return;
    el.dataset.done = raw;
    const end = +m[1], suffix = m[2], start = end > 1900 ? end - 11 : 0;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { el.textContent = raw; return; }
    const t0 = performance.now(), dur = 1200;
    const step = (t) => {
      const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3);
      el.textContent = Math.round(start + (end - start) * e) + suffix;
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
    setTimeout(() => (el.textContent = raw), dur + 150); // in case animation frames are paused
  }
  const reveal = "IntersectionObserver" in window ? new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      en.target.classList.add("in");
      en.target.querySelectorAll("[data-count]").forEach((b) => { if (b.dataset.count !== "{tools}") countUp(b); });
      reveal.unobserve(en.target);
    });
  }, { threshold: 0.12 }) : null;
  document.querySelectorAll(".rv").forEach((el, i) => {
    el.style.transitionDelay = (i % 4) * 70 + "ms";
    if (reveal) reveal.observe(el); else el.classList.add("in");
  });
  // safety net: never leave content hidden
  setTimeout(() => document.querySelectorAll(".rv").forEach((el) => el.classList.add("in")), 4000);

  const nav = document.querySelector("nav");
  const onScroll = () => nav && nav.classList.toggle("scrolled", scrollY > 8);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  const btn = document.querySelector(".menu-btn"), links = document.querySelector(".links");
  if (btn && links) {
    btn.addEventListener("click", () => btn.setAttribute("aria-expanded", links.classList.toggle("open")));
    links.addEventListener("click", (e) => { if (e.target.tagName === "A") links.classList.remove("open"); });
  }
  // underline the menu item for the section in view
  const navLinks = [...document.querySelectorAll('.links a[href^="#"]')];
  if (navLinks.length && "IntersectionObserver" in window) {
    const spy = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (en.isIntersecting) navLinks.forEach((a) => a.classList.toggle("on", a.getAttribute("href") === "#" + en.target.id));
    }), { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("header[id], section[id], .pf-sec[id]").forEach((s) => spy.observe(s));
  }
})();
