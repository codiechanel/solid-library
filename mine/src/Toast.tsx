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
              <button onClick={() => {}}>X</button>
              <div className="notification-image">
                <HiSolidBell class="w-6 h-6" />
                {/*<img src={warning} alt="" />*/}
              </div>
              <div>
                <p className="notification-title !mb-1">{item.title}</p>
                <p className="notification-message !mb-0">{item.description}</p>
              </div>
            </div>
          );
        }}
      </For>
    </div>
  );
}
