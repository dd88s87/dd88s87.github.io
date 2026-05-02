(() => {
  const renderIntro = (data, targetId) => {
    const container = document.getElementById(targetId);
    if (!container || !data) {
      return;
    }

    const linesHtml = (data.sidebarLines || [])
      .map((line) => {
        if (typeof line === "string") {
          return `<p class="sidebar-line">${line}</p>`;
        }
        const level = line.level ? ` level-${line.level}` : "";
        return `<p class="sidebar-line${level}">${line.text}</p>`;
      })
      .join("");

    const linkItems = (data.links || []).map((link) => {
      const label = link.label ? ` aria-label="${link.label}" title="${link.label}"` : "";
      if (link.imgSrc) {
        return `<a href="${link.href}"${label}><img class="icon-hf" src="${link.imgSrc}" alt="${link.label || "Hugging Face"}"></a>`;
      }
      return `<a href="${link.href}"${label}><i class="${link.iconClass}"></i></a>`;
    });

    const linksHtml = linkItems
      .map((item, index) => {
        if (index === 0) {
          return item;
        }
        return `<span class="link-sep">|</span>${item}`;
      })
      .join("");

    const avatarHtml = data.avatar && data.avatar.src
      ? `<a href="${data.avatar.src}"><img alt="${data.avatar.alt}" src="${data.avatar.src}" class="hoverZoomLink avatar"></a>`
      : "";

    container.innerHTML = `
      <div class="sidebar-card">
        ${avatarHtml}
        <p class="sidebar-name">${data.name}</p>
        ${linesHtml}
        <div class="sidebar-links">${linksHtml}</div>
      </div>
    `;
  };

  const renderBiography = (data, targetId) => {
    const container = document.getElementById(targetId);
    if (!container || !data) {
      return;
    }
    const paragraphs = (data.bioParagraphs || [])
      .map((paragraph) => `<p>${paragraph}</p>`)
      .join("");
    container.innerHTML = paragraphs;
  };

  renderIntro(window.introData, "intro-sidebar");
  renderBiography(window.introData, "biography-content");

  const setupNavSpy = () => {
    const navLinks = Array.from(document.querySelectorAll(".nav-links a"));
    if (navLinks.length === 0) {
      return;
    }

    const sections = navLinks
      .map((link) => {
        const href = link.getAttribute("href") || "";
        const id = href.startsWith("#") ? href.slice(1) : "";
        const section = id ? document.getElementById(id) : null;
        return section ? { link, section } : null;
      })
      .filter(Boolean);

    if (sections.length === 0) {
      return;
    }

    const setActive = (activeLink) => {
      navLinks.forEach((link) => link.classList.toggle("active", link === activeLink));
    };

    const updateActiveByScroll = () => {
      const offset = 110;
      const scrollPos = window.scrollY + offset;
      let current = sections[0];
      for (const item of sections) {
        const top = item.section.getBoundingClientRect().top + window.scrollY;
        if (top <= scrollPos) {
          current = item;
        } else {
          break;
        }
      }
      setActive(current.link);
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(() => {
          updateActiveByScroll();
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    navLinks.forEach((link) => {
      link.addEventListener("click", () => setActive(link));
    });
    updateActiveByScroll();
  };

  setupNavSpy();
})();
