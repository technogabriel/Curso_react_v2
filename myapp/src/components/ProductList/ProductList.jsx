import React, { useEffect, useState } from 'react'
import { pedirProductos } from '../../helpers/pedirProductos';
import './ProductList.css'
import { useParams } from 'react-router-dom';
import { ItemList } from '../ItemList/ItemList';

const ProductList = () => {

    const [loading, setLoading] = useState(false)
    const [items, setItems] = useState([])

    //establecemos el parametro a usar
    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)
        pedirProductos()
            .then((res) => {
                if(categoryId){
                    setItems(res.filter(product =>product.category === categoryId))
                }else{
                    setItems(res)
                }
                
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId]);

    return (

        <>
            {
                loading ?
                <div>Cargando...</div>
                :
                <ItemList productos ={items}/>
            }
        </>

        // <div >
        //     {
        //         loading ? (<p>Cargando...</p>) : 
        //         (
        //             <div className="card"  >
        //                 {items.map((item) => (
        //                     <div >
        //                         <h4 key={item.id}>
        //                             <img src={item.photo} alt={item.photo} />
        //                             <p>{item.name}</p>
        //                             <p>{item.description}</p>
        //                             <button className='btn btn-success'>Comprar</button>
        //                         </h4>
        //                     </div>
        //                 ))}
        //             </div>)
        //     }
        // </div>
    )
}

export default ProductList