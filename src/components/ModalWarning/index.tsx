import React from "react";
import { Modal, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  ModalContainer,
  ModalHeader,
  ModalContent,
  ModalActions,
  Title,
  CloseButton,
} from "./styles";

interface ModalEditarProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  titulo: string;
  conteudo: string;
}

const ModalEditar: React.FC<ModalEditarProps> = ({
  open,
  onClose,
  onConfirm,
  titulo,
  conteudo,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <ModalContainer>
        <ModalHeader>
          <Title variant="h6">{titulo}</Title>
          <CloseButton onClick={onClose}>
            <CloseIcon />
          </CloseButton>
        </ModalHeader>
        <ModalContent>{conteudo}</ModalContent>
        <ModalActions>
          <Button variant="contained" color="warning" onClick={onConfirm}>
            Confirmar
          </Button>
        </ModalActions>
      </ModalContainer>
    </Modal>
  );
};

export default ModalEditar;
