import React, { useState } from "react";
import {
  Container,
  Title,
  Form,
  FormGroup,
  Label,
  Input,
  Select,
  TextArea,
  Button,
  ButtonGroup,
  SmallInputGroup,
  LargeInputGroup,
  NoGapFormGroup,
} from "./styles";
import iconSave from "../../../assets/icon/icon_save.png";
import api from "../../../services/api";
import ModalEditar from "../../../components/ModalWarning/index";
import { useSnackbar } from "notistack";
import Card from "../../../components/Card";

const CadastrarProduto: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [codigoProduto, setCodigoProduto] = useState("");
  const [nomeProduto, setNomeProduto] = useState("");
  const [ramoPrincipal, setRamoPrincipal] = useState("");
  const [tipoProduto, setTipoProduto] = useState("I");
  const [descricao, setDescricao] = useState("");
  const [processoSUSEP, setProcessoSusep] = useState("");
  const [inicioVigencia, setInicioVigencia] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [modalTitulo, setModalTitulo] = useState("");
  const [modalConteudo, setModalConteudo] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    let missingField = "";

    if (!codigoProduto) {
      missingField = "Código do Produto";
    } else if (!nomeProduto) {
      missingField = "Nome do Produto";
    } else if (!ramoPrincipal) {
      missingField = "Ramo Principal";
    } else if (!descricao) {
      missingField = "Descrição";
    } else if (!processoSUSEP) {
      missingField = "Processo SUSEP";
    } else if (!inicioVigencia) {
      missingField = "Início da Vigência";
    }

    if (missingField) {
      setModalTitulo("Campo Obrigatório");
      setModalConteudo(
        `Por favor, preencha o campo obrigatório: ${missingField}.`
      );
      setOpenModal(true);
      return;
    }

    const novoProduto = {
      codigoProduto,
      nomeProduto,
      ramoPrincipal,
      tipoProduto,
      descricao,
      processoSUSEP,
      inicioVigencia,
    };

    try {
      await api.post("/Produto", novoProduto);
      enqueueSnackbar("Produto cadastrado com sucesso!", {
        variant: "success",
      });
      limparCadastro();
    } catch (error) {
      enqueueSnackbar("Erro ao cadastrar o produto.", { variant: "error" });
    }
  };

  const limparCadastro = () => {
    setCodigoProduto("");
    setNomeProduto("");
    setRamoPrincipal("");
    setTipoProduto("I");
    setDescricao("");
    setProcessoSusep("");
    setInicioVigencia("");
  };

  return (
    <Card>
      <Container>
        <Title>Cadastrar Produto</Title>
        <Form onSubmit={handleSubmit}>
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
            <SmallInputGroup>
              <Label>Ramo Principal</Label>
              <Input
                type="text"
                value={ramoPrincipal}
                onChange={(e) => setRamoPrincipal(e.target.value)}
              />
            </SmallInputGroup>
            <SmallInputGroup>
              <Label>Tipo de Produto</Label>
              <Select
                value={tipoProduto}
                onChange={(e) => setTipoProduto(e.target.value)}
              >
                <option value="I">Individual</option>
                <option value="C">Coletivo</option>
              </Select>
            </SmallInputGroup>
          </FormGroup>
          <NoGapFormGroup>
            <Label>Descrição</Label>
            <TextArea
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </NoGapFormGroup>
          <FormGroup>
            <LargeInputGroup>
              <Label>Processo SUSEP</Label>
              <Input
                type="text"
                value={processoSUSEP}
                onChange={(e) => setProcessoSusep(e.target.value)}
              />
            </LargeInputGroup>
            <SmallInputGroup>
              <Label>Início da Vigência</Label>
              <Input
                type="date"
                value={inicioVigencia}
                onChange={(e) => setInicioVigencia(e.target.value)}
              />
            </SmallInputGroup>

            <ButtonGroup>
              <Button type="submit">
                <img src={iconSave} alt="Salvar" />
                Salvar
              </Button>
            </ButtonGroup>
          </FormGroup>
        </Form>
        <ModalEditar
          open={openModal}
          onClose={() => setOpenModal(false)}
          onConfirm={() => setOpenModal(false)}
          titulo={modalTitulo}
          conteudo={modalConteudo}
        />
      </Container>
    </Card>
  );
};

export default CadastrarProduto;
