
export function getSearchParams(obj) {
    const checkEmptyParams = Object.keys(obj);

    if (!checkEmptyParams?.length) {
        return {}
    }

    const searchParams = {}

    const [val] = Object.values(obj);

    val.split("&")
       .reduce((acc, item) => {
        const [key, val] = item.split("=")
        acc[key] = val;
        return acc
    }, searchParams);

    return searchParams
}