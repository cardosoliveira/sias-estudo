import styled from "styled-components";

export const FooterContainer = styled.footer`
  box-sizing: border-box;
  width: 100%;
  height: 8%;
  background-color: #005ca9;
  border-top: 2px solid #d0e0e3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 20px;
  margin-top: 5px;
`;
