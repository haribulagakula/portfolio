import project1 from "../assets/projects/project-1.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web and mobile applications. With 3 years of hands-on experience, I have honed my skills in front-end technologies like React, Angular, Swift and Flutter, as well as back-end technologies like Java Spring, Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 1 years of professional experience, I have worked with a variety of technologies, including Java Spring, Angular.js, Node.js, MySQL, and MongoDB. I also have professional experience in cloud services like AWS (Cognito, RDBMS, Lambda), Azure (Functions, CosmosDB, Terraform, Container Registry) and Firebase. My journey in web and app development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I love to travel and I enjoy a very active lifestyle which involves weight lifting, badminton and swimming. I am always exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "May 2024 - Present",
    role: "Software Enginnering Intern",
    company: "Pearson",
    description: [
      <>
        Developed a brand-new service written in <strong className="font-black">Java Spring Boot</strong> that supports internal operations, helping end-users through a frontend user interface in <strong className="font-black">Angular</strong> to improve user experience.
      </>,
      <>
        Followed the team&apos;s best practices and <strong className="font-black">SDLC</strong> to deliver code on a bi-weekly basis through pro-active code reviews, <strong className="font-black">Spring Boot unit tests</strong>, and <strong className="font-black">Jasmine unit tests</strong>.
      </>,
      <>
        Collaborated across 3 platform teams in <strong className="font-black">Agile Kanban</strong> methodologies to support the intake, refinement, execution and quality assurance of the code being deployed.
      </>,
      <>
        Updated content to increase communication to the end-user working with updating the <strong className="font-black">Xliff</strong> across the 12 localized languages for the end-user.
      </>
    ],
    technologies: ["Java", "Spring boot", "Angular", "JavaScript", "MySQL", "Azure", "VersionOne"],
  },
  {
    year: "Jan 2024 - Present",
    role: "Graduate Research Assistant",
    company: "Georgia State University",
    description: [
      <>
        Spearheaded the development of an <strong className="font-black">iOS mobile development</strong> focused on addressing the information and service needs of intimate partner violence (IPV) survivors within Southeast Asian communities in Metropolitan Atlanta.
      </>,
      <>
        Led <strong className="font-black">Android-to-iOS</strong> code migration using <strong className="font-black">SwiftUI</strong>, ensuring seamless adaptation and platform consistency.
      </>,
      <>
        Hosted backend in <strong className="font-black">Azure</strong> and performed <strong className="font-black">REST API calls</strong> to collect user data and mobile application data.
      </>
    ],
    technologies: ["SwiftUI", "UI/UX", "JavaScript", "Azure Functions", "Azure CosmosDB"],
  },
  {
    year: "June 2023 - August 2024",
    role: "Software Engineering Intern",
    company: "Swivl",
    description: [
      <>
        Leveraged AWS resources, including <strong className="font-black">AWS Cognito</strong>, to architect and deploy a robust authentication framework, achieving a 21% reduction in login-related issues.
      </>,
      <>
      Orchestrated the secure management of <strong className="font-black">AWS Relational Database Service (RDBMS)</strong>, implementing role-based access controls and boosting data integrity resulting in a 33% reduction in unauthorized data access incidents.
      </>,
      <>
        Pioneered serverless <strong className="font-black">Lambda functions</strong>, optimizing authentication and authorization processes reducing latency by 15%.
      </>,
      <>
        Successfully applied the <strong className="font-black">Model-View-Controller (MVC)</strong> design pattern to enhance the structure and maintainability of the <strong className="font-black">SaaS architecture</strong>.
      </>
    ],
    technologies: ["Node.js", "JavaScript", "AWS Cognito", "AWS Lambda", "AWS RDBMS", "Jira"],
  },
];

export const PROJECTS = [
  {
    title: "WoW (World of Women) AI",
    image: project1,
    description: [
      <>
        Designed and implemented a <strong className="font-black">Retrieval-Augmented Generation (RAG)</strong> architecture using <strong className="font-black">Pinecone</strong> for vector database management and <strong className="font-black">OpenAI</strong> for language model generation.
      </>,
      <>
        Developed and deployed a scalable iOS application using <strong className="font-black">Swift</strong> to integrate the RAG-based system for user interaction.
      </>,
      <>
        Implemented backend services to log and manage user details and chat history in <strong className="font-black">Azure Cosmos DB</strong> for real-time data persistence.
      </>,
      <>
        Deployed the <strong className="font-black">iOS application</strong> on the App Store after thorough beta testing and user feedback collection through TestFlight.
      </>
    ],
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
];

export const CONTACT = {
  address: "Atlanta, GA",
  email: "kompellabhinav@gmail.com",
};
