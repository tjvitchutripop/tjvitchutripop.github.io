export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
  videoUrl?: string;
  slidesUrl?: string;
  posterUrl?: string;
  websiteUrl?: string;
  /** Give this publication a darker beige background to call it out. */
  highlight?: boolean;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2026",
    conference: "Preprint",
    title: "Stop Spatializing Time: Machine Learning Agents Should Learn Through Time, Not About Time",
    authors: "Teeratham Vitchutripop, Alyssa Quarles, Wenhe Zhang, Daniel Rakita",
    paperUrl: "https://zenodo.org/records/21513844",
    highlight: true,
  },
  {
    year: "2026",
    conference: "In Submission",
    title: "An Analysis of Streaming Deep Reinforcement Learning for Adaptive Continual Learning in Robotics",
    authors: "Teeratham Vitchutripop, Alyssa Quarles, Wenhe Zhang, Richard Xue, Daniel Rakita",
    imageUrl: 
      "/publication-preview/streamRL.gif",
    highlight: true,
  },
  {
    year: "2026",
    conference: "In Submission",
    title: "Efficient On-policy Visual-RL via Stochastic Decoupled Policy Gradient",
    authors: "Haoxiang You, Yilang Liu, Davis Zong, Qian Wang, Teeratham Vitchutripop, Qi Wang, Daniel Rakita, Ian Abraham",
    paperUrl: "https://arxiv.org/abs/2605.26478",
    imageUrl: "/publication-preview/sdpg.png"
  },
  {
    year: "2026",
    conference: "Journal of Robotic Surgery",
    title: "Deep learning approach for critical exposure during division of the inferior mesenteric artery in colorectal surgery",
    authors: "Justin Bader, Xiatao Sun, Tripp Rosenfelt, Alexis Ramirez-Hardy, Teeratham Vitchutripop, Anand Srinivasan, Haddon Pantel, Amit Khanna, Daniel Rakita",
    paperUrl: "https://link.springer.com/article/10.1007/s11701-025-03121-7",
    imageUrl: "/publication-preview/surgery-cv.png",
  },
  {
    year: "2026",
    conference: "Journal of Robotic Surgery",
    title: "AI-Powered Semantic Segmentation Model for Enhanced Ureteral Mapping and Real-Time Instrument Feedback in Robotic Colorectal Surgery",
    authors: "Justin Bader, Xiatao Sun, Tripp Rosenfelt, Alexis Ramirez-Hardy, Netanel Sapir, Rachel Scheub, Teeratham Vitchutripop, Amit Khanna, Haddon Pantel, Daniel Rakita"
  },
  {
    year: "2024",
    conference: "Workshop on Learning Effective Abstractions for Planning (LEAP) @ CoRL",
    title: "Sequential Object-Centric Relative Placement Prediction for Long-horizon Imitation Learning",
    authors: "Ben Eisner, Eric Cai, Octavian Donca, Teeratham Vitchutripop, David Held",
    paperUrl: "https://openreview.net/forum?id=4CLiGBQV3U",
    codeUrl: "https://github.com/ey-cai/non-rigid",
    websiteUrl:"https://sites.google.com/view/taxpolicy-corl-2024/home",
    imageUrl:
      "/publication-preview/taxpolicy.png",
  },
  {
    year: "2024",
    conference: "Submitted",
    title: "Unsupervised Deep Instruction Tuning for Few Shot Object Segmentation",
    authors: "Jessica Brown*, Teeratham Vitchutripop*, Eric Cai, Jenny Wang, David Held",
    websiteUrl: "https://taskseg.github.io/",
    imageUrl:
      "/publication-preview/taskseg_2.gif",
  },
  {
    year: "2024",
    conference: "Submitted",
    title: "LASSO: Learning Latent Policies via State Space Modeling",
    authors: "Mohammad Samin Yasar, Teeratham Vitchutripop, Tariq Iqbal",
    imageUrl: "/publication-preview/lasso.gif"
  },
  {
    year: "2023",
    conference: "Robotics Institute Summer Scholars Working Papers Journals",
    title: "TaskSeg: Task-Specific Object Segmentation Through Demonstrations",
    authors: "Teeratham Vitchutripop, Jenny Wang, David Held",
    paperUrl: "https://drive.google.com/file/d/1100SYWrwKtriRBwMKT1mTQglhL9_1Erw/view",
    codeUrl: "https://github.com/tjvitchutripop/TaskSeg",
    videoUrl:"https://www.youtube.com/watch?v=B2FV81tip_I",
    imageUrl:
      "/publication-preview/taskseg.gif",
  },
  
];
