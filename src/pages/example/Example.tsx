import { useEffect } from "react";
import { useParams, useNavigate, useNavigationType } from "react-router-dom";
import { BasicSearchForm } from "../../components";
import { Header, Footer } from "../../layout";
import { mockExample } from "./helpers";

const Example = () => {
  let { hash } = useParams();
  const navigate = useNavigate();
  const navigationType = useNavigationType();

  const returnToResults = () => {
    navigate(-1);
  };

  useEffect(() => {
    let player: unknown | undefined = undefined;
    setTimeout(() => {
      player = createPlayer();
      const url = "http://mavira.ddns.net:9200/dash-sandbox/dash.mpd";
      // @ts-ignore
      player.initialize(document.querySelector("#videoPlayer"), url, true);
    }, 1000);
    return () => {
      if (player) {
        // @ts-ignore
        player.destroy();
      }
    };
  }, []);

  const createPlayer = (): unknown => {
    // @ts-ignore
    const player = dashjs.MediaPlayer().create();
    return player;
  };

  return (
    <>
      <Header />
      <BasicSearchForm />
      {navigationType && navigationType !== "POP" && (
        <button
          className="btn btn-primary mt-5 btn-primary-custom"
          type="button"
          onClick={returnToResults}
        >
          ← Back to results
        </button>
      )}

      <div className="height-70-vh mt-5">
        <div className="card mb-3">
          <video
            id="videoPlayer"
            className="card-img-top"
            data-dashjs-player
            controls
          ></video>

          <div className="card-body">
            <h5 className="card-title text-start">{mockExample.title}</h5>
            <p className="card-text text-start ">{mockExample.text}</p>
            <p className="card-text text-start">
              <small className="text-muted">{mockExample.time}</small>
            </p>
            <p className="card-text text-start">
              Hash: <small className="red">{hash}</small>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Example };
