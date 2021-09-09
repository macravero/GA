import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import playSound from "../shared/playSound";
import styled from "styled-components";
import LascanoBot from "../../media/Bot/bot-lascano.png";
import LascanoVideo from "../../media/Bot/lascano-video.webm";
import QuestionMark from "../../media/Bot/chat-question.png";
import OpenBot from "../../media/sounds/openBot.wav";
import CloseBot from "../../media/sounds/closeBot.wav";

const ToggleHeaderButton = styled(animated.div)`
  position: absolute;
  background: blue;
  width: 12rem;
  height: 2.5rem;
  font-size: 1.2rem;
  color: white;
  bottom: 18rem;
  right: 0;
  transform-origin: 78% 0;
  transform: rotate(270deg);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const BotWrapper = styled(animated.div)`
  position: absolute;
  width: 40rem;
  background: black;
  height: 30rem;
  bottom: 10rem;
  right: 0;
  border: 1px solid white;
  border-right: none;
  box-sizing: border-box;
`;
const Header = styled.div`
  width: 100%;
  height: 3.5rem;
  background: blue;
  color: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid white;
  span {
    padding-right: 3rem;
    font-size: 2rem;
    font-family: cursive;
    cursor: pointer;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 26.2rem;
  background: transparent;
  display: grid;
  grid-template-columns: 2rem 10rem 1rem auto 2rem;
  grid-template-rows: auto 10rem 1rem 10rem auto;
`;
const LascanoPhoto = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  background-image: url("${LascanoBot}");
  background-size: contain;
  position: relative;
`;
const Chat = styled.div`
  grid-column: 4/5;
  grid-row: 2/3;
  background: transparent;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  justify-content: flex-start;
  span {
    margin: 0.5rem;
    background: transparent;
    color: white;
    font-family: monospace;
    width: 92%;
    height: auto;
    text-align: left;
    padding-left: 0.5rem;
    margin-bottom: 0;
  }
  span:first-child {
    background: blue;
    font-weight: bold;
    height: 1.8rem;
    margin-bottom: 0;
  }
`;
const QuestionPhoto = styled.div`
  grid-column: 2/3;
  grid-row: 4/5;
  background-image: url("${QuestionMark}");
  background-size: 25%;
  background-repeat: no-repeat;
  background-position: center;
`;
const ChatInput = styled.div`
  grid-column: 4/5;
  grid-row: 4/5;
  background: transparent;
  display: grid;
  grid-template-rows: 2.5rem auto;
  grid-template-columns: 60% auto;
  border: 1px solid white;
  textarea {
    grid-column: 1/2;
    grid-row: 2/3;
    resize: none;
    background: transparent;
    padding: 0.6rem;
    color: white;
  }
  span {
    text-transform: uppercase;
    color: white;
    padding-left: 1rem;
    background: transparent;
    text-align: left;
    grid-column: 1/3;
    border-bottom: 1px solid white;
  }
`;
const ButtonWrapper = styled.div`
  background: blue;
  grid-column: 2/3;
  grid-row: 2/3;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    padding: 15%;
    font-family: monospace;
    font-weight: bold;
    font-size: 2.2rem;
    cursor: pointer;
  }
`;

const Bot = () => {
  const [displayBot, setDisplayBot] = useState(false);
  const [messageCounter, setMessageCounter] = useState(0);
  const [strokeCount, updateStrokeCount] = useState(0);
  const [message, updateMessage] = useState("");
  const [messageList, updateMessageList] = useState([
    { user: "L45C4-N0", message: "Ingrese nombre.." },
  ]);
  const [user, setUser] = useState("UNKN0WN");
  useEffect(() => scrollToBottom, [messageCounter]);
  useEffect(() => {
    if (messageCounter == 2) pushMessage();
  }, [messageCounter]);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behaviour: "smooth" });
  };
  const messagesEndRef = useRef(null);

  const setUpdateMessage = ({ target }) => {
    if (messageCounter == 1 && strokeCount === 5) {
      setMessageCounter(2);
      target.value = "";
    }
    updateMessage(target.value);
  };

  const pushMessage = () => {
    debugger;
    let newMessage = { user, message };
    let botMessage;
    let listToPush;
    switch (messageCounter) {
      case 0:
        if (message === "") return;
        setUser(message);
        newMessage.user = user;
        botMessage = {
          user: "L45C4-N0",
          message: `Bienvenido ${message}. Ingrese mail...`,
        };
        listToPush = [newMessage, botMessage];
        break;
      case 2:
        botMessage = {
          user: "L45C4-N0",
          message: `No, mejor ingrese número de tarjeta de crédito, y adivinaremos qué tipo de tarjeta es…`,
        };
        listToPush = [botMessage];
      default:
        listToPush = botMessage ? [newMessage, botMessage] : [newMessage];
    }
    updateMessageList([...messageList, ...listToPush]);
    let flag = messageCounter + 1;
    setMessageCounter(flag);
    updateMessage("");
    updateStrokeCount(0);
  };
  const handleKeyPress = (e) => {
    updateStrokeCount((prevState) => prevState + 1);
    if (e.key === "Enter") {
      e.preventDefault();
      pushMessage();
    }
  };
  return (
    <div>
      <ToggleHeaderButton
        onClick={() => {
          setDisplayBot(true);
          playSound(OpenBot);
        }}
      >
        L45C4-N0
      </ToggleHeaderButton>
      {displayBot && (
        <BotWrapper>
          <Header>
            <span
              onClick={() => {
                setDisplayBot(false);
                playSound(CloseBot);
              }}
            >
              X
            </span>
          </Header>
          <Wrapper>
            <LascanoPhoto>
              <video
                loop
                muted
                autoPlay
                poster={LascanoBot}
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                }}
              >
                <source src={LascanoVideo} type="video/webm" />
              </video>
            </LascanoPhoto>
            <Chat>
              <span>@L45C4-N0</span>
              {messageList.map((messageItem, i) => (
                <span key={i}>
                  @{messageItem.user}:<br />>{messageItem.message}
                </span>
              ))}
              <div ref={messagesEndRef} />
            </Chat>
            <QuestionPhoto></QuestionPhoto>
            <ChatInput>
              <span>chat</span>
              <textarea
                type="text"
                value={message}
                onKeyPress={handleKeyPress}
                onChange={setUpdateMessage}
              />
              <ButtonWrapper>
                <button onClick={pushMessage}>SEND</button>
              </ButtonWrapper>
            </ChatInput>
          </Wrapper>
        </BotWrapper>
      )}
    </div>
  );
};

export default Bot;
