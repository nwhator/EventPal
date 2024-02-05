function toggleMenu() {
    const toggleMenu = document.querySelector(".toggle-menu");
    const navigation = document.querySelector(".navigation");
    const searchBtn = document.querySelector(".search-btn");
    toggleMenu.classList.toggle("active");
    navigation.classList.toggle("active");

    // Check if the navigation is active
    if (navigation.classList.contains("active")) {
        searchBtn.style.display = "none"; // Hide the search button
    } else {
        searchBtn.style.display = "block"; // Show the search button
    }
}

document.getElementById("searchButton").addEventListener("click", function() {
    // Get the search input value
    var searchTerm = document.getElementById("searchInput").value.toLowerCase().trim();

    // Define the URL for different service pages
    var servicePages = {
        "hairstylist": "../services/hairstylist-page.html", // Replace with the actual URL of the hairstylist page
        "lawn mower": "lawn-mower-page.html", // Replace with the actual URL of the lawn mower page
        "painter": "painter-mower-page.html"
    };

    // Check if the searched term matches any service page
    if (servicePages.hasOwnProperty(searchTerm)) {
        // Redirect the user to the corresponding service page
        window.location.href = servicePages[searchTerm];
    } else {
        // Handle the case when the searched term doesn't match any service page
        alert("Sorry, no results found for '" + searchTerm + "'. Please try a different search term.");
    }
    // Clear the search input field after search
    document.getElementById("searchInput").value = "";
});
