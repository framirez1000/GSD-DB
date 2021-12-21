var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("gbs_equip_db");
  var myobj = {first_name: "Frangil",
    last_name: "Ramirez",
    username: "framirez",
    email: "frangil.ramirez@eli-np.ro",
    password: "$2a$08$9Fe8F92aRTNCEa69Tw7MxuD8qBjvaOwAovtVJ7Q3FaF8OEfVMfghq",
    roles: ["606bfc800394780c09e22dcc", "606bfc800394780c09e22dce"]
  }
  
  /*var myobj = {first_name: "Piotr",
    last_name: "Tracz",
    username: "ptracz",
    email: "piotr.tracz@eli-np.ro",
    password: "$2a$08$j2bn7ixLpiQEDjc34OXqqOlRUIw2LPdjdBrsNyKTmULUP7Atc/8Ae",
    roles: ["602b8eeb57373021a2a5f021"]
  }*/
  /*var myobj = {first_name: "Catalin",
    last_name: "Matei",
    username: "cmatei",
    email: "catalin.matei@eli-np.ro",
    password: "$2a$08$EOlYI/sZx7kSW2mi8kOmlemLz.H1/OyrpWQVgV4FKl7TANDi5YZvC",
    roles: ["602b8eeb57373021a2a5f021"]
  }*/
  dbo.collection("users").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
}); 
