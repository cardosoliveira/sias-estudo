import React, { useState, useMemo, useEffect } from "react";
import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  Title,
  FormGroup,
  LargeInputGroup,
  Label,
  Input,
  ButtonGroup,
  Button,
  SmallInputGroup,
} from "./styles";
import { Produto } from "../../../types/produto";
import api from "../../../services/api";
import { useSnackbar } from "notistack";
import DetalheProduto from "../DetalheProduto";
import Card from "../../../components/Card";

const ListarProdutos: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [codigoProduto, setCodigoProduto] = useState("");
  const [nomeProduto, setNomeProduto] = useState("");
  const [data, setData] = useState<Produto[]>([]);
  const [selectedProdutoId, setSelectedProdutoId] = useState<string | null>(
    null
  );

  useEffect(() => {
    listarTodosProdutos();
  }, []);

  const listarTodosProdutos = async () => {
    try {
      const response = await api.get<Produto[]>("/Produto");
      setData(response.data);
    } catch (error) {
      enqueueSnackbar("Erro ao buscar os dados.", { variant: "error" });
    }
  };

  const listarProdutos = async (
    codigoProduto?: string,
    nomeProduto?: string
  ) => {
    try {
      let url = "/Produto/search";
      if (codigoProduto || nomeProduto) {
        url += "?";
        if (codigoProduto) {
          url += `id=${codigoProduto}`;
        } else if (nomeProduto) {
          url += `id=0&nomeProduto=${nomeProduto}`;
        }
      } else {
        listarTodosProdutos();
        return;
      }
      const response = await api.get<Produto[]>(url);
      setData(response.data);
    } catch (error) {
      enqueueSnackbar("Erro ao buscar os dados.", { variant: "error" });
    }
  };

  const handleSearch = () => {
    listarProdutos(codigoProduto, nomeProduto);
  };

  const excluirProduto = async (id: string) => {
    try {
      await api.delete(`/Produto/${id}`);
      listarTodosProdutos();
      enqueueSnackbar("Produto excluído com sucesso.", { variant: "success" });
    } catch (error) {
      enqueueSnackbar("Erro ao deletar o produto.", { variant: "error" });
    }
  };

  const columns = useMemo<MRT_ColumnDef<Produto>[]>(
    () => [
      {
        accessorKey: "codigoProduto",
        header: "Código",
        muiTableHeadCellProps: { style: { width: "20%" } },
        muiTableBodyCellProps: { style: { width: "20%" } },
      },
      {
        accessorKey: "nomeProduto",
        header: "Produto",
        muiTableHeadCellProps: { style: { width: "80%" } },
        muiTableBodyCellProps: { style: { width: "80%" } },
      },
      {
        accessorKey: "acoes",
        header: "Ações",
        muiTableHeadCellProps: { style: { width: "20%" } },
        muiTableBodyCellProps: { style: { width: "20%" } },
        Cell: ({ row }) => (
          <>
            <FontAwesomeIcon
              icon={faEdit}
              style={{
                marginRight: "10px",
                cursor: "pointer",
                color: "#005CA9",
              }}
              onClick={() => setSelectedProdutoId(row.original.codigoProduto)}
            />
            <FontAwesomeIcon
              icon={faTrash}
              style={{ cursor: "pointer", color: "#B22C2C" }}
              onClick={() =>
                excluirProduto(row.original.codigoProduto.toString())
              }
            />
          </>
        ),
      },
    ],
    []
  );

  const handleBack = () => {
    setSelectedProdutoId(null);
    listarTodosProdutos();
  };

  return (
    <>
      {selectedProdutoId ? (
        <DetalheProduto id={selectedProdutoId} onBack={handleBack} />
      ) : (
        <Card>
          <Container>
            <Title>Listar Produtos</Title>

            <FormGroup>
              <SmallInputGroup>
                <Label>Código do Produto</Label>
                <Input
                  type="text"
                  value={codigoProduto}
                  onChange={(e) => setCodigoProduto(e.target.value)}
                />
              </SmallInputGroup>
              <LargeInputGroup>
                <Label>Nome do Produto</Label>
                <Input
                  type="text"
                  value={nomeProduto}
                  onChange={(e) => setNomeProduto(e.target.value)}
                />
              </LargeInputGroup>

              <ButtonGroup>
                <Button type="button" onClick={handleSearch}>
                  Pesquisar
                </Button>
              </ButtonGroup>
            </FormGroup>

            <div style={{ marginTop: "5%" }}>
              <MaterialReactTable
                columns={columns}
                data={data}
                enableSorting={false}
                enableColumnFilters={false}
                enableGlobalFilter={false}
                enableDensityToggle={false}
                enableFullScreenToggle={false}
                enablePagination={true}
                enableHiding={false}
                enableColumnActions={false}
              />
            </div>
          </Container>
        </Card>
      )}
    </>
  );
};

export default ListarProdutos;
