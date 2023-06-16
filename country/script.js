






// // Function to toggle between light mode and dark mode
// function toggleMode() {
//   const body = document.body;
//   body.classList.toggle("dark-mode");

//   const modeToggle = document.getElementById("mode-toggle");
//   if (body.classList.contains("dark-mode")) {
//     modeToggle.textContent = "Light Mode";
//   } else {
//     modeToggle.textContent = "Dark Mode";
//   }
// }

// // Fetch JSON data
// fetch("data.json")
//   .then(response => response.json())
//   .then(data => {
//     const container = document.getElementById("data-container");
//     const searchInput = document.getElementById("search-input");
//     const regionFilter = document.getElementById("region-filter");

//     function filterData(searchTerm, selectedRegion) {
//       const filteredData = data.filter(country =>
//         country.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
//         (selectedRegion === "" || country.region === selectedRegion)
//       );
//       displayData(filteredData);
//     }

//     function displayData(countries) {
//       container.innerHTML = "";
//       countries.forEach(country => {
//         const card = document.createElement("div");
//         card.classList.add("card");

//         const flag = document.createElement("img");
//         flag.src = country.flag;
//         flag.alt = `Flag of ${country.name}`;

//         const cardTitle = document.createElement("h2");
//         cardTitle.textContent = country.name;

//         const listGroup = document.createElement("ul");
//         listGroup.classList.add("list-group");

//         const population = createListItem("Population", country.population);
//         const region = createListItem("Region", country.region);
//         const capital = createListItem("Capital", country.capital);

//         listGroup.appendChild(population);
//         listGroup.appendChild(region);
//         listGroup.appendChild(capital);

//         card.appendChild(flag);
//         card.appendChild(cardTitle);
//         card.appendChild(listGroup);

//         card.addEventListener("click", () => {
//           displayCountryDetails(country);
//         });

//         container.appendChild(card);
//       });
//     }

//     function createListItem(label, value) {
//       const listItem = document.createElement("li");
//       const labelElement = document.createElement("strong");
//       labelElement.textContent = `${label}: `;
//       const valueElement = document.createTextNode(value);
//       listItem.appendChild(labelElement);
//       listItem.appendChild(valueElement);
//       return listItem;
//     }

//     function displayCountryDetails(country) {
//       // Construct the URL with the country code or any unique identifier
//       const countryDetailsUrl = `country-details.html?code=${country.code}`;

//       // Open a new window or redirect to the country details page
//       window.open(countryDetailsUrl, '_blank');
//     }

//     searchInput.addEventListener("input", () => {
//       const searchTerm = searchInput.value;
//       const selectedRegion = regionFilter.value;
//       filterData(searchTerm, selectedRegion);
//     });

//     regionFilter.addEventListener("change", () => {
//       const searchTerm = searchInput.value;
//       const selectedRegion = regionFilter.value;
//       filterData(searchTerm, selectedRegion);
//     });

//     displayData(data);
//   })
//   .catch(error => console.error("Error:", error));



function toggleMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");

  const modeToggle = document.getElementById("mode-toggle");
  if (body.classList.contains("dark-mode")) {
    modeToggle.textContent = "Light Mode";
  } else {
    modeToggle.textContent = "Dark Mode";
  }
}

// Fetch JSON data
fetch("data.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("data-container");
    const searchInput = document.getElementById("search-input");
    const regionFilter = document.getElementById("region-filter");
    const countryDetailsContainer = document.getElementById("country-container"); // Added this line

    function filterData(searchTerm, selectedRegion) {
      const filteredData = data.filter(country =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedRegion === "" || country.region === selectedRegion)
      );
      displayData(filteredData);
    }

    function displayData(countries) {
      container.innerHTML = "";
      countries.forEach(country => {
        const card = document.createElement("div");
        card.classList.add("card");

        const flag = document.createElement("img");
        flag.src = country.flag;
        flag.alt = `Flag of ${country.name}`;

        const cardTitle = document.createElement("h2");
        cardTitle.textContent = country.name;

        const listGroup = document.createElement("ul");
        listGroup.classList.add("list-group");

        const population = createListItem("Population", country.population);
        const region = createListItem("Region", country.region);
        const capital = createListItem("Capital", country.capital);

        listGroup.appendChild(population);
        listGroup.appendChild(region);
        listGroup.appendChild(capital);

        card.appendChild(flag);
        card.appendChild(cardTitle);
        card.appendChild(listGroup);

        card.addEventListener("click", () => {
          displayCountryDetails(country);
        });

        container.appendChild(card);
      });
    }

    function createListItem(label, value) {
      const listItem = document.createElement("li");
      const labelElement = document.createElement("strong");
      labelElement.textContent = `${label}: `;
      const valueElement = document.createTextNode(value);
      listItem.appendChild(labelElement);
      listItem.appendChild(valueElement);
      return listItem;
    }

    // function displayCountryDetails(country) {
    //   // Clear previous country details
    //   countryDetailsContainer.innerHTML = "";

    //   // Create elements for the country details
    //   const flagImg = document.createElement("img");
    //   flagImg.src = country.flag;
    //   flagImg.alt = `Flag of ${country.name}`;
    //   flagImg.id = "flag-img";

    //   const header = document.createElement("h5");
    //   header.textContent = "Header";
    //   header.id = "header";

    //   const population = document.createElement("span");
    //   population.id = "population";
    //   population.textContent = country.population;

    //   const region = document.createElement("span");
    //   region.id = "region";
    //   region.textContent = country.region;

    //   const capital = document.createElement("span");
    //   capital.id = "capital";
    //   capital.textContent = country.capital;

    //   const countryName = document.createElement("h6");
    //   countryName.id = "countryName";
    //   countryName.textContent = `Name: ${country.name}`;

    //   const countryContainer = document.createElement("div");
    //   countryContainer.id = "country-container";
    //   countryContainer.appendChild(flagImg);
    //   countryContainer.appendChild(header);

    //   const list1 = document.createElement("ul");
    //   list1.id = "list1";
    //   list1.appendChild(createListItem("Population", population));
    //   list1.appendChild(createListItem("Region", region));
    //   list1.appendChild(createListItem("Capital", capital));

    //   const list2 = document.createElement("ul");
    //   list2.id = "list2";
    //   // Add more list items as needed

    //   const listColumn = document.createElement("div");
    //   listColumn.id = "list-column";
    //   listColumn.appendChild(list1);
    //   listColumn.appendChild(list2);

    //   const countryDetailsColumn = document.createElement("div");
    //   countryDetailsColumn.classList.add("col");
    //   countryDetailsColumn.appendChild(countryName);
    //   countryDetailsColumn.appendChild(countryContainer);
    //   countryDetailsColumn.appendChild(listColumn);

    //   const row = document.createElement("div");
    //   row.classList.add("row");
    //   row.appendChild(countryDetailsColumn);

    //   const container = document.createElement("div");
    //   container.classList.add("container", "text-center");
    //   container.appendChild(row);

    //   countryDetailsContainer.appendChild(container);
    // }


    // function displayCountryDetails(country) {
    //   // Construct the URL with the country code or any unique identifier
    //   const countryDetailsUrl = `country-details.html?code=${country.code}`;
    
    //   // Open a new window or redirect to the country details page
    //   window.open(countryDetailsUrl, '_blank');
    
    //   // Clear previous country details
    //   countryDetailsContainer.innerHTML = "";
    
    //   // Create elements for the country details
    //   const flagImg = document.createElement("img");
    //   flagImg.src = country.flag;
    //   flagImg.alt = `Flag of ${country.name}`;
    //   flagImg.id = "flag-img";
    
    //   const header = document.createElement("h5");
    //   header.textContent = "Header";
    //   header.id = "header";
    
    //   const population = document.createElement("span");
    //   population.id = "population";
    //   population.textContent = country.population;
    
    //   const region = document.createElement("span");
    //   region.id = "region";
    //   region.textContent = country.region;
    
    //   const capital = document.createElement("span");
    //   capital.id = "capital";
    //   capital.textContent = country.capital;
    
    //   const countryName = document.createElement("h6");
    //   countryName.id = "countryName";
    //   countryName.textContent = `Name: ${country.name}`;
    
    //   const list1 = document.createElement("ul");
    //   list1.id = "list1";
    //   list1.appendChild(createListItem("Population", country.population));
    //   list1.appendChild(createListItem("Region", country.region));
    //   list1.appendChild(createListItem("Capital", country.capital));
    
    //   const list2 = document.createElement("ul");
    //   list2.id = "list2";
    //   // Add more list items as needed
    
    //   const listColumn = document.createElement("div");
    //   listColumn.id = "list-column";
    //   listColumn.appendChild(list1);
    //   listColumn.appendChild(list2);
    
    //   const countryDetailsColumn = document.createElement("div");
    //   countryDetailsColumn.classList.add("col");
    //   countryDetailsColumn.appendChild(countryName);
    //   countryDetailsColumn.appendChild(countryContainer);
    //   countryDetailsColumn.appendChild(listColumn);
    
    //   const row = document.createElement("div");
    //   row.classList.add("row");
    //   row.appendChild(countryDetailsColumn);
    
    //   const container = document.createElement("div");
    //   container.classList.add("container", "text-center");
    //   container.appendChild(row);
    
    //   countryDetailsContainer.appendChild(container);
    // }
    

    // function displayCountryDetails(country) {
    //   // Clear previous country details
    //   countryDetailsContainer.innerHTML = "";
    
    //   // Create elements for the country details
    //   const flagImg = document.createElement("img");
    //   flagImg.src = country.flag;
    //   flagImg.alt = `Flag of ${country.name}`;
    //   flagImg.id = "flag-img";
    
    //   const header = document.createElement("h5");
    //   header.textContent = "Header";
    //   header.id = "header";
    
    //   const population = document.createElement("span");
    //   population.id = "population";
    //   population.textContent = country.population;
    
    //   const region = document.createElement("span");
    //   region.id = "region";
    //   region.textContent = country.region;
    
    //   const capital = document.createElement("span");
    //   capital.id = "capital";
    //   capital.textContent = country.capital;
    
    //   const countryName = document.createElement("h6");
    //   countryName.id = "countryName";
    //   countryName.textContent = `Name: ${country.name}`;
    
    //   const list1 = document.createElement("ul");
    //   list1.id = "list1";
    //   list1.appendChild(createListItem("Population", country.population));
    //   list1.appendChild(createListItem("Region", country.region));
    //   list1.appendChild(createListItem("Capital", country.capital));
    
    //   const list2 = document.createElement("ul");
    //   list2.id = "list2";
    //   // Add more list items as needed
    
    //   const listColumn = document.createElement("div");
    //   listColumn.id = "list-column";
    //   listColumn.appendChild(list1);
    //   listColumn.appendChild(list2);
    
    //   const countryDetailsColumn = document.createElement("div");
    //   countryDetailsColumn.classList.add("col");
    //   countryDetailsColumn.appendChild(countryName);
    //   countryDetailsColumn.appendChild(flagImg);
    //   countryDetailsColumn.appendChild(header);
    //   countryDetailsColumn.appendChild(listColumn);
    
    //   const row = document.createElement("div");
    //   row.classList.add("row");
    //   row.appendChild(countryDetailsColumn);
    
    //   const container = document.createElement("div");
    //   container.classList.add("container", "text-center");
    //   container.appendChild(row);
    
    //   countryDetailsContainer.appendChild(container);
    
    //   // Construct the URL with the country code or any unique identifier
    //   const countryDetailsUrl = `country-details.html?code=${country.code}`;
    
    //   // Open a new window or redirect to the country details page
    //   window.open(countryDetailsUrl, '_blank');
    // }



    function displayCountryDetails(country) {
      // Clear previous country details
      countryDetailsContainer.innerHTML = "";
    
      // Create elements for the country details
      const flagImg = document.createElement("img");
      flagImg.src = country.flag;
      flagImg.alt = `Flag of ${country.name}`;
      flagImg.id = "flag-img";
    
      const header = document.createElement("h5");
      header.textContent = "Header";
      header.id = "header";
    
      const population = document.createElement("span");
      population.id = "population";
      population.textContent = country.population;
    
      const region = document.createElement("span");
      region.id = "region";
      region.textContent = country.region;
    
      const capital = document.createElement("span");
      capital.id = "capital";
      capital.textContent = country.capital;
    
      const countryName = document.createElement("h6");
      countryName.id = "countryName";
      countryName.textContent = `Name: ${country.name}`;
    
      const list1 = document.createElement("ul");
      list1.id = "list1";
      list1.appendChild(createListItem("Population", country.population));
      list1.appendChild(createListItem("Region", country.region));
      list1.appendChild(createListItem("Capital", country.capital));
    
      const list2 = document.createElement("ul");
      list2.id = "list2";
      // Add more list items as needed
    
      const listColumn = document.createElement("div");
      listColumn.id = "list-column";
      listColumn.appendChild(list1);
      listColumn.appendChild(list2);
    
      const countryDetailsColumn = document.createElement("div");
      countryDetailsColumn.classList.add("col");
      countryDetailsColumn.appendChild(countryName);
      countryDetailsColumn.appendChild(flagImg);
      countryDetailsColumn.appendChild(header);
      countryDetailsColumn.appendChild(listColumn);
    
      const row = document.createElement("div");
      row.classList.add("row");
      row.appendChild(countryDetailsColumn);
    
      const container = document.createElement("div");
      container.classList.add("container", "text-center");
      container.appendChild(row);
    
      countryDetailsContainer.appendChild(container);
    
     // Construct the URL with the country code or any unique identifier
  const countryDetailsUrl = `country-details.html?code=${country.code}`;

  // Open a new window or tab with the country details page
  window.open(countryDetailsUrl, '_blank');
    }
    
    


    searchInput.addEventListener("input", () => {
      const searchTerm = searchInput.value;
      const selectedRegion = regionFilter.value;
      filterData(searchTerm, selectedRegion);
    });

    regionFilter.addEventListener("change", () => {
      const searchTerm = searchInput.value;
      const selectedRegion = regionFilter.value;
      filterData(searchTerm, selectedRegion);
    });

    displayData(data);
  })
  .catch(error => console.error("Error:", error));
