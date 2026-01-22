import React from "react";

import {
  FaBrain,
  FaCode,
  FaGithub,
  FaGlobe,
  FaVideo
} from "react-icons/fa";

interface CommandItem {
  command: string;
  output: JSX.Element | string;
}

export const getOutput = (
  command: string,
  setCommand: React.Dispatch<React.SetStateAction<CommandItem[]>>
): JSX.Element | string => {
  switch (command.trim().toLowerCase()) {
    case "sudo rm -rf /*":
      const closeWindow = () => {
        const newWindow = window.open("about:blank", "_blank");
        if (newWindow) {
          newWindow.close();
        }

        window.close();
        window.location.href = "about:blank";
        window.history.back();
      };

      closeWindow();
      return <></>;
    case "blogs":
      window.open("https://blog.shubh.sh", "_blank");
      return "Opening blogs in a new tab...";
    case "help":
      return (
        <div className="flex flex-col space-y-1">
          <span className="text-[#58a6ff]">Available commands:</span>
            {[
            { cmd: "👤 about", desc: "Learn more about me" },
            { cmd: "🌐 socials", desc: "Find me on the web" },
            { cmd: "💻 skills", desc: "Check out my technical skills" },
            { cmd: "🚀 projects", desc: "View some of my cool projects" },
            { cmd: "📄 resume", desc: "Take a look at my resume" },
            { cmd: "💼 experience", desc: "Explore my professional journey" },
            { cmd: "🎓 education", desc: "View my educational background" },
            { cmd: "🏆 achievements", desc: "See my accomplishments" },
            { cmd: "🏅 competitive-programming", desc: "View my competitive programming profiles" },
            { cmd: "🧹 clear", desc: "Clear the terminal" },
            { cmd: "⚠️ sudo rm -rf /*", desc: "Try at your own risk!" },
            ].map(({ cmd, desc }) => (
            <div key={cmd} className="flex">
              <span className="text-[#f0883e] inline-block min-w-fit mr-2">{cmd}</span>
              <span className="text-[#8b949e]">- {desc}</span>
            </div>
          ))}
        </div>
      );
    case "about":
    return (
      <div className="space-y-2">
        <p>
          Hey there! Thanks for stopping by and taking the time to learn a bit
          about me.
        </p>
        <p>
          I'm <span className="text-[#f0883e]">Rohan Bhardwaj</span>, 21, a Computer
          Engineering student at{" "}
          <span className="text-[#f0883e]">DTU</span>, with experience working in
          both fast-paced startup environments and large multinational companies.
        </p>
        <p>
          I adapt quickly to new technologies and systems, with a strong interest
          in <span className="text-[#f0883e]">backend engineering</span> and{" "}
          <span className="text-[#f0883e]">AI</span>. I enjoy exploring new
          technologies and turning ideas into reliable, well-structured solutions.
        </p>
        <p>
          When I'm not coding, you'll probably find me travelling or listening to
          music.
        </p>
      </div>
    );
    case "socials":
      return (
        <div className="space-y-2">
          <p>Social life? What's that? I live in a basement :) ...</p>
          <p>
            Thanks for your interest though! Here's where you can find me
            online:
          </p>
          <div className="flex flex-col space-y-1">
            <div className="flex">
              <span className="text-[#f0883e] w-24">GitHub</span>
              <a
                href="https://github.com/RohanBhardwaj720"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#58a6ff]"
              >
                RohanBhardwaj720
              </a>
            </div>
            <div className="flex">
              <span className="text-[#f0883e] w-24">WhatsApp</span>
              <a
              href="https://wa.me/+918595448989?text=Hello%20There"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#58a6ff]"
              >
              +91 8595448989
              </a>
            </div>
            <div className="flex">
              <span className="text-[#f0883e] w-24">LinkedIn</span>
              <a
              href="https://www.linkedin.com/in/rohanbhardwaj-dtu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#58a6ff]"
              >
              rohanbhardwaj-dtu
              </a>
            </div>
            <div className="flex">
              <span className="text-[#f0883e] w-24">Email</span>
              <a href="mailto:rohanbhardwaj720@gmail.com" className="text-[#58a6ff]">
                rohanbhardwaj720@gmail.com
              </a>
            </div>
            {/* <div className="flex">
              <span className="text-[#f0883e] w-24">Stack</span>
              <a
                href="https://stackoverflow.com/users/21094470/shubham-singh"
                className="text-[#58a6ff]"
              >
                https://stackoverflow.com/users/21094470/shubham-singh
              </a>
            </div> */}
          </div>
          <p>Feel free to reach out! I'm most responsive on WhatsApp and LinkedIn.</p>
        </div>
      );
    case "skills":
    return (
      <div className="space-y-2">
        <div>
          <span className="text-[#f0883e]">
            Languages:
          </span>
          <p className="text-[#8b949e]">
            C, C++, Python, C#, SQL
          </p>
        </div>

        <div>
          <span className="text-[#f0883e]">
            Frameworks & Technologies:
          </span>
          <p className="text-[#8b949e]">
            .NET (C#), LangChain, Node.js, Express.js, FastAPI, React.js,
            Next.js, RESTful APIs, AWS SQS, HTML, CSS
          </p>
        </div>

        <div>
          <span className="text-[#f0883e]">
            Developer Tools:
          </span>
          <p className="text-[#8b949e]">
            Postman, pgAdmin, SSMS, GitHub, VS Code, Visual Studio
          </p>
        </div>

        <div>
          <span className="text-[#f0883e]">
            Databases:
          </span>
          <p className="text-[#8b949e]">
            PostgreSQL, MongoDB
          </p>
        </div>

        <div>
          <span className="text-[#f0883e]">
            Computer Science Coursework:
          </span>
          <p className="text-[#8b949e]">
            Data Structures, Algorithm Design and Analysis, Operating Systems,
            Database Management Systems, Object Oriented Programming,
            Machine Learning, Software Engineering, Computer Graphics,
            Programming Fundamentals, Artificial Intelligence,
            Parallel Algorithms, Computer Networks, Compiler Design
          </p>
        </div>
      </div>
    );

    case "projects":
  return (
    <div className="space-y-4 mt-4">
      {[
        {
          name: "You Education – AI-Powered Learning Platform",
          desc: "A full-stack AI-powered exam preparation platform where users upload a syllabus to automatically generate chapters and AI-created mind maps enriched with relevant YouTube videos and notes. Includes an AI chat feature that allows users to ask questions and interact with the content of the videos and notes within the mind map. Technologies used include Next.js, TypeScript, Tailwind CSS, MongoDB, and Azure OpenAI.",
          github: "https://github.com/you-edu/you-education",
          link: "https://you-education-deployment.vercel.app",
          video: "https://drive.google.com/file/d/1B4ZUm83Z5uQDGqdJsKPqXZvxvyUQ9S1H/view",
        },
        {
          name: "Tokenizer",
          desc: "A high-performance BPE tokenizer implemented in C++ for encoding and decoding UTF-8 strings, mirroring the approach used by modern LLMs such as GPT, Llama, and Mistral. Features custom UTF-8 encoding/decoding, pattern parsing, and vocabulary-building functions. Optimized to encode and decode 548 characters in under 100ms while generating a 500-word vocabulary, demonstrating high efficiency for large-scale language tasks.",
          github: "https://github.com/RohanBhardwaj720/Tokenizer-in-Cpp",
        },
        {
          name: "Equipay – Trip Expense Management System",
          desc: "A full-stack web application that simplifies group travel finances by allowing users to track expenses, split costs, and manage budgets. Acts as a personal travel log for past and upcoming trips while efficiently handling shared expenses. Built using React, CSS, Node.js with Express, and PostgreSQL.",
          github: "https://github.com/RohanBhardwaj720/Equipay",
          link: "https://equipay-eight.vercel.app/",
        },
        {
          name: "Pattern Remembering Game",
          desc: "An engaging memory challenge game designed to test and improve cognitive skills by presenting players with progressively complex visual patterns to memorize and reproduce. Built using HTML5, CSS3 for responsive design, and JavaScript for gameplay and pattern generation.",
          github: "https://github.com/RohanBhardwaj720/pattern-remembering",
          link: "https://rohanbhardwaj720.github.io/pattern-remembering/",
        },
      ].map((project, index) => (
        <div
          key={index}
          className="border border-[#30363d] rounded-md p-4 bg-[#0d1117]"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-[#f0883e] text-lg font-semibold">
                {project.name}
              </h3>
              <p className="text-[#8b949e] mt-1">{project.desc}</p>
            </div>
            <div className="flex space-x-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#58a6ff] hover:text-[#58a6ff] transition-colors"
                >
                  <FaGithub size={24} />
                </a>
              )}
              {project.video && (
                <a
                  href={project.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#58a6ff] hover:text-[#58a6ff] transition-colors"
                >
                  <FaVideo size={24} />
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#58a6ff] hover:text-[#58a6ff] transition-colors"
                >
                  <FaGlobe size={24} />
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

    case "clear":
      setCommand([]);
      return "";
    case "resume":
      window.open("https://drive.google.com/file/d/1LigJ_OnBM3zsQnbUJxnQ75PhHnP1Fh4R/view?usp=sharing", "_blank");
      return "Opening resume in a new tab...";
    case "experience":
      return (
        <div className="space-y-6">
          {[
            {
              company: "Moody's Analytics",
              role: "Software Engineering Intern",
              location: "Gurugram, India",
              date: "Jun 2025 - Aug 2025",
              description:
                "Redesigned and modernized a legacy VBScript-based scheduled job that retrieved and processed financial deal data from CDOnet into a SQL database, originally taking 2940 seconds per execution. Migrated the system to a C# multithreaded scheduled application, reducing runtime to 1560 seconds through optimized logic and parallel processing. Further scaled the solution into a distributed architecture using AWS SQS for task queuing and EC2-based consumers, cutting total execution time to 843 seconds. Gained hands-on experience working with C#, SQL, AWS SQS, SQL Server Management Studio (SSMS), and object-oriented design patterns.",
              icon: <FaCode className="text-[#f0883e] text-4xl" />,
            },
            {
              company: "Recallr AI",
              role: "AI/ML Founding Engineer Intern",
              location: "Remote",
              date: "Jan 2025 - Mar 2025",
              description:
                "Developed a plug-and-play AI memory system designed to enable long-term memory retention and highly personalized responses for LLM-based applications. Architected a multi-database system using PostgreSQL for node storage, MongoDB for managing relationships, and Milvus for vector-based semantic search. Deployed a functional prototype to demonstrate persistent memory, adaptive retrieval, and semantic querying capabilities.",
              icon: <FaBrain className="text-[#f0883e] text-4xl" />,
            },
          ].map((job, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-r from-[#1a1b26] to-[#24283b] rounded-lg p-6 shadow-lg border border-[#30363d] overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#f0883e] to-[#ff4d4d] opacity-10 rounded-bl-full"></div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">{job.icon}</div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-[#f0883e] text-xl font-bold">
                      {job.company}
                    </h3>
                    <span className="text-[#8b949e] text-sm">{job.date}</span>
                  </div>
                  <p className="text-[#58a6ff] font-semibold mb-1">
                    {job.role}
                  </p>
                  <p className="text-[#8b949e] text-sm mb-2">{job.location}</p>
                  <p className="text-[#8b949e] mb-4">{job.description}</p>
                  {/* <div className="space-y-2">
                    <p className="text-[#f0883e] font-semibold">
                      🔥 Key Achievements:
                    </p>
                    <ul className="list-none space-y-2">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-[#f0883e] mr-2">▹</span>
                          <span className="text-[#8b949e]">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div> */}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#f0883e] to-[#ff4d4d]"></div>
            </div>
          ))}
        </div>
      );
    case "goals":
      return (
        <div className="space-y-2">
          <p>
            The future is full of possibilities, and I'm excited to explore
            them! While I'm not entirely sure where life will take me, I have
            some guiding principles and areas of interest:
          </p>
          <ul className="list-disc list-inside text-[#8b949e]">
            <li>
              Pursue projects and roles that bring{" "}
              <span className="text-[#f0883e]">happiness</span> and fulfillment
            </li>
            <li>
              Be part of{" "}
              <span className="text-[#f0883e]">impactful initiatives</span> that
              can make a difference in the world
            </li>
            <li>
              Explore cutting-edge fields like{" "}
              <span className="text-[#f0883e]">Artificial Intelligence</span>,{" "}
              <span className="text-[#f0883e]">Space Technology</span>,{" "}
              <span className="text-[#f0883e]">Nuclear Energy</span>, and even{" "}
              <span className="text-[#f0883e]">Hydroponics</span>
            </li>
          </ul>
          <p>
            I'm open to wherever my passion and opportunities lead me. After
            all, that's the beauty of life - it's full of surprises!
          </p>
        </div>
      );
    case "education":
      return (
        <div className="space-y-6">
          <div className="relative bg-gradient-to-r from-[#1a1b26] to-[#24283b] rounded-lg p-6 shadow-lg border border-[#30363d] overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#f0883e] to-[#ff4d4d] opacity-10 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#58a6ff] to-[#79c0ff] opacity-10 rounded-tr-full"></div>
            
            <div className="relative z-10">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#f0883e] to-[#ff4d4d] rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-3xl">🎓</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-[#f0883e] text-2xl font-bold">
                      Delhi Technological University
                    </h3>
                    <span className="text-[#8b949e] text-sm font-medium">Nov 2022 – Present</span>
                  </div>
                  
                  <p className="text-[#58a6ff] text-lg font-semibold mb-2">
                    Bachelor of Technology in Computer Engineering
                  </p>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-gradient-to-r from-[#f0883e]/20 to-[#ff4d4d]/20 px-4 py-2 rounded-lg border border-[#f0883e]/30">
                      <span className="text-[#f0883e] font-bold text-lg">CGPA: 9.18</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <a
                      href="https://www.resulthubdtu.com/DTU/StudentProfile/2026/2K22_CO_374"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-[#58a6ff] hover:text-[#79c0ff] transition-colors"
                    >
                      <FaGlobe size={18} />
                      <span className="underline">View Student Profile</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#f0883e] via-[#ff4d4d] to-[#58a6ff]"></div>
          </div>
        </div>
      );
    case "achievements":
      return (
        <div className="space-y-4">
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-[#1a1b26] to-[#24283b] rounded-lg p-4 border border-[#30363d]">
              <div className="flex items-start">
                <span className="text-[#ffd700] text-xl mr-3">🥉</span>
                <div className="flex-grow">
                  <p className="text-[#8b949e]">
                    Awarded <span className="text-[#f0883e] font-bold">2nd Runner-up</span> at{" "}
                    <span className="text-[#58a6ff] font-semibold">Innowave</span>, the premier innovation competition at{" "}
                    <span className="text-[#58a6ff] font-semibold">IIT Roorkee's Cognizance 2025</span>,
                    for presenting a cutting-edge, AI-driven solution — with a prize pool of{" "}
                    <span className="text-[#f0883e] font-bold">INR 2,00,000</span>.
                  </p>
                  <a
                    href="https://hyperstack.id/credential/177d568c-6b25-4947-b08a-40131655bf9d#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#58a6ff] text-sm hover:underline mt-1 inline-block"
                  >
                    📜 View Certificate
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#1a1b26] to-[#24283b] rounded-lg p-4 border border-[#30363d]">
              <div className="flex items-start">
                <span className="text-[#58a6ff] text-xl mr-3">🎯</span>
                <div className="flex-grow">
                  <p className="text-[#8b949e]">
                    Achieved <span className="text-[#f0883e] font-bold">National Semi-Finalist</span> position in{" "}
                    <span className="text-[#58a6ff] font-semibold">Flipkart GRiD 7.0</span>, a nationwide tech competition with{" "}
                    <span className="text-[#f0883e] font-bold">1.6 lakh+ participants</span>.
                  </p>
                  <a
                    href="https://drive.google.com/file/d/1y-rlRwKIFA2sIb-cHLRtHwK-htEq81co/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#58a6ff] text-sm hover:underline mt-1 inline-block"
                  >
                    📜 View Certificate
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#1a1b26] to-[#24283b] rounded-lg p-4 border border-[#30363d]">
              <div className="flex items-start">
                <span className="text-[#58a6ff] text-xl mr-3">💪</span>
                <div className="flex-grow">
                  <p className="text-[#8b949e]">
                    Solved <span className="text-[#f0883e] font-bold">1700+ problems</span> across different platforms, including{" "}
                    <span className="text-[#f0883e] font-bold">1000+</span> on LeetCode alone.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#1a1b26] to-[#24283b] rounded-lg p-4 border border-[#30363d]">
              <div className="flex items-start">
                <span className="text-[#ffd700] text-xl mr-3">⭐</span>
                <div className="flex-grow">
                  <p className="text-[#8b949e]">
                    <span className="text-[#58a6ff] font-semibold">Peak Ratings:</span>{" "}
                    <span className="text-[#f0883e] font-bold">LeetCode (2070)</span>,{" "}
                    <span className="text-[#f0883e] font-bold">CodeChef (1855)</span>,{" "}
                    <span className="text-[#f0883e] font-bold">Codeforces (1537)</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#1a1b26] to-[#24283b] rounded-lg p-4 border border-[#30363d]">
              <div className="flex items-start">
                <span className="text-[#58a6ff] text-xl mr-3">🎓</span>
                <div className="flex-grow">
                  <p className="text-[#8b949e]">
                    Secured <span className="text-[#f0883e] font-bold">98.89 percentile</span> in{" "}
                    <span className="text-[#58a6ff] font-semibold">JEE Main</span>.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#1a1b26] to-[#24283b] rounded-lg p-4 border border-[#30363d]">
              <div className="flex items-start">
                <span className="text-[#58a6ff] text-xl mr-3">🚀</span>
                <div className="flex-grow">
                  <p className="text-[#8b949e] mb-2">
                    <span className="text-[#58a6ff] font-semibold">Notable Contest Ranks:</span>
                  </p>
                  <ul className="space-y-1 text-sm text-[#8b949e]">
                    <li>• <span className="text-[#f0883e]">Codeforces:</span> Rank <span className="font-bold">1312/30,000</span> (Round 952), <span className="font-bold">1350/28,000+</span> (Round 962)</li>
                    <li>• <span className="text-[#f0883e]">LeetCode:</span> Rank <span className="font-bold">206/27,473</span> (Biweekly 143), <span className="font-bold">376/27,890</span> (Biweekly 159)</li>
                    <li>• <span className="text-[#f0883e]">CodeChef:</span> Rank <span className="font-bold">187</span> (Starters 120 Div 4), <span className="font-bold">339</span> (Starters 143 Div 2)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    case "competitive-programming":
      return (
        <div className="space-y-4">
          <div className="mb-3">
            <p className="text-[#8b949e] text-sm">
              <span className="text-[#f0883e] font-bold">1700+</span> problems solved across platforms
            </p>
          </div>
          
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-[#1a1b26] to-[#24283b] rounded-lg p-4 border border-[#30363d]">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🟡</span>
                  <div>
                    <p className="text-[#f0883e] font-bold text-lg">LeetCode</p>
                    <a
                      href="https://leetcode.com/u/RohannBhardwaj/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#58a6ff] hover:underline text-sm"
                    >
                      @RohannBhardwaj
                    </a>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[#58a6ff] font-bold">Max Rating: 2070</p>
                  <p className="text-[#8b949e] text-sm">1000+ Problems Solved</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#1a1b26] to-[#24283b] rounded-lg p-4 border border-[#30363d]">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🔵</span>
                  <div>
                    <p className="text-[#f0883e] font-bold text-lg">Codeforces</p>
                    <a
                      href="https://codeforces.com/profile/RohanBhardwaj"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#58a6ff] hover:underline text-sm"
                    >
                      @RohanBhardwaj
                    </a>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[#58a6ff] font-bold">Max Rating: 1537</p>
                  <p className="text-[#8b949e] text-sm">Specialist</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#1a1b26] to-[#24283b] rounded-lg p-4 border border-[#30363d]">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🟤</span>
                  <div>
                    <p className="text-[#f0883e] font-bold text-lg">CodeChef</p>
                    <a
                      href="https://www.codechef.com/users/rohanbhardwaj"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#58a6ff] hover:underline text-sm"
                    >
                      @rohanbhardwaj
                    </a>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[#58a6ff] font-bold">Max Rating: 1855</p>
                  <p className="text-[#8b949e] text-sm">4 Star</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#1a1b26] to-[#24283b] rounded-lg p-4 border border-[#30363d]">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🟢</span>
                  <div>
                    <p className="text-[#f0883e] font-bold text-lg">GeeksForGeeks</p>
                    <a
                      href="https://www.geeksforgeeks.org/user/rohanbharjokc/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#58a6ff] hover:underline text-sm"
                    >
                      @rohanbharjokc
                    </a>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[#8b949e] text-sm">Active Problem Solver</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-[#0d1117] rounded-lg border border-[#30363d]">
            <p className="text-[#8b949e] text-sm text-center">
              💡 <span className="text-[#58a6ff]">Consistent performer</span> across all major competitive programming platforms
            </p>
          </div>
        </div>
      );
    default:
      return (
        <div>
          <span className="text-[#f97583]">Command not found.</span>
          <br />
          Type <span className="text-[#f0883e]">help</span> to see available
          commands.
        </div>
      );
  }
};
