import {
  children,
  createContext,
  createMemo,
  createSignal,
  splitProps,
  useContext,
  Switch,
  Match,
} from "solid-js";
import { createStore } from "solid-js/store";

const ToggleContext = createContext();

interface LocalProviderProps {
  onSelect?: Function;
  children: Function | any;
}

/**
 * will provide a render prop function
 * @param props
 * @constructor
 */
function LocalProvider(props: LocalProviderProps) {
  const [isOn, setCoolShow] = createSignal(false);

  const [state, setState] = createStore({
    get show() {
      return isOn;
    },
  });

  let actions = {
      /* setShow(val) {
        setCoolShow(val);
      },*/
      toggle() {
        setCoolShow((s) => !s);
      },
    },
    store = [state, actions];

  return (
    <ToggleContext.Provider value={store}>
      <Switch fallback={props.children}>
        <Match when={typeof props.children === "function"}>
          {props.children({ isOn })}
        </Match>
      </Switch>
    </ToggleContext.Provider>
  );
}

interface ButtonProps {
  children: Function | any;
  onClick?: Function;
  className?: string;
}

/* the only role of the button is register the click*/
function Button(props: ButtonProps) {
  let [store, { toggle }]: any = useToggleStore();

  const [local, others] = splitProps(props, ["className", "onClick"]);

  let className = createMemo(() => local.className);

  return (
    <div
      {...others}
      className={className()}
      onClick={(e) => {
        console.log("click");
        toggle();
        local.onClick?.(e);
      }}
    >
      {props.children}
    </div>
  );
}

/* its onlyh rple is to show hide children */
/*function Panel(props) {
  let [store, { setShow }]: any = useToggleStore();

  const [local, others] = splitProps(props, ["className"]);

  let className = createMemo(() => local.className);

  return (
    <div
      {...others}
      className={className()}
      classList={{ hidden: store.show }}
      /!*onClick={(e) => {
        setShow((s) => !s);

      }}*!/
    >
      {props.children}
    </div>
  );
}*/

export function useToggleStore() {
  return useContext(ToggleContext);
}

/*export default function Toggle() {
  return <div>Toggle</div>;
}*/

export default { LocalProvider, Button };
