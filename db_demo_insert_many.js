var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/gbs_equip_db";

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("gbs_equip_db");
  var myobj = [
    {
      component_description: "RF Electron Source Cavity",
      module: "ES",
      location: "EP-10",
      subsystem: "ACC",
      serial_number: "006",
      manufacturer: "Lyncean Technologies",
      lti_code: "AD000217",
      eli_component_code: "2-0001-0001",
      related_docs: ["esacc1 LTI Test Report", "esacc1 Pre-Declaration of Conformity"]
    },
    {
      component_description: "Solenoid",
      module: "ES",
      location: "EP-10",
      subsystem: "MAG",
      serial_number: "ES-MAG1-temp",
      manufacturer: "??",
      lti_code: "AD000334",
      eli_component_code: "N/A",
      related_docs: ["esmag1 ...", "esmag1 ..."]
    },
    {
      component_description: "Solenoid",
      module: "ES",
      location: "EP-10",
      subsystem: "MAG",
      serial_number: "ES-MAG2-temp",
      manufacturer: "??",
      lti_code: "AD000334",
      eli_component_code: "N/A",
      related_docs: ["esmag2 ...", "esmag2 ..."]
    },
    {
      component_description: "Quadrupol Magnet",
      module: "ES",
      location: "EP-10",
      subsystem: "MAG",
      serial_number: "ES-MAG3-temp",
      manufacturer: "??",
      lti_code: "AD004565",
      eli_component_code: "N/A",
      related_docs: ["esmag3 ...", "esmag3 ..."]
    },
    {
      component_description: "Optical I/O Assembly",
      module: "ES",
      location: "EP-10",
      subsystem: "LS",
      serial_number: "ES-LS1-temp",
      manufacturer: "??",
      lti_code: "AD000433",
      eli_component_code: "N/A",
      related_docs: ["esls1 ...", "esls1 ..."]
    },
    {
      component_description: "Reference Cavity",
      module: "ES",
      location: "EP-10",
      subsystem: "ACC",
      serial_number: "ES-ACC2-temp",
      manufacturer: "??",
      lti_code: "AD000432",
      eli_component_code: "N/A",
      related_docs: ["esacc2 ...", "esacc2 ..."]
    },
    {
      component_description: "Camera Assembly",
      module: "ES",
      location: "EP-10",
      subsystem: "LS",
      serial_number: "ES-LS2-temp",
      manufacturer: "??",
      lti_code: "AD001279",
      eli_component_code: "N/A",
      related_docs: ["esls2 ...", "esls2 ..."]
    },
    {
      component_description: "Solenoid",
      module: "ES",
      location: "EP-10",
      subsystem: "MAG",
      serial_number: "ES-MAG4-temp",
      manufacturer: "??",
      lti_code: "AD004497",
      eli_component_code: "N/A",
      related_docs: ["esmag4 ...", "esmag4 ..."]
    },
    {
      component_description: "Accelerating Structure",
      module: "ES",
      location: "EP-10",
      subsystem: "ACC",
      serial_number: "ES-ACC3-temp",
      manufacturer: "??",
      lti_code: "AD000020",
      eli_component_code: "N/A",
      related_docs: ["esacc3 ...", "esacc3 ..."]
    },
    {
      component_description: "Ion Vacuum Pump",
      module: "ES",
      location: "EP-10",
      subsystem: "VAC",
      serial_number: "ES-VAC1-temp",
      manufacturer: "Agilent Technologies",
      lti_code: "VC000195",
      eli_component_code: "2-0001-0002",
      related_docs: ["esvac1 User Manual", "esvac1 Declaration of Conformity"]
    },
    {
      component_description: "Ion Vacuum Pump",
      module: "ES",
      location: "EP-10",
      subsystem: "VAC",
      serial_number: "ES-VAC2-temp",
      manufacturer: "Agilent Technologies",
      lti_code: "VC000195",
      eli_component_code: "2-0001-0003",
      related_docs: ["esvac2 User Manual", "esvac2 Declaration of Conformity"]
    },
    {
      component_description: "Pharos Laser Head",
      module: "ES",
      location: "??",
      subsystem: "LS",
      serial_number: "L191325",
      manufacturer: "Light Conversion Ltd",
      lti_code: "LO000024",
      eli_component_code: "2-0001-0004 ",
      related_docs: ["esls3 Datasheet", "esls3 FAT Report", "esls3 LTI Test Report", "esls3 Installation Report", "esls3 User Manual", "esls3 Declaration of Conformity" ]
    },
    {
      component_description: "Injector Laser Control Rack",
      module: "ES",
      location: "??",
      subsystem: "LS",
      serial_number: "ES-LS4-temp",
      manufacturer: "??",
      lti_code: "OC000208",
      eli_component_code: "2-0001-0005",
      related_docs: ["esls4 ...", "esls4 ..."] 
    },
    {
      component_description: "PS Control Chasis",
      module: "ES",
      location: "??",
      subsystem: "LS",
      serial_number: "ES-LS5-temp",
      manufacturer: "Light Conversion Ltd",
      lti_code: "OC000209",
      eli_component_code: "2-0001-0006 ",
      related_docs: ["esls5 ...", "esls5 ..."]
    },
    {
      component_description: "Injector Laser Chiller",
      module: "ES",
      location: "??",
      subsystem: "LS",
      serial_number: "ES-LS6-temp",
      manufacturer: "Light Conversion Ltd",
      lti_code: "OC000210",
      eli_component_code: "2-0001-0007 ",
      related_docs: ["esls6 ...", "esls6 ..."]
    },
    {
      component_description: "Laser UV Output Assy",
      module: "ES",
      location: "EP-10",
      subsystem: "LS",
      serial_number: "ES-LS7-temp",
      manufacturer: "??",
      lti_code: "AD001983",
      eli_component_code: "2-0001-0008 ",
      related_docs: ["esls7 Assembly Description"]
    },
    {
      component_description: "RF Gun Input Optic Assy",
      module: "ES",
      location: "EP-10",
      subsystem: "LS",
      serial_number: "ES-LS8-temp",
      manufacturer: "??",
      lti_code: "AD001297",
      eli_component_code: "2-0001-0009",
      related_docs: ["esls8 Assembly Description"]
    },
    {
      component_description: "Laser Stand",
      module: "ES",
      location: "EP-10",
      subsystem: "LS",
      serial_number: "ES-LS9-temp",
      manufacturer: "Lyncean Technologies",
      lti_code: "PD004912",
      eli_component_code: "2-0001-0010 ",
      related_docs: ["esls9 Laser Stand drw1", "esls9 Laser Stand drw2"]
    },
    {
      component_description: "Modulator K-100",
      module: "ES",
      location: "GP-09",
      subsystem: "RF",
      serial_number: "M1700-2",
      manufacturer: "Scandinova",
      lti_code: "OC000117",
      eli_component_code: "2-0001-0011 ",
      related_docs: ["esrf1 System Specification", "esrf1 FAT Protocol", "esrf1 User Manual", "esrf1 Declaration of Conformity"]
    },
    {
      component_description: "Klystron E3772A",
      module: "ES",
      location: "GP-09",
      subsystem: "RF",
      serial_number: "19K104",
      manufacturer: "Canon",
      lti_code: "OC000118",
      eli_component_code: "2-0001-0012 ",
      related_docs: ["esrf2 Technical Specification", "esrf2 Inspection Sheet", "esrf2 Operating Instructions", "esrf2 Installation Procedure", "esrf2 Operating Procedure"]
    },
    {
      component_description: "Focusing Electromagnet VT-68934",
      module: "ES",
      location: "GP-09",
      subsystem: "RF",
      serial_number: "19E024",
      manufacturer: "Canon",
      lti_code: "OC000119 ",
      eli_component_code: "2-0001-0013 ",
      related_docs: ["esrf3 Technical Specification", "esrf3 Inspection Sheet"]
    },
    {
      component_description: "X-Ray Shielding VT-69133",
      module: "ES",
      location: "GP-09",
      subsystem: "RF",
      serial_number: "19E022",
      manufacturer: "Canon",
      lti_code: "OC000120",
      eli_component_code: "2-0001-0014 ",
      related_docs: ["esrf4 Technical Specification", "esrf4 Inspection Sheet"]
    },
    {
      component_description: "Klystron E3730A ",
      module: "M1",
      location: "GP-09",
      subsystem: "RF",
      serial_number: "20F103",
      manufacturer: "Canon",
      lti_code: "OC000038",
      eli_component_code: "2-015-0001",
      related_docs: ["m1rf1 Technical Specification", "m1rf1 Inspection Sheet", "m1rf1 Operating Instructions", "m1rf1 Operating Procedure", "m1rf1 Pre-Declaration of Conformity"]
    },
    {
      component_description: "Focusing Electromagnet VT-68922",
      module: "M1",
      location: "GP-09",
      subsystem: "RF",
      serial_number: "20F071",
      manufacturer: "Canon",
      lti_code: "OC000113",
      eli_component_code: "2-015-0002",
      related_docs: ["m1rf2 Technical Specification", "m1rf2 Inspection Sheet"]
    },
    {
      component_description: "X-Ray Shielding VT-69064",
      module: "M1",
      location: "GP-09",
      subsystem: "RF",
      serial_number: "20F032",
      manufacturer: "Canon",
      lti_code: "OC000114",
      eli_component_code: "2-015-0003",
      related_docs: ["m1rf3 Technical Specification", "m1rf3 Inspection Sheet"]
    },
    {
      component_description: "Klystron E3730A ",
      module: "M2",
      location: "GP-07",
      subsystem: "RF",
      serial_number: "20J104",
      manufacturer: "Canon",
      lti_code: "OC000038",
      eli_component_code: "2-016-0001",
      related_docs: ["m2rf1 Inspection Sheet", "m2rf1 Pre-Declaration of Conformity"]
    },
    {
      component_description: "Focusing Electromagnet VT-68922",
      module: "M2",
      location: "GP-07",
      subsystem: "RF",
      serial_number: "20J073",
      manufacturer: "Canon",
      lti_code: "OC000113",
      eli_component_code: "2-016-0002",
      related_docs: ["m2rf2 Inspection Sheet"]
    },
    {
      component_description: "X-Ray Shielding VT-69064",
      module: "M2",
      location: "GP-07",
      subsystem: "RF",
      serial_number: "20H033",
      manufacturer: "Canon",
      lti_code: "OC000114",
      eli_component_code: "2-016-0003",
      related_docs: ["m2rf3 Inspection Sheet"]
    },
    {
      component_description: "Klystron E3730A ",
      module: "M3",
      location: "GP-07",
      subsystem: "RF",
      serial_number: "20L106",
      manufacturer: "Canon",
      lti_code: "OC000038",
      eli_component_code: "2-017-0001",
      related_docs: ["m3rf1 Inspection Sheet", "m3rf1 Pre-Declaration of Conformity"]
    },
    {
      component_description: "Focusing Electromagnet VT-68922",
      module: "M3",
      location: "GP-07",
      subsystem: "RF",
      serial_number: "20K074",
      manufacturer: "Canon",
      lti_code: "OC000113",
      eli_component_code: "2-017-0002",
      related_docs: ["m3rf2 Inspection Sheet"]
    },
    {
      component_description: "X-Ray Shielding VT-69064",
      module: "M3",
      location: "GP-07",
      subsystem: "RF",
      serial_number: "20K037",
      manufacturer: "Canon",
      lti_code: "OC000114",
      eli_component_code: "2-017-0003",
      related_docs: ["m3rf3 Inspection Sheet"]
    },
    {
      component_description: "Klystron E3730A ",
      module: "M4",
      location: "GP-05",
      subsystem: "RF",
      serial_number: "20M107",
      manufacturer: "Canon",
      lti_code: "OC000038",
      eli_component_code: "2-018-0001",
      related_docs: ["m4rf1 Inspection Sheet", "m4rf1 Pre-Declaration of Conformity"]
    },
    {
      component_description: "Focusing Electromagnet VT-68922",
      module: "M4",
      location: "GP-05",
      subsystem: "RF",
      serial_number: "20H072",
      manufacturer: "Canon",
      lti_code: "OC000113",
      eli_component_code: "2-018-0002",
      related_docs: ["m4rf2 Inspection Sheet"]
    },
    {
      component_description: "X-Ray Shielding VT-69064",
      module: "M4",
      location: "GP-05",
      subsystem: "RF",
      serial_number: "20J035",
      manufacturer: "Canon",
      lti_code: "OC000114",
      eli_component_code: "2-018-0003",
      related_docs: ["m4rf3 Inspection Sheet"]
    }
   ];
  dbo.collection("equipmodels").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of docs inserted: " + res.insertedCount);
    db.close();
    console.log(res.insertedCount);
    console.log(res);
  });
  console.log("Database populated!");
});
