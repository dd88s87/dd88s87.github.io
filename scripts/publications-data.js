(() => {
  const citationBadge = (paperId) => `
    <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BUlReskAAAAJ&citation_for_view=BUlReskAAAAJ:${paperId}" target="_blank">
      <svg width="88" height="20" role="img">
        <g clip-path="url(#r)">
          <rect width="51" height="20" fill="#555"/>
          <rect x="51" width="37" height="20" fill="#007ec6"/>
          <rect width="88" height="20" fill="url(#s)"/>
        </g>
        <g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110">
          <text x="265" y="140" transform="scale(.1)" fill="#fff" textLength="410">Citations</text>
          <text class='show_paper_citations' data='BUlReskAAAAJ:${paperId}' x="685" y="140" transform="scale(.1)" fill="#fff"></text>
        </g>
      </svg>
    </a>
  `;

  const countCounts = {
    image: { src: "images/count_counts_teaser.png", alt: "Count Counts teaser" },
    title: "Count Counts: Motivating Exploration in LLM Reasoning with Count-based Intrinsic Rewards",
    authors: "<strong>Xuan Zhang</strong>, Ruixiao Li, Zhijian Zhou, Long Li, Yulei Qin, Ke Li, Xing Sun, Xiaoyu Tan, Chao Qu, Yuan Qi.",
    links: [
      { href: "https://arxiv.org/abs/2510.16614", text: "arXiv", className: "arxiv", icon: "ai ai-arxiv" }
    ],
    extraHtml: `
      <p></p>
      <br>
      <a href="https://arxiv.org/abs/2510.16614" target="_blank"><img src="http://img.shields.io/badge/cs.AI-arXiv%3A2510.16614-B31B1B.svg" /></a>
      ${citationBadge("u5HHmVD_uO8C")}
    `
  };

  const diffusionReasoner = {
    image: { src: "images/diffusion_reasoner_teaser.png", alt: "Diffusion Reasoner teaser" },
    title: "Constraints-Guided Diffusion Reasoner for Neuro-Symbolic Learning",
    authors: "<strong>Xuan Zhang</strong>, Zhijian Zhou, Weidi Xu, Yanting Miao, Chao Qu, Yuan Qi.",
    venue: '<span class="venue venue-aaai">AAAI</span>, 2026',
    links: [
      { href: "https://ojs.aaai.org/index.php/AAAI/article/view/40074", text: "paper", className: "project", icon: "fa fa-file-text-o" }
    ],
    extraHtml: `
      <p></p>
      <br>
      ${citationBadge("u-x6o8ySG0sC")}
    `
  };

  window.publicationData = {
    selectedWorks: [
      countCounts,
      diffusionReasoner
    ]
  };
})();
