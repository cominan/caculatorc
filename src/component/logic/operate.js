import Big from 'big.js'


function operate(numberOne, numberTwo, operation) {
    const one = Big(numberOne)
    const two = Big(numberTwo)

    if (operation === '+') {
        return one.add(two).toString()
    }
    if (operation === '-') {
        return one.minus(two).toString()
    }
     if (operation === '/') {
        if (two === '0') {
            alert('phép chia cho 0')
            return '0'
        } else {
            return one.div(two).toString()
        }
    }
     if (operation === 'x') {
        return one.times(two).toString()
    }
    throw Error (`Unknown operation ${operation}`)
}

export default operate