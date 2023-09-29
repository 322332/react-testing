import React from "react";
import Platform from "myplatformapp/index";

import theme from "./config/theme";
import routes from "./config/routes";
import config from "./config/config";

//import Plat2 from "../../../Documents/platform/src/Platform";
//import Plat2 from "gokhan-platform/src/Platform";

export function App() {
  return <Platform theme={theme} routes={routes} />;
}
