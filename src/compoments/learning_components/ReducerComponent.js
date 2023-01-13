import React, { useReducer } from 'react'
import { Button, SafeAreaView, StyleSheet, Text } from 'react-native'

const initialState = {
    name: 'mugri',
    age: 22,
}
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return { ...state, age: state.age + 1 }
        case 'decrement':
            return { ...state, age: state.age - 1 }
        case 'reset':
            return { ...state, age: 22 }
        default:
            return state
    }
}

function ReducerComponent() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (

        <SafeAreaView>
            <Text> {count.age} </Text>
            <Button color={'red'} styles={styles.button} title='Increment' onPress={() => dispatch('increment')}></Button>
            <Button styles={styles.button} title='Decrement' onPress={() => dispatch('decrement')}></Button>
            <Button styles={styles.button} title='Reset' onPress={() => dispatch('reset')}></Button>

        </SafeAreaView>
    )


}

const styles = StyleSheet.create({
    button: {
        marginBottom: 10,
        backgroundColor: 'red'
    },
})

export default ReducerComponent