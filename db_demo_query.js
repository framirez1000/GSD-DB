var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var query = { id: "630" };
  dbo.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
}); 
