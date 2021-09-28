import { styled } from "solid-styled-components";

const ChakraTextArea = styled("textarea")`
  width: 100%;
  min-width: 0;
  outline: transparent solid 2px;
  outline-offset: 2px;
  position: relative;
  appearance: none;
  transition-property: var(--chakra-transition-property-common);
  transition-duration: var(--chakra-transition-duration-normal);
  padding-top: 8px;
  padding-bottom: 8px;
  min-height: 80px;
  line-height: var(--chakra-lineHeights-short);
  vertical-align: top;
  font-size: var(--chakra-fontSizes-md);
  padding-inline-start: var(--chakra-space-4);
  padding-inline-end: var(--chakra-space-4);
  height: var(--chakra-sizes-10);
  border-radius: var(--chakra-radii-md);
  border-style: solid;
  border-width: 1px;
  border-image: none 100% / 1 / 0 stretch;
  border-color: inherit;
  background: inherit;

  &:hover,
  &[data-hover] {
    border-color: var(--chakra-colors-gray-300);
  }

  &:focus,
  &[data-focus] {
    z-index: 1;
    border-color: rgb(49, 130, 206);
    box-shadow: rgb(49, 130, 206) 0 0 0 1px;
  }
`;

export default ChakraTextArea;
