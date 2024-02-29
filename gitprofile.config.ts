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
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 0, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['christos-vasileiou/my-project1', 'christos-vasileiou/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['christos-vasileiou/mobile-SRGAN', 'christos-vasileiou/vlsi-design', 'christos-vasileiou/forestland-fire-detection', 'christos-vasileiou/algorithms4logic-synth', 'christos-vasileiou/A-Sobel-filter-edge-detector-on-FPGA'], // List of repository names to display. example: ['christos-vasileiou/my-project1', 'christos-vasileiou/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Forestland Fire Detection',
          description:
            'Wildfires is a major social problem considering that the aftermath can be costly for the environment (losses of animals, properties, cultural heritage) as well as for the society, causing loss of human life. Many efforts have been made in order to develop applications or systems able to detect wildfires early and, thus, prevent or even limit their negative consequences. Using satellites may limit the frequency of wildfire detection and as a consequence the correct and timely assessment of the situation. The solution is to use a system capable of timely fire detection on the surface near the fire spot through visual stimulation, using the conjunction of two disciplines of the computer science. Artificial intelligence, (and specifically, computer vision) in conjunction with the deployment of hardware accelerators and embedded systems. My thesis is based on the architecture of the You-Only-Look-Once (YOLO) algorithm which is used to detect objects with specific features like color, shape, form, etc. The architecture acceleration runs on the Edge TPU of the Coral Dev Board device developed by Google, having the edge over other TPUs that it runs extremely power efficient.',
          imageUrl:
            'https://github.com/christos-vasileiou/forestland-fire-detection/blob/master/my_data/fire_91.jpg?raw=true',
          link: 'christos-vasileiou/forestland-fire-detection',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Christos Vasileiou',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'chrivasileiou',
    twitter: 'christos_vasil',
    mastodon: '',
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
    fileUrl:
      'https://drive.google.com/file/d/1a8gKO3nJnQYRN1qHmhzsYyNWcMoOIwqG/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'C',
    'PyTorch',
    'Git',
    'Tensorflow',
    'huggingface',
    'scikit-learn',
    'C++',
    'MATLAB',
    'Keras',
    'NLTK',
    'spaCy',
    'R',
    'CUDA',
  ],
  experiences: [
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
      link: 'https://www.coursera.org/learn/generative-ai-with-llms/',
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
      institution: 'University of Texas at Dallas (UTD)',
      degree: 'PhD',
      from: '2021',
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
      degree: 'BS + MS',
      from: '2014',
      to: '2020',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 3, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
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
  footer: `Made with <a 
      class="text-primary" href="https://github.com/christos-vasileiou/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
