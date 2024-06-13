const apiUrl = 'https://api.restful-api.dev/objects';

// Function to fetch data from the API
function fetchUsers() {
    // Using fetch to make the API call
    fetch(apiUrl)
        .then(response => {
            // Check if the response is successful (status 200-299)
            if(!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Parse the JSON response
            return response.json();
        })
        .then(data => {
            // Process the JSON data
            console.log('Users:', data);
            // You can further process or use the data here
        })
        .catch(error => {
            // Handle any errors during the fetch and processing
            console.error('Error fetching data:',error);
        });
}

//Call the fetchUsers function to initiate the API call
fetchUsers();