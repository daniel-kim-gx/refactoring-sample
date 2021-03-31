import React from "react";
import CounterComponentClass from "../components/CounterComponentClass";
import CounterComponentHook from "../components/CounterComponentHook";
import PageLayout from "../PageLayout";
import Divider from "../base/Divider";

const Counter = () => {
  return (
    <PageLayout>
      Counter components
      <CounterComponentClass />
      <Divider />
      <CounterComponentHook />
    </PageLayout>
  );
};

export default Counter;
