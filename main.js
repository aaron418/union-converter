var input = document.querySelector("#input");

var unit = document.querySelector("#unit")

input.addEventListener("input", convert);

unit.addEventListener("input", convert)

function convert() {
    var value = input.value;
    var unitValue = unit.value;

    var output = document.querySelector("#output");
    if(value !=="") {
    output.style.display = "block"
    } else {
        output.style.display = "none"


        switch(unitValue) {
            case "lbs":

            case "grams":

            case "kilograms":

            case "ounces":

            case "meters":

            case "":
        }
    // get value of user input
    var value = input.value;
    }
    //grams
    function convertLbs(){
        
    card1.querySelector('h4').textContent ="Grams:"

    card2.querySelector('h4').textContent ="Kilograms:"

    card3.querySelector('h4').textContent ="ounces:"


    card1.querySelector('div').textContent = value * 453.592

    card2.querySelector('div').textContent = value * 453.592/1000

    card3.querySelector('div').textContent = value * 16


    }

