// pages/api/spotify/me/user.ts

import { NextApiRequest, NextApiResponse } from "next";
import { getUserProfile } from "@src/api/spotify/webapi/me";
import { SpotifyUser } from "@src/api/spotify/types/responses";
import { getSession } from "next-auth/react";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    token: { accessToken },
  }: any = await getSession({ req });

  const response = await getUserProfile(accessToken);
  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isLoggedIn: false });
  }
  const currentUser: SpotifyUser = await response.json();

  if (currentUser.display_name === null) {
    return res.status(200).json({ isLoggedIn: false });
  }

  return res.status(200).json(currentUser);
}
