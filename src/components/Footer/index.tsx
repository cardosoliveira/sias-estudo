import { FooterContainer, LogoContainer, Logo } from "./styles";

export default function FooterPage() {
  return (
    <FooterContainer>
      <LogoContainer>
        <Logo src="src/assets/CAIXA-LOGO.png" alt="CAIXA" className="logo" />
      </LogoContainer>
    </FooterContainer>
  );
}
