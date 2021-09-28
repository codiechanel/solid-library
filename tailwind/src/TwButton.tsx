import { children, createMemo, splitProps } from "solid-js";
/*import { apply, tw } from "twind";
import { css } from "twind/css";*/

export default function TwButton(props) {
  /* console.log("called");
  tw(
    css({
      "&::before": { content: '"🙁"' },
      "&::after": { content: '"😊"' }
    })
  );
  const userSuppliedClassName = "text-blue-800";
  const appliedClassName = apply`text-gray-800`;
  const classNames = tw(appliedClassName, userSuppliedClassName);

  console.log("classNames", classNames);*/

  /* not reallk needed we are not manipulating xchilren */
  // const c: any = children(() => props.children);

  const [local, others] = splitProps(props, ["className", "type"]);

  let type = local.type ? local.type : "button";
  /*let className = createMemo(() =>
    tw(
      "text-blue-900 bg-blue-100 inline-flex justify-center px-4 py-2 text-sm font-medium border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 " +
        local.className
    )
  );*/
  let className = createMemo(
    () =>
      "text-blue-900 bg-blue-100 inline-flex justify-center px-4 py-2 text-sm font-medium border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 " +
      local.className
  );
  return (
    <button type={type} class={className()} {...others}>
      {props.children}
    </button>
  );
}
