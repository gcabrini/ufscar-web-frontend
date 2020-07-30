import styled, { css } from "styled-components";

type Props = {
  my?: number;
  mt?: number;
};

export default styled.hr<Props>`
  width: 100%;
  height: 2px;
  border-color: ${(props) => props.theme.colors.light};
  ${(props) =>
    !!props.mt &&
    css`
      margin-top: ${props.mt}px;
    `}

  ${(props) =>
    !!props.my &&
    css`
      margin-top: ${props.my}px;
      margin-bottom: ${props.my}px;
    `}
`;
