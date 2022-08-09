import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import { useRecoilState } from "recoil";
import { playingTrackState, playState } from "../atoms/playerAtom";


function Poster({ track, chooseTrack }) {

    const [play, setPlay] = useRecoilState(playState);
    const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);
  
    const handlePlay = () => {
      chooseTrack(track);
  
      if (track.uri === playingTrack.uri) {
        setPlay(!play);
      }
    };

  return (
    <div className="w-[260px] h-[360px] rounded-[50px] overflow-hidden relative text-white/80 cursor-pointer hover:scale-105 hover:text-white/100 transition duration-200 ease-out group mx-auto"
    onClick={handlePlay}>
        <img
        src={track.albumUrl}
        alt=""
        className="h-full w-full absolute inset-0 object-cover rounded-[50px] opacity-60 group-hover:opacity-100"
      />

        <div className="absolute bottom-10 inset-x-0 ml-4 flex justify-center space-x-3.5">
        <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center group-hover:bg-white flex-shrink-0">
          {track.uri === playingTrack.uri && play ? (
            <BsFillPauseFill className="text-black text-xl" />
          ) : (
            <BsFillPlayFill className="text-black text-xl ml-[1px]" />
          )}
        </div>

        <div className="absolute bottom-[230px] ml-4 flex flex-col items-center">
          <h4 className="font-neue uppercase font-bold italic truncate text-[23px]">{track.title}</h4>
          <h6 className="font-editorial text-[18px]">{track.artist}</h6>
        </div>
      </div>

    </div>
  )
}

export default Poster