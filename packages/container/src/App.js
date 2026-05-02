import React from "react";
import ReactDOM from "react-dom";

import { mount as MarketingApp } from "marketing/MarketingApp";
import { useRef } from "react";
import { useEffect } from "react";

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    MarketingApp(ref.current);
  }, []);

  return <div ref={ref} />;
};
