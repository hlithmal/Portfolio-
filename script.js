// ✅ Cursor click animation
document.addEventListener("click", (e) => {
  const particle = document.createElement("span");
  particle.classList.add("click-particle");
  particle.style.left = e.pageX + "px";
  particle.style.top = e.pageY + "px";
  document.body.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 600);
});

// ✅ Sound effect on thumbs-up button
const likeButton = document.getElementById("like-btn");
const clickSound = document.getElementById("clickSound");

if (likeButton && clickSound) {
  likeButton.addEventListener("click", (event) => {
    event.stopPropagation(); // stop global click animation from triggering twice
    clickSound.currentTime = 0;
    clickSound.play();

    // Add small pop animation
    likeButton.style.transform = "scale(1.3)";
    setTimeout(() => {
      likeButton.style.transform = "scale(1)";
    }, 150);
  });
}

// Contact page

const contactForm = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Show success message
    successMsg.style.display = "block";

    // Clear form after submission
    contactForm.reset();

    setTimeout(() => {
      successMsg.style.display = "none";
    }, 3000);
  });
}

// --- Portfolio Filtering Logic ---

document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    // Add event listeners to all filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. Get the filter category
            const filterValue = button.getAttribute('data-filter');

            // 2. Update active button state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // 3. Loop through all portfolio items and show/hide them
            portfolioItems.forEach(item => {
                const itemClasses = item.classList;
                
                // Hide item initially
                item.classList.add('hidden'); 

                // Use a short delay before displaying to allow CSS transition
                setTimeout(() => {
                    if (filterValue === 'all' || itemClasses.contains(filterValue)) {
                        item.classList.remove('hidden');
                    }
                }, 400); // Must be slightly longer than the CSS transition time (0.4s)
            });
        });
    });
});