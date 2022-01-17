$(function () {
	//Check if User has requested for delivery
	let confirmDelivery = $("#delivery");

	// If yes, display the input field for entering the location
	confirmDelivery.on("change", () => {
		let confirmed = confirm("Charges for Delivery will be Ksh. 120/=");
		confirmed
			? $("#delivery-location").removeClass("d-none")
			: $("#delivery-location").addClass("d-none");
	});

	//Get User's Order
	let pizzaFlavour = $("#flavour").val();
	let pizzaSize = $("#size").val();
	let crust = $("#crust").val();
	let toppings = $("#toppings").val();
	let quantity = parseInt($("#amount").val());

	let form = $("#makeOrder");

	form.on("submit", (e) => {
		e.preventDefault();
		let location = confirmDelivery[0].checked ? $("#location").val() : "";

		if (confirmDelivery[0].checked && !location) {
			alert("Enter a valid Location");
		} else {
			let order = new CreateOrder(
				pizzaFlavour,
				pizzaSize,
				crust,
				toppings,
				location,
				quantity
			);
			let total =
				(order.pizza.price + order.crust.price + order.toppings.price) *
				order.quantity;

            if (location){
                total = total + order.deliveryCharges
            }

			let message = `Your order of ${order.pizza.flavour} of size ${order.pizza.size} with ${order.crust.crust} and ${order.toppings.toppings} toppings will cost a total of ${total}`;

			let deliveryMsg = `Your order will be delivered to your location at, ${order.location}`;

			if (location) {
                alert(message);
				alert(deliveryMsg);
			}else {
                alert(message)
            }
		}
	});
});

/** Create Pizza Flavour, Price, Toppings and Crust Objects */
let pizzaFlavour = {
	veggieTikka: "Veggie Tikka",
	chickenTikka: "Chicken Tikka",
	chickenMushroom: "Chicken Mushroom",
	hawaaian: "Hawaaian",
};

let pizzaPrice = {
	small: 500,
	medium: 800,
	large: 1200,
};

let pizzaCrustName = {
	thinCrust: "Thin Crust",
	thickCrust: "Thick Crust",
	flatbreadCrust: "Flat Bread Crust",
};

let pizzaCrust = {
	thinCrust: 100,
	thickCrust: 150,
	flatbreadCrust: 180,
};

let pizzaToppingsName = {
	tomato: "Tomato",
	onions: "Onions",
	mushroom: "Mushroom",
	greenPepper: "Green Pepper",
	olives: "Olives",
	pineapple: "Pineapple",
	beefPepperoni: "Beef Pepperoni",
	periperiChicken: "Periperi Chicken",
};

let pizzaToppings = {
	tomato: 80,
	onions: 80,
	mushroom: 80,
	greenPepper: 80,
	olives: 120,
	pineapple: 120,
	beefPepperoni: 170,
	periperiChicken: 170,
};

/**Create an Order class */

class CreateOrder {
	constructor(flavour, size, crust, toppings, location, quantity) {
		(this.pizza = {
			flavour: pizzaFlavour[flavour],
			size,
			price: pizzaPrice[size],
		}),
			(this.crust = {
				crust: pizzaCrustName[crust],
				price: pizzaCrust[crust],
			}),
			(this.toppings = {
				toppings: pizzaToppingsName[toppings],
				price: pizzaToppings[toppings],
			}),
			(this.location = location),
			(this.quantity = quantity);
	}
}

CreateOrder.prototype.deliveryCharges = 120;

let newOrder = new CreateOrder(
	"veggieTikka",
	"medium",
	"thinCrust",
	"tomato",
	"",
	1
);

console.log(newOrder);
