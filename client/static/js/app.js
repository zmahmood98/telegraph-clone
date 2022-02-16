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
    postList.classList = 'postList'
    
    const postDiv = document.createElement('div');
    postDiv.classList = 'postDiv'

    const titleDiv = document.createElement('a');
    titleDiv.classList = 'titleDiv'
    titleDiv.href = "#"

    const nameDiv = document.createElement('div');
    nameDiv.classList = 'nameDiv'

    const dateDiv = document.createElement('div');
    dateDiv.classList = 'dateDiv'

    const entryDiv = document.createElement('div');
    entryDiv.classList = 'entryDiv'

    
    titleDiv.textContent = postData.title
    nameDiv.textContent = postData.name
    dateDiv.textContent = postData.date
    entryDiv.textContent = postData.entry
    postDiv.append(titleDiv);
    postDiv.append(nameDiv);
    postDiv.append(dateDiv);
    postDiv.append(entryDiv);

    postList.append(postDiv)


};
