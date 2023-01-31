import isNumber from "./isNumber"
import operate from "./operate";

export default function caculate(buttonName, obj) {
    if (buttonName === 'DEL') {
        return {
            next: '',
            operation: '',
            total: '',
        }
    }


    if (isNumber(buttonName)) {
        if (buttonName === '0' && obj.next === '0') {
            return {}
        }
        if (obj.operation) {
            if (obj.next) {
                return { next : obj.next + buttonName }
            }
            return { next: buttonName }
        }
        if (obj.next) {
            const next = obj.next === '0' ? buttonName : obj.next + buttonName
            return { next: next, total: '' }
        }

        return { next: buttonName, total: '' }
    }

    if (buttonName === '=') {
        if (obj.next && obj.operation) {
            return {
                total: operate(obj.total, obj.next, obj.operation),
                next: '',
                operation: ''
            }
        } else {
            return {}
        }
    }



    if (obj.operation) {
        if(buttonName === '-') {
            return {next: buttonName}
        }
        return {
            total: operate(obj.total, obj.next, obj.operation),
            next: '',
            operation: buttonName
        }
    }


    if (!obj.next) {
        return { next: buttonName }
    }

    return {
        total: obj.next,
        next: '',
        operation: buttonName
    }
}
