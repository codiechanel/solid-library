import { styled } from "solid-styled-components";
import { Component, createMemo, JSX, splitProps } from "solid-js";

const RippleRoot = styled("div")`
  & {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  & div {
    position: absolute;
    border: 4px solid #fff;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  & div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes lds-ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
`;

const RippleLoader: Component<JSX.HTMLAttributes<HTMLDivElement>> = (props) => {
  const [local, others] = splitProps(props, ["className", "class"]);
  let className = createMemo(
    () =>
      "flex-1 flex items-center justify-center " +
      local.className +
      " " +
      local.class
  );
  return (
    <div class={className()} {...others}>
      <RippleRoot>
        <div />
        <div />
      </RippleRoot>
    </div>
  );
};

export default RippleLoader;

/*
export default function RippleLoader() {
  return (
    <div class="text-red-500  flex-1 flex items-center justify-center">
      <RippleRoot>
        <div></div>
        <div></div>
      </RippleRoot>
    </div>
  );
}
*/
