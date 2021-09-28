import { createEffect, createSignal, onCleanup } from "solid-js";

export default function useWindowEvent(event, callback) {
  createEffect(() => {
    window.addEventListener(event, callback, false);

    onCleanup(() => {
      window.removeEventListener(event, callback, false);
    });
  });
}
