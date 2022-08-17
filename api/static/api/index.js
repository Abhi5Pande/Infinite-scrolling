console.log("Hello World", "Abhijit");
let counter = 1;
const quantity = 20;

document.addEventListener("DOMContentLoaded",load)
window.onscroll = () => {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight){
        load();
    }
}
function load(){
const start = counter;
const end = start + quantity - 1;
counter = end + 1;
fetch(`/posts?start=${start}&end=${end}`)
.then(response => response.json())
.then(data => {
 data.Posts.forEach(addPost);
console.log(data)
})
}
function addPost(content)
{
    post = document.createElement("div");
    post.classList.add("post")
    post.innerHTML = `Title :${content[0]}<br>Content: ${content[1]}`;
    document.querySelector('#post-view').append(post)
}
