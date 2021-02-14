import './App.css'; //le cambiamos el nombre a jsx para introducir html en archivos javascript
import Hola from './components/hola' //importamos el nuevo componente
import Contador from './components/contador'

function App() {

  let saludo = 'Hi world' //jsx permite poner variables dentro del html solo usando {}
  return (
    <div className="App">
      <h1>My new project {saludo}</h1>
      <Hola></Hola>
      <Contador></Contador>
    </div>
  );
}

export default App;
