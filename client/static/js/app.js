const form = document.querySelector('.telegraph');
const publishBtn = document.querySelector('#publish')
form.addEventListener('submit', submitPost);


// form.addEventListener('submit', sendPost);
// window.addEventListener('hashchange', updateContent);
// window.addEventListener('load', updateContent);


// async function getPost(id) {
//     try {
//         const response = await fetch(`http://localhost:3000/posts/${id}`);
//         const data = await response.json();
//         return data;
//     } catch (err) {
//         console.warn(err);
//     }
// }

// async function getNewPost(id) {
//     const postData = await getPost(id)
//     return postData
// }

// function updateContent() {
//     const id = window.location.hash.substring(1)
//     id.length > 0 ? renderPost(id) : renderForm()
// }

// async function renderPost(id){
//     const postList = document.getElementById('postList')
//     const postData = await getNewPost(id)
//     postList.innerHTML = `
//     <div class="post-cont">
//     <h2>${postData.title}</h2>
//     <h3 class="post" id="name">${postData.name}</h3><span> ● ${postData.date}</span>
//     <p>${postData.entry}<p>
//     </div>`
// }

// async function sendPost(e){
//     e.preventDefault();
//     try {
//         const options = {
//             method: 'POST',
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
//         }
        
//         const response = await fetch('http://localhost:3000/posts', options);
//         const data = await response.json();
//         window.location.hash = `#${data}`
//     } catch (err) {
//         console.warn(err);
//     }
// }

// function renderForm(){
//     const fields = [
//         { tag: 'input', attributes: {autocomplete : "off", id: "title", required: "true", type: 'text', name: 'title', placeholder: 'Title' } },
//         { tag: 'input', attributes: {autocomplete : "off", id: "name", type: 'text', name: 'pseudonym', placeholder: 'Ninja name...' } },
//         { tag: 'textarea', attributes: { name: 'content', required: "true", placeholder: 'Ninja post...' } },
//         { tag: 'input', attributes: { type: 'submit', value: 'submit' } }
//     ]
//     const postList = document.getElementById('postList')
//     // const form = document.createElement('form');
//     //     fields.forEach(f => {
//     //         const field = document.createElement(f.tag);
//     //         field.textContent = f.text;
//     //         Object.entries(f.attributes).forEach(([a, v]) => field.setAttribute(a, v))
//     //         form.appendChild(field);
//     //     })
//         form.onsubmit = sendPost;
//         postList.appendChild(form);
//     }





getAllPosts();

function getAllPosts(){
    fetch('http://localhost:3000/posts')
        .then(r => r.json())
        .then(appendPosts)
        .catch(console.warn)
};

async function getPost(id) {
    try {
        const response = await fetch(`http://localhost:3000/posts/${id}`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.warn(err);
    }
}

// create
function submitPost(e) {
    e.preventDefault();
    
    let postData = {
        title: e.target.titleTextArea.value,
        name: e.target.yourNameTextArea.value,
        //date: "17/02/2022",
        entry: e.target.yourStoryTextArea.value
    };

    try {

        const options = { 
            method: 'POST',
            body: JSON.stringify(postData),
            headers: { "Content-Type": "application/json" }
        };

        fetch('http://localhost:3000/posts', options)
        .then(r => r.json())
        .then(appendPost)
        .then(() => e.target.reset())
        .catch(console.warn)

    } catch(err) {
        console.warn(err)
    }
        
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

    //const dateDiv = document.createElement('div');
    //dateDiv.classList = 'dateDiv'

    const entryDiv = document.createElement('div');
    entryDiv.classList = 'entryDiv'

    
    titleDiv.textContent = postData.title
    nameDiv.textContent = postData.name
    //dateDiv.textContent = postData.date
    entryDiv.textContent = postData.entry
    postDiv.append(titleDiv);
    postDiv.append(nameDiv);
    //postDiv.append(dateDiv);
    postDiv.append(entryDiv);

    postList.append(postDiv)
    
};
