// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-excited-to-start-my-phd-jcu-s-centre-for-tropical-environmental-and-sustainability-science-sparkles",
          title: 'Excited to start my PhD @ JCU’s Centre for Tropical Environmental and Sustainability...',
          description: "",
          section: "News",},{id: "news-won-best-proposal-presentation-at-zoology-and-ecology-north-queensland",
          title: 'Won best proposal presentation at Zoology and Ecology North Queensland!',
          description: "",
          section: "News",},{id: "news-learned-hands-on-how-to-apply-terrestrial-laser-scanning-in-the-field-with-people-from-ghent-university-s-q-forest-lab",
          title: 'Learned hands-on how to apply terrestrial laser scanning in the field with people...',
          description: "",
          section: "News",},{id: "news-campaigned-with-leeds-university-s-thermos-project-people-to-understand-the-effects-of-heat-and-drought-on-rainforest-functioning",
          title: 'Campaigned with Leeds University’s THERMOS project people to understand the effects of heat...',
          description: "",
          section: "News",},{id: "news-my-first-thesis-chapter-has-just-been-published-in-agricultural-and-forest-meteorology",
          title: 'My first thesis chapter has just been published in Agricultural and Forest Meteorology!...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2025_1/";
            },},{id: "news-so-excited-to-present-at-the-esa2025-conference-in-adelaide",
          title: 'So excited to present at the ESA2025 conference in Adelaide 🌳',
          description: "",
          section: "News",},{id: "news-my-second-thesis-chapter-came-out-as-a-preprint-today",
          title: 'My second thesis chapter came out as a preprint today! 🌟',
          description: "",
          section: "News",},{id: "news-published-a-thesis-chapter-in-hydrological-processes",
          title: 'Published a thesis chapter in Hydrological Processes! 🎉',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2026_2/";
            },},{id: "projects-evolutionary-and-environmental-drivers-of-tropical-dry-forest-community-structure",
          title: 'Evolutionary and environmental drivers of tropical dry forest community structure',
          description: "MSc project at Federal University of Lavras (2018-2020)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2018-2020_masters_project/";
            },},{id: "projects-drought-effects-on-rainforest-plant-water-use",
          title: 'Drought effects on rainforest plant water use',
          description: "PhD project at James Cook University (2023-2027)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2023-2027_phd_project/";
            },},{id: "projects-drought-effects-on-rainforest-plant-water-use",
          title: 'Drought effects on rainforest plant water use',
          description: "PhD project at James Cook University (2023-2027)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/phd_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
