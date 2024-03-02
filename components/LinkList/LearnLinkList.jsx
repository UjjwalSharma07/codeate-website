import React from "react";



const LearnLinkList = (props) => {
  
  const options = [
    { 
    text: "Learn Brief", 
    handler: props.actionProvider.handleWhatLearn, 
    id: 1,
    },
    { text: "Explore Learn", handler: props.actionProvider.handleExploreLearn, id: 2 },
    { text: "Get in touch", handler: props.actionProvider.handleGetInTouchLearn, id: 3 },
  ];



  const linkMarkup = options.map((link) => (
    <button key={link.id} className="link-list-button" onClick={link.handler}>
 
        {link.text}
      </button>
    
  ));

  return <ul className="link-list">{linkMarkup}</ul>;
};

export default LearnLinkList;