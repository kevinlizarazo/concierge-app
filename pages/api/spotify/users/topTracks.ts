// pages/api/spotify/users/topItems.ts

import { NextApiRequest, NextApiResponse } from "next";
import { getTopTracks } from "@src/api/spotify/webapi/users";
import { TimeRange } from "@src/api/spotify/types/requests";
import {
  SpotifyUserTopItems,
  SpotifyTrack,
} from "@src/api/spotify/types/responses";
import { getSession } from "next-auth/react";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SpotifyUserTopItems<SpotifyTrack[]>>
) {
  const {
    token: { accessToken },
  }: any = await getSession({ req });
  const timeRange = req.query.timeRange as TimeRange;
  const response = await getTopTracks(accessToken, timeRange);
  const data: SpotifyUserTopItems<SpotifyTrack[]> = await response.json();

  return res.status(200).json(data);
}
