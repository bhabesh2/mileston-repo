// navbar
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname;
    if (currentPage.endsWith("/blog.html")) {
        const cardContainer = document.getElementById("cardContainer");

        // Retrieve blog data from localStorage
        let blogs = [];
        if (typeof(Storage) !== "undefined") {
            const existingBlogs = localStorage.getItem('blogs');
            blogs = existingBlogs ? JSON.parse(existingBlogs) : [];
        } else {
            alert('Local storage is not available. Failed to retrieve blogs.');
        }

        // Loop through the blogs and create card for each
        blogs.forEach((blog, index) => {
            const card = createCard(blog, index);
            if (cardContainer) {
                cardContainer.appendChild(card);
            }
        });
    }
});

function createCard(blog, index) {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.setAttribute("src", blog.imageUrl);
    img.setAttribute("alt", "Blog Image");
    card.appendChild(img);

    const title = document.createElement("h2");
    title.textContent = blog.blogTitle;
    card.appendChild(title);

    const description = document.createElement("p");
    description.textContent = blog.blogDescription;
    card.appendChild(description);

    const readMoreButton = document.createElement("button");
    readMoreButton.textContent = "Read More";
    readMoreButton.classList.add("read-more-btn");
    readMoreButton.addEventListener("click", function () {
        openModal(blog);
    });
    card.appendChild(readMoreButton);

    // Add delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click", function () {
        deleteBlog(index);
        card.remove();
    });
    card.appendChild(deleteButton);

    return card;
}


function deleteBlog(index) {
    // Retrieve blog data from localStorage
    let blogs = [];
    if (typeof(Storage) !== "undefined") {
        const existingBlogs = localStorage.getItem('blogs');
        blogs = existingBlogs ? JSON.parse(existingBlogs) : [];
    } else {
        alert('Local storage is not available. Failed to retrieve blogs.');
        return;
    }

    // Remove the blog at the specified index
    if (index >= 0 && index < blogs.length) {
        blogs.splice(index, 1);
    } else {
        alert('Invalid blog index.');
        return;
    }

    // Save the updated list of blogs to localStorage
    localStorage.setItem('blogs', JSON.stringify(blogs));
}

function openModal(blog) {
    const modal = document.createElement("div");
    modal.classList.add("modal");

    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");

    const img = document.createElement("img");
    img.setAttribute("src", blog.imageUrl);
    img.setAttribute("alt", "Blog Image");
    modalContent.appendChild(img);

    const title = document.createElement("h2");
    title.textContent = blog.blogTitle;
    modalContent.appendChild(title);

    const description = document.createElement("p");
    description.textContent = blog.blogDescription;
    modalContent.appendChild(description);

    const text = document.createElement("p");
    text.classList.add("text");
    text.textContent = blog.blogText;
    modalContent.appendChild(text);

    const closeModalButton = document.createElement("button");
    closeModalButton.textContent = "Close";
    closeModalButton.classList.add("close-modal-btn");
    closeModalButton.addEventListener("click", function () {
        closeModal();
    });
    modalContent.appendChild(closeModalButton);

    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // Prevent scrolling when the modal is open
    document.body.style.overflow = "hidden";
}

function closeModal() {
    const modal = document.querySelector(".modal");
    if (modal) {
        modal.remove();
        // Enable scrolling when the modal is closed
        document.body.style.overflow = "auto";
    }
}

