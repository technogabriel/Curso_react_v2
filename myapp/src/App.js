import './App.css';
import MiPrimerComponente from './components/MiPrimerComponente';
import MiSegundoComponente from './components/MiSegundoComponente/MiSegundoComponente';
function App() {
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



  return (
    <div className="App">
      <MiPrimerComponente/>
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
        <MiSegundoComponente persona={persona} saludo={saludo} />


    </div>
  );
}

export default App;
