import React from 'react';

const HowItWorks = () => {
  return (
    <div className=" text-gray-800 min-h-screen">
          <section className=" bg-[#4B0082] text-white py-26 px-6 ">
        
            <h1 className="text-4xl font-bold text-center text-white mb-12">
          How devCollab Works
        </h1>
      </section>
      <div className="max-w-5xl mx-auto">

        <div className="space-y-12 mt-20">
          {/* Step 1 */}
          <div className="md:flex items-start gap-6">
            <div className="text-3xl font-bold text-[#4B0082] mb-2 md:mb-0">1</div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Sign Up and Create a Profile</h2>
              <p className="text-gray-700">
                Get started by creating your devCollab account. Set up your profile by adding your skills, interests, and GitHub link. This helps collaborators find you based on what you bring to the table.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="md:flex items-start gap-6">
            <div className="text-3xl font-bold text-[#4B0082] mb-2 md:mb-0">2</div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Browse or Create Projects</h2>
              <p className="text-gray-700">
                Search through open projects created by other developers, or start your own. Each project includes a description, goals, required skills, and collaboration status.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="md:flex items-start gap-6">
            <div className="text-3xl font-bold text-[#4B0082] mb-2 md:mb-0">3</div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Join a Team or Invite Collaborators</h2>
              <p className="text-gray-700">
                Found a project you like? Send a request to join. Starting a project? Invite others based on their skills and availability. devCollab makes team formation easy and transparent.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="md:flex items-start gap-6">
            <div className="text-3xl font-bold text-[#4B0082] mb-2 md:mb-0">4</div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Collaborate and Build</h2>
              <p className="text-gray-700">
                Use built-in GitHub integration, messaging, and project boards to plan and work on features. Share updates, assign tasks, and track progress in one place.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="md:flex items-start gap-6">
            <div className="text-3xl font-bold text-[#4B0082] mb-2 md:mb-0">5</div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Launch & Showcase</h2>
              <p className="text-gray-700">
                Once your project is ready, publish it and share your success with the devCollab community. Add it to your portfolio, gather feedback, and keep iterating.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold mb-4">Ready to start building together?</h3>
          <a
            href="/signup"
            className="inline-block bg-[#4B0082] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#10011C] transition"
          >
            Join devCollab Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
