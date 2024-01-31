//open database
//create database
//Make transaction
let db;
let openRequest = indexedDB.open("myDatabase");
openRequest.addEventListener("success", (e) => {
  console.log("DB Success");
  db = openRequest.result;
});
openRequest.addEventListener("error", (e) => {
  console.log("DB Error");
});
openRequest.addEventListener("upgradeneeded", (e) => {
  console.log("DB upgraded also for initial db creation");
  db = openRequest.result;

  db.createObjectStore("video", { keyPath: "id" });
  db.createObjectStore("image", { keyPath: "id" });
});
