import { BasicSearchForm } from "../../components";
import { Header, Footer } from "../../layout";
import "./MainSearch.scss";

const MainSearch = () => (
  <div className="main-search">
    <div className="row">
      <Header isMainPage={true} />
      <BasicSearchForm />
      <Footer isMainPage={true} />
    </div>
  </div>
);

export { MainSearch };
