import { HiOutlineShieldCheck } from "react-icons/hi";
import { MdOutlineSettings } from "react-icons/md";
import { BiBell } from "react-icons/bi";
import { ViewGridIcon } from "@heroicons/react/solid";
import Dropdown from "./Dropdown";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import RecentlyPlayed from "./RecentlyPlayed";
import Image from "next/image";

function Right({ chooseTrack, spotifyApi }) {
  const { data: session } = useSession();
  const { accessToken } = session;
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);

  // Recently Played Tracks...
  useEffect(() => {
    if (!accessToken) return;

    spotifyApi.getMyRecentlyPlayedTracks({ limit: 20 }).then((res) => {
      setRecentlyPlayed(
        res.body.items.map(({ track }) => {
          return {
            id: track.id,
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: track.album.images[0].url,
          };
        })
      );
    });
  }, [accessToken]);

  return (
    <section className="p-4 space-y-12 pr-8">
      <div className="flex space-x-2 items-center justify-between">
        {/* Icons */}
        <div className="flex items-center space-x-4 rounded-full h-20 py-3 px-4">
          <HiOutlineShieldCheck className="text-white text-2xl" />
          <MdOutlineSettings className="text-white text-2xl" />
          <div>
            <BiBell className="text-white text-2xl" />
          </div>
        </div>
        {/* Profile */}
        <Dropdown />
      </div>

      {/* Recently Played Tracks */}
      <div className="bg-[#ED74B7] p-4 rounded-xl space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-white font-neue uppercase text-[30px]">Recently <br></br> Played</h4>
          <ViewGridIcon className="text-white h-6 mt-12" />
        </div>

        <div className="text-white space-y-4 overflow-y-scroll overflow-x-hidden h-[250px] md:h-[400px] scrollbar-hide">
          {recentlyPlayed.map((track, index) => (
            <RecentlyPlayed
              key={index}
              track={track}
              chooseTrack={chooseTrack}
            />
          ))}
        </div>
        <button className="text-[#ffffff] bg-black text-[13px] py-3.5 px-4 rounded-full w-full font-neue uppercase hover:bg-opacity-100 transition ease-out">
          View All
        </button>
      </div>

      <div className="relative w-55 left-4 bottom-7">
          <Image
          src="/loftslogo.png"
          alt=""
          width={200}
          height={200}
          className="absolute bottom-0"
          objectFit="contain"
          />
        </div>

    </section>
  );
}

export default Right;