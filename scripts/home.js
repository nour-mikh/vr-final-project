// Make a GET request to the API endpoint
fetch("http://api.open-notify.org/iss-now.json")
.then(response => {
  // Check if the request was successful (status code 200)
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  // Parse the JSON response
  return response.json();
})
.then(data => {
  // Extract relevant information
  const timestamp = data.timestamp;
  const latitude = data.iss_position.latitude;
  const longitude = data.iss_position.longitude;

  // Create a string with the information
  const infoString = `The ISS is currently at a position such as: <br>Latitude: ${latitude}<br>Longitude: ${longitude}`;

  // Update the content of the "stats" element
  document.getElementById("stats").innerHTML = infoString;
})
.catch(error => {
  console.error("Error fetching data:", error);
});

  
console.log("people")
  // Make a GET request to the API endpoint
  fetch("http://api.open-notify.org/astros.json")
  .then(response => {
    // Check if the request was successful (status code 200)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON response
    return response.json();
  })
  .then(data => {
    // Extract relevant information
    const numberOfPeople = data.number;
    const people = data.people;

    // Create a string with the information
    let peopleInfo = `Number of People in Space: ${numberOfPeople}<br>`;

    if (numberOfPeople > 0) {
      peopleInfo += "People in Space:<br>";
      people.forEach(person => {
        peopleInfo += `- ${person.name}, in the ${person.craft}<br>`;
      });
    } else {
      peopleInfo += "No people in space right now.";
    }

    // Update the content of the "people" element
    document.getElementById("people").innerHTML = peopleInfo;
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });