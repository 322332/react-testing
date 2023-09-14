import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Link,
  Outlet,
} from "react-router-dom";

import { LogIn } from "./pages/login";
import { Message } from "./pages/message";

export const App = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LogIn />} />
          <Route path="/message" element={<Message />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

function Layout() {
  return (
    <div>
      <h1>Welcome to the Inbox app!</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <Link to="/">Inbox</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page of the app</Link>
      </p>
    </div>
  );
}
