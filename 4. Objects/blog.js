let post = {
  title: "a",
  body: "b",
  author: "c",
  views: 10,
  comments: [
    { author: "a", body: "b" },
    { author: "c", body: "d" },
  ],
  isLive: true,
};

console.log(post);
//

function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.cuthor = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

let post1 = new Post("Da Vinci Code", "Book about Zombies", "Dan Brown");
console.log(post1);

//
let priceRanges = [
  { label: "$", tooltip: "Inexpensive", minPerPerson: 0, maxPerPerson: 10 },
  { label: "$$", tooltip: "Moderate", minPerPerson: 10, maxPerPerson: 20 },
  { label: "$$$", tooltip: "Expensive", minPerPerson: 21, maxPerPerson: 50 },
];

let restraunts = [{ averagePerson: 5 }];
