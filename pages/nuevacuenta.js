import React, {useState} from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useMutation, gql } from '@apollo/client';

const NUEVA_CUENTA = gql`
mutation nuevoUsuario($input: UsuarioInput) {
	nuevoUsuario(input: $input){
		id
        nombre
        apellido
		email
}
}
`;

const NuevaCuenta = () => {
    
    // state para el mensaje
    const [mensaje, guardarMensaje] = useState(null)


    // mutation para crear nuevos usuarios
    const [ nuevoUsuario ] = useMutation(NUEVA_CUENTA);

    // routing
    const router = useRouter();
    

    //validacion del formulario
    const formik = useFormik({
        initialValues: {
            nombre: '',
            apellido: '',
            email:'',
            password:''
        },
        validationSchema: Yup.object({
            nombre: Yup.string().required('El nombre es Obligatorio').min(2, 'El nombre debe contener mas de 2 caracteres'),
            apellido: Yup.string().required('El apellido es obligatorio').min(2, 'El apellido debe contener mas de 2 caracteres'),
            email: Yup.string().email('El email no es valido').required('El email es obligatorio'),
            password: Yup.string().required('El password no puede ir vacio').min(8, 'El password debe contener 8 caracteres como minimo')
        }),

        onSubmit: async valores => {

            const { nombre, apellido, email, password } = valores

           try {
              const { data } = await nuevoUsuario({
                  variables: {
                      input: {
                          nombre,
                          apellido,
                          email,
                          password  
                      }
                  }
              });
             // usuario creado correctamente
              guardarMensaje(`Se creo correctamente el usuario: ${data.nuevoUsuario.nombre}`);
              setTimeout(() => {
                  guardarMensaje(null)
                // redirigir usuario para iniciar sesion
                  router.push('/login')
              }, 3000);



           } catch (error) {
            guardarMensaje(error.message.replace('GraphQL error:', ''));
            //despues de 3 segundos guardarMensaje vuelve a ser null
            setTimeout(() => {
                guardarMensaje(null);
            }, 3000);
            
           } 

        }
    });

    const mostrarMensaje = () => {
        return(
            <div className="bg-red-400 py-2 px-3 w-full my-3 max-w-sm text-center mx-auto">
                <p>{mensaje}</p>
            </div>
        )
    }

    return (
        <>
            <Layout>
                {mensaje && mostrarMensaje() }

               <h1 className="text-center text-2xl text-white font-light" >Crear Nueva Cuenta</h1>
                    <div className="flex justify-center mt-5">
                        <div className="w-full max-w-sm" >
                            <form className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4"
                                   onSubmit={formik.handleSubmit}
                            >
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                                            Nombre
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                           id="nombre"
                                           type="text"
                                           placeholder="Su nombre"
                                           value={formik.values.nombre}
                                           onChange={formik.handleChange}
                                           onBlur={formik.handleBlur}   
                                    />
                                    
                                </div>
                                
                                { formik.touched.nombre && formik.errors.nombre ? (
                                        <div className="my-2 bg-red-100 border-1-4 border-red-500 text-red-700 p-4">
                                            <p className="font-bold">Error</p>
                                            <p>{formik.errors.nombre}</p>
                                        </div>
                                ) : null }

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="apellido">
                                            Apellido
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                           id="apellido"
                                           type="text"
                                           placeholder="Su apellido"
                                           value={formik.values.apellido}
                                           onChange={formik.handleChange}   
                                    />
                                    
                                </div>

                                { formik.touched.apellido && formik.errors.apellido ? (
                                        <div className="my-2 bg-red-100 border-1-4 border-red-500 text-red-700 p-4">
                                            <p className="font-bold">Error</p>
                                            <p>{formik.errors.apellido}</p>
                                        </div>
                                ) : null }

                                <div className="mb-4" >
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                            Email
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                           id="email"
                                           type="email"
                                           placeholder="Su email"
                                           value={formik.values.email}
                                           onChange={formik.handleChange}   
                                    />
                                    
                                </div>

                                { formik.touched.email && formik.errors.email ? (
                                        <div className="my-2 bg-red-100 border-1-4 border-red-500 text-red-700 p-4">
                                            <p className="font-bold">Error</p>
                                            <p>{formik.errors.email}</p>
                                        </div>
                                ) : null }

                                <div className="mb-4" >
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                            Password
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                           id="password"
                                           type="password"
                                           placeholder=" Su Password"
                                           value={formik.values.password}
                                           onChange={formik.handleChange}   
                                    />
                                    
                                </div>

                                { formik.touched.password && formik.errors.password ? (
                                        <div className="my-2 bg-red-100 border-1-4 border-red-500 text-red-700 p-4">
                                            <p className="font-bold">Error</p>
                                            <p>{formik.errors.password}</p>
                                        </div>
                                ) : null }
                                
                                <input
                                    className="bg-gray-800 w-full mt-5 p-2 text-white uppercase hover:bg-gray-900"
                                   type="submit"
                                   value="Crear Cuenta"
                                />

                            </form>

                        </div>

                    </div>
            </Layout>

        </>
      );
}
 
export default NuevaCuenta;