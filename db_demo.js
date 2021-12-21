var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { 
       { id: "630", component_code: "HEL-RF-X", module:"M16", component_description: "None", location:"C-Band Accelerating Structure C5", subsystem:"N/A", reference_code:"RF", serial_number:"N/A", manufacturer:"COMEB", related_docss: "N/A" },
       { id: "631", component_code: "HEL-RF-X", module:"M17", component_description: "None", location:"C-Band Accelerating Structure C6", subsystem:"N/A", reference_code:"RF", serial_number:"N/A", manufacturer:"COMEB", related_docss: "N/A" }
      };
  dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
  console.log("Database created!");
});
