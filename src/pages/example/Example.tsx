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

  console.log("navigationType", navigationType);

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
            className="card-img-top"
            data-dashjs-player
            src="/video/dash.mpd"
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
