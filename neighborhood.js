
let restaurants = [ 
    {
        name: "Tartine Bakery & Cafe",
        cuisine: "Bakery, French",
        address: "600 Guerrero St, San Francisco, CA 94110"
    },
    {
        name: "NOPA",
        cuisine: "Californian, Mediterranean",
        address: "560 Divisadero St, San Francisco, CA 94117"
    },
    {
        name: "Burma Superstar",
        cuisine: "Burmese",
        address: "309 Clement St, San Francisco, CA 94118"
    },
    {
        name: "Super Duper Burgers",
        cuisine: "Burgers, American",
        address: "721 Market St, San Francisco, CA 94103"
    },
    {name: "San Tung Chinese Restaurant",
    cuisine: "Chinese, Asian Fusion",
    address: "1031 Irving St, San Francisco, CA 94122"
    }
];

function randomRestaurant (restaurant){

    let tryThis = restaurants[[Math.floor(Math.random()*restaurants.length)]].name;

    alert(`Try this one: ${tryThis}`);

}

let recoBtn = document.querySelector('#recommandation')
recoBtn.addEventListener('click', randomRestaurant)



