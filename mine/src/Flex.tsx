import { styled } from "solid-styled-components";
import { Component, createMemo, JSX, splitProps } from "solid-js";

// interface ColumnProps extends JSX.HTMLAttributes<HTMLDivElement> {}

const Column: Component<JSX.HTMLAttributes<HTMLDivElement>> = (props) => {
  const [local, others] = splitProps(props, ["className", "class"]);
  let className = createMemo(
    () => "flex flex-col " + local.className + " " + local.class
  );
  return (
    <div class={className()} {...others}>
      {props.children}
    </div>
  );
};

const Row: Component<JSX.HTMLAttributes<HTMLDivElement>> = (props) => {
  const [local, others] = splitProps(props, ["className", "class"]);
  let className = createMemo(
    () => "flex flex-row " + local.className + " " + local.class
  );
  return (
    <div class={className()} {...others}>
      {props.children}
    </div>
  );
};

const ColumnFull: Component<JSX.HTMLAttributes<HTMLDivElement>> = (props) => {
  const [local, others] = splitProps(props, [
    "className",
    "class",
    "classList",
  ]);
  let className = createMemo(
    () =>
      "flex flex-col flex-1 " +
      (local.className ?? "") +
      " " +
      (local.class ?? "")
  );
  let classList = createMemo(() => local.classList ?? {});
  return (
    <div class={className()} {...others} classList={classList()}>
      {props.children}
    </div>
  );
};

const RowFull: Component<JSX.HTMLAttributes<HTMLDivElement>> = (props) => {
  const [local, others] = splitProps(props, [
    "className",
    "class",
    "classList",
  ]);
  let className = createMemo(
    () =>
      "flex flex-row flex-1 " +
      (local.className ?? "") +
      " " +
      (local.class ?? "")
  );
  let classList = createMemo(() => local.classList ?? {});
  return (
    <div class={className()} {...others} classList={classList()}>
      {props.children}
    </div>
  );
};

const CenterChild: Component<JSX.HTMLAttributes<HTMLDivElement>> = (props) => {
  const [local, others] = splitProps(props, ["className", "class"]);
  let className = createMemo(
    () =>
      "flex flex-1 justify-center items-center " +
      local.className +
      " " +
      local.class
  );
  return (
    <div class={className()} {...others}>
      {props.children}
    </div>
  );
};

export default { Column, ColumnFull, Row, RowFull, CenterChild };
