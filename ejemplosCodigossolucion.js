{productos == null ? (
    <p>No hay producto</p>
) : (
    productos.length > 0 ? (
    
        <p>Si hay producto</p>
        
    ) : (
        
        <p>No hay producto</p>
    )
)}


{ obtenerPedidosVendedor == null ? (
    <p>No hay pedidos</p>
) : (
    obtenerPedidosVendedor.length === 0 ? (
        <p className="mt-5 text-center text-2xl">No hay pedidos aun</p>
    ) : (
        obtenerPedidosVendedor.map( pedido => (
          <Pedido 
              key={pedido}
              pedido={pedido}
          />  
        )) 
) )}


