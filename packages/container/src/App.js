import React from "react";
import ReactDOM from "react-dom";

import { mount as MarketingApp } from "marketing/MarketingApp";
import { useEffect } from "react";
import { useRef } from "react";

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    MarketingApp(ref.current);
  }, []);

  return <div ref={ref} />;
};
