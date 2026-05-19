(() => {
  const avatar = (name, bg) =>
    `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=200&background=${bg}&color=ffffff&bold=true&format=png`;

  window.researchExperienceData = [
    {
      logo: { src: "images/Tencent_logo.png", alt: "Tencent Youtu Lab logo" },
      title: "Tencent Youtu Lab",
      topic: "Reinforcement learning; world models and code agents (data curation and training)",
      location: "Shanghai, China",
      dates: "Aug. 2025 – Present"
    },
    {
      logo: { src: avatar("INF", "1a4fb5"), alt: "INF logo" },
      title: "INF (Infinite Light-Year)",
      topic: "Reinforcement learning research and formal theorem proving with Lean4",
      location: "Shanghai, China",
      dates: "Apr. 2025 – Aug. 2025"
    },
    {
      logo: { src: avatar("SAIS", "0b7a5a"), alt: "Shanghai Academy of AI for Science logo" },
      title: "Shanghai Academy of AI for Science",
      topic: "Weather prediction in latent space with VAE + Swin Transformer",
      location: "Shanghai, China",
      dates: "Sep. 2024 – Apr. 2025"
    },
    {
      logo: { src: avatar("Bosch", "ea0016"), alt: "Bosch logo" },
      title: "Bosch China Central Research",
      topic: "RAG & agent survey and innovation reports; internal knowledge-base Q&A platform",
      location: "Shanghai, China",
      dates: "Jan. 2024 – Jun. 2024"
    },
    {
      logo: { src: avatar("INF", "1a4fb5"), alt: "INF logo" },
      title: "INF (Infinite Light-Year)",
      topic: "Medical large language models: data collection and training corpus construction",
      location: "Shanghai, China",
      dates: "Jul. 2023 – Nov. 2023"
    },
    {
      logo: { src: avatar("Fudan", "1768d1"), alt: "Fudan University logo" },
      title: "Fudan University NLP Lab",
      topic: "Gender bias in NLP: model evaluation and debiasing (Xiyuan undergraduate research program)",
      location: "Shanghai, China",
      dates: "Oct. 2022 – May 2023"
    }
  ];
})();
