import React from "react";



const BuildLinkList = (props) => {
  
  const options = [
    { 
    text: "Build Brief", 
    handler: props.actionProvider.handleWhatBuild, 
    id: 1,
    },
    { text: "Explore Build", handler: props.actionProvider.handleExploreBuild, id: 2 },
    { text: "Get in touch", handler: props.actionProvider.handleGetInTouchBuild, id: 3 },
  ];



  const linkMarkup = options.map((link) => (
    <button key={link.id} className="link-list-button" onClick={link.handler}>
 
        {link.text}
      </button>
    
  ));

  return <ul className="link-list">{linkMarkup}</ul>;
};

export default BuildLinkList;