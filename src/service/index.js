import { products } from "@/data";

const filterProducts = (category) => products.filter(product => 
product.category == category);

const searchProducts = (typedText) => {
    return(
        products.filter((product) => 
            product.name.toLocaleLowerCase().includes(typedText
            .toLocaleLowerCase()) ||
            product.description.toLocaleLowerCase().includes(typedText
            .toLocaleLowerCase())
        )
    )
}

export {filterProducts , searchProducts};