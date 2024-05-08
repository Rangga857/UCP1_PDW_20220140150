function displayCurrentDateTime() {
    const currentDate = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    };
    const currentDateTime = currentDate.toLocaleDateString('en-US', options);
    return currentDateTime;
}

function updateDateTime() {
    const currentDateTimeBox = document.getElementById('currentDateTime');
    if (currentDateTimeBox) {
        currentDateTimeBox.textContent = displayCurrentDateTime();
    }
}


updateDateTime();

setInterval(updateDateTime, 1000);