import React, { useState } from "react";
import {
  SidebarContainer,
  SidebarItem,
  SidebarSubItem,
  SidebarSubItemSelected,
  Icon,
  ToggleIcon,
} from "./styles";
import shopCarIcon from "../../assets/icon/shop_car.png";
import vectorDownIcon from "../../assets/icon/vector_down.png";
import vectorUpIcon from "../../assets/icon/vector_up.png";
import iconConsultaProduto from "../../assets/icon/icon_consulta_produto.png";
import iconCadastroProduto from "../../assets/icon/icon_cadastro_produto.png";

interface SidebarProps {
  onSubItemClick: (subItem: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSubItemClick }) => {
  const [expandedItems, setExpandedItems] = useState<{
    [key: string]: boolean;
  }>({});
  const [selectedSubItem, setSelectedSubItem] = useState<string>("");

  const toggleItem = (item: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const selectSubItem = (subItem: string) => {
    setSelectedSubItem(subItem);
    onSubItemClick(subItem);
  };

  const renderSubItem = (subItem: string, icon: string, label: string) => {
    const Component =
      selectedSubItem === subItem ? SidebarSubItemSelected : SidebarSubItem;
    return (
      <Component onClick={() => selectSubItem(subItem)}>
        <Icon src={icon} />
        {label}
      </Component>
    );
  };

  return (
    <SidebarContainer>
      <SidebarItem onClick={() => toggleItem("produtos")}>
        <Icon src={shopCarIcon} alt="Shop Car" />
        Produtos
        <ToggleIcon
          src={expandedItems["produtos"] ? vectorUpIcon : vectorDownIcon}
          alt="Toggle"
        />
      </SidebarItem>
      {expandedItems["produtos"] && (
        <>
          {renderSubItem(
            "consultaProduto",
            iconConsultaProduto,
            "Consulta de Produto"
          )}
          {renderSubItem(
            "cadastroProduto",
            iconCadastroProduto,
            "Cadastro de Produto"
          )}
          {/* {renderSubItem(
            "configuracaoProduto",
            iconConfiguracaoProduto,
            "Configuração de Produto"
          )} */}
        </>
      )}
    </SidebarContainer>
  );
};

export default Sidebar;
