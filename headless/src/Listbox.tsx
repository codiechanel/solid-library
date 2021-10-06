import { createStore } from "solid-js/store";
import {
  batch,
  Component,
  createComputed,
  createContext,
  createMemo,
  createSignal,
  JSX,
  Match,
  splitProps,
  Switch,
  useContext,
} from "solid-js";

import { Dynamic } from "solid-js/web";

/* we should make render props function optional
 * if it is not a function we simply return it*/

const ListContext = createContext();

interface LocalProviderProps {
  onSelect?: Function;
  children: any;
}

function LocalProvider(props: LocalProviderProps) {
  const [selectedIndex, setCoolSelected] = createSignal();
  const [show, setCoolShow] = createSignal(false);

  const [state, setState] = createStore({
    get selectedIndex() {
      return selectedIndex;
    },
    get show() {
      return show;
    },
  });

  let actions = {
      setSelected(idx) {
        if (idx !== selectedIndex()) {
          props.onSelect?.(idx);
          setCoolSelected(idx);
        }
      },
      setShow(val) {
        setCoolShow(val);
      },
    },
    store = [state, actions];

  return (
    <ListContext.Provider value={store}>
      <Switch fallback={props.children}>
        <Match when={typeof props.children === "function"}>
          {props.children({ show, selectedIndex })}
        </Match>
      </Switch>
    </ListContext.Provider>
  );
}

export function useListStore() {
  return useContext(ListContext);
}

interface ButtonProps {
  children: any;
  onClick?: Function;
  className?: string;
}

/* there maybe no need to provide className function prop
 * since the selectedIdx is already published by root
 * and this button is not like a list item where we could send
 * true if it is selected
 *
 *
 * */

function Button(props: ButtonProps) {
  let [store, { setShow }]: any = useListStore();

  const [local, others] = splitProps(props, ["className", "onClick"]);

  let className = createMemo(() => local.className);

  return (
    <div
      {...others}
      className={className()}
      onClick={(e) => {
        // queueMicrotask(() => {
        setShow((s) => !s);
        local.onClick?.(e);
      }}
    >
      {props.children}
    </div>
  );
}

interface OptionProps extends JSX.HTMLAttributes<any> {
  /*children: Function | any;
  className?: Function | string;
  onClick?: Function;*/
  onClick?: Function | any;
  className?: Function | any;
  children?: any;
  key: number;
  as?: string;
  type?: string;
}

const Option: Component<OptionProps> = (props) => {
  // console.log("render");
  let [store, { setSelected, setShow }]: any = useListStore();

  const [local, others] = splitProps(props, ["className", "onClick", "as"]);

  const [isSelected, setIsSelected] = createSignal(
    store.selectedIndex() === props.key
  );

  createComputed(() => {
    let c = store.selectedIndex() === props.key;
    // console.log("set selctd");
    setIsSelected(c);
  });

  let className = createMemo(() => {
    // console.log(store.selectedIndex === props.key);
    if (typeof local.className === "function") {
      // console.log("memo class");
      return local.className?.({
        isSelected,
      });
    } else {
      return local.className;
    }
  });

  // const isSelectedFunc = () => store.selectedIndex === props.key;

  /* const isSelectedM = createMemo(() => {
    console.log("memo");
    return store.selectedIndex() === props.key;
  });

  console.log("rnder");*/
  return (
    <Dynamic
      component={local.as ?? "div"}
      // type="button"
      class="relative"
      {...others}
      /*@ts-ignore*/
      className={className()}
      onClick={(e) => {
        /* set selected props key */
        // console.log(props.key);
        batch(() => {
          setShow((s) => !s);
          setSelected(props.key);
        });
        local.onClick?.(e);
      }}
    >
      {/*{props.children({
        isSelected,
      })}*/}
      <Switch fallback={props.children}>
        <Match when={typeof props.children === "function"}>
          {props.children({
            isSelected,
          })}
        </Match>
      </Switch>
    </Dynamic>
  );
};

export default { LocalProvider, Option, Button };
