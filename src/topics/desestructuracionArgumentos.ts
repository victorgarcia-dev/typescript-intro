interface Product {
    description: string;
    price: number;
}

interface TaxCalculationOptions {
    tax: number;
    shoppingCard: Product[];
}

const phone: Product = {
    description: "Nokia A1",
    price: 15.0
}

const tablet: Product = {
    description: "iPad Air",
    price: 250.0
}

function calculation(options: TaxCalculationOptions): [number, number] {
    const{shoppingCard, tax} = options;
    let total: number = 0;

    shoppingCard.forEach( product => {
        const {price} = product;
        total += price;
    });
    return [total, total*tax];
}

const shoppingCard: Product[] = [phone,tablet];
const tax = 0.15;

const result = calculation({shoppingCard,tax});
console.log(result);

export {

};