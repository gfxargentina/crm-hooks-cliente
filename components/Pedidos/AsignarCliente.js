import React, { useState, useEffect, useContext} from 'react';
import Select from 'react-select';
import { gql, useQuery } from '@apollo/client';
import PedidoContext from '../../context/pedidos/PedidoContext';

const OBTENER_CLIENTES_USUARIO = gql`
    query obtenerClientesVendedor {
        obtenerClientesVendedor {
                id
                nombre
                apellido
                empresa
                email
    }
}
`;

const AsignarCliente = () => {
    
    const [ cliente, setCliente ] = useState([]);

    // Context de pedidos
    const pedidoContext = useContext(PedidoContext);
    const { agregarCliente } = pedidoContext;
    

    // consultar la bd
    const { data, loading, error } = useQuery(OBTENER_CLIENTES_USUARIO);

    //console.log(data)
    //console.log(loading)
    //console.log(error)


    useEffect(() => {
        agregarCliente(cliente);
    }, [cliente])

    const seleccionarCliente = clientes => {
        setCliente(clientes);        
    }

    //resultados de la consulta
    if(loading) return null;

    const { obtenerClientesVendedor } = data;

    return ( 
        
        <>
        <p className="mt-10 my-2 bg-white border-l-4 border-gray-800 text-gray-700 p-2 text-sm font-bold"
        >1.- Asigna un Cliente al Pedido</p>
        <Select 
         className="mt-3"
            options={ obtenerClientesVendedor }
            //isMulti={true}
            onChange={ opcion => seleccionarCliente(opcion) }
            getOptionValue={ opciones => opciones.id}
            //getOptionLabel={ opciones => opciones.nombre} 
            
            // muestra nombre y apellido        
            getOptionLabel={ opciones => `${opciones.nombre} ${opciones.apellido}`}
            placeholder="Busque o seleccione al Cliente"
            noOptionsMessage={() => "No hay resultados"}
        /> 

    </>
    )
}
 
export default AsignarCliente;