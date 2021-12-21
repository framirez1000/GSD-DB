var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { id: "630", component_code: "HEL-RF-X", module:"M16", component_description: "None", location:"C-Band Accelerating Structure C5", subsystem:"N/A", reference_code:"RF", serial_number:"N/A", manufacturer:"COMEB", related_docss: "N/A" },



  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
}); 
