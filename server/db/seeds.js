const db = connect("mongodb://localhost:27017/rumblDB");

db.posts.drop();

db.posts.insertMany([
    { 
        title: "I Am A Giant Noob", 
        username: "MegaTinySK" , 
        entry: "Zahra is so much better than me at wordle, quordle and nerdle",
        date: new Date(), 
    },
    { 
        title: "Clowns", 
        username: "MegaTinySK", 
        entry: "Family 'creeped out and scared' after sinister clown painting appears in garden, no one knows where the painting came from or who did it (it wasn't me btw)",
        date: new Date(), 
    },
    { 
        title: "Pokemon GO", 
        username: "Steve", 
        entry: "I was fired from my job as a polic officer for ignoring a robbery in progress to play Pokemon Go but GG",
        date: new Date(),  
    },
    { 
        title: "Ernest", 
        username: "sukhrajsinghb" , 
        entry: "I found a mole hunting for bargains in Poundstretcher and named him Ernest",
        date: new Date(),  
    },
    { 
        title: "Cheese and Onion", 
        username: "Steve" , 
        entry: "A pig wandered into my working mens' club and had to be lured out with cheese and onion crisps",
        date: new Date(), 
     },
]);
