import { createMemo, splitProps, JSX } from "solid-js";
import type { Component } from "solid-js";

interface ScrollableProps extends JSX.HTMLAttributes<HTMLDivElement> {}

const Scrollable: Component<ScrollableProps> = (props) => {
  const [local, others] = splitProps(props, ["className", "class"]);
  let className = createMemo(
    () =>
      "absolute inset-0 overflow-auto" +
      (local?.className ?? "") +
      " " +
      (local?.class ?? "")
  );
  return (
    <div class={className()} {...others}>
      {props.children}
    </div>
  );
};

export default Scrollable;
