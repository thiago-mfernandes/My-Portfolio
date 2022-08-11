import Contato from 'components/Contato';
import Educacao from 'components/Educacao';
import Experiencia from 'components/Experiencia';
import Portfolio from 'components/Portfolio';
import Menu from 'components/Menu';
import Sobre from 'components/Sobre';

function App() {
  return (
    <>
      <Menu />
      <Portfolio /> {/* a home é o portfólio */}
      <Sobre /> {/* sobre e stacks */}
      <Educacao /> { /* */}
      <Experiencia />
      <Contato />
    </>
  );
}

export default App;
