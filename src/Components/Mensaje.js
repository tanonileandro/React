import { useState } from "react";
import "./Mensaje.css"; 

const MensajeOculto = () => {
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  const Mensaje = () => {
    setMostrarMensaje(!mostrarMensaje);
  };

  return (
    <div>
      <button onClick={Mensaje}>Mostrar/Ocultar</button>
      {mostrarMensaje && <p>Para ocultar el mensaje hacer click en el botón nuevamente</p>}
    </div>
  );
};

export default MensajeOculto;