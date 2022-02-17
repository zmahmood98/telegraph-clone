const { sendPost, getPost } = require('./api.js')
const { encode } = require('html-entities');

window.addEventListener('hashchange', updateContent);
window.addEventListener('load', updateContent);


function updateContent() {
    const postArea = document.getElementById('postArea')
    postArea.innerHTML = ''
    const id = window.location.hash.substring(1)
    id.length > 0 ? renderPost(id) : renderForm()
}

async function renderPost(id){
    const postArea = document.getElementById('postArea')
    const postData = await getNewPost(id)
    postArea.innerHTML = `
    <div class="post-cont">
    <h2>${encode(postData.title)}</h2>
    <h3 class="post" id="entry">${encode(postData.entry)}<h3>
    <p id="name">${encode(postData.username)}</p>
    <span id="date">  ${prettyDate(postData.date)}</span>
    </div>`
}

function prettyDate(date) {
    const jsDate = new Date(Date.parse(date))
    const day = jsDate.getDate()	
    const month = jsDate.getMonth() + 1
    const year = jsDate.getFullYear()
    return `${day}-${month}-${year}`
}

async function getNewPost(id){
    const postData = await getPost(id)
    return postData
}

function renderForm(){
    const fields = [
        { tag: 'input', attributes: {autocomplete : "off", id: "title", required: "true", type: 'text', name: 'title', placeholder: 'Title' } },
        { tag: 'input', attributes: {autocomplete : "off", id: "name", type: 'text', name: 'username', placeholder: 'Username' } },
        { tag: 'textarea', attributes: { name: 'entry', required: "true", placeholder: 'Entry' } },
        { tag: 'input', attributes: { type: 'submit', value: 'submit' } }
    ]
    const postArea = document.getElementById('postArea')
    const form = document.createElement('form');
        fields.forEach(f => {
            const field = document.createElement(f.tag);
            field.textContent = f.text;
            Object.entries(f.attributes).forEach(([a, v]) => field.setAttribute(a, v))
            form.appendChild(field);
        })
        form.onsubmit = sendPost;
        postArea.appendChild(form);
    }

module.exports = {
    renderPost, renderForm, updateContent
}
    
