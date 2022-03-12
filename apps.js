// --------PROBLEM-1: BUDGET CALCULATOR-------


function totalPriceCalculate(computer, watch, coffee) {

    // CHECK DATA TYPE OF QUANTITY AND CONTROL THEM WITH CONDITION

    if (typeof computer == "number" && typeof watch == "number" && typeof coffee == "number") {
        var computerPrice = "You Buy " + computer + " Computer And Price is: " + computer * 1000 + " . ";
        var watchPrice = "You Buy " + watch + " watch And Price is: " + watch * 260 + " . ";
        var coffeePrice = "You Buy " + coffee + " coffee And Price is: " + coffee * 50 + " . ";
        var totalPrice = computer * 1000 + watch * 260 + coffee * 50;
        var result = computerPrice + watchPrice + coffeePrice + " Your Total Cost is: " + totalPrice;
        console.log(result);
    } else {
        alert("Please Enter A Valid Quantity.");
    }

}

// CALLING THE FUNCTION FOR TOTAL PRICE

// EXAMPLE: totalPriceCalculate(2, 0, 6);


// PROBLEM-2: PRODUCT SEAECH.




function searchProduct(title) {

    // PRODUCT LIST ARRAY

    var products = [{
            id: 1,
            title: "laptop",
            price: 567,
            description: "Laptop  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quasi, facere sint incidunt saepe maxime."
        },
        {
            id: 2,
            title: "mobile",
            price: 367,
            description: "Mobile  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quasi, facere sint incidunt saepe maxime."
        },
        {
            id: 3,
            title: "watch",
            price: 180,
            description: "Watch  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quasi, facere sint incidunt saepe maxime."
        },
        {
            id: 4,
            title: "coffee",
            price: 40,
            description: "Coffee  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quasi, facere sint incidunt saepe maxime."
        }


    ]


    // SEARCH PRODUCT ITEM CONDITION


    if (title.toLowerCase() == "laptop") {
        console.log(products[0]);
    } else if (title.toLowerCase() == "mobile") {
        console.log(products[1]);
    } else if (title.toLowerCase() == "watch") {
        console.log(products[2]);
    } else if (title.toLowerCase() == "coffee") {
        console.log(products[3]);
    } else {
        alert('Product Not Found.')
    }
}
// CALLING THE FUNCTION WITH PORDUCT NAME

// EXAMPLE: searchProduct('COFFEE');


// PROBLE-3: CALCULATE THE TOTAL AMOUNT OF 1 YEAR IF EACH DAY DEPOSIT 10 TK.


function totalDepositCalculate(year) {
    var totalDeposit;
    year = Number(year);

    if (year % 4 == 0) {
        totalDeposit = 366 * 10;
    } else {
        totalDeposit = 365 * 10;
    }
    console.log(totalDeposit);

}

// CALLING THE FUNCTION WITH YEAR PARAMETTER.

// EXAMPLE: totalDepositCalculate(2021)