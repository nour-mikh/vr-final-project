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
  
    // Print the information into the console
    console.log("Timestamp:", timestamp);
    console.log("Latitude:", latitude);
    console.log("Longitude:", longitude);
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });

  
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

  // Print the information into the console
  console.log("Number of People in Space:", numberOfPeople);

  if (numberOfPeople > 0) {
    console.log("People in Space:");
    people.forEach(person => {
      console.log(`- Name: ${person.name}, Craft: ${person.craft}`);
    });
  } else {
    console.log("No people in space right now.");
  }
})
.catch(error => {
  console.error("Error fetching data:", error);
});
