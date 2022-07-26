
const API_URL = 'https://jsonplaceholder.typicode.com';

document.addEventListener('DOMContentLoaded', ()=>{
    var idQueryString = new URLSearchParams(window.location.search).get('id');
   
    loadMainPost(idQueryString);
    loadPosts(3);
});

function loadPosts(numberOfPosts){
    fetch(`${API_URL}/posts`)
    .then((response) => response.json())
    .then((posts) => {

        const postsContainer = document.getElementById("posts");

        let postsToShow = [...Array(numberOfPosts).keys()]
            .map(() => {return Math.floor(Math.random() * posts.length);});


        postsToShow.forEach((postId, i) => {
            postsContainer.innerHTML += `<div class="post">
                    <div> <img src="./imagenes/projects-section/${i + 1}.jpg" alt=""></div>
                    <div class="postContent">
                        <h4>${posts[postId].title}</h4>
                        <p>${posts[postId].body}</p>
                        <a href="?id=${postId}" class="post-btn">Learn more</a>
                    </div>
                </div>`;
        });
    });
}

function loadMainPost(id){
    fetch(`${API_URL}/posts/${id}`)
    .then((response) => response.json())
    .then((post) => {
        document.getElementById('postTitle').innerHTML = post.title;
        document.getElementById('postBody').innerHTML = post.body;
        // document.getElementById('postImage').setAttribute('src', `./imagenes/projects-section/${i + 1}.jpg`);
    });
}
function loadMainPhoto(id){
    fetch(`${API_URL}/photos/${id}`)
    .then((response) => response.json())
    .then ((post) => {
        document.getElementById('postPhoto').innerHTML = post.url;
    }); 

  
}