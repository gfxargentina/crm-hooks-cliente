import React from 'react';
import Head from 'next/head'

const Inicio = () => {
    
    return ( 
        <>
        <Head>
                 <title>CRM - Administracion de Clientes</title>
             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU=" crossOrigin="anonymous" />
             <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
             </Head>

            <div>
                <header className="text-gray-700 body-font">
                   <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                     <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                     <svg id="Capa_1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWwidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" ><g><path d="m512 482h-30v-302h-91v302h-30v-182h-90v182h-30v-242h-90v242h-30v-152h-91v152h-30v30h512z"/><path d="m512 120v-120h-121v30h69.789l-144.789 143.789-120-120-191.605 190.606 21.21 21.21 170.395-169.394 120 120 166-165v68.789z"/></g></svg>
                       <span className="ml-3 text-xl">LUIS CRM</span>
                     </a>
                     
                     <button className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 mr-2 md:mt-0">Entrar
                       <svg fill="white" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                         <path d="M5 12h14M12 5l7 7-7 7"></path>
                       </svg>
                     </button>

                     <button className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">Registrarse
                       <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                         <path d="M5 12h14M12 5l7 7-7 7"></path>
                       </svg>
                     </button>
                   </div>
                 </header>
            </div>
            </>
     );
}
 
export default Inicio;