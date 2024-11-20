document.addEventListener("DOMContentLoaded", () => {
  // Get category from URL
  const categoryTitle = document.title.split(" ")[0];
  
  // Fetch data from JSON file
  fetch("../rental_decor.json")
    .then(response => response.json())
    .then(data => displayCategory(data, categoryTitle))
    .catch(error => console.error("Error loading JSON:", error));

  
  // Fade-in effect on scroll
  const fadeElements = document.querySelectorAll(".fade-in");
  
  const handleScroll = () => {
    fadeElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight && !el.classList.contains("visible")) {
        el.classList.add("visible");
      }
    });
  };

  // Trigger on scroll and initial load
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Check immediately on page load
});

function populateDropdown(categories) {
  const dropdownContent = document.querySelector(".dropdown-content");
  
  categories.forEach(category => {
    const categoryLink = document.createElement("a");
    categoryLink.textContent = category.name;
    categoryLink.href = "#";
    categoryLink.onclick = () => displayItems(category);
    dropdownContent.appendChild(categoryLink);

    if (category.subcategories) {
      category.subcategories.forEach(subcategory => {
        const subcategoryLink = document.createElement("a");
        subcategoryLink.textContent = "→ " + subcategory.name;
        subcategoryLink.style.paddingLeft = "20px";
        subcategoryLink.href = "#";
        subcategoryLink.onclick = () => displayItems(subcategory);
        dropdownContent.appendChild(subcategoryLink);
      });
    }
  });
}

function displayItems(category) {
  const gallerySection = document.querySelector("#gallery-preview .gallery");
  gallerySection.innerHTML = ""; 

  const heading = document.createElement("h3");
  heading.classList.add("fade-in");
  heading.textContent = category.name;
  gallerySection.appendChild(heading);

  const items = category.items || category.subcategories || [];
  items.forEach(item => {
    const itemContainer = document.createElement("div");
    itemContainer.className = "item fade-in"; // Add fade-in class to each item

    const itemName = document.createElement("p");
    itemName.textContent = item.name;
    itemContainer.appendChild(itemName);

    const itemDescription = document.createElement("p");
    itemDescription.textContent = item.description || "";
    itemContainer.appendChild(itemDescription);

    gallerySection.appendChild(itemContainer);
  });
  
  // Re-initialize fade-in elements after populating
  const fadeElements = document.querySelectorAll(".fade-in");
  handleScroll(); // Check immediately for new elements
}


function displayCategory(data, categoryTitle) {
  const categoryContent = document.getElementById("category-content");
  const category = data.categories.find(cat => cat.name === categoryTitle);

  if (!category) return;

  document.getElementById("category-title").textContent = category.name;

  category.items.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");

    const itemImage = document.createElement("img");
    itemImage.src = item.image;
    itemImage.alt = item.name;

    const itemName = document.createElement("h3");
    itemName.textContent = item.name;

    const itemDesc = document.createElement("p");
    itemDesc.textContent = item.description;

    itemDiv.appendChild(itemImage);
    itemDiv.appendChild(itemName);
    itemDiv.appendChild(itemDesc);

    categoryContent.appendChild(itemDiv);
  });
}