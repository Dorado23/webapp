//import { create } from 'zustand'
import testProduct from '../routes/Details.jsx'

const useProductStore = create(set => ({
    product: testProduct,

    newProduct: (name, price => set(state => ({
        product: [
            ...state.product,

            {id: generateId(state.product),
            name: name,
            price: price}
        ]
    }))),
    removeProduct: (id) => set(state => ({
        product: state.product.filter(product => product.id !== id)
    })),

    editProduct: (id, name, price) => set(state => {
         const productCopy = [...state.product]
         const index = productCopy.findIndex(product => product.id ===Number(id))
         const changeProduct = {id, name, price}
         productCopy[index] = changeProduct

        return {
            product: productCopy
        }

    })

}))

function generateId(friends){
    console.log('generateId product:', product);
    
}