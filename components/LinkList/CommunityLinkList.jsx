import React from "react";



const CommunityLinkList = (props) => {
  
  const options = [
    { 
    text: "Community Brief", 
    handler: props.actionProvider.handleWhatCommunity, 
    id: 1,
    },
    { text: "Explore community", handler: props.actionProvider.handleExploreCommunity, id: 2 },
    { text: "Join community", handler: props.actionProvider.handleGetInTouchCommunity, id: 3 },
  ];



  const linkMarkup = options.map((link) => (
    <button key={link.id} className="link-list-button" onClick={link.handler}>
 
        {link.text}
      </button>
    
  ));

  return <ul className="link-list">{linkMarkup}</ul>;
};

export default CommunityLinkList;