// ContextProvider.js
import React, { createContext, useState, useEffect } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  useEffect(() => {
    const storedPrompts = localStorage.getItem("prevPrompts");
    const storedRecentPrompt = localStorage.getItem("recentPrompt");
    if (storedPrompts) {
      setPrevPrompts(JSON.parse(storedPrompts));
    }
    if (storedRecentPrompt) {
      setRecentPrompt(storedRecentPrompt);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("prevPrompts", JSON.stringify(prevPrompts));
    localStorage.setItem("recentPrompt", recentPrompt);
  }, [prevPrompts, recentPrompt]);

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  };

  const onSent = async (prompt) => {
    try {
      setInput("");
      setResultData(""); // prev response will be removed from the state variable
      setLoading(true);
      setShowResult(true);

      let response;
      if (prompt !== undefined) {
        response = await runChat(prompt);
        setRecentPrompt(prompt);
      } else if (prompt) {
        setRecentPrompt(prompt);
        response = await runChat(prompt);
      } else {
        setPrevPrompts((prev) => [...prev, input]);
        setRecentPrompt(input);
        response = await runChat(input);
      }

      let resultArray = response.split("**");
      let newResponse = "";
      for (let i = 0; i < resultArray.length; i++) {
        if (i === 0 || i % 2 !== 1) {
          newResponse += resultArray[i];
        } else {
          newResponse += "<b class='gl'>" + resultArray[i] + "</b>";
        }
      }
      let newResponse2 = newResponse.split("*").join("</br>");
      let newResponseArray = newResponse2.split(" ");
      for (let i = 0; i < newResponseArray.length; i++) {
        const nextWord = newResponseArray[i];
        delayPara(i, nextWord + " ");
      }
      setLoading(false);
      setInput("");
      // обработка результата
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const removeChat = (index) => {
    const updatedPrompts = [...prevPrompts];
    updatedPrompts.splice(index, 1);
    setPrevPrompts(updatedPrompts);
  };

  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    setShowResult,
    loading,
    setLoading,
    resultData,
    setResultData,
    input,
    newChat,
    setInput,
    removeChat,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
