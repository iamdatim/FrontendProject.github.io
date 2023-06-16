
// Get the HTML elements
const myForm = document.querySelector('form')
const myIpAddr = document.querySelector('.ip-addr h2')
const myLocation = document.querySelector('.location h2')
const myTimezone = document.querySelector('.timezone h2')
const myIsp = document.querySelector('.isp h2')

// Map creation

var myMap = L.map('myMap').setView([51.505, -0.09], 13);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

const myIcon = L.icon({
  iconUrl: './images/icon-location.svg',
  iconSize: [40, 50],
  iconAnchor: [20, 50],
})

let myMarker

const mapDisplay = (lat, lng) => {
  myMap.setView([lat, lng], 16)

  if (myMarker != null) myMarker.remove()

  myMarker = L.marker([lat, lng], { icon: myIcon }).addTo(myMap)

  myMarker.addTo(myMap)
}



// Get the info the page needs
const getData = (inputValue = '', searchType = 'IP') => {
  const apiKey = 'at_E6BD5wm4eWkq0e3q9TyyAmGNH165p'; // Replace with your actual API key

  const url =
    searchType === 'IP'
      ? `https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${inputValue}`
      : `https://geo.ipify.org/api/v1?apiKey=${apiKey}&domain=${inputValue}`

      
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      myIpAddr.innerText = data.ip
      myLocation.innerText = `${data.location.region}, ${data.location.city}`
      myTimezone.innerText = `UTC ${data.location.timezone}`
      myIsp.innerText = data.isp
      mapDisplay(data.location.lat, data.location.lng)
    })
    .catch((error) => {
      myIpAddr.innerText = '__'
      myLocation.innerText = '__'
      myTimezone.innerText = '__'
      myIsp.innerText = '__'

      const myInput = myForm.searchInput
      myInput.classList.add('error')

      setTimeout(() => myInput.classList.remove('error'), 3000)
      console.error(error)
    })
}

// Search for any IP addresses or domains and see the key information and location
// The regex for a valid IP address is inspired by this post
// https://www.regular-expressions.info/numericranges.html

const regexIp = /^\b([1-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b(\.\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b){3}$/
const regexDomain = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/

myForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const myInput = myForm.searchInput

  if (myInput.value.match(regexIp)) {
    getData(myInput.value)
  }

  if (myInput.value.match(regexDomain)) {
    getData(myInput.value, (searchType = 'DOMAIN'))
  }

  if (!myInput.value.match(regexDomain) && !myInput.value.match(regexIp)) {
    myInput.classList.add('error')

    setTimeout(() => myInput.classList.remove('error'), 3000)
  }
})

// Load IP Address on the map on the initial page load
getData()
