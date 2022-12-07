import { useState } from "react";
import { Pedidos } from "./componentes/Pedidos";

function App() {
  const [pedido, setPedido] = useState<string[]>([
    `pedido 1`,
    `pedido 2`,
    `pedido 3`,
  ])

  return (
    <div>
       {pedido.map(pedido =>{
        return <Pedidos text={pedido}/>
       })} 

       
    <button>Fazer Pedido</button>
    </div>
  );
}

export default App
