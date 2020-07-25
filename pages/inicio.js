import React from 'react';
import Head from 'next/head'
import Footer from '../components/Footer';
import Link from 'next/link'
import { useRouter } from 'next/router'

const Inicio = () => {

    //Hook routing de next
    const router = useRouter();
    
    return ( 
        <>
        <Head>
                 <title>CRM - LUIS CHILO</title>
             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU=" crossOrigin="anonymous" />
             <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
             </Head>

            <div className="h-screen">
            <div>
                <header className="text-gray-700 bg-gray-200 body-font">
                   <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                     <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                     <svg height="512" width="512" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWwidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" ><g><path d="m512 482h-30v-302h-91v302h-30v-182h-90v182h-30v-242h-90v242h-30v-152h-91v152h-30v30h512z"/><path d="m512 120v-120h-121v30h69.789l-144.789 143.789-120-120-191.605 190.606 21.21 21.21 170.395-169.394 120 120 166-165v68.789z"/></g></svg>
                       <span className="ml-3 text-xl">LUIS CRM</span>
                     </a>
                     <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                            <a class="mr-5 hover:text-gray-900">Portfolio</a>
                            <a class="mr-5 hover:text-gray-900">Nosotros</a>
                            <a class="mr-5 hover:text-gray-900">Contacto</a>
                            <a class="mr-5 hover:text-gray-900">RH</a>
                          </nav>
                  <Link href="/login" >
                     <button className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-blue-300 rounded text-base mt-4 mr-2 md:mt-0">Iniciar Sesion
                       <svg fill="white" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                         <path d="M5 12h14M12 5l7 7-7 7"></path>
                       </svg>
                     </button>
                     </Link>
                     
                  <Link href="/nuevacuenta" >
                     <button className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-green-300 rounded text-base mt-4 md:mt-0">Registrarse
                       <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                         <path d="M5 12h14M12 5l7 7-7 7"></path>
                       </svg>
                     </button>
                     </Link>

                   </div>
                 </header>
            </div>
            <div className="text-gray-700 body-font mt-5 mb-5 flex-grow">
                           <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                             <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                               <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">CRM para manejo
                                  de Clientes, Productos y Pedidos.
                               </h1>
                               <p className="mb-8 leading-relaxed">Administre sus Clientes, Productos y Pedidos de forma organizada, tenga toda la información de su negocio
                               en un solo lugar, vea reportes de sus mejores vendedores y mejores clientes todo en un solo lugar.
                               </p>
                               <div className="flex justify-center">
                               <Link href="/login" >
                                 <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Iniciar Sesion</button>
                               </Link>

                               <Link href="/nuevacuenta" >
                                 <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-green-300 rounded text-lg">Registrarse</button>
                                 </Link>

                               </div>
                             </div>
                             <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                               <img className="object-cover object-center rounded" alt="hero" src="https://i.ibb.co/FJgDjKK/CRM-1.jpg" /> 
                             </div>
                           </div>
                         </div>

                         </div>                  
                         

                         <Footer />


                         
       </>
       
     );
}
 
export default Inicio;