import styled from "styled-components";

export const SidebarContainer = styled.div`
  box-sizing: border-box;
  position: fixed;
  width: 20%;
  height: 80%;
  top: 10%;
  left: 0;
  background: #ffffff;
  border-width: 0px 1px 1px 0px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  isolation: isolate;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 999;
`;

export const SidebarItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 12px 8px 8px;
  gap: 4px;
  width: 100%;
  height: 40px;
  background: #ffffff;
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: #e9ecef;
  }
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

export const SidebarSubItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 12px 8px 18px;
  gap: 4px;
  width: 100%;
  height: 40px;
  background: #f7fafa;
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: #e9ecef;
  }
  flex: none;
  order: 3;
  align-self: stretch;
  flex-grow: 0;
`;

export const Icon = styled.img`
  margin-right: 8px;
  width: 16px;
  height: 16px;
`;

export const SidebarSubItemSelected = styled(SidebarSubItem)`
  background: #ffffff;
  isolation: isolate;
  position: relative;
  z-index: 0;
  color: #00437a;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #005ca9;
    opacity: 0.16;
    z-index: -1;
  }

  & > ${Icon} {
    filter: brightness(0) saturate(100%) invert(20%) sepia(100%) saturate(500%)
      hue-rotate(180deg) brightness(90%) contrast(100%);
  }
`;

export const ToggleIcon = styled.img`
  margin-left: auto;
  margin-right: 20px;
  width: 8px;
  height: 8px;
`;

export const Container = styled.div`
  padding: 20px;
  margin: 0 5% 0 2%;
  width: 93%;
  height: 100%;
`;

export const Title = styled.h1`
  width: 100%;
  height: 28px;
  font-size: 2vw;
  line-height: 140%;
  color: #22292e;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2vh;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2vw;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 1vh;
  font-size: 1.5vw;
`;

export const Input = styled.input`
  padding: 1vh 1vw;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1.5vw;
  width: 100%;
`;

export const Select = styled.select`
  padding: 1vh 1vw;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1.5vw;
  width: 100%;
`;

export const TextArea = styled.textarea`
  padding: 1vh 1vw;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1.5vw;
  resize: vertical;
  width: 100%;
  height: 20vh;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1vw;
  align-items: flex-end;
  margin-top: 2vh;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Button = styled.button<{ primary?: boolean }>`
  width: 13.8vw;
  height: 4vh;
  padding: 1vh 2vw;
  border: none;
  border-radius: 4px;
  background-color: ${({ primary }) => (primary ? "#ff8c00" : "#005ca9")};
  color: white;
  font-size: 1.5vw;
  cursor: pointer;

  &:hover {
    background-color: ${({ primary }) => (primary ? "#e07b00" : "#004a87")};
  }

  &:not(:last-child) {
    margin-right: 1vw;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 20vw;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const SmallInputGroup = styled(InputGroup)`
  max-width: 25vw;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const LargeInputGroup = styled(InputGroup)`
  flex: 2;
  max-width: 50vw;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
