// PERFORMANCES.js
document.addEventListener("DOMContentLoaded", function() {
          const filterButtons = document.querySelectorAll(".button-group .button");
          const galleryItems = document.querySelectorAll(".gallery .item");
      
          filterButtons.forEach(button => {
              button.addEventListener("click", () => {
                  // Remove active class from all buttons
                  filterButtons.forEach(btn => btn.classList.remove("active"));
                  // Add active class to the clicked button
                  button.classList.add("active");
      
                  const filter = button.getAttribute("data-filter");
      
                  galleryItems.forEach(item => {
                      if (filter === "*" || item.classList.contains(filter.substring(1))) {
                          item.style.display = "block";
                          setTimeout(() => item.style.transform = "scale(1)", 10);
                      } else {
                          item.style.display = "none";
                          item.style.transform = "scale(0)";
                      }
                  });
              });
          });
      });
      