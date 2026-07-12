function bookFlight() {

    const form = document.getElementById("PassengerForm");
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    } else

    {
        alert("Your flight search has been submitted successfully!");
        window.location.href = "passenger.html";

    }

}

function continuePassenger() {

    alert("Passenger saved.");

    window.location = "confirmation.html";

}

function downloadReceipt() {

    alert("Receipt downloaded successfully.");

}