let products = [
  {
    id: "1a",
    label: "Patte Randa",
    price: 2,
  },
  {
    id: "2a",
    label: "Riz",
    price: 4,
  },
  {
    id: "3a",
    label: "Sel",
    price: 1,
  },
]

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const fetchProducts = async () => {
  await delay(3000)
  //   throw new Error("No tasks")
  return products
}

export const fetchProductById = async (id) => {
  await delay(1000)
  const product = products.find((product) => product.id === id)
  return product
}
