const API_KEY = "27bccbcf5a7b40a4a10c36dafd837587";

function showToast(message, type) {
  const existing = document.getElementById("toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.id = "toast";
  toast.className = "toast " + type;
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("toast-hide");
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

function searchCity(cityName) {
  document.getElementById("results").innerHTML =
    "<p class='placeholder'>Searching for " + cityName + "...</p>";

  const url =
    "https://nominatim.openstreetmap.org/search" +
    "?city=" + encodeURIComponent(cityName) +
    "&format=json&limit=1";

  fetch(url)
    .then(function (response) { return response.json(); })
    .then(function (data) {
      if (data.length === 0) {
        showToast('City "' + cityName + '" not found. Try another name.', "error");
        document.getElementById("results").innerHTML =
          "<p class='placeholder'>No results. Try a different city name.</p>";
        return;
      }
      const lat = data[0].lat;
      const lon = data[0].lon;
      getPlaces(lat, lon, cityName);
    })
    .catch(function () {
      showToast("Network error. Check your internet connection.", "error");
      document.getElementById("results").innerHTML =
        "<p class='placeholder'>Could not connect. Try again.</p>";
    });
}

function getPlaces(lat, lon, cityName) {
  const url =
    "https://api.geoapify.com/v2/places" +
    "?categories=tourism.attraction,tourism.sights,catering.restaurant,entertainment" +
    "&filter=circle:" + lon + "," + lat + ",5000" +
    "&bias=proximity:" + lon + "," + lat +
    "&limit=15" +
    "&apiKey=" + API_KEY;

  fetch(url)
    .then(function (response) { return response.json(); })
    .then(function (data) {
      const places = data.features;

      if (!places || places.length === 0) {
        showToast("No attractions found near " + cityName + ".", "info");
        document.getElementById("results").innerHTML =
          "<p class='placeholder'>No places found. Try a bigger city.</p>";
        return;
      }

      showToast(places.length + " places found in " + cityName + "!", "success");
      renderResults(places);
    })
    .catch(function () {
      showToast("Could not load places. Check your API key.", "error");
    });
}

function renderResults(places) {
  const container = document.getElementById("results");

  container.innerHTML = places
    .map(function (place) {
      const props = place.properties;
      const name = props.name || "Unnamed place";
      const category = props.categories
        ? props.categories[0].split(".").pop().replace(/_/g, " ")
        : "attraction";
      const address = props.address_line2 || "";

      return (
        '<div class="place-card">' +
        '<div>' +
        '<h3>' + name + '</h3>' +
        '<span class="category">' + category + '</span>' +
        (address ? '<p style="font-size:12px;color:#6b7280;margin-top:4px">' + address + '</p>' : '') +
        '</div>' +
        '<button class="add-btn" onclick="addToTrip(\'' +
        name.replace(/'/g, "\\'") + "','" + category.replace(/'/g, "\\'") +
        '\')">' +
        '+ Add' +
        '</button>' +
        '</div>'
      );
    })
    .join("");
}

let trip = JSON.parse(localStorage.getItem("trip")) || [];

function saveTrip() {
  localStorage.setItem("trip", JSON.stringify(trip));
}

function renderTrip() {
  const list = document.getElementById("tripItems");
  const emptyMsg = document.getElementById("emptyMsg");

  emptyMsg.style.display = trip.length === 0 ? "block" : "none";

  list.innerHTML = trip
    .map(function (place, index) {
      return (
        '<li>' +
        '<span>' + place.name +
        ' <small style="color:#6b7280">(' + place.category + ')</small>' +
        '</span>' +
        '<button class="remove-btn" onclick="removeFromTrip(' + index + ')">✕</button>' +
        '</li>'
      );
    })
    .join("");
}

function addToTrip(name, category) {
  if (trip.some(function (p) { return p.name === name; })) {
    showToast('"' + name + '" is already in your list!', "info");
    return;
  }
  trip.push({ name: name, category: category });
  saveTrip();
  renderTrip();
  showToast('"' + name + '" added to your trip!', "success");
}

function removeFromTrip(index) {
  const name = trip[index].name;
  trip.splice(index, 1);
  saveTrip();
  renderTrip();
  showToast('"' + name + '" removed.', "info");
}

document.getElementById("searchBtn").addEventListener("click", function () {
  const city = document.getElementById("searchInput").value.trim();
  if (city === "") {
    showToast("Please type a city name first.", "info");
    return;
  }
  searchCity(city);
});

document.getElementById("searchInput").addEventListener("keydown", function (e) {
  if (e.key === "Enter") document.getElementById("searchBtn").click();
});

renderTrip();





//  SORTING TRIP LIST
function sortTrip(type) {
  if (trip.length === 0) {
    showToast("Your list is empty!", "info");
    return;
  }

  if (type === 'name') {
    // Сортуємо за назвою (від A до Z)
    trip.sort(function(a, b) {
      return a.name.localeCompare(b.name);
    });
  } else if (type === 'category') {
    // Сортуємо за категорією (від A до Z)
    trip.sort(function(a, b) {
      return a.category.localeCompare(b.category);
    });
  }

  saveTrip();      // Зберігаємо відсортований список
  renderTrip();    // Оновлюємо список на сторінці
  showToast("Sorted by " + type, "success");
}