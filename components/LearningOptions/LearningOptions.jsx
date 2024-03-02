import React from "react";



const LearningOptions = (props) => {
  const options = [
    { 
    text: "Build", 
    handler: props.actionProvider.handleBuildList, 
    id: 1,
    },
    { text: "Learn", handler: props.actionProvider.handleLearnList, id: 2 },
    { text: "Community", handler: props.actionProvider.handleCommunityList, id: 3 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="p-4 rounded bg-transparent m-4"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="flex flex-wrap items-start">{optionsMarkup}</div>;
};

export default LearningOptions;
