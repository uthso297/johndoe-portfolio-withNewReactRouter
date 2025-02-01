import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css';
import Main from "./Main/Main";
import Home from "./Main/Home/Home";
import NotFoundPage from "./Main/NotFoundPage";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);
