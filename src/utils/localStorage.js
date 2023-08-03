import { transformToJSON, transformToJSObj } from "./tranformData"


// Проверка в LocalStorage ключа (key)
export function isCheckLocalStorage(key) {
    return getLocalStorage(key) ?? null
}

// Получение data из localStorage по ключу key
export function getLocalStorage(key) {
    return transformToJSObj(localStorage.getItem(key))
}

// Добавление в localStorage data по ключу key
export function setLocaStorage(key, data) {
    localStorage.setItem(key, transformToJSON(data))
}
