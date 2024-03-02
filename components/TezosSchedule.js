// src/components/ScheduleSection.js

import Image from "next/image";
import React, { useState } from "react";
import tick from '../assets/tick.png'

const ScheduleSection = () => {
  const days = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"]; // Add more days as needed

  const scheduleData = [
    // Define your schedule data for each day here
    {
      day: "Week 1",
      events: [
        { time: "Day-1", event: "Program flowchart & starting-up" },
        {
          time: "Day-2",
          event:
            "Answering some of the fundamental questions related to the Internet",
        },
        { time: "Day-3", event: "Web Development Fundamentals:" },
        { time: "Day-4", event: "Version Control & Command Line" },
        { time: "Day-5", event: "Responsive Web Design" },
        { time: "Day-6", event: "Accessibility and SEO Basics" },
      ],
    },
    {
      day: "Week 2",
      events: [
        { time: "Day-1", event: "Learn the basic concepts of HTML" },
        {
          time: "Day-2",
          event: "HTML Tags",
        },
        { time: "Day-3", event: "HTML forms, Graphics, media, and APIs" },
        { time: "Day-4", event: "CSS Syntax and Selectors" },
        { time: "Day-5", event: "Box model and layout" },
        { time: "Day-6", event: "Typography and Text Effects" },
      ],
    },
    {
      day: "Week 3",
      events: [
        {
          time: "Day-1",
          event: "CSS Units, Measurements, colours, and backgrounds",
        },
        {
          time: "Day-2",
          event: "Responsive Web Design and CSS Preprocessors",
        },
        { time: "Day-3", event: "CSS Framework and Advanced Concepts" },
        { time: "Day-4", event: "Basics of Javascript" },
        { time: "Day-5", event: "SetInterval and Javascript Functions" },
        { time: "Day-6", event: "Array Functions" },
      ],
    },
    {
      day: "Week 4",
      events: [
        { time: "Day-1", event: "String Functions" },
        {
          time: "Day-2",
          event: "Date functions, objects, and Dom manipulation",
        },
        {
          time: "Day-3",
          event: "Error handling, onkeyup event, and Best Practices",
        },
        { time: "Day-4", event: "Introduction to frontend framework chosen" },
        {
          time: "Day-5",
          event:
            "Create your first react application and launch the development server",
        },
        { time: "Day-6", event: "Learn about React components and JSX " },
      ],
    },
    {
      day: "Week 5",
      events: [
        {
          time: "Day-1",
          event:
            "Virtual DOM, Concept of state , React Hooks,  Event Handling  ",
        },
        {
          time: "Day-2",
          event:
            "React and AJAX, Props in react.js,  Lists and keys in react.js, Life cycle methods",
        },
        { time: "Day-3", event: "React routers,  React Redux" },
        {
          time: "Day-4",
          event: "Server-Side rendering (SSR), JWT (JSON web tokens) ",
        },
        {
          time: "Day-5",
          event:
            "React Testing(unit testing, integration testing), Redux Middleware (redux-thunk, react-saga)",
        },
        { time: "Day-6", event: "React Performance Optimization" },
      ],
    },
    {
      day: "Week 6",
      events: [
        { time: "Day-1", event: "Choose a project idea and plan its structure and design. " },
        { time: "Day-2", event: "Break it down into smaller tasks." },
        {
          time: "Day-3",
          event:
            "Start developing your project using the skills you've learned.",
        },
        {
          time: "Day-4",
          event:
            "Implement the front-end functionality, design, and interactions.",
        },
        { time: "Day-5", event: "Deploy your project to a hosting platform like GitHub Pages, Netlify, or Vercel." },
        { time: "Day-6", event: "Polish your project, ensure responsiveness, and test across different browsers." },
      
      ],
    },
  ];

  const [selectedDay, setSelectedDay] = useState(days[0]);

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const selectedSchedule = scheduleData.find(
    (item) => item.day === selectedDay
  );

  return (
    <section className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="md:text-5xl text-4xl font-bold title text-center text-white">
          Event Schedule
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="space-y-4">
              {days.map((day, index) => (
                <button
                  key={index}
                  onClick={() => handleDayClick(day)}
                  className={`w-full py-2 px-4 rounded-lg font-semibold pr-4 ${
                    selectedDay === day
                      ? "bg-indigo-600 text-white"
                      : "bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white"
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>
          <div className="md:col-span-2 space-y-4">
            {selectedSchedule &&
              selectedSchedule.events.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center rounded-lg p-4 shadow-md bg-white"
                >
                  {/* <Image src={tick} height={30} width={30} /> */}
                  {/* <div className="md:w-16 md:h-16  w-8 h-8 flex items-center justify-center text-white bg-indigo-600 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div> */}
                  <div className="ml-4">
                    <p className="md:text-lg text-sm font-semibold text-gray-800">
                      {item.event}
                    </p>
                    <p className="text-gray-500">{item.time}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
