// pages/api/openai/promptHandler.ts

import { NextApiRequest, NextApiResponse } from "next";
import { getCompletion } from "@src/api/openai/chat/completion";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data, mode } = req.body;

  const response = await getCompletion(data, mode);

  return res.status(200).json(response.data.choices[0].message.content);
}
