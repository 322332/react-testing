import { LogIn } from "../pages/login";
import { Message } from "../pages/message";
import Index from "../pages/index";

const routes = [
  {
    name: "/",
    url: `/`,
    element: Index,
  },
  {
    name: "Main",
    url: `/main`,
    element: LogIn,
  },
  {
    name: "SecondPage",
    url: "/main/secondPage",
    element: Message,
  },
];

export default routes;
