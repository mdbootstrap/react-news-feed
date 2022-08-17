import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Basic from "./Basic/Basic";
import Blog from "./Blog/Blog";
import Aggregator from "./Aggregator/Aggregator";
import NewsFeed from "./NewsFeed/NewsFeed";
import Social1 from "./Social1/Social1";
import Social2 from "./Social2/Social2";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Basic" element={<Basic />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Aggregator" element={<Aggregator />} />
        <Route path="/NewsFeed" element={<NewsFeed />} />
        <Route path="/Social1" element={<Social1 />} />
        <Route path="/Social2" element={<Social2 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
