import styled from "styled-components";

export default styled.button`
  padding: 3px 12px;
  font-size: 12px;
  line-height: 20px;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary};
  border-color: ${(props) => props.theme.colors.border};
  border: 0;
  border-radius: 6px;
  box-shadow: 0 1px 0 rgba(27, 31, 35, 0.1),
    inset 0 1px 0 hsla(0, 0%, 100%, 0.03);
`;
