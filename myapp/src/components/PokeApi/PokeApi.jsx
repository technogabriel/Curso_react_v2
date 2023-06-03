import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'


export const PokeApi = () => {

    const [pokemon, setPokemon] = useState("")
    const [id, setId] = useState(1)
    const [busqueda, setBusqueda] = useState("")

    useEffect(() => {
        setPokemon("")
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((res) => {
                const data = res.data;
                setPokemon({
                    numero: data.id,
                    nombre: data.name,
                    img: data.sprites.front_default
                })
            })
            .catch((err) => {
                console.log("Error", err)
            })
    }, [id]);

    const handleAnterior = () => {
        id > 1 && setId(id - 1)
    }

    const handleSiguiente = () => {
        setId(id + 1)
    }


    const handleInputChange = (e) =>{
        setBusqueda(e.target.value)
    }

    const handleSubmit =(e)=>{
        e.preventDefault()

        if(busqueda.length >2){
            setPokemon("")
            axios.get(`https://pokeapi.co/api/v2/pokemon/${busqueda}`)
            .then((res)=>{
                const data = res.data;
                setPokemon({
                    nombre: data.name,
                    img: data.sprites.front_default
                })
                setId(data.id)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }



    return (

        <div className='container'>
            
            <div >
                <button className='btn btn-primary m-3' onClick={handleAnterior}>
                    Anterior
                </button>
                <button className='btn btn-success' onClick={handleSiguiente}>
                    Siguiente
                </button>
            </div>
            <div>
                <form className='form' onSubmit={handleSubmit} >
                    <input type="text" className='form-control w-50' autoFocus onChange={handleInputChange} />
                </form>
            </div>
            <h2>Mis Pokemones</h2>
            {
                !pokemon ? (
                    <h3>Cargando...</h3>
                ) :(
                    <>
                        <h3>ID : {pokemon.numero}</h3>
                        <h3>{pokemon.nombre} <img src={pokemon.img} alt={pokemon.img} /> </h3>
                    </>
                    )
            }
        </div>

    )
}
