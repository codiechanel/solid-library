import { HiSolidSelector } from "solid-icons/hi";
import { createMemo, splitProps } from "solid-js";

export default function ListBoxButton(props) {
  const [local, others] = splitProps(props, ["className", "innerClassName"]);

  let className = createMemo(
    () =>
      "relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm " +
      local.className
  );

  let innerClassName = createMemo(
    () => "block truncate " + local.innerClassName
  );

  return (
    <div className={className()} {...others}>
      <span className={innerClassName()}>{props.children}</span>
      <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <HiSolidSelector className="w-5 h-5 text-gray-400" aria-hidden="true" />
      </span>
    </div>
  );
}
