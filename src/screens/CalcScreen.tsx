import React from 'react'
import { View, Text } from 'react-native'
import { CalcButton } from '../components/CalcButton'
import { useCalculator } from '../hooks/useCalculator'
import { styles } from '../theme/appTheme'

export const CalcScreen = () => {
 
    const {
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
    } = useCalculator();


  return (
    <View style={ styles.calcContainer }>
        {
            (  beforeNumber !== '0') && (
                <Text style={ styles.smallResult }> {beforeNumber} </Text>
            )
        }
        
        <Text 
            style={ styles.result }
            numberOfLines={ 1 }
            adjustsFontSizeToFit
        >
            { number } 
        </Text>
        
        {/* row of buttons */}
        <View style={ styles.row }>
            <CalcButton text="C" color="#9B9B9B" action={  clean } />
            <CalcButton text="+/-" color="#9B9B9B" action={  positiveNegative } />
            <CalcButton text="del" color="#9B9B9B" action={  buttonDel } />
            <CalcButton text="/" color="#FF9427" action={  btnDivide } />
        </View>

        {/* row of buttons */}
        <View style={ styles.row }>
            <CalcButton text="7" action={  createNumber } />
            <CalcButton text="8" action={ createNumber } />
            <CalcButton text="9" action={ createNumber } />
            <CalcButton text="x" color="#FF9427" action={  btnMultiply }  />
        </View>

        {/* row of buttons */}
        <View style={ styles.row }>
            <CalcButton text="4" action={ createNumber } />
            <CalcButton text="5" action={ createNumber } />
            <CalcButton text="6" action={ createNumber } />
            <CalcButton text="-" color="#FF9427" action={  btnSubtract } />
        </View>

        {/* row of buttons */}
        <View style={ styles.row }>
            <CalcButton text="1" action={ createNumber } />
            <CalcButton text="2" action={ createNumber } />
            <CalcButton text="3" action={ createNumber } />
            <CalcButton text="+" color="#FF9427" action={  btnAdd } />
        </View>

        {/* row of buttons */}
        <View style={ styles.row }>
            <CalcButton text="0"  action={ createNumber } widthButton={ true } />
            <CalcButton text="."  action={ createNumber } />
            <CalcButton text="=" color="#FF9427" action={  calculate } />
        </View>

    </View>
  )
}
