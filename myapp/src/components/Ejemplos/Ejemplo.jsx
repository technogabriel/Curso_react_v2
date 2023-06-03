//ejemplo 2
 // const nombreUno ="adan"

  //ejemplo3
  const nombreDos = "Gabriel"
  const edad = 32
  const pais = "Argentina"

  const propsObject = {
    nombreDos, 
    edad, 
    pais
  }

  const propsObjectTwo = {
    nombre: 'adan',
    edad: 32,
    pais: 'Argentina',
    nacionalidad: 'venezonalana' 
  }

  const persona ={
    nombre:'Goku',
    edad: 30
  }

  const saludo = 'Hola'

{/* <MiPrimerComponente/> */}
      {/* Ejemplo 1 */}
      {/* <MiSegundoComponente bienvenida='Hola Mundo'/> */}
     
      {/* Ejemplo 2 */}
      {/* <MiSegundoComponente nombreUno = {nombreUno}/> */}

      {/* <MiSegundoComponente {...propsObject} /> */}

      {/* Ejemplos con destructuring */}
       {/* <MiSegundoComponente nombreUno = {nombreUno}/>  */}

       {/* Ejemplo #2*/}
       {/* <MiSegundoComponente {...propsObject} /> */}

       {/* <MiSegundoComponente {...propsObjectTwo} /> */}

        {/* Ejemplo #3*/}
        {/* <MiSegundoComponente persona={persona} saludo={saludo} /> */}

        //Ejercicios de hooks
    //Ejemplo 1:
    const botonPresionado = () =>{
        console.log('Estas son las veces que el boton ha sido presionado');
    }

    //ejemplo 2:
    const [hora, setHora] = useState("")
    const mostrarHora =()=>{
        const date = new Date();
        const horaLocal = date.toLocaleTimeString();
        setHora(horaLocal);
        
    }

    //Ejemplo 3:
    const [isWhite, setIsWhite] = useState(true)
    const [isBlack, setIsBlack] = useState(false)

    const handleWhite = () =>{
        setIsWhite(true)
        setIsBlack(false)
    }

    const handleBlack = () =>{
        setIsBlack(true)
        setIsWhite(false)
    }

    // <h3>Mis estados</h3>
    // <hr/>
    // <button onClick={botonPresionado}>Apretame y mira la consola</button>
    // <hr/>
    // <p>{hora}</p>
    // <button onClick={mostrarHora}>Mostrar Hora</button>
    // <hr/>

    // <div style={{
    //    backgroundColor: isWhite 
    //    ? 'white' : 'black', color: isBlack ? 'white' : 'black'

    // }}>
    //     <h2>Color Cambiante</h2>
    //     <button onClick={handleWhite}>Blanco</button>
    //     <button onClick={handleBlack}>Negro</button>
    // </div>
    // <hr/>

