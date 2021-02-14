import logo from './logo.svg';
import './App.css'; //le cambiamos el nombre a jsx para introducir html en archivos javascript
import Hola from './components/hola' //importamos el nuevo componente


function App() {

  let saludo = 'Hi world' //jsx permite poner variables dentro del html solo usando {}
  return (
    <div className="App">
      <h1>My new project {saludo}</h1>
      <Hola></Hola>
    </div>
  );
}

export default App;
