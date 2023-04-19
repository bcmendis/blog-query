import React from "react";
import Navigation from "./Navigation";
import { Props } from "@/types/props";

const Layout: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-col min-h-screen max-w-screen items-center bg-white dark:bg-black">
      <Navigation />
      {props.children}
    </div>
  );
};

export default Layout;
