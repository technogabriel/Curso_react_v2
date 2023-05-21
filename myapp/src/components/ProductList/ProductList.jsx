import React, { useEffect, useState } from 'react'
import { pedirProductos } from '../../helpers/pedirProductos';
import './ProductList.css'

const ProductList = () => {

    const [loading, setLoading] = useState(false)
    const [items, setItems] = useState([])

    useEffect(() => {
        setLoading(true)
        pedirProductos()
            .then((res) => {
                setItems(res)
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false)
            })
    }, []);

    return (
        <div >
            {
                loading ? (<p>Cargando...</p>) : (
                    <div className="card"  >
                        {items.map((item) => (
                            <div >
                                <h4 key={item.id}>
                                    <img src={item.photo} alt={item.photo} />
                                    <p>{item.name}</p>
                                    <p>{item.description}</p>
                                    <button className='btn btn-success'>Comprar</button>
                                </h4>
                            </div>
                        ))}
                    </div>)
            }
        </div>
    )
}

export default ProductList