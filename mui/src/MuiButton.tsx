import { styled } from "solid-styled-components";

const MuiButton = styled("button")`
  display: inline-flex;
  -moz-box-align: center;
  align-items: center;
  -moz-box-pack: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  outline: currentcolor none 0px;
  border: 0px none;
  margin: 0px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  min-width: 64px;
  padding: 6px 16px;
  border-radius: 4px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  color: rgb(255, 255, 255);
  background-color: rgb(25, 118, 210);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;

  &:hover {
    text-decoration: none;
    background-color: rgb(21, 101, 192);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,
      rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
  }

  &:active {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px,
      rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px;
  }
`;

export default MuiButton;

/*export default function MuiButton(props) {
  return (
    <button class="mat-button" type="button">
      {props.children}
    </button>
  );
}*/
