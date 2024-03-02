import React from 'react';

const AboutSection = () => {
  const aboutPoints = [
    'The Front-End Web Development Program is a comprehensive training program designed to equip learners with the essential skills and knowledge required to become proficient front-end web developers.',   
    'This program focuses exclusively on front-end development, covering the technologies and practices necessary to build modern, interactive, and visually appealing websites.',
    'The program will be a mix of both theoretical and experiential learning.',
    'The program is designed to be completed within six weeks, with a recommended commitment of 15-20 hours per week.',
    // 'Join us at Discord for regular updates. (https://discord.gg/2UEY4KAQcG)',
  ];

  return (
    <section id="about" className=" bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto ">
        <h1 className="text-4xl md:text-5xl title font-bold text-center mb-6">About The Program</h1>
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-20">
          <div className=" mb-4 md:mb-0">
            <img className="md:h-[500px] h-[300px] md:px-0 px-4 " src="/images/about.png" alt=""  />
          </div>
          <div className="md:w-3/4 p-8">
            <p className="md:text-2xl text-xl md:text-left text-center font-bold text-white mb-4">What is Web Development Internship Program?</p>
            <ul className="list-disc list-inside  text-gray-600">
              {aboutPoints.map((point, index) => (
                <li key={index} className="mb-2 text-gray-300 text-left">
                  {point}
                </li>
              ))}
            </ul>
            <p className="text-center mt-6">
              Join us at{' '}
              <a
                href="https://discord.com/invite/v4vZBMt9hQ"
                target="_blank"
                className="text-purple-600 font-bold underline"
                rel="noopener noreferrer"
              >
                Discord
              </a>{' '}
              for regular updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
