import Formulario from "./componentes/FormularioCadasto/";
import { Container, Typography } from "@material-ui/core";
import 'fontsource-roboto';

function App() {
  return (
    <Container componente="article" maxWidth="sm">
    <Typography variant="h3" align="center">Formulario de Cadastro</Typography>
    <Formulario/>
    </Container>
  );
}

export default App;
