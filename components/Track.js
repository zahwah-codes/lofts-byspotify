import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { playingTrackState, playState } from "../atoms/playerAtom";
import { ImHeadphones } from "react-icons/im";

function Track({ track, chooseTrack }) {
  const [hasLiked, setHasLiked] = useState(false);
  const [play, setPlay] = useRecoilState(playState);
  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);

  const handlePlay = () => {
    chooseTrack(track);

    if (track.uri === playingTrack.uri) {
      setPlay(!play);
    }
  };

  return (
    <div className="flex items-center justify-between space-x-20 cursor-default rounded-lg hover:bg-white/10 py-2 px-4 group transition ease-out">
      <div className="flex items-center">
        <img
          src={track.albumUrl}
          alt=""
          className="rounded-xl h-12 w-12 object-cover mr-3"
        />
        <div>
          <h4 className="text-white font-neue text-[20px] truncate w-[450px]">
            {track.title}
          </h4>
          <p className="text-white text-[15px] font-editorial group-hover:text-white">
            {track.artist}
          </p>
        </div>
      </div>

      <div className="md:ml-auto flex items-center space-x-2.5">
        <div className="text-white flex space-x-1 text-sm font-semibold">
          <ImHeadphones className="text-lg" />
          <h4 className="font-sans">{track.popularity}</h4>
        </div>
        <div className="flex items-center rounded-full border-2 border-white w-[85px] h-10 relative cursor-pointer group-hover:border-white/40">
          <AiFillHeart
            className={`text-xl ml-3 icon ${
              hasLiked ? "text-[#3811D6]" : "text-white"
            }`}
            onClick={() => setHasLiked(!hasLiked)}
          />
          {track.uri === playingTrack.uri && play ? (
            <>
              <div
                className="h-10 w-10 rounded-full border border-[#3811D6] flex items-center justify-center absolute -right-0.5 bg-[#3811D6] icon hover:scale-110"
                onClick={handlePlay}
              >
                <BsFillPauseFill className="text-white text-xl" />
              </div>
            </>
          ) : (
            <>
              <div
                className="h-10 w-10 rounded-full border border-white/60 flex items-center justify-center absolute -right-0.5 hover:bg-[#3811D6] hover:border-[#3811D6] icon hover:scale-110"
                onClick={handlePlay}
              >
                <BsFillPlayFill className="text-white text-xl ml-[1px]" />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Track;