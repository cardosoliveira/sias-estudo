import React from "react";
import { LoadingContainer } from "./styles";
import Overlay from "../../components/Overlay/index";

const Loading: React.FC = () => {
  return (
    <>
      <Overlay />
      <LoadingContainer>Carregando...</LoadingContainer>
    </>
  );
};

export default Loading;
