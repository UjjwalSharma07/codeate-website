class ActionProvider {
  constructor(
    createChatBotMessage,
    setStateFunc,
    createClientMessage,
    stateRef,
    createCustomMessage,
    ...rest
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
  }

  greet = () => {
    const message = this.createChatBotMessage("Hello friend.");
    this.addMessageToState(message);
  }


  handleBuildList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Build:",
      {
        widget: "buildLinks",
      }
    );

    this.addMessageToState(message);
  };

  handleLearnList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Learn:",
      {
        widget: "learnLinks",
      }
    );

    this.addMessageToState(message);
  };

  handleCommunityList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Community:",
      {
        widget: "communityLinks",
      }
    );



    this.addMessageToState(message);
  };


  //Brief about what build is
  handleWhatBuild = () => {
    const message = this.createChatBotMessage(
      "Code8 Build is our project building initiative where students can build projects in different tech domains to get upskilled.",
    );
    this.addMessageToState(message);
  };


  //Explore Build
  handleExploreBuild = () => {
    window.open("https://www.codeate.in/built");
  };

  //Get in touch with Build
  handleGetInTouchBuild = () => {
    window.open("#");
  };


  //Brief about what Learn is
  handleWhatLearn = () => {
    const message = this.createChatBotMessage(
      "Code8 Learn is our learning initiative to provide industry relevant cohort based cources to students.",
    );
    this.addMessageToState(message);
  };


  //Explore Learn
  handleExploreLearn = () => {
    window.open("https://www.codeate.in/learn");
  };

  //Get in touch with Learn
  handleGetInTouchLearn = () => {
    window.open("#");
  };

  //Brief about what Community is
  handleWhatCommunity = () => {
    const message = this.createChatBotMessage(
      "Code8 Community is where you can learn, build and Collab with likeminds.",
    );
    this.addMessageToState(message);
  };


  //Explore Community
  handleExploreCommunity = () => {
    window.open("https://www.codeate.in/community");
  };

  //Get in touch with Community
  handleGetInTouchCommunity = () => {
    window.open("#");
  };

  addMessageToState = (message) => {

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message]
    }));
  };
}

export default ActionProvider;
