import smoothscroll from "smoothscroll-polyfill";
import "@fontsource/titillium-web/200.css";
import "@fontsource/titillium-web/300.css";
import "@fontsource/titillium-web/400.css";

import "./src/styles/global.css";

export const onClientEntry = () => {
  smoothscroll.polyfill();
};
