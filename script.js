```javascript
// Railway Ticket Booking JavaScript


// Store booking information
let booking = {};


// Go to booking section
function goToBooking() {

    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });

}


// Search trains
document.getElementById("bookingForm").addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        let from = document.getElementById("from").value;
        let to = document.getElementById("to").value;
        let date = document.getElementById("date").value;
        let trainClass = document.getElementById("trainClass").value;
        let passengers = document.getElementById("passengers").value;


        // Check stations
        if (
            from.trim() === "" ||
            to.trim() === ""
        ) {

            alert("Please enter both stations.");

            return;
        }


        if (
            from.trim().toLowerCase() ===
            to.trim().toLowerCase()
        ) {

            alert("From and To stations cannot be the same.");

            return;
        }


        // Save information
        booking.from = from;
        booking.to = to;
        booking.date = date;
        booking.trainClass = trainClass;
        booking.passengers = passengers;


        showTrains();

    }
);


// Display trains
function showTrains() {

    let trainList =
        document.getElementById("trainList");


    trainList.innerHTML = "";


    let trains = [

        {
            name: "Rajdhani Express",
            number: "12951",
            departure: "17:30",
            arrival: "08:35",
            price: 1250
        },

        {
            name: "Duronto Express",
            number: "12267",
            departure: "23:00",
            arrival: "07:30",
            price: 980
        },

        {
            name: "Deccan Express",
            number: "11008",
            departure: "07:00",
            arrival: "14:30",
            price: 650
        }

    ];


    trains.forEach(function(train) {

        let card = document.createElement("div");

        card.className = "train-card";


        card.innerHTML =

            "<div>" +

                "<h3>🚆 " +
                train.name +
                "</h3>" +

                "<p>Train No: " +
                train.number +
                "</p>" +

            "</div>" +


            "<div>" +

                "<p>" +
                train.departure +
                " → " +
                train.arrival +
                "</p>" +

            "</div>" +


            "<div>" +

                "<p>Fare: ₹" +
                train.price +
                "</p>" +

                "<p>Seats: 120</p>" +

            "</div>" +


            "<div>" +

                "<button class='bookButton'>" +
                "Book Now" +
                "</button>" +

            "</div>";


        let button =
            card.querySelector(".bookButton");


        button.addEventListener(
            "click",
            function() {

                selectTrain(
                    train.name,
                    train.number,
                    train.price
                );

            }
        );


        trainList.appendChild(card);

    });


    document.getElementById("trains").scrollIntoView({
        behavior: "smooth"
    });

}


// Select train
function selectTrain(
    trainName,
    trainNumber,
    price
) {

    booking.trainName = trainName;
    booking.trainNumber = trainNumber;
    booking.price = price;


    document.getElementById(
        "passengerSection"
    ).style.display = "block";


    document.getElementById(
        "passengerSection"
    ).scrollIntoView({
        behavior: "smooth"
    });

}


// Passenger form
document.getElementById("passengerForm").addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        let name =
            document.getElementById(
                "passengerName"
            ).value;


        let age =
            document.getElementById(
                "age"
            ).value;


        let gender =
            document.getElementById(
                "gender"
            ).value;


        booking.name = name;
        booking.age = age;
        booking.gender = gender;


        document.getElementById(
            "paymentSection"
        ).style.display = "block";


        document.getElementById(
            "paymentSection"
        ).scrollIntoView({
            behavior: "smooth"
        });

    }
);


// Make payment
function makePayment() {

    let payment =
        document.querySelector(
            "input[name='payment']:checked"
        );


    if (!payment) {

        alert("Please select a payment method.");

        return;
    }


    booking.payment = payment.value;


    // Generate demo PNR
    let pnr =
        Math.floor(
            1000000000 +
            Math.random() * 9000000000
        );


    // Show confirmation
    document.getElementById(
        "pnr"
    ).textContent = pnr;


    document.getElementById(
        "confirmName"
    ).textContent = booking.name;


    document.getElementById(
        "confirmJourney"
    ).textContent =
        booking.from +
        " → " +
        booking.to;


    document.getElementById(
        "confirmClass"
    ).textContent =
        booking.trainClass;


    document.getElementById(
        "confirmPayment"
    ).textContent =
        booking.payment;


    document.getElementById(
        "confirmationSection"
    ).style.display = "block";


    document.getElementById(
        "confirmationSection"
    ).scrollIntoView({
        behavior: "smooth"
    });


    alert(
        "Payment successful! Ticket confirmed."
    );

}
```
