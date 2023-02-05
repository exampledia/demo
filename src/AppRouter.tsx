import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./layout";
import { Example, MainSearch, Results } from "./pages";

const AppRouter = () => {
  return (
    <BrowserRouter basename="/demo/dist">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainSearch />} />
          <Route path="/q/:word" element={<Results />} />
          <Route path="/e/:word/:hash" element={<Example />} />
          <Route path="*" element={<MainSearch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { AppRouter };
