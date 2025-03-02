use("CrudDb");

// // console.log(db)

// db.createCollection("courses");

// db.courses.insertOne({
//   name: "Mikeys web development journey",
//   price: 0,
//   assignments: 12,
//   projects: 45,
// });

// db.courses.insertMany(
//   [{
//     name: "Mikeys web development journey",
//     price: 0,
//     assignments: 12,
//     projects: 45,
//   },
//   {
//     name: "Mikeys web development journey",
//     price: 0,
//     assignments: 12,
//     projects: 45,
//   },
//   {
//     name: "Mikeys web development journey",
//     price: 0,
//     assignments: 12,
//     projects: 45,
//   },
//   {
//     name: "Mikeys web development journey",
//     price: 0,
//     assignments: 12,
//     projects: 45,
//   },
//   {
//     name: "Mikeys web development journey",
//     price: 0,
//     assignments: 12,
//     projects: 45,
//   }]
// );

// let a =  db.courses.findOne({price:0})
// console.log(a)


// db.courses.updateOne({price:0},{$set:{price:100}})

// db.courses.updateMany({price:0},{$set:{price:1000}})

// db.courses.deleteOne({price:100})
db.courses.deleteMany({price:1000})