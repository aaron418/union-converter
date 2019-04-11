var input = document.querySelector("#input");

var unit = document.querySelector("#unit");

input.addEventListener("input", convert);

unit.addEventListener("input", convert);


function convert() {
    var value = input.value;
    var unitValue = unit.value;
    var output = document.querySelector("#output");

    if(value !=="") {
    output.style.display = "block";
    } else {
        output.style.display = "none";
    }


        switch(unitValue) {
            case "lbs":
                convertLbs(value);
                break;
            case "grams":
                convertGrams(value)
                break;
            case "kilograms":
                break;
            case "ounces":
                break;
            case "meters":
                break;
            case "miles":
                break;
            case "inches":
                break;
        }
    
}

    var card1 = document.querySelector("#card-1");
    var card2 = document.querySelector("#card-2");
    var card3 = document.querySelector("#card-3");

    
    //grams
    function convertLbs(value) {
        
    card1.querySelector('h4').textContent="GRAMS:"
    card2.querySelector('h4').textContent="KILOGRAMS:"
    card3.querySelector('h4').textContent="OUNCES:"

    card1.querySelector('div').textContent = value * 453.592;
    card2.querySelector('div').textContent = value * 453.592 / 1000;
    card3.querySelector('div').textContent = value * 16
    }

    function convertGrams(value) {
    
     card1.querySelector('h4').textContent="KILOGRAMS:"
     card2.querySelector('h4').textContent="OUNCES:"
     card3.querySelector('h4').textContent="LBS:"
    
     card1.querySelector('div').textContent = value * 1000;
     card2.querySelector('div').textContent = value * 0.035274;
      card3.querySelector('div').textContent = value * 0.00220462


    }

