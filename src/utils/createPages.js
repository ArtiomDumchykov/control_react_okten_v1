export const createPages = (obj) => {
  if (!obj || typeof obj !== "object") return;

  const { limit, all, total } = obj

  total.value = Math.ceil(all.length / limit);

  for (let i = 1; i <= total.value; i++) {
    const startIndex = (i - 1) * limit;
    const endIndex = i * limit;
    obj.pages[`page_${i}`] = [...all].slice(startIndex, endIndex);
  }

  const lastPage = obj.pages[`page_${total.value}`]
  const prelastPage = obj.pages[`page_${total.value - 1}`].slice(lastPage.length)
  lastPage.splice(0, 0, ...prelastPage)

}