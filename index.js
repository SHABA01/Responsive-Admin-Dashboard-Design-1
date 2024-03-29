// Selecting the side menu element
const sideMenu = document.querySelector('aside');

// Selecting the menu button element
const menuBtn = document.getElementById('menu-btn');

// Selecting the close button element
const closeBtn = document.getElementById('close-btn');

// Selecting the dark mode toggle element
const darkMode = document.querySelector('.dark-mode');

// Adding event listener to the menu button to display the side menu when clicked
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

// Adding event listener to the close button to hide the side menu when clicked
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

// Adding event listener to the dark mode button to toggle dark mode
darkMode.addEventListener('click', () => {
    // Toggling the 'dark-mode-variables' class on the body to switch to dark mode
    document.body.classList.toggle('dark-mode-variables');
    
    // Toggling the 'active' class on the first and second spans inside the dark mode button
    // This is to change the appearance of the dark mode button when active
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
});

// Iterating over each order to dynamically create table rows and populate order data
Orders.forEach(order => {
    // Creating a new table row element
    const tr = document.createElement('tr');
    
    // Generating HTML content for the table row using template literals
    const trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <!-- Adding a class based on the order status to apply appropriate styling -->
        <td class="${order.status === 'Declined' ? 'danger' : order.status === 'Pending' ? 'warning' : 'primary'}">${order.status}</td>
        <!-- Adding a class to the 'Details' column for consistent styling -->
        <td class="primary">Details</td>
    `;
    
    // Setting the innerHTML of the table row to the generated content
    tr.innerHTML = trContent;
    
    // Appending the table row to the tbody of the table
    document.querySelector('table tbody').appendChild(tr);
});