var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("gbs_equip_db");
  var myobj = [ 
       { component_description: "RF Electron Source (=Electron Source Cavity; Body of the Source)", 
         module:"ES (=Electron Source)",
         location:"EP-10", 
         subsystem:"ACC (ACelerating Cavity)", 
         serial_number:"006", 
         manufacturer:"LTI",
         lti_code: "GA000001 (??), AD000217",  
         eli_component_code:"2-0001-0001",  
         related_docss: ["doc1", "doc2", ...] 
       },
      ];
  dbo.collection("customers").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of docs inserted: " + res.insertedCount);
    db.close();
    console.log(res.insertedCount);
    console.log(res);
  });
  console.log("Database populated!");
});
