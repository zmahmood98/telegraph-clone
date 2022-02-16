



const form = document.querySelector('.telegraph');
form.addEventListener('submit', submitPost);


getAllPosts();

function getAllPosts(){
    fetch('http://localhost:3000/posts')
        .then(r => r.json())
        .then(appendPosts)
        .catch(console.warn)
};

// create
function submitPost(e) {
    e.preventDefault();

    const postData = {
        title: e.target.title.value,
        name: e.target.name.value,
        date: e.target.name.value,
        entry: e.target.name.value
    };

    const options = { 
        method: 'POST',
        body: JSON.stringify(postData),
        headers: { "Content-Type": "application/json" }
    };

    fetch('http://localhost:3000/', options)
        .then(r => r.json())
        .then(appendPost)
        .then(() => e.target.reset())
        .catch(console.warn)
};

// helpers
function appendPosts(data) {
    data.posts.forEach(appendPost);
};

function appendPost(postData) {
    const postList = document.getElementById('postList')
    
    const titleDiv = document.createElement('titleDiv');
    const nameDiv = document.createElement('nameDiv');
    const dateDiv = document.createElement('dateDiv');
    const entryDiv = document.createElement('entryDiv');

    
    titleDiv.textContent = postData.title
    nameDiv.textContent = postData.name
    dateDiv.textContent = postData.date
    entryDiv.textContent = postData.entry
    postList.append(titleDiv);
    postList.append(nameDiv);
    postList.append(dateDiv);
    postList.append(entryDiv);
};
