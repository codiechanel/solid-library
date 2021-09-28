import { createSignal, For, Match, Show, Switch } from "solid-js";
// import { NpmResultItem } from "../common/constants";
import { HiSolidCheck } from "solid-icons/hi";

interface ListBoxProps {
  show: any;
  options: any;
  onSelect: Function;
  displayKey?: string;
}

export default function ListBox({ show, options, onSelect, displayKey = "label" }: ListBoxProps) {
  let [selected, setSelected] = createSignal();
  return (
    <div class="relative  z-10 ">
      <Show when={show()}>
        {showVal => {
          // <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">

          return (
            // <div class="  absolute left-0 top-0 overflow-auto max-w-md  h-[300px]  flex  w-full bg-primary-2 p-4">
            <ul class="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              <Switch fallback={<p>Failed to fetch quote</p>}>
                <Match when={options.loading}>
                  <div class=" flex justify-center items-center w-full min-h-full flex-1 h-full ">
                    <div>loading...</div>
                  </div>
                  {/*<div class=" flex justify-center items-center mt-8 w-full min-h-full flex-1 h-full">
                          <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900" />
                        </div>*/}
                </Match>
                <Match when={options.error}>
                  <p class="text-red-600">{options.error}</p>
                </Match>
                <Match when={options()}>
                  {q => {
                    return (
                      // <div class="relative  ">
                      <For each={options()}>
                        {(x: any, i) => {
                          // GitUrlParse
                          return (
                            <li class="text-gray-900 cursor-default select-none relative py-2 pl-10 pr-4 hover:bg-red-100">
                              <span
                                class={`${
                                  selected() === i() ? "font-medium" : "font-normal"
                                } block truncate !hover:text-amber-900 !hover:bg-amber-100`}
                                onClick={() => {
                                  setSelected(i());
                                  onSelect(i());
                                }}
                              >
                                {x[displayKey]}
                              </span>

                              <Show when={selected() === i()}>
                                <span class="text-amber-600 absolute inset-y-0 left-0 flex items-center pl-3">
                                  <HiSolidCheck className="w-5 h-5" aria-hidden="true" />
                                </span>
                              </Show>
                            </li>
                            /*<div

                              class="text-gray-900 cursor-default select-none relative py-2 pl-10 pr-4"
                              onclick={() => {
                                setSelected(i());
                                onSelect(i());
                              }}
                            >
                              <p class="text-sm font-semibold text-gray-800">
                                {x.label}
                              </p>
                            </div>*/
                          );
                        }}
                      </For>
                    );
                  }}
                </Match>
              </Switch>
            </ul>
          );
        }}
      </Show>
    </div>
  );
}
