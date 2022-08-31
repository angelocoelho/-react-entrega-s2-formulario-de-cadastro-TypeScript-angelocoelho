import { Link } from "react-router-dom";
import Container from "./style";

interface IProps{
  btn: string,
}

function Header({ btn }: IProps) {
  function logout() {
    // const navigate = useNavigate()
    localStorage.clear();
    // navigate("/", { replace: true });
    
  }

    if(btn === "Voltar") {
      return (
        <Container>
          <h1>Kenzie Hub</h1>
          <Link to='/'><button>{btn}</button></Link>
        </Container>
      )
    }
    else{
      return (
        <Container>
          <h1>Kenzie Hub</h1>
          <Link to='/'><button onClick={logout}>{btn}</button></Link>
        </Container>
      );
    }
  
}

export default Header

