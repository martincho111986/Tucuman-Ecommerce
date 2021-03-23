import React, { useState } from 'react';
import useValidacion from "../hooks/useValidacion";
import validarCrearCuenta from "../validacion/validarCrearCuenta";

import firebase from "../firebase/firebase";

const STATE_INICIAL = {
  nombre: "",
  email: "",
  password: "",
};
const CrearCuenta = () => {

  const [userDuplicado, setUserDuplicado] = useState(false)

  const {
    valores,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta);

  const { nombre, email, password } = valores;

  async function crearCuenta() {
    try {
      await firebase.registrar(nombre, email, password);
     
    } catch (error) {
      console.error('hubo un error al crear el usuario', error.message);
      setUserDuplicado(error.message);
    }
  }

  return (
   
        <>
          <h1>
            Crear Cuenta
          </h1>
          <form onSubmit={handleSubmit} noValidate>
            <input>
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                name="nombre"
                id="nombre"
                placeholder="Tu nombre"
                value={nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </input>
           
            <input>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Tu  email"
                value={email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </input>
            

            <input>
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Tu contraseña"
                value={password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </input>

            

            <button type="submit" value="Crear Cuenta" />
          </form>
        </>
     
  
  );
};
export default CrearCuenta;
