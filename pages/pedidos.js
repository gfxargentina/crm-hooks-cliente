import Head from 'next/head'
import Layout from '../components/Layout';
import Pedido from '../components/Pedido';
import Link from 'next/link';
import { gql, useQuery } from '@apollo/client';

const OBTENER_PEDIDOS = gql`

      query obtenerPedidos {
          obtenerPedidos {
              id
              pedido {
                id 
                cantidad
                nombre
              }
            cliente
            vendedor
            total
            estado
    }
}

`;

const Pedidos = () => {

    
  const { data=[], loading, error} = useQuery(OBTENER_PEDIDOS);
  //console.log(data)
  //console.log(error)
  
  if(loading) return 'Cargando...';

  const { obtenerPedidos } = data;


  
   

    return (
         <div>
           <Layout>
           <h1 className="text-2xl text-gray-800 font-light" >Pedidos</h1>
           <Link href="/nuevopedido">
           <a className="bg-blue-800 px-5 mt-3 inline-block text-white rounded text-sm hover:bg-green-800  mb-3 uppercase font-bold" >Nuevo Pedido</a>

           </Link>

           { obtenerPedidos.length === 0 ? (
              <p className="mt-5 text-center text-2xl">No hay pedidos aun</p>
          ) : (
              obtenerPedidos.map( pedido => (
                <Pedido 
                  key={pedido.id}
                  pedido={pedido}
                />
              ) )
          )} 
 

           </Layout>
         </div>
       )  
}

export default Pedidos