import styled from "styled-components";

export default styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 6px;
  padding: 20px;
`;
