import { useSideMenuContext } from "contexts/SideMenuContext";
import styled from "styled-components";
import { MenuIcon } from "./Header";
import menu from "../../assets/menu.svg";
import { useUserContext } from "contexts/UserContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function SideMenu() {
  const { showMenu, setShowMenu } = useSideMenuContext();
  const { userData } = useUserContext();

  const navigate = useNavigate();

  function logout() {
    Swal.fire({
      title: "Logout?",
      text: "Você realmente quer fazer logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        setShowMenu(false);
        localStorage.removeItem("user");
        navigate("/sign-in");
      }
    });
  }

  return (
    <Background showMenu={showMenu}>
      <MenuIcon
        src={menu}
        alt="menu"
        onClick={() => setShowMenu((old) => !old)}
      />
      <Container>
        <h1>{userData?.name}</h1>
        <p
          onClick={() => {
            setShowMenu(false);
            navigate("/objective");
          }}
        >
          Objetivos
        </p>
        <p
          onClick={() => {
            setShowMenu(false);
            navigate("/my-workouts");
          }}
        >
          Meus treinos
        </p>
        <span onClick={logout}>Logout</span>
      </Container>
    </Background>
  );
}

const Background = styled.div<{ showMenu: boolean }>`
  display: ${({ showMenu }) => (showMenu ? "block" : "none")};
  background-color: #66acc3;
  height: 100vh;
  width: 100vw;
  position: relative;
  top: 0;
  left: 0;
  z-index: 10;
`;

const Container = styled.div`
  padding-top: 76px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  font-size: 20px;

  h1 {
    font-weight: 700;
    font-size: 25px;
    text-decoration-line: underline;
    margin-bottom: 41px;
  }

  p {
    margin-bottom: 22px;
  }

  span {
    margin-top: 86px;
    font-style: italic;
    font-weight: 500;
  }
`;
