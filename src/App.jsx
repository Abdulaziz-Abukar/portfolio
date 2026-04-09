import React from "react";
import { AppRoutes } from "./routes/AppRoutes";
import ScrollToTop from "./components/ScrollToTop";

export const App = () => {
  return (
    <>
      <ScrollToTop />
      <AppRoutes />
    </>
  );
};
