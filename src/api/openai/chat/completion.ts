// src/api/openai/text/completion.ts

import { openai } from "@src/api/openai/openai";

export const getCompletion = async (promptData: any, mode: string) => {
  if (!promptData) return null;

  let prompt = "";

  if (mode === "artists") {
    prompt = `You are a music critic analyzing my collection of music. Using the data below of my recently played top artists, how would you describe my recent musical tastes, in one conversational and analytical paragraph?
    ${JSON.stringify(promptData)}`;
  }
  if (mode === "tracks") {
    prompt = `You are a music critic analyzing my collection of music. Using the data below of my recently played top tracks, how would you describe my recent musical tastes, in one conversational and analytical paragraph?
    ${JSON.stringify(promptData)}`;
  }

  console.log(prompt);

  return await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
    max_tokens: 256,
  });
};
