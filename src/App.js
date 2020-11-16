import './App.css';
import { Navbar } from './hook/useNavbar';
import { Footer } from './hook/useFooter';
import { Pagina1 } from './component/Pagina1';

function App() {
  const propiedad = "Este texto viene del componente principal";
  return (
    <div>
      <Navbar/>
      <Pagina1
        propiedad={propiedad}
      />
      <Footer/>
    </div>
  );
}

export default App;
