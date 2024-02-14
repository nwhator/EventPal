function toggleMenu() {
    const toggleMenu = document.querySelector(".toggleMenu");
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