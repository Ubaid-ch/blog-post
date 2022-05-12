let postsArray =[]
const form=document.getElementById("new-post")
function renderPosts(){
    let html =""
    for(let post of postsArray){
        html += `
        <h1>${post.title}</h1>
        <p>${post.body}</P>
        <hr />`
    }
    document.getElementById("blog-post").innerHTML= html
}






fetch("https://jsonplaceholder.typicode.com/posts")
     .then(response => response.json())
     .then(data => {
        postsArray = data.slice(1, 6)
        renderPosts()
     })

form.addEventListener("submit", function(e) {
    e.preventDefault()
    const newTitle = document.getElementById("post-title").value
    const newBody = document.getElementById("post-body").value
    const data = {
        title : newTitle,
        body : newBody
    }
    console.log(data)


const options ={
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json"
    }
}

fetch("https://jsonplaceholder.typicode.com/posts", options)
 .then(res => res.json())
 .then(post => {
   postsArray.unshift(post)
   renderPosts()
   form.reset()
 })

})