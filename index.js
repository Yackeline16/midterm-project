// recent Project 
const API_URL = 'https://jsonplaceholder.typicode.com';

fetch(`${API_URL}/posts`)
    .then((response) => response.json())
    .then((posts) => {

        let firstItems = posts.slice(0, 3);

        let postsContainer = document.getElementById("posts");

        firstItems.forEach((post, i) => {
            // let elem = document.createElement('h4');
            // elem.appendChild(
            //     document.createTextNode(`${post.title}&`));

            // let secondElem= document.createElement('p')
            // secondElem.appendChild(
            //     document.createTextNode(`${post.body}`));

            // tpl.appendChild(elem);
            // tpl.appendChild(secondElem);

            postsContainer.innerHTML += `<div class="post">
                    <div> <img src="./imagenes/projects-section/${post.id}.jpg" alt=""></div>
                    <div class="postContent">
                        <h4>${post.title}</h4>
                        <p>${post.body}</p>
                        <a href="./project.html?id=${post.id}" class="post-btn">Learn more</a>
                    </div>
                </div>`;

        });


    });




// Validar subscribe Form

  document.addEventListener("DOMContentLoaded", function () {
      document.getElementById("formSubscribe").addEventListener('submit', validarFormulario);
  });
  function validarFormulario(evento) {
      evento.preventDefault();
      let email = document.getElementById('email').value;
      if (email.length === 0) {
          alert('email field is empty');
          return;
      }
      alert("Subscribed!!!");
  }

let emailData = { email: "ejemplo@.com" };
fetch(`${API_URL}/posts`, {
    method: POST,
    body: JSON.stringify(emailData)
})
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));