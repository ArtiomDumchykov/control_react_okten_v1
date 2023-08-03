//Выполенние функции с содержкой time
export function delay(ms = 1000, fn) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fn()
            resolve("end delay")
        }, ms)
    })
}