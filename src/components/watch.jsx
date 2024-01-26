import "../css/watch.css";
import { useEffect } from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import RoundIcon from "./common/roundIcon";
import video_url from "../assets/videos/production.mp4";
import Navbar from "./navbar";

const Watch = (props) => {
  const navigate = useNavigate();
  const { state } = useLocation();

  return (
    <>
      <Navbar navColor={true} userID={state.userID} />
      <div className="watch">
        <div className="video__frame">
          <div className="video__back">
            <RoundIcon
              iconName="ArrowLeft"
              className="icon__back"
              onClick={() => navigate(-1)}
            />
          </div>
          <video src={video_url} controls className="video__player" autoPlay />
        </div>
      </div>
    </>
  );
};

export default Watch;
