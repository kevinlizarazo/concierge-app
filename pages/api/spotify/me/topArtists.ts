// pages/api/spotify/me/topArtists.ts

import { NextApiRequest, NextApiResponse } from "next";
import { getTopArtists } from "@src/api/spotify/webapi/me";
import { TimeRange } from "@src/api/spotify/types/requests";
import {
  SpotifyUserTopItems,
  SpotifyArtist,
} from "@src/api/spotify/types/responses";
import { getSession } from "next-auth/react";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SpotifyUserTopItems<SpotifyArtist[]>>
) {
  const {
    token: { accessToken },
  }: any = await getSession({ req });
  const timeRange = req.query.timeRange as TimeRange;
  const response = await getTopArtists(accessToken, timeRange);
  const data: SpotifyUserTopItems<SpotifyArtist[]> = await response.json();

  return res.status(200).json(data);
}
