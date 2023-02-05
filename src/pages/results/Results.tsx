import { Link, useParams } from "react-router-dom";
import { BasicSearchForm } from "../../components";
import { Footer, Header } from "../../layout";
import { mockResults } from "./helpers";
import { ImgPlaceholderIcon } from "../../ui/icons";

const Results = () => {
  let { word } = useParams();
  return (
    <>
      <Header />
      <BasicSearchForm />
      <div className="height-70-vh mt-5">
        {mockResults.map((result, index) => (
          <div className="card mb-3" key={index}>
            <div className="row g-0">
              <div className="col-md-3">
                <ImgPlaceholderIcon />
              </div>
              <div className="col-md-9">
                <div className="card-body p-0">
                  <Link to={`/e/${word}/${result.hash}`}>
                    <h3 className="card-title text-start ps-3">
                      {result.title}
                    </h3>
                  </Link>
                  <p className="card-text text-start ps-3">{result.text}</p>
                  <p className="card-text text-start ps-3">
                    <small className="text-muted">{result.time}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export { Results };
