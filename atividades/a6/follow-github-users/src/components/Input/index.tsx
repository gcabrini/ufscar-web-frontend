import styled from "styled-components";

export default styled.input`
  width: 100%;
  padding: 5px 12px;
  font-size: 0.875rem;
  line-height: 20px;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 6px;
  outline: none;
  box-shadow: inset 0 1px 0 rgba(225, 228, 232, 0.2);
`;
