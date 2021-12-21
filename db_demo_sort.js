var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var proj = {projection: {_id:0, id:1, location:1}};
  var query = {};
  var mysort = { id: -1 };
  dbo.collection("customers").find(query, proj).sort(mysort).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
}); 
