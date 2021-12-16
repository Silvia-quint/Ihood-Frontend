import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();


export const Button = ({ children, variant, ...props }) => {
    return <button style={{border: `5px solid ${variant} `}} {...props}>{children}</button>
}

const Menu = () => {

    const cerrarSesion = () => {
        cookies.remove('id', {path: "/"});
        cookies.remove('apellido_paterno', {path: "/"});
        cookies.remove('apellido_materno', {path: "/"});
        cookies.remove('nombre', {path: "/"});
        cookies.remove('username', {path: "/"});
        window.location.href='./';
    }

    useEffect(
        () => {

            const onMount = () => {
                if(!cookies.get('username')){
                    window.location.href="./";
                }
            }
            // si lo descomento me hace la redireccion
            // onMount()
        }
        , 
        []
    )

    const [nombre, setNombre] = useState("fer")

    useEffect(
        () => {
            console.log('cambio')
        }
        , 
        [nombre]
    )
    
    return ( 
        <div>
            Menu Principal
            <br />
            <label htmlFor="" ></label>
            <input className="" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            <br />
            <button onClick={cerrarSesion}>Cerrar Sesión</button>
            <Button onClick={cerrarSesion} variant="red">Tollo loves gOlO</Button>
            <Button onClick={cerrarSesion} variant="green">Tollo loves gOlO</Button>
        </div>
    );
}

export default Menu;