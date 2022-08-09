import { useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import { useRecoilState } from "recoil";
import { playingTrackState, playState } from "../atoms/playerAtom";


function Player({ accessToken, trackUri }) {
    const [play, setPlay] = useRecoilState(playState);
    const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);
  
    useEffect(() => {
      if (trackUri) {
        setPlay(true);
      }
    }, [trackUri]);
  
    if (!accessToken) return null;

    return (
        <>
        <SpotifyPlayer
                styles={{
                fontFamily: "PP Editorial New",
                activeColor: "#fff",
                bgColor: "#181818",
                color: "#fff",
                loaderColor: "#fff",
                sliderColor: "#3811D6",
                trackArtistColor: "#ccc",
                trackNameColor: "#fff",
                height: "70px",
                sliderTrackColor: "#ffffff",
                sliderTrackBorderRadius: "4px",
                sliderHandleColor: "#fff",
                errorColor: "#fff",
                }}
                token={accessToken}
                showSaveIcon
                callback={(state) => {
                setPlay(state.isPlaying);
                }}
                play={play}
                uris={trackUri ? [trackUri] : []}
                magnifySliderOnHover={true}
                autoPlay={true}
            />
            </>
        );
        }

export default Player

