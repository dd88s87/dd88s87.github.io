(() => {
  const data = window.publicationData;
  if (!data) {
    return;
  }

  const highlightAuthor = (html) => {
    let text = String(html).replace(
      /<strong>Xuan Zhang<\/strong>/g,
      '<span class="author-me">Xuan Zhang</span>'
    );
    if (!text.includes("author-me")) {
      text = text.replace(/\bXuan Zhang\b/g, '<span class="author-me">Xuan Zhang</span>');
    }
    return text;
  };

  const renderPublicationItems = (items) =>
    (items || [])
      .map((item) => {
        const extraHtml = item.extraHtml || "";
        const hasGithubLinkInExtra = /github\.com/i.test(extraHtml);
        const linksHtml = (item.links || [])
          .filter((link) => !(hasGithubLinkInExtra && /github\.com/i.test(link.href || "")))
          .map((link) => {
            if (link.html) {
              return link.html;
            }
            const icon = link.icon ? `<i class="${link.icon}"></i>` : "";
            const cls = link.className ? `link-chip ${link.className}` : "link-chip";
            return `<a class="${cls}" href="${link.href}">${icon}${link.text}</a>`;
          })
          .join("");
        const venueHtml = item.venue ? `${item.venue}
                <br>` : "";
        const thumbHtml =
          item.image && item.image.src
            ? `<a href="${item.image.src}"><img src="${item.image.src}" alt="${item.image.alt}" onerror="this.parentElement.outerHTML='<div class=\\'thumb-placeholder\\'>${item.title.split(':')[0]}</div>'"></a>`
            : `<div class="thumb-placeholder">${item.placeholderText || "Teaser"}</div>`;

        return `
          <tr class="publication-row">
            <td class="content-cell">
              <span class="papertitle">${item.title}</span>
              <br>
              <span class="authors-line">${highlightAuthor(item.authors)}</span>
              <br>
              ${venueHtml}
              ${linksHtml}
              ${extraHtml}
            </td>
            <td class="thumb-cell">
              ${thumbHtml}
            </td>
          </tr>
        `;
      })
      .join("");

  const renderPublications = (items, targetId) => {
    const container = document.getElementById(targetId);
    if (!container) {
      return;
    }
    container.innerHTML = renderPublicationItems(items);
  };

  renderPublications(data.selectedWorks, "selected-works");
})();
