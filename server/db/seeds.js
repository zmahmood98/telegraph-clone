const db = connect("mongodb://localhost:27017/shelter")

db.posts.drop()

db.posts.insertMany([
    { title: "Not a Noob", name: 'Zxhrxm' , date: 16/02/2022 , entry: "antimatter" },
    { title: "I Am A Giant Noob", name: 'MegaTinySK' , date: 16/02/2022 , entry: "Zahra is so much better than me at wordle, quordle and nerdle" },
    { title: "Clowns", name: 'MegaTinySK' , date: 16/02/2022 , entry: "Family 'creeped out and scared' after sinister clown painting appears in garden no one knows where the painting came from or who did it (it wasn't me)." }
])




