import styled from "styled-components";

const FooterSection = styled.div`
  background-color: #0aa860;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Footer() {
  return (
    <>
      <FooterSection>
        <p>This is a test Footer</p>
      </FooterSection>
    </>
  );
}
