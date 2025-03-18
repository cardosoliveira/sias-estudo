import styled from "styled-components";
import { Box, Typography, IconButton } from "@mui/material";

export const ModalContainer = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: white;
  box-shadow: 24px;
  padding: 16px;
  border-radius: 8px;
  outline: none;
`;

export const ModalHeader = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Title = styled(Typography)`
  font-weight: bold;
  text-align: center;
`;

export const ModalContent = styled(Box)`
  margin-top: 16px;
  text-align: center;
`;

export const ModalActions = styled(Box)`
  display: flex;
  justify-content: center;
  margin-top: 32px;
`;

export const CloseButton = styled(IconButton)`
  background-color: orange;
  color: white;
  &:hover {
    background-color: darkorange;
  }
  position: relative;
  top: -8px;
  right: -8px;
`;
