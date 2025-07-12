import React from 'react';


const features = [
  {
    title: "Real-Time Collaboration",
    description: "Work with devs from around the world on live codebases and projects.",
  },
  {
    title: "Project Discovery",
    description: "Find projects that match your skills and interests, or start your own.",
  },
  {
    title: "Version Control Built In",
    description: "Built-in GitHub integration makes contributions seamless and transparent.",
  },
];

const About = () => {
  return (
    <div className="bg-white text-gray-800">
     
      <section className=" bg-[#4B0082] text-white py-20 px-6">
        <div
          className="max-w-4xl mx-auto text-center"
          
        >
          <h1 className="text-5xl font-bold mb-4">Welcome to devCollab</h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            The collaborative hub where developers connect, build, and grow together—project by project.
          </p>
        </div>
      </section>

    
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {["Mission", "Vision", "Core Values"].map((section) => (
            <div
              key={section}
             
              className="bg-white shadow-md rounded-2xl p-6 border-t-4 border-[#4B0082]"
            >
              <h2 className="text-xl font-semibold mb-3">{section}</h2>
              <p className="text-gray-600">
                {section === "Mission" &&
                  "To foster hands-on developer growth through peer collaboration and real-world coding."}
                {section === "Vision" &&
                  "A global community where every dev learns faster by building together."}
                {section === "Core Values" &&
                  "Open collaboration, consistent learning, kindness, and real impact."}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">What Makes devCollab Special</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feat) => (
            <div
              key={feat.title}
              className="p-6 rounded-2xl shadow-md bg-gray-100 border-l-4 border-[#4B0082]"

            >
              <h3 className="text-xl font-semibold mb-2">{feat.title}</h3>
              <p className="text-gray-600">{feat.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-indigo-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Built with Powerful Tools</h2>
          <p className="text-lg text-gray-700 mb-10">
            devCollab is powered by modern technologies to ensure fast, scalable, and smooth experiences.
          </p>
          <div className="flex justify-center flex-wrap gap-6">
            {["React", "TailwindCSS", "Firebase", "GitHub", "Node.js"].map((tech) => (
              <span
                key={tech}
                className="bg-white border border-gray-300 rounded-full px-6 py-2 text-gray-800 shadow-sm hover:bg-indigo-100 transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
