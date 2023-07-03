import React, { useEffect, useState } from "react";
import { FaQuestion } from '../../../node_modules/react-icons/fa'
import Swal from 'sweetalert2'

export const MemoTest = () => {

    const symbols = ['1', '2', '3', '4', '5', '6']

    const [cards, setCards] = useState([])

    const [flippedCards, setFlippedCards] = useState([])

    const [matchedCards, setMatchedCards] = useState([])

    useEffect(() => {
        //generamos las cartas duplicando los simbolos y asignandoles un ID
        const generatedCards = symbols.concat(symbols).map((symbol, index) => ({
            id: index,
            symbol: symbol,
            isFlipped: false, //todas las cartas estan boca abajo al principio
            isMatched: false //ninguna carta esta emperajada al principio
        }))
        const shuflledCards = generatedCards.sort(()=> Math.random()-0.5)
        setCards(shuflledCards)//guardamos cartas en el estado

    }, []);

    const handleCardClick = (card) => {
        //si la carta esta volteada o coincide, no se hace nada
        if (card.isFlipped || card.isMatched) return

        //se guarda la carta volteada en un state
        const newFlippedCards = [...flippedCards, card]
        setFlippedCards(newFlippedCards)

        //si hay dos cartas volteadas, verificamos si son igualles

        if (newFlippedCards.length === 2) {
            console.log("is the same? ")
            setTimeout(() => {
                checkForMatch(newFlippedCards)
            }, 1000)
        }
    }

    const checkForMatch = (flippedCards) => {
        //obtener cartas volteadas
        const [firstCard, secondCard] = flippedCards

        //actualizamos las cartas volteadas en el estado
        const updatedCards = cards.map((card) => {
            if (card.id === firstCard.id || card.id === secondCard.id) {
                console.log(firstCard.id, ' - ' ,secondCard.id )
                console.log("first", firstCard.symbol, "-", "second ", secondCard.symbol)
                return { ...card, isFlipped: true }
            } else {
                return { ...card, isFlipped: false }
            }
            // return card

        })

        //si las dos cartas volteadas tienen el mismo simbolo, emparejamos
        if (firstCard.symbol === secondCard.symbol) {
            setMatchedCards([...matchedCards, firstCard.id, secondCard.id])
        }

        //limpiamos las cartas volteadas en el estado
        setFlippedCards([])

        //si todas las cartas estan emparejadas, mostramos un mensaje de victoria
        if (matchedCards.length + 2 === cards.length) {
            setTimeout(() => {
                Swal.fire({
                    icon: 'success',
                    title: '¡Felicitaciones, lo lograste!',
                    showConfirmButton: true,
                })

            }, 1000);

        }
        //actualizamos las cartas en el estado
        setCards(updatedCards)
    }

    const renderCard = (card) => {
        const isFlipped = card.isFlipped || matchedCards.includes(card.id) || flippedCards.includes(card.id)
        const cardClass = `card${isFlipped ? 'flipped' : ''}`
        
        return (
            <div className={cardClass} key={card.id} onClick={() => handleCardClick(card)}  >
                <div className="container d-flex m-4 align-content-lg-between">
                    {
                        isFlipped ?
                            <div className='card-front visually-visible' >
                                {card.symbol}
                            </div>
                            :
                            <div className="card-back " >
                                <FaQuestion />
                            </div>
                    }

                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="d-flex align-content m-30px">
                {
                    cards.map((card) => renderCard(card))
                }
            </div>
        </div>
    )
}
