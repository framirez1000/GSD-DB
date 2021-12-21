function getAllEquipment(){
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017/";
  var result;

  MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("customers").find({}).toArray(function(err, result) {
      if (err) throw err;
      result = result;
      console.log(result);
      db.close();
      
    });
  }); 
  return(result);
}

document.getElementById("data").innerHTML = getAllEquipment(); 
