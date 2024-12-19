// document.addEventListener("DOMContentLoaded", function() {
//   const products = [
//       {
//           name: 'Gold Chiavari Chairs',
//           description: 'Elegant gold chiavari chairs perfect for any formal event.',
//           price: '$10 per chair',
//           image: 'images/rental_decor/chairs.jpg'
//       },
//       {
//           name: 'Wedding Arch',
//           description: 'A beautiful floral wedding arch for a stunning backdrop.',
//           price: '$150 per day',
//           image: 'images/rental_decor/arch.jpg'
//       }
//       // Add more products as needed
//   ];

//   const productGrid = document.getElementById("productGrid");

//   products.forEach(product => {
//       const productElement = document.createElement("div");
//       productElement.classList.add("product");

//       const productImage = document.createElement("img");
//       productImage.src = product.image;
//       productImage.alt = product.name;
//       productElement.appendChild(productImage);

//       const productName = document.createElement("h3");
//       productName.classList.add("josefin-sans-bold");
//       productName.textContent = product.name;
//       productElement.appendChild(productName);

//       const productDescription = document.createElement("p");
//       productDescription.classList.add("josefin-sans-regular");
//       productDescription.textContent = product.description;
//       productElement.appendChild(productDescription);

//       const productPrice = document.createElement("p");
//       productPrice.classList.add("josefin-sans-italic");
//       productPrice.textContent = product.price;
//       productElement.appendChild(productPrice);

//       productGrid.appendChild(productElement);
//   });
// });


document.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.querySelector(".hamburger");
    const menuWrapper = document.querySelector(".menu-wrapper");
  
    // Toggle classes on click
    hamburgerMenu.addEventListener("click", () => {
      menuWrapper.classList.toggle("open");
      hamburgerMenu.classList.toggle("open");
    });
  });
  