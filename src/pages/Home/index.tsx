import { useState } from "react";
import Header from "../../components/HeaderPage/index";
import FooterPage from "../../components/Footer/index";
import Sidebar from "../../components/SideBar";
import CadastrarProduto from "../Produtos/CadastrarProduto";
import ListarProdutos from "../Produtos/ListarProdutos";
import { SidebarItems } from "../../enums/SidebarItens";

export default function Home() {
  const [selectedSubItem, setSelectedSubItem] = useState<SidebarItems | "">("");
  const handleSubItemClick = (subItem: SidebarItems) => {
    setSelectedSubItem(subItem);
  };

  return (
    <>
      <Header />
      <Sidebar onSubItemClick={handleSubItemClick} />
      {selectedSubItem === SidebarItems.ConsultaProduto && <ListarProdutos />}
      {selectedSubItem === SidebarItems.CadastroProduto && <CadastrarProduto />}
      <FooterPage />
    </>
  );
}
