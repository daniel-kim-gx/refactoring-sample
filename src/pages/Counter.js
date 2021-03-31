import React from "react";
import CounterComponentClass from "../components/CounterComponentClass";
import CounterComponentHook from "../components/CounterComponentHook";
import PageLayout from "../PageLayout";

const Counter = () => {
  return (
    <PageLayout>
      Counter components
      <CounterComponentClass />
      <CounterComponentHook />
    </PageLayout>
  );
};

export default Counter;
