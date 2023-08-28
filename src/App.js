import logo from './logo.svg';
import './App.css';
import Producto from './Components/Producto';
import MensajeOculto from './Components/Mensaje';


function App() {
  return (
    <div className="App">
      <div>
        <Producto
          nombre='AMD RX 6700'
          precio='200000'
          stock={10}
          descripcion='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.' />
        <Producto
          nombre='AMD RX 6700 XT'
          precio='245000'
          stock={10}
          descripcion='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.' />
        <Producto
          nombre='AMD RX 6900 XT'
          precio='450000'
          stock={200}
          descripcion='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
        '/>
      </div>

      <div>
        <MensajeOculto/>
      </div>

    </div>
  );
}

export default App;
