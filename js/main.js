if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/js/service-worker.js')
        .then(registration => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }).catch(error => {
            console.log('ServiceWorker registration failed: ', error);
        });
}

// Fetch user data from the API and display it
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const userList = document.getElementById('user-list');
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.innerHTML = `
                <h5>${user.name}</h5>
                <p>Email: ${user.email}</p>
                <p>Phone: ${user.phone}</p>
                <p>Website: <a href="http://${user.website}" target="_blank">${user.website}</a></p>
                <p>Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                <p>Company: ${user.company.name}</p>
            `;
            userList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error fetching user data:', error));
    
// Fetch photo data from the API and display it
fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(photos => {
        const photoList = document.getElementById('photo-list');
        photos.forEach(photo => {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.innerHTML = `
                <img src="${photo.thumbnailUrl}" alt="${photo.title}" class="img-thumbnail">
                <h5>${photo.title}</h5>
            `;
            photoList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error fetching photo data:', error));