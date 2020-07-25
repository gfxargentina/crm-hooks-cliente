import React from 'react';
import Head from 'next/head'
//import Footer from '../components/Footer';
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

            <div className="flex flex-col h-screen">
            <div>
                <header className="text-gray-700 bg-gray-200 body-font">
                   <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                     <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                                      </svg>
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
                           <div className="container mx-auto flex px-5 py-24 mb-12 md:flex-row flex-col items-center">
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
                               <img className="object-cover object-center rounded" alt="hero" src="https://i.ibb.co/x7gsvKL/CRM-2.jpg" /> 
                             </div>
                           </div>
                         </div>

                         <div className="bg-gray-200 ">
                                  <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                                      </svg>
                                      <span className="ml-3 text-xl">CRM LUIS CHILO</span>
                                    </a>
                                    <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2020 Luis Chilo —
                                      <a href="https://twitter.com/gfxargentina" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@LuisChilo</a>
                                    </p>
                                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                                      <a className="text-gray-500">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                                      </svg>
                                      </a>
                                      <a className="ml-3 text-gray-500">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                      </a>
                                      <a className="ml-3 text-gray-500">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                        </svg>
                                      </a>
                                      <a className="ml-3 text-gray-500">
                                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                                          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                          <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                        </svg>
                                      </a>
                                    </span>
                                  </div>
                                </div>

                         </div>                  
                         

                      


                         
       </>
       
     );
}
 
export default Inicio;