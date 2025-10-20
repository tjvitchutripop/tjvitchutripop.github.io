export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Teeratham {TJ} Vitchutripop",
  title: "Robotics x Machine Learning Ph.D. Student",
  institution: "📍 Yale University",
  // Note that links work in the description
  description:
    "Hello 👋 I'm a second-year PhD student in <a target='_blank' href='https://cpsc.yale.edu'>Computer Science</a> at Yale University performing research in the <a target='_blank' href='https://apollo-lab-yale.github.io'>Applied Planning, Learning, and Optimization (APOLLO) Lab</a>, where I am advised by <a target='_blank' href='https://dannyrakita.net'>Daniel Rakita</a>. <br><br> My research revolves around developing machine learning algorithms for robot perception, reasoning, and control grounded within the contexts of <code>reinforcement learning</code>, and <code>continual learning</code>. I'm especially interested in exploring how ideas from cognitive science, neuroscience, and philosophy can aid us in developing intelligent embodied systems. Additionally, I also collaborate with the <a target='_blank' href='https://medicine.yale.edu'> Yale School of Medicine</a> on projects surrounding <code>computer vision</code> for <code>robotic surgery</code>. <br><br>Previously, I have worked in the <a target='_blank' href='https://www.collabrobotics.com/'>Collaborative Robotics Lab</a> at the <a target='_blank' href='https://virginia.edu'>University of Virginia</a> led by <a target='_blank' href='http://www.tiqbal.com/'>Tariq Iqbal</a>, developing reinforcement learning algorithms for <code>dynamic object manipulation</code>. Additionally, I performed computer vision research centered around <code>unsupervised instance segmentation</code> for robotic manipulation at the <a target='_blank' href='https://www.ri.cmu.edu/'>Carnegie Mellon University Robotics Institute</a> with the <a target='_blank' href='https://r-pad.github.io/'>Robots Perceiving and Doing (R-PAD) Lab</a> led by <a target='_blank' href='https://davheld.github.io/'>David Held</a>. <br><br>Aside from my research, I have explored the intersection of technology & society as a <a target='_blank' href='https://www.faspe-ethics.org/2025-dt-fellows/'>2025 FASPE Design & Technology Fellow</a> and through the <a target='_blank' href='https://engineering.virginia.edu/future-undergrads/academics/policy-internship-program'>UVA-MIT Policy Internship Program</a>, where I interned at the <a target='_blank' href='https://new.nsf.gov/tip/latest'>National Science Foundation TIP</a> directorate working on open-sourcing and analyzing data from the first iteration of the <a target='_blank' href='https://new.nsf.gov/funding/initiatives/regional-innovation-engines'>NSF Engines</a> program. I also have industry experience in software engineering and test-driven development through an internship with <a target='_blank' href='https://finsemble.com/'>interop.io</a>.",
  email: "tj.vitchutripop@yale.edu",
  imageUrl:
    "https://images.unsplash.com/photo-1581481615985-ba4775734a9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  googleScholarUrl: "https://scholar.google.com/citations?user=22yzMFAAAAAJ&hl=en&oi=ao",
  githubUsername: "tjvitchutripop",
  linkedinUsername: "tj-vitchutripop",
  twitterUsername: "Vitchutripop",
  // blogUrl: "https://",
  cvUrl: "/cv.pdf",
  institutionUrl: "https://www.yale.edu",
  // altName: "",
  // secretDescription: "I like dogs.",
};
