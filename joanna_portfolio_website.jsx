export default function Portfolio() {
  const journalismStories = [
    {
      title: "Large Turnout for University Programs’ Semiannual Book Fair",
      description:
        "Reported and wrote a campus news story covering University Programs’ Book Fair during Welcome Back Weeks. Interviewed students and community representatives and applied AP Style guidelines throughout the article.",
      file: "/news-story-1.docx",
    },
    {
      title: "News Story Title 2",
      description:
        "Add a short summary describing the focus of this article, what you reported on, and the journalism skills you used.",
      file: "/news-story-2.docx",
    },
    {
      title: "News Story Title 3",
      description:
        "Add a short summary describing the focus of this article, what you reported on, and the journalism skills you used.",
      file: "/news-story-3.docx",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-900">
      {/*
        IMPORTANT:
        Place files inside the /public folder:
        - news-story-1.docx
        - news-story-2.docx
        - news-story-3.docx
        - joanna-house-resume.pdf
      */}

      {/* Hero Section */}
      <section className="px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Joanna House
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          Marketing Major | Sports Media Minor | Class of 2029
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-gray-700">
          Aspiring sports marketing professional passionate about branding, fan engagement, and strategic storytelling. I love blending creativity with analytics to build campaigns that connect and convert.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-2xl shadow-md bg-[#0A2342] text-white hover:scale-105 transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-2xl shadow-md bg-white border hover:scale-105 transition"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-[#0A2342]">About Me</h2>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Hi, I’m Joanna House, a member of the University of Alabama’s Class of 2029. I am majoring in marketing with a minor in sports media, combining my interest in branding and strategy with my passion for athletics and storytelling.
          </p>
          <p>
            Through my journalism and marketing coursework, I have developed strong skills in written communication, interviewing, research, and AP Style. I am detail-oriented, organized, and comfortable working independently to meet deadlines. My experience in customer service and leadership roles has strengthened my professionalism, teamwork, and ability to communicate clearly in fast-paced environments.
          </p>
          <p>
            I am especially interested in the connection between sports, media, and audience engagement. My goal is to work in sports marketing, helping teams and organizations build strong brands and connect with fans in creative and meaningful ways. I am excited to continue developing my skills and gaining hands-on experience throughout my time at Alabama.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-16 bg-white border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-[#0A2342]">Skills</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Brand Strategy",
              "Social Media Marketing",
              "Content Creation",
              "Market Research",
              "Google Workspace",
              "Public Speaking",
            ].map((skill) => (
              <div
                key={skill}
                className="p-6 rounded-2xl shadow-sm border bg-gray-50 hover:shadow-md transition"
              >
                <p className="font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journalism Section */}
      <section id="projects" className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-[#0A2342]">
          Journalism Work
        </h2>

        <div className="space-y-8">
          {journalismStories.map((story, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl shadow-md bg-white border border-gray-200 hover:shadow-xl transition max-w-3xl"
            >
              <h3 className="text-2xl font-semibold mb-3 text-[#9E1B32]">
                {story.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                News Story | Reporting | AP Style
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {story.description}
              </p>
              <a
                href={story.file}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[#0A2342] underline hover:opacity-70"
              >
                View Full Story
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Resume Section */}
      <section className="px-6 py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-6 text-[#0A2342]">Resume</h2>
        <p className="text-gray-600 mb-6">
          Interested in learning more about my experience and leadership background?
        </p>
        <a
          href="/joanna-house-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-2xl shadow-md bg-black text-white hover:scale-105 transition"
        >
          Download Resume
        </a>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-[#0A2342]">
          Let’s Connect
        </h2>
        <p className="text-gray-600 mb-8">
          I am always open to internships, collaborations, and new opportunities in sports marketing.
        </p>
        <div className="flex flex-col items-center gap-3 text-gray-800">
          <a href="mailto:joanna.house0611@gmail.com" className="underline">
            joanna.house0611@gmail.com
          </a>
          <p>601-604-5104</p>
          <a
            href="https://www.linkedin.com/in/joanna-house"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            LinkedIn Profile
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Joanna House. Built with navy and crimson accents.
      </footer>
    </div>
  );
}
