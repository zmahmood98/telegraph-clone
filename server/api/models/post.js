const { init } = require ('../dbConfig')
const { ObjectId } = require('mongodb')

class Post {
    constructor(data){
        this.id = data.id
        this.title = data.title
        this.name = data.name
        this.date = data.date
        this.entry = data.entry
    }

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init()
                const postsData = await db.collection('posts').find().toArray()
                const posts = postsData.map(d => new Post({ ...d, id: d._id }))
                resolve(posts);
            } catch (err) {
                console.log(err);
                reject("Error retrieving posts")
            }
        })
    }

    static findById (id) {
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                let dogData = await db.collection('dogs').find({ _id: ObjectId(id) }).toArray()
                let dog = new Dog({...dogData[0], id: dogData[0]._id});
                resolve (dog);
            } catch (err) {
                reject('Dog not found');
            }
        });
    }

    static create(title, name, date, entry) {
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                let postData = await db.collection('posts').insertOne({ title, name, date, entry })
                let newPost = new Post(postData.ops[0]);
                resolve (newPost);
            } catch (err) {
                reject('Error creating post');
            }
        });
    }

}

module.exports = Post;
