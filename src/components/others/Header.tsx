import styled from "styled-components";
import overcome from "../../assets/overcome.svg";
import menu from "../../assets/menu.svg";
import { useSideMenuContext } from "contexts/SideMenuContext";

export default function Header() {
  const { setShowMenu } = useSideMenuContext();

  return (
    <Container>
      <StyledTitle
        src={overcome}
        alt=""
      />
      <MenuIcon
        src={menu}
        alt="menu"
        onClick={() => setShowMenu((old) => !old)}
      />
    </Container>
  );
}

const Container = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3px;
  width: 100vw;
  height: 76px;
`;

const StyledTitle = styled.img`
  width: 55%;
  height: 55%;
`;

export const MenuIcon = styled.img`
  position: absolute;
  top: 25px;
  right: 20px;
`;
