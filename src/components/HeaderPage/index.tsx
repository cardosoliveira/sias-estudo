import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Header, Logo, UserGreeting, StyledButton } from "./styles";

export default function HeaderPage() {
  return (
    <>
      <Header>
        <div className="flex items-center gap-3">
          <FontAwesomeIcon
            icon={faBars}
            size="lg"
            style={{ marginBottom: "5px" }}
          />
          <Logo src="src/assets/CAIXA-LOGO.png" alt="CAIXA" className="logo" />
        </div>
        <div
          className="flex items-center gap-3"
          style={{
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <UserGreeting>Olá, Usuário</UserGreeting>
          <StyledButton>
            <FontAwesomeIcon icon={faSignOutAlt} /> Sair
          </StyledButton>
        </div>
      </Header>
    </>
  );
}
