import { useRef, useState } from "react";

export const useCalculator = () => {
    
    const [number, setNumber] = useState('0');
    const [beforeNumber, setBeforeNumber] = useState('0')

    enum Operators {
        add, subtract, divide, multiply
    }

    const lastOperators = useRef<Operators>()

    const clean = () => {
        setNumber('0');
        setBeforeNumber('0');
    }

    const createNumber = ( numeroTexto: string ) => {
        //No aceptar doble .

        if( number.includes('.') && numeroTexto === '.' ) return;

        if( number.startsWith('0') || number.startsWith('-0') ){
            //punto decimal
            if( numeroTexto === '.' ) {
                setNumber( number + numeroTexto );

                //evauar si es otro cero, y no hay un punto
            } else if ( numeroTexto === '0' && number.includes('.') ) {
                setNumber( number + numeroTexto );

                //evaluar si es diferente de cero y no tiene un punto
            } else if ( numeroTexto !== '0' && !number.includes('.') ) {
                setNumber( numeroTexto );

                //evitar 0000.0
            } else if ( numeroTexto === '0' && !number.includes('.') ) {
                setNumber( number )
            } else {
                setNumber(number + numeroTexto);
            }

        } else {
            setNumber(number + numeroTexto);
        } 

    }

    const positiveNegative = () => {
        if ( number.includes('-') ) {
            setNumber( number.replace('-', '') );
        } else {
            setNumber( '-' + number );
        }
    }

    const buttonDel = () => {
        let negative = '';
        let numberTemp = number;

        if ( number.includes('-') ) {
            negative = '-';
            numberTemp = number.substring(1);
        }

        if ( numberTemp.length > 1 ) {
            setNumber( negative + numberTemp.slice(0,-1) );
        } else {
            setNumber('0');
        }

    }

    const changeBeforeNumber = () => {
        if ( number.endsWith('.') ) {
            setBeforeNumber( number.slice( 0,-1 ) );
        } else {
            setBeforeNumber( number );
        }
        setNumber('0');
    }

    const btnDivide = () => {
        changeBeforeNumber();
        lastOperators.current = Operators.divide;
    }

    const btnMultiply = () => {
        changeBeforeNumber();
        lastOperators.current = Operators.multiply;
    }

    const btnSubtract = () => {
        changeBeforeNumber();
        lastOperators.current = Operators.subtract;
    }

    const btnAdd = () => {
        changeBeforeNumber();
        lastOperators.current = Operators.add;
    }

    const calculate = () => {
        const num1 = Number( number );
        const num2 = Number( beforeNumber );

        switch ( lastOperators.current ) {
            case Operators.add:
                setNumber( `${ num1 + num2 }` );
                break;

            case Operators.subtract:
                setNumber( `${ num2 - num1 }` );
                break;

            case Operators.multiply:
            setNumber( `${ num1 * num2 }` );
            break;

            case Operators.divide:
            setNumber( `${ num2 / num1 }` );
            break;
            
        }

    }

    return{
        number,
        beforeNumber,
        clean,
        positiveNegative,
        buttonDel,
        btnDivide,
        createNumber,
        btnMultiply,
        btnSubtract,
        btnAdd,
        calculate
    }

}