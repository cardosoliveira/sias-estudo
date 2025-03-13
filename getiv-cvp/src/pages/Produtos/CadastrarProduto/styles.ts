import styled from "styled-components";

export const Container = styled.div`
  margin: 0 5% 0 2%;
  width: 93%;
  height: 100%;
`;

export const Title = styled.h1`
  width: 100%;
  height: 28px;
  font-size: 22px;
  line-height: 140%;
  color: #22292e;
  margin-bottom: 60px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const NoGapFormGroup = styled(FormGroup)`
  gap: 0;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  resize: vertical;
  width: 100%;
  height: 200px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-end;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }

  button:first-child {
    margin-left: 30px;
  }

  button:last-child {
    margin-left: 30px;
  }
`;

export const Button = styled.button<{ primary?: boolean }>`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: ${({ primary }) => (primary ? "#ff8c00" : "#005ca9")};
  color: white;
  font-size: 16px;
  cursor: pointer;
  width: 8vw;

  @media (max-width: 1500px) {
    width: 80%;
  }

  &:hover {
    background-color: ${({ primary }) => (primary ? "#e07b00" : "#004a87")};
  }

  img {
    margin-right: 8px;
    width: 15px;
    height: 15px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 200px;
`;

export const SmallInputGroup = styled(InputGroup)`
  max-width: 25%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const LargeInputGroup = styled(InputGroup)`
  flex: 2;
  max-width: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
