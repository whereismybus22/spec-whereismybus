function openMapWithBusMiss() {
    // Assuming presentBusLocation contains the latitude and longitude of the bus or location
    let collegeLocation = [17.566018230885707, 78.45120109325309];
    const mapUrl = `https://www.google.com/maps/dir/?api=1&destination=${collegeLocation[0]},${collegeLocation[1]}&travelmode=transit&dir_action=navigate`;

    // Open Google Maps with the directions URL in a new tab or app
    window.open(mapUrl, "_blank");
}

// Event listener for the button to open maps
document
    .getElementById("busMiss")
    .addEventListener("click", openMapWithBusMiss);