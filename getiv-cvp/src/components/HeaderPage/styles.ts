import styled from "styled-components";

export const Header = styled.header`
  background-color: #005ca9;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  height: 10%;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 20px;
  background-color: #004a87;
  border: 2px solid white;
  border-radius: 4px;
  color: white;
  border: none;
  cursor: pointer;
`;

export const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6.5px 8px;
  gap: 8px;
  width: 65px;
  height: 31px;
  background: #005ca9;
  border: 1px solid #ffffff;
  border-radius: 2px;
  color: #ffffff;
  cursor: pointer;
  font-weight: 400;
`;

export const Logo = styled.img`
  height: 20px;
  margin-left: 20px;
  margin-top: 10px;
`;

export const HamburgerButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`;

export const UserGreeting = styled.span`
  width: 119px;
  height: 28px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  line-height: 140%;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
