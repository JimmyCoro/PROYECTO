window. initMap = function () {

    const coords = { lat: -2.900208, lng: -79.005863}
    const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: coords,
    });
    const marker = new google.maps.Marker({
        position: coords,
        map,
    })
    };