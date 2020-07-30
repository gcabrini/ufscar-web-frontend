import styled, { css } from "styled-components";

type Props = {
  my?: number;
  px?: number;
  justifyContent?: "center" | "space-between";
};

export default styled.div<Props>`
  display: flex;
  justify-content: ${(props) => props.justifyContent || "space-between"};
  align-items: center;

  ${(props) =>
    !!props.my &&
    css`
      margin-top: ${props.my}px;
      margin-bottom: ${props.my}px;
    `}

  ${(props) =>
    !!props.px &&
    css`
      padding-right: ${props.px}px;
      padding-left: ${props.px}px;
    `}
`;
