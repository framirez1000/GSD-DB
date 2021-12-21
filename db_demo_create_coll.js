var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("gbs_equip_db");
  dbo.createCollection("EquipModel", function(err, res) {
    if (err) throw err;
    console.log("Collection EquipModel created!");
    db.close();
  });
}); 
