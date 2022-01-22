import styled from "styled-components";

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
