function posts(){ 
    let post = {
        title: document.getElementById('title').value,
        body: document.getElementById('post').value,
    };

    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        }
    })
    .then((resp)=>resp.json())
    .then((data)=>{
        const title = document.createElement('p');
        const textPost = document.createElement('div');
        const post = document.querySelector('.posts');
        title.setAttribute('class','title_style');
        textPost.setAttribute('class','text_style');
        title.innerHTML = data.title;
        textPost.innerHTML = data.body;
        post.appendChild(title);
        title.appendChild(textPost);
        document.getElementById('title').value = '';
        body: document.getElementById('post').value = '';

    })
    .catch((error)=> console.log(error))
 
}

document.querySelector('.btn').addEventListener('click',posts);