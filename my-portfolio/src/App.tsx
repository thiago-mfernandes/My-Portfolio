import Contato from 'components/Contato';
import Educacao from 'components/Educacao';
import Experiencia from 'components/Experiencia';
import Home from 'components/Home';
import Menu from 'components/Menu';
import Sobre from 'components/Sobre';

function App() {
  return (
    <>
      <Menu />
      <Home />
      <Sobre />
      <Educacao />
      <Experiencia />
      <Contato />
    </>
  );
}

export default App;
