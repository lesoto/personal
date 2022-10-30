import React from "react";
import { createRoot } from "react-dom/client";
//import ReactDOM from 'react-dom';
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ThemeContextProvider from "./contexts/ThemeContext";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
);

//
// ReactDOM.render(
//     <ThemeContextProvider>
//       <App />
//     </ThemeContextProvider>,
//   document.getElementById('root')
// );

reportWebVitals();
