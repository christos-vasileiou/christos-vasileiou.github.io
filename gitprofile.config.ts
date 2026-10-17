// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'christos-vasileiou', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/christos-vasileiou/christos-vasileiou.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/christos-vasileiou/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['christos-vasileiou/my-project1', 'christos-vasileiou/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['christos-vasileiou/atpgllm', 'christos-vasileiou/logic-synth-ic', 'christos-vasileiou/sobel-filter-FPGA'], // List of repository names to display. example: ['christos-vasileiou/my-project1', 'christos-vasileiou/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      // `link` is optional: leave it out for private repositories.
      projects: [
        {
          title: 'ATPG-LLM: The Language of Test',
          description:
            'Teaching large language models to generate test patterns for integrated circuits. Open LLMs (IBM Granite, Qwen) are fine-tuned to produce test vectors that detect target faults in gate-level netlists, first with supervised fine-tuning and then with reinforcement learning using Group reward-Decoupled Normalization Policy Optimization (GDPO), a GRPO variant, with fault-simulation rewards. Includes graph neural network netlist encoders and simulator-verified best-of-N and search-based decoding.',
          link: 'https://github.com/christos-vasileiou/atpgllm',
        },
        {
          title: 'ASAP7 Language of Test Dataset',
          description:
            'End-to-end pipeline that builds the training data for ATPG-LLM: open RTL Verilog designs are synthesized to gate-level netlists on the ASAP7 7nm PDK with Synopsys Design Compiler and checked with Formality, test patterns and faults are generated with TetraMAX ATPG and fault simulation, and the results are converted into fault-aware LLM training examples.',
          link: 'https://github.com/christos-vasileiou/asap7-language-of-test',
        },
        {
          title: 'Robust Mask Scheduler',
          description:
            'Machine learning planner that recommends the next mask-set action for a semiconductor lot. It uses inline metrology already collected to score the remaining feasible mask paths, with gradient-boosted virtual-metrology models and a causal transformer over the inline measurements.',
        },
        {
          title: 'Mobile-SRGAN',
          description:
            'The first CNN-based super-resolution algorithm for freehand smartphone mmWave synthetic aperture radar (SAR) imaging in the near field. It recovers high-resolution, low-noise images from irregularly sampled radar data at low computational cost, suited to mobile devices. Published at IEEE ICIP 2022.',
          imageUrl: '/projects/mobile-srgan.png',
          link: 'https://ieeexplore.ieee.org/document/9897190',
        },
        {
          title: 'Forestland Fire Detection',
          description:
            'Early wildfire detection on low-power edge hardware: a YOLOv3 object detector trained to recognize fire and smoke, accelerated on the Edge TPU of the Google Coral Dev Board. Diploma thesis at the University of Thessaly.',
          imageUrl: '/projects/forestland-fire-detection.jpg',
          link: 'https://github.com/christos-vasileiou/forestland-fire-detection',
        },
        {
          title: 'Logic Synthesis for IC Design',
          description:
            'Logic synthesis algorithms in C, built as an extension of a custom Tcl shell: cube and sum-of-products operations (intersection, cover, sharp), kernel extraction, algebraic division, and critical-path analysis on circuit graphs. Coursework for CAD Algorithms (ECE431) at the University of Thessaly.',
          link: 'https://github.com/christos-vasileiou/logic-synth-ic',
        },
      ],
    },
  },
  seo: {
    title: 'Christos Vasileiou | PhD Student, UC San Diego',
    description:
      'Christos Vasileiou, PhD student at UC San Diego, researching large language models and reinforcement learning for automatic test pattern generation (ATPG) of integrated circuits.',
    imageURL: 'https://github.com/christos-vasileiou.png?size=460',
    // Public URL of the site, used for the canonical link, sitemap and structured data.
    siteUrl: 'https://christos-vasileiou.github.io/',
    // Short line shown under your name in search-friendly page content.
    tagline:
      'PhD student at UC San Diego · LLMs & reinforcement learning for IC test generation (ATPG)',
    // Topics added to structured data so search engines associate them with your name.
    knowsAbout: [
      'Large Language Models',
      'Reinforcement Learning',
      'Automatic Test Pattern Generation',
      'Electronic Design Automation',
      'Integrated Circuit Testing',
      'Machine Learning',
    ],
    // Other profiles of yours (Google Scholar, ORCID, ResearchGate, ...). GitHub, LinkedIn
    // and Twitter/X from `social` are added automatically.
    sameAs: [] as string[],
    // Google Search Console > Add property > URL prefix > "HTML tag": paste only the content="..." value.
    googleSiteVerification: '',
    // Bing Webmaster Tools > "HTML Meta Tag": paste only the content="..." value.
    bingSiteVerification: '',
  },
  social: {
    linkedin: 'chrivasileiou',
    twitter: 'christos_vasil',
    mastodon: '',
    researchGate: '',
    googleScholar: 'ItNkOOYAAAAJ', // the user= value from your Google Scholar profile URL
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'chrivasileiou2@gmail.com',
  },
  resume: {
    // Generic CV, compiled from curriculum_vitae/Christos_Vasileiou_Generic.tex (web copy: no phone number).
    fileUrl: '/Christos_Vasileiou_CV.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'C',
    'PyTorch',
    'Git',
    'huggingface',
    'LangChain',
    'scikit-learn',
    'C++',
    'Tensorflow',
    'Keras',
    'NLTK',
    'spaCy',
    'CUDA',
  ],
  experiences: [
    {
      company: 'Intel Corporation',
      position: 'Technology CAD Software Research Engineer/Scientist Internship',
      from: 'May 2025',
      to: 'August 2025',
      companyLink: 'https://intel.com',
    },
    {
      company: 'Intel Corporation',
      position: 'Technology CAD Software Research Engineer/Scientist Internship',
      from: 'May 2024',
      to: 'August 2024',
      companyLink: 'https://intel.com',
    },
    {
      company: 'Intel Corporation',
      position: 'ML-Based Pathfinding Test Developer',
      from: 'May 2022',
      to: 'August 2022',
      companyLink: 'https://intel.com',
    },
    {
      company: 'CAS Lab',
      position: 'Asynchronous Hardware Designer',
      from: 'June 2018',
      to: 'September 2018',
      companyLink: 'https://caslab.e-ce.uth.gr/',
    },
  ],
  certifications: [
    {
      name: 'Artificial Intelligence 2.0: AI, Python, DRL',
      body: 'Introduced to the Foundation Techniques of Deep Reinforcement Learning \& implementation of (Deep) Q-Learning, Policy Gradient, Actor Critic, Deep Deterministic Policy Gradient (DDPG), Twin-Delayed DDPG (TD3)',
      year: '2024',
      link: 'https://drive.google.com/file/d/1hwCb--ME7ki4XFXmI-BtNhQ2WOhb8zXj/view?usp=sharing',
    },
    {
      name: 'Generative AI with Large Language Models',
      body: 'Introduced to Parameter-efficient Fine Tuning (PEFT), Reinforcement learning from human feedback (RLHF), Chain-of-Thought Prompting (CoT) \& Retrieval Augmented Generation (RAG)',
      year: '2023',
      link: 'https://drive.google.com/file/d/1LiSkURplKL7wwzsJA8hpjsnIJ5M6IFQ6/view?usp=sharing',
    },
    {
      name: 'Data Science: Transformers for Natural Language Processing',
      body: 'Understood self-attention and in-depth theory behind transformers (encoder, decoder, and seq2seq architectures) and applied transformers to real-world tasks',
      year: '2023',
      link: 'https://drive.google.com/file/d/11H0HiFhwUFURELyV4Sg5eCpwMG7Od_pG/view?usp=sharing',
    },
    {
      name: 'Structuring Machine Learning Projects',
      body: '',
      year: '2019',
      link: 'https://drive.google.com/file/d/1b6lsacCXtEzgVcKRJt5E3cCfV2ecHM6D/view?usp=sharing',
    },
    {
      name: 'Convolutional Neural Networks',
      body: '',
      year: '2019',
      link: 'https://drive.google.com/file/d/1ipWQfDoHPk1TV243GiHldeY8fR0rjqak/view?usp=sharing',
    },
    {
      name: 'Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization',
      body: '',
      year: '2019',
      link: 'https://drive.google.com/file/d/1Li7zLmvmWJx5Fdyfd1HAjLvSFvSN6mys/view?usp=sharing',
    },
  ],
  educations: [
    {
      institution: 'University of California, San Diego (UCSD)',
      degree: 'PhD',
      from: '2025',
      to: 'Present',
    },
    {
      institution: 'University of Texas at Dallas (UTD)',
      degree: 'MS',
      from: '2021',
      to: '2023',
    },
    {
      institution: 'University of Thessaly, Volos, Greece',
      degree: 'Integrated Master of Engineering',
      from: '2014',
      to: '2020',
    },
  ],
  publications: [
    {
      title: 'Teaching Llamas to Test: A Language-Based Approach',
      conferenceName: '2025 IEEE International Test Conference (ITC)',
      journalName: '',
      authors: 'Christos Vasileiou, Yiorgos Makris',
      link: 'https://ieeexplore.ieee.org/document/11219864',
      description:
        'A pilot study exploring whether Large Language Models (LLMs) can generate test vectors for stuck-at faults in gate-level combinational circuits. Unlike conventional ATPG, which relies on algorithmic Boolean reasoning, LLMs lack such capability. However, we hypothesize that a “language of test” exists, capable of capturing how input stimuli expose differences between fault-free and faulty netlist functionality - analogous to how natural language expresses meaning through symbol substitution. This stems from observing that netlists, like text, comprise functional paths of logic gates combining signals, akin to sentences combining words. To test this hypothesis, we generated 958K test vectors across 40K randomly generated combinational circuits, using fault-simulation results to fine-tune a 7 billion parameter Llama-2 model via Low-Rank Adaptation (LoRA), Supervised Fine-Tuning (SFT), and Group Relative Policy Optimization (GRPO) to mitigate hallucinations. On unseen netlists, the model generates test vectors for target faults with over 80\% success—far exceeding random test generation. While only preliminary, these findings suggest LLMs can learn this “language of test” and aid test generation, warranting further research into training, fine-tuning, and prompt engineering to boost accuracy and utility.',
    },
    {
      title: 'Unveiling the Mask: Trusted Semiconductor Manufacturing through Wafer-Level Mask-Set Attestation',
      conferenceName: '2025 IEEE International Conference Computer-Aided Design (ICCAD)',
      journalName: '',
      authors: 'Suraag Telakulla, Ching-Yi Chang, Matthew Nigh, Christos Vasileiou, Yiorgos Makris',
      link: 'https://www.researchgate.net/profile/Ching-Yi-Chang-4/publication/396514306_Unveiling_the_Mask_Trusted_Semiconductor_Manufacturing_through_Wafer-Level_Mask-Set_Attestation/links/68efee2702d6215259bbff75/Unveiling-the-Mask-Trusted-Semiconductor-Manufacturing-through-Wafer-Level-Mask-Set-Attestation.pdf',
      description:
        'We introduce machine learning-based solutions for differentiating wafers fabricated using trusted and untrusted mask-sets based on the typical metrology or wafer acceptance tests collected during semiconductor manufacturing and testing. Our methods leverage the systematic nature of process variation and capture the subtle causality between mask modifications and either physical dimensions or electrical characteristics of the produced silicon, which can then be used for the purpose of wafer-level mask-set attestation. Effectiveness of our solutions is demonstrated on a dataset of inline and e-test measurements from 8000 wafers fabricated with multiple variants of a mask-set in the GlobalFoundries 12LP FinFET technology node.',
    },
    {
      title: 'Efficient CNN-Based Super Resolution Algorithms for Mmwave Mobile Radar Imaging',
      conferenceName: '2022 IEEE International Conference on Image Processing (ICIP)',
      journalName: '',
      authors: 'Christos Vasileiou, Josiah W. Smith, Shiva Thiagarajan, Matthew Nigh, Yiorgos Makris, Murat Torlak',
      link: 'https://ieeexplore.ieee.org/document/9897190',
      description:
        'In this paper, we introduce the first CNN-based super resolution algorithm for mobile freehand SAR imaging in the near-field. Rather than training on randomly placed point targets, we improve upon previous work by incorporating solid, intricate objects in the simulation that are more representative of real-world scenarios. The proposed CNN algorithm is applied to images recovered by the EMPM algorithm yielding high-resolution low-noise SAR images and outperforming previous techniques. The Mobile-SRGAN is the first SAR super resolution algorithm developed for freehand radar imaging, a more difficult task than traditional SAR super resolution, and efficiently recovers high-resolution images with low computational cost, deeming it fit for computationally constrained applications.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 3, // How many articles to display. Max is 10.
  },
  // Privacy-friendly visitor counter. Create a free site at https://www.goatcounter.com
  // and put its code here (the "mysite" in mysite.goatcounter.com).
  goatcounter: {
    code: 'christos-vasileiou',
  },
  googleAnalytics: {
    id: 'G-7VCCZ9Z2WP', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '', // 3876526
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'procyon',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'emerald',
      'corporate',
      'synthwave',
      'halloween',
      'forest',
      'Luxury',
      'business',
      'night',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#ff944d',
      secondary: '#219aaf',
      accent: '#0066ff',
      neutral: '#efedf4',
      'base-100': '#08252b',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `© 2026 Christos Vasileiou`,

  enablePWA: false,
};

export default CONFIG;
