import styled from "styled-components";

export const CardContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  position: absolute;
  width: 77%;
  height: 79%;
  left: 21%;
  top: calc(10% + 1%);
  margin-right: 2%;
  background: #ffffff;
  border: 2px solid #d0e0e3;
  box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15),
    0px 1px 3px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  z-index: 1;
  overflow-y: auto;
  overflow-x: hidden;
`;
