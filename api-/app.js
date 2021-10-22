const API_URL = 'http://jsonplaceholder.typicode.com';

const HTMLResponse = document.querySelector("#app");

fetch(`${API_URL}/users`)
 .then(response => response.json())
 .then(users=> {
   const tpl = users.map(user => `<li>${user.name}</li>`)
   HTMLResponse.innerHTML = `<ul>${tpl}</ul>`
})

