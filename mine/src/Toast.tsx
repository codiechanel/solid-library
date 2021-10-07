import "./Toast.css";
import { HiSolidBell } from "solid-icons/hi";
import { createSignal, For, createEffect } from "solid-js";
// import {ToastMsg} from "../../common/src/constants";
// import { ToastMsg } from "../Common/constants";

let [list, setList] = createSignal([]);

export interface ToastMsg {
  title: string;
  description?: string;
}

export function showToast(toastItem: ToastMsg) {
  // setToastMsg({ msg: toastItem });
  setList([...list(), toastItem]);
}

export default function Toast() {
  createEffect(() => {
    if (list().length > 0) {
      let idx = list().length - 1;
      let newMsg = list()[idx];
      setTimeout(() => {
        let newArr = [...list()];
        newArr.splice(list().indexOf(newMsg), 1);
        setList(newArr);
      }, 3000);
    }
  });

  return (
    <div className={`notification-container top-right`}>
      <For each={list()}>
        {(item) => {
          return (
            <div className="notification toast top-right bg-gray-700">
              {/*  <button onClick={() => {}}>X</button>
              <div className="notification-image">
                <HiSolidBell class="w-6 h-6" />
                <img src={warning} alt="" />
              </div>*/}
              {/*     <div>
                <p className="notification-title !mb-1">{item.title}</p>
                <p className="notification-message !mb-0">{item.description}</p>
              </div>*/}
              {/*mx-auto*/}
              <div class="flex w-full max-w-sm  overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 ">
                <div class="flex items-center justify-center w-12 bg-green-500">
                  <svg
                    className="w-6 h-6 text-white fill-current"
                    viewBox="0 0 40 40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
                  </svg>
                </div>

                <div class="px-4 py-2 -mx-3">
                  <div class="mx-3">
                    <span class="font-semibold text-green-500 dark:text-green-400">
                      {item.title}
                    </span>
                    <p class="text-sm text-gray-600 dark:text-gray-200">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </For>
    </div>
  );
}
