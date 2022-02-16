const db = connect("mongodb://localhost:27017/shelter")

db.posts.drop()

db.posts.insertMany([
    { title: "Not a Noob", name: 'zxhrxm' , date: 16/02/2022 , entry: "antimatter" },
    { title: "I Am A Giant Noob", name: 'MegaTinySK' , date: 16/02/2022 , entry: "Zahra is so much better than me at wordle, quordle and nerdle" },
    { title: "Clowns", name: 'MegaTinySK' , date: 16/02/2022 , entry: "Family 'creeped out and scared' after sinister clown painting appears in garden, no one knows where the painting came from or who did it (it wasn't me btw)" },
    { title: "Pokemon GO", name: 'Steve' , date: 16/02/2022 , entry: "I was fired from my job as a polic officer for ignoring a robbery in progress to play Pokemon Go but GG" },
    { title: "Ernest", name: 'sukhrajsinghb' , date: 16/02/2022 , entry: "I found a mole hunting for bargains in Poundstretcher and named him Ernest" },
    { title: "Cheese and Onion", name: 'Steve' , date: 16/02/2022 , entry: "A pig wandered into my working mens’ club and had to be lured out with cheese and onion crisps" }
])
