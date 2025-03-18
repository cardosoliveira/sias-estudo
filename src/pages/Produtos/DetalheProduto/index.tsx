import React, { useState, useEffect } from "react";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import api from "../../../services/api";
import { useSnackbar } from "notistack";
import Card from "../../../components/Card";

interface DetalheProdutoProps {
  id: string;
  onBack: () => void;
}

const DetalheProduto: React.FC<DetalheProdutoProps> = ({ id, onBack }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [codigoProduto, setCodigoProduto] = useState("");
  const [nomeProduto, setNomeProduto] = useState("");
  const [ramoPrincipal, setRamoPrincipal] = useState("");
  const [tipoProduto, setTipoProduto] = useState("I");
  const [descricao, setDescricao] = useState("");
  const [processoSusep, setProcessoSusep] = useState("");
  const [inicioVigencia, setInicioVigencia] = useState("");

  const fetchProduto = async () => {
    try {
      const response = await api.get(`/Produto/${id}`);
      const produto = response.data;
      setCodigoProduto(produto.codigoProduto);
      setNomeProduto(produto.nomeProduto);
      setRamoPrincipal(produto.ramoPrincipal);
      setTipoProduto(produto.tipoProduto);
      setDescricao(produto.descricao);
      setProcessoSusep(produto.processoSUSEP);
      setInicioVigencia(produto.inicioVigencia);
    } catch (error) {
      enqueueSnackbar("Erro ao buscar produto:" + error, {
        variant: "error",
      });
    }
  };

  useEffect(() => {
    fetchProduto();
  }, [id]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await api.put(`/Produto/${id}`, {
        codigoProduto,
        nomeProduto,
        ramoPrincipal,
        tipoProduto,
        descricao,
        processoSusep,
        inicioVigencia,
      });
      enqueueSnackbar("Produto modificado com sucesso!", {
        variant: "success",
      });
      onBack();
    } catch (error) {
      enqueueSnackbar("Erro ao atualizar produto.", { variant: "error" });
    }
  };

  return (
    <Card>
      <Container>
        <Title>Detalhes do Produto</Title>
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
                disabled
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
                value={processoSusep}
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
              <Button type="button" onClick={onBack}>
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  style={{ marginRight: "8px" }}
                />
                Voltar
              </Button>
            </ButtonGroup>
          </FormGroup>
        </Form>
      </Container>
    </Card>
  );
};

export default DetalheProduto;
