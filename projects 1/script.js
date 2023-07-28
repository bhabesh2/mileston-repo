// for toggle menu
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
// this below code is for form 


function toggleForm() {
    const form = document.getElementById('blog-form');
    const btn = document.getElementById('add-blog-btn');

    if (form.style.display === 'none') {
        form.style.display = 'block';
        btn.textContent = 'Close';
    } else {
        form.style.display = 'none';
        btn.textContent = 'Add Blog';
    }
}

function saveBlog() {
    const imageUrl = document.getElementById('image-url').value;
    const blogTitle = document.getElementById('blog-title').value;
    const blogDescription = document.getElementById('blog-description').value;
    const blogText = document.getElementById('blog-text').value;

    const blogData = {
        imageUrl: imageUrl,
        blogTitle: blogTitle,
        blogDescription: blogDescription,
        blogText: blogText
    };

    // Check if localStorage is available
    if (typeof(Storage) !== "undefined") {
        // Retrieve existing blogs from localStorage
        const existingBlogs = localStorage.getItem('blogs');
        const blogs = existingBlogs ? JSON.parse(existingBlogs) : [];

        // Add the new blog to the list
        blogs.push(blogData);

        // Save the updated list of blogs to localStorage
        localStorage.setItem('blogs', JSON.stringify(blogs));
    } else {
        alert('Local storage is not available. The blog cannot be saved.');
    }

    // Reset form fields
    document.getElementById('image-url').value = '';
    document.getElementById('blog-title').value = '';
    document.getElementById('blog-description').value = '';
    document.getElementById('blog-text').value = '';

    // Close the form after saving
    toggleForm();
}
