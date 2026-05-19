(() => {
  const orgAvatar = (name, bg) =>
    `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=200&background=${bg}&color=ffffff&bold=true&format=png`;

  window.introData = {
    name: "Xuan Zhang",
    sidebarLines: [
      { text: "PhD Student (2024–2029)", level: "primary" },
      { text: "Fudan University & SII", level: "primary" },
      { text: "Research Intern, Tencent Youtu Lab", level: "secondary" }
    ],
    bioParagraphs: [
      "I'm a PhD student (2024–2029) at Fudan University and the Shanghai Innovation Institute, advised by Prof. <a href=\"https://scholar.google.com/citations?user=0Q7pN4cAAAAJ\">Yuan Qi</a>. My research focuses on reinforcement learning for LLM reasoning and agents, and world models.",
      "I received my B.S. in Computer Science from Fudan University in 2024 (GPA 3.86/4.0, rank 1/102). I am currently a research intern at Tencent Youtu Lab."
    ],
    links: [
      { href: "mailto:24110240111@m.fudan.edu.cn", iconClass: "fa fa-envelope icon-lg icon-email", label: "Email" },
      { href: "https://github.com/dd88s87", iconClass: "fa fa-github icon-lg icon-github", label: "GitHub" },
      { href: "https://scholar.google.com/citations?user=BUlReskAAAAJ", iconClass: "ai ai-google-scholar icon-lg icon-scholar", label: "Google Scholar" }
    ],
    avatar: {
      src: "https://ui-avatars.com/api/?name=Xuan+Zhang&size=300&background=1768d1&color=ffffff&rounded=false&bold=true&format=png",
      alt: "profile photo"
    }
  };

  window.awardsData = [
    '<strong>Outstanding Graduate</strong>, Fudan University, 2024',
    '<strong>National Scholarship</strong>, 2023 (undergraduate)',
    '<strong>National Scholarship</strong>, 2022 (undergraduate)',
    '<strong>APMCM</strong> National Third Prize, 2022',
    '<strong>China Undergraduate Mathematics Competition</strong> (Shanghai, non-math), Second Prize, 2022',
    '<strong>Venustech Qiming Scholarship</strong>, Fudan University, 2021'
  ];

  window.researchExperienceData = [
    {
      logo: { src: "images/Tencent_logo.png", alt: "Tencent Youtu Lab logo" },
      title: "Tencent Youtu Lab",
      topic: "Reinforcement learning; world models and code agents (data curation and training)",
      location: "Shanghai, China",
      dates: "Aug. 2025 – Present"
    },
    {
      logo: { src: orgAvatar("INF", "1a4fb5"), alt: "INF logo" },
      title: "INF (Infinite Light-Year)",
      topic: "Reinforcement learning research and formal theorem proving with Lean4",
      location: "Shanghai, China",
      dates: "Apr. 2025 – Aug. 2025"
    },
    {
      logo: { src: orgAvatar("SAIS", "0b7a5a"), alt: "Shanghai Academy of AI for Science logo" },
      title: "Shanghai Academy of AI for Science",
      topic: "Weather prediction in latent space with VAE + Swin Transformer",
      location: "Shanghai, China",
      dates: "Sep. 2024 – Apr. 2025"
    },
    {
      logo: { src: orgAvatar("Bosch", "ea0016"), alt: "Bosch logo" },
      title: "Bosch China Central Research",
      topic: "RAG & agent survey and innovation reports; internal knowledge-base Q&A platform",
      location: "Shanghai, China",
      dates: "Jan. 2024 – Jun. 2024"
    },
    {
      logo: { src: orgAvatar("INF", "1a4fb5"), alt: "INF logo" },
      title: "INF (Infinite Light-Year)",
      topic: "Medical large language models: data collection and training corpus construction",
      location: "Shanghai, China",
      dates: "Jul. 2023 – Nov. 2023"
    },
    {
      logo: { src: orgAvatar("Fudan", "1768d1"), alt: "Fudan University logo" },
      title: "Fudan University NLP Lab",
      topic: "Gender bias in NLP: model evaluation and debiasing (Xiyuan undergraduate research program)",
      location: "Shanghai, China",
      dates: "Oct. 2022 – May 2023"
    }
  ];
})();
