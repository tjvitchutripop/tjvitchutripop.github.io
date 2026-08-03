export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
  /**
   * Optional paths (or URLs) for photos shown below this news item.
   * Put local files in /public and reference them from the site root, e.g.
   * images: ["/news/faspe-1.jpg", "/news/faspe-2.jpg"].
   */
  images?: string[];
}

export const newsData: News[] = [
  // If you don't want to show news, just make the array empty.
  {
    date: "July 2026",
    title: "Organized Workshop for Yale Pathways to Science",
    description: "For the second year in a row, I hosted multiple workshop sessions on robotics + AI for Yale Pathways to Science, a summer program for local New Haven high school students interested in STEM.",
    link: "https://onha.yale.edu/public-schools-and-youth/yale-pathways-to-science",
    images: ["/news/pathways2026-1.jpg", "/news/pathways2026-2.jpg", "/news/pathways2026-3.jpg"],
  },
  {
    date: "March 2025",
    title: "Selected as 2025 FASPE Design & Technology Fellow",
    description: "I'm excited to share that I have been selected as a 2025 FASPE Design & Technology Fellow! FASPE is a fully-funded intensive program in professional ethics and ethical leadership held over two weeks in Germany and Poland, with a network of over 900 alumni worldwide across six professional disciplines. I look forward to learning a lot and exchanging ideas on ethical decision-making as a fellow!",
    link: "https://www.faspe-ethics.org/2025-dt-fellows/",
  },
  {
    date: "August 2024",
    title: "Starting Ph.D. at Yale!",
    description: "I begin my Ph.D. in Computer Science at Yale University, where I'll be working in the APOLLO Lab led by Daniel Rakita.  I'm excited to continue working on research in robot learning for manipulation!",
    link: "https://apollo-lab-yale.github.io",
  },
  {
    date: "May 2024",
    title: "Graduated from the University of Virginia 🎓 🎉",
    description: "I've completed my B.S. Computer Science and B.A. Philosophy at the University of Virginia with highest distinction!",
    // link: "https://engineering.virginia.edu/department/computer-science/about/cs-awards-and-honors",
  },
  {
    date: "May 2024",
    title: "2024 Outstanding Undergraduate Research Award by UVA CS Department",
    description: "I'm excited to share that I was selected to receive the Outstanding Undergraduate Research Award by the UVA CS Department for the 2023-2024 academic year!",
    link: "https://engineering.virginia.edu/department/computer-science/about/cs-awards-and-honors",
  },
  {
    date: "March 2024",
    title: "Inducted into Raven Society",
    description: "I'm honored to have been inducted into the Raven Society, the oldest and most prestigious honorary society at the University of Virginia.",
    link: "https://aig.alumni.virginia.edu/raven/",
  },
  {
    date: "December 2023",
    title: "2024 Outstanding Undergraduate Researcher Award by the Computing Research Association",
    description: "I'm thrilled to share that I have received an honorable mention for the 2024 Outstanding Undergraduate Researcher Award by the Computing Research Association, which recognizes undergraduates in North America who show outstanding research potential in computing research!",
    link: "https://cra.org/about/awards/outstanding-undergraduate-researcher-award",
  },
  {
    date: "August 2023",
    title: "Wrapping up RISS at Carnegie Mellon University",
    description: "I wrapped up my summer at CMU by presenting my work at the RISS Showcase. Thank you to my mentors at R-PAD, the RISS program organizers, and all sponsors for making this opportunity possible!",
    link: "https://riss.ri.cmu.edu/research-showcase/summer-scholars-2023-project-posters/",
  },
  {
    date: "June 2023",
    title: "Starting RISS at Carnegie Mellon University!",
    description: "I begin my summer research experience with the R-PAD Lab at Carnegie Mellon University through the Robotics Institute Summer Scholars (RISS) program.",
    link: "https://riss.ri.cmu.edu/meet-the-2023-ri-summer-scholars/",
  },
  {
    date: "May 2023",
    title: "2023 Outstanding Undergraduate Research Award by UVA CS Department",
    description: "I'm excited to share that I was selected to receive the Outstanding Undergraduate Research Award by the UVA CS Department for the 2022-2023 academic year!",
    link: "https://engineering.virginia.edu/department/computer-science/about/cs-awards-and-honors",
  },
  {
    date: "April 2023",
    title: "Best Oral Presentation at 2023 UVA Undergraduate Engineering Research and Design Symposium",
    description: "I was awarded best oral presentation (1st place) for my research talk on Lasso at the 2023 UVA Undergraduate Engineering Research and Design Symposium!",
    link: "https://engineering.virginia.edu/undergraduate-study/future-undergrads/special-academic-programs/rodman-scholars-program/rodman-scholars-research",
  },
  {
    date: "March 2023",
    title: "Oral Presentation on LASSO at 2023 ACC Meeting of the Minds",
    description: "I was selected as 1 of 5 undergraduate researchers to represent UVA at this year's ACC Meeting of the Minds!  I will be giving a talk on my research, LASSO, at the conference.",
    link: "https://www.research.undergraduate.vt.edu/accmom-conference-2023.html",
  }

];
