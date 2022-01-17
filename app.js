$(
    function(){
        
    }
)

/** Create Pizza Flavour, Price, Toppings and Crust Objects */
let pizzaFlavour = {
    veggieTikka: 'Veggie Tikka',
    chickenTikka: 'Chicken Tikka',
    chickenMushroom: 'Chicken Mushroom',
    hawaaian: 'Hawaaian'
}


let pizzaPrice = {
    small: 500,
    medium: 800,
    large: 1200
}

let pizzaCrust = {
    thinCrust: 100,
    thickCrust: 150,
    flatbreadCrust: 180
}

let pizzaToppings = {
    tomato: 80,
    onions: 80,
    mushroom: 80,
    greenPepper: 80,
    olives: 120,
    pineapple: 120,
    beefPepperoni: 170,
    periperiChicken: 170
}

/**Create an Order class */

class CreateOrder {
    constructor(flavour,size, crust, toppings, delivery, location){
       this.pizza = {
           flavour: pizzaFlavour[flavour],
           size,
           price: pizzaPrice[size],
       },
       this.crust = {
           crust,
           price: pizzaCrust[crust]
       },
       this.toppings = {
            toppings,
            price: pizzaToppings[toppings]
       },
       this.delivery = delivery,
       this.location = location
    }
}

let newOrder = new CreateOrder('veggieTikka', 'medium', 'thinCrust', 'tomato', false, '');

console.log(newOrder);