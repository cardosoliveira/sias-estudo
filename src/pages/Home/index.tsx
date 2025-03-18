import React, { useState } from "react";
import Header from "../../components/HeaderPage/index";
import FooterPage from "../../components/Footer/index";
import Sidebar from "../../components/SideBar";
import CadastrarProduto from "../Produtos/CadastrarProduto";
import ListarProdutos from "../Produtos/ListarProdutos";

export default function Home() {
  const [selectedSubItem, setSelectedSubItem] = useState<string>("");

  const handleSubItemClick = (subItem: string) => {
    setSelectedSubItem(subItem);
  };

  return (
    <>
      <Header />
      <Sidebar onSubItemClick={handleSubItemClick} />
      {selectedSubItem === "consultaProduto" && <ListarProdutos />}
      {selectedSubItem === "cadastroProduto" && <CadastrarProduto />}
      <FooterPage />
    </>
  );
}
