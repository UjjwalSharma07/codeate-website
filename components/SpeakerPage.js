// SpeakerSection.js
import React from 'react';

import { FaLinkedin, FaGithub } from 'react-icons/fa';



const SpeakerSection = () => {
  // Speaker data with images, replace with your own data
  const speakers = [
    {
      name: 'Anshit Mishra',
      title: 'Web Developer(HTML, CSS)',
      linkedin: 'https://www.linkedin.com/in/anshit-mishra-172b33237/',
      github: 'https://github.com/anshitmishra',
      image: '/images/speaker1.jpeg', // Replace with the path to the speaker's image
    },
    {
      name: 'Lavish Goyal',
      title: 'Web Development (JavaScript)',
      linkedin: 'https://linkedin.com/in/goellavish10',
      github: 'https://github.com/goellavish10',
      image: '/images/speaker2.jpeg', // Replace with the path to the speaker's image
    },
    {
      name: 'Mushraf Parwej',
      title: 'Web Development (React.JS)',
      linkedin: 'https://www.linkedin.com/in/mushraf-parwej',
      github: 'https://github.com/Blackrose-blackhat',
      image: '/images/speaker3.jpeg', // Replace with the path to the speaker's image
    },
    // Add more speakers as needed
  ];

  return (
    <div className=" bg-blue-900  py-12">
    <div className="container mx-auto">
      <h2 className="md:text-4xl text-3xl font-bold text-center title text-white mb-8">Meet Our <br className="md:hidden flex"/> Awesome Speakers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {speakers.map((speaker, index) => (
          <div key={index} className="bg-white rounded-lg p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <img
              src={speaker.image}
              alt={speaker.name}
              className="w-36 h-36 mx-auto rounded-full object-cover mb-4 border-4 border-white"
            />
            <h3 className="text-2xl font-semibold text-center text-gray-900">{speaker.name}</h3>
            <p className="text-gray-600 text-center mb-4">{speaker.title}</p>
            <div className="flex justify-center">
              <a
                href={speaker.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition-colors duration-300 mr-4"
              >
                <FaLinkedin className="text-2xl"/>

              </a>
              <a
                href={speaker.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
              >
                <FaGithub className="text-2xl"/>
                
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  
  );
};

export default SpeakerSection;
