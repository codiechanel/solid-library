import { createEffect, createMemo, createSignal, onCleanup } from "solid-js";

export default function useDebounce(usrValue, delay) {
  // const [usrValue, setUserValue] = createSignal(initialValue);
  const [debouncedValue, setDebouncedValue] = createSignal(usrValue());
  let firstRun = true;

  createEffect(() => {
    // setDebouncedValue(value());
    let newDebouncedValue = usrValue();
    let handler = null;

    if (firstRun) {
      /* first call don't set timeout yet
       * just return initial user value */
      firstRun = false;
    } else {
      handler = setTimeout(() => {
        setDebouncedValue(newDebouncedValue);
      }, delay);
    }

    onCleanup(() => {
      clearTimeout(handler);
      handler = null;
    });
  });

  return debouncedValue;
}
