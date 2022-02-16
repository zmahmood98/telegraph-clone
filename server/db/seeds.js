const db = connect("mongodb://localhost:27017/shelter")

db.posts.drop()

db.posts.insertMany([
    { title: "Noob", name: 'Zxhrxm' , date: 16/02/2022 , entry: "antimatter" }


])




