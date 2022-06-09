import React, {useState} from 'react'

export default function Squares({squares}) {

    const [squareArr, setSquareArr] = useState(squares)
    const [previousSquareColor, setColor] = useState('blackSquare')
    const [columnNum, setColumnNum] = useState(1)

    function handleAddSquare() {

        let color = previousSquareColor;
        
        if (squareArr.length > 63) return;
        
        if (!((squareArr.length + 1) % 8)) {
            setColumnNum(columnNum + 1)
        };
        
        if (columnNum % 2) {
            if (color === 'blackSquare') {
                color = 'whiteSquare'
                setSquareArr([...squareArr, color])
                setColor('whiteSquare')
            } else {
                color = 'blackSquare'
                setSquareArr([...squareArr, color])
                setColor('blackSquare')
            }
        } else {
            if (color === 'whiteSquare') {
                setSquareArr([...squareArr, previousSquareColor])
                setColor('blackSquare')
            } else {
                setSquareArr([...squareArr, previousSquareColor])
                setColor('whiteSquare')
            }
        }
    }    

    return (
    <>
        <div className='board'>
            {squareArr.map((square, index) => {
                return <div className={square} key={index}></div>
            })}
        </div>
        <button className='btn btn__add-square' onClick={handleAddSquare}>Add Square</button>
    </>
  )
}
