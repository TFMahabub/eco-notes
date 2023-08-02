"use client";
import { store } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Provider store={store}>
        <nav>this dashboard navbar</nav>
        {children}
      </Provider>
    </>
  );
};

export default layout;
