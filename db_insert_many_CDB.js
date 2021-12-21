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
   serial_number: "??",
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
   serial_number: "??",
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
   serial_number: "",
   manufacturer: "",
   lti_code: "AD004565",
   eli_component_code: "N/A",
   related_docs: ["esmag3 ...", "esmag3 ..."]
 },
 {
   component_description: "Optical I/O Assembly",
   module: "ES",
   location: "EP-10",
   subsystem: "LS",
   serial_number: "??",
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
   serial_number: "??",
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
   serial_number: "??",
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
   serial_number: "??",
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
   serial_number: "??",
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
   serial_number: "??",
   manufacturer: "Agilent Technologies",
   lti_code: "VC000195",
   eli_component_code: "2-0001-0002",
   related_docs: ["esvac1 User Manual", "esvac 1 Declaration of Conformity"]
 },
 {
   component_description: "Ion Vacuum Pump",
   module: "ES",
   location: "EP-10",
   subsystem: "VAC",
   serial_number: "??",
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
   related_docs: ["es ls3 Datasheet", "es ls3 FAT Report", "es ls3 LTI Test Report", "es ls3 Installation Report", "es ls3 User Manual", "es ls3 Declaration of Conformity" ]
 },
 {
   component_description: "Injector Laser Control Rack",
   module: "ES",
   location: "??",
   subsystem: "LS",
   serial_number: "??",
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
   serial_number: "",
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
   serial_number: "Light Conversion Ltd",
   manufacturer: "??",
   lti_code: "OC000210",
   eli_component_code: "2-0001-0007 ",
   related_docs: ["esls6 ...", "esls6 ..."]
 },
 {
   component_description: "Laser UV Output Assy",
   module: "ES",
   location: "EP-10",
   subsystem: "LS",
   serial_number: "??",
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
   serial_number: "??",
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
   serial_number: "N/A",
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
   related_docs: ["esrf2 Specification", "esrf2 Inspection Sheet", "esrf2 Operating Instructions", "Iesrf2 nstallation Procedure", "esrf2 Operating Procedure"]
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
   related_docs: ["esrf3 Specification", "esrf3 Inspection Sheet"]
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
   related_docs: ["esrf4 Specification", "esrf4 Inspection Sheet"]
 },
 {
   component_description: "Klystron E3730A ",
   module: "M1",
   location: "GP-09",
   subsystem: "HLRF",
   serial_number: "20F103",
   manufacturer: "Canon",
   lti_code: "OC000038",
   eli_component_code: "2-015-0001",
   related_docs: ["GD000017-Specification", "TR000008 Canon Klystron E3730A Inspection Sheet SN 20F103", "GD000015 Canon Klystron E3730A Operating Instructions", "GD000016 Canon Klystron E3730A Operating Procedure at Customer Site", "GD000020 Canon Klystron Set E3730A CE Pre-Declaration of Conformity"]
 },
 {
   component_description: "Focusing Electromagnet VT-68922",
   module: "M1",
   location: "GP-09",
   subsystem: "HLRF",
   serial_number: "20F071",
   manufacturer: "Canon",
   lti_code: "OC000113",
   eli_component_code: "2-015-0002",
   related_docs: ["GD000017-Specification", "TR000009 Canon Electromagnet VT-68922 Inspection Sheet SN 20F071"]
 },
 {
   component_description: "X-Ray Shielding VT-69064",
   module: "M1",
   location: "GP-09",
   subsystem: "HLRF",
   serial_number: "20F032",
   manufacturer: "Canon",
   lti_code: "OC000114",
   eli_component_code: "2-015-0003",
   related_docs: ["GD000017-Specification", "TR000010 Canon X-Ray Shield VT-69064 Inspection Sheet SN 20F032"]
 },
 {
   component_description: "Klystron E3730A ",
   module: "M2",
   location: "GP-07",
   subsystem: "HLRF",
   serial_number: "20J104",
   manufacturer: "Canon",
   lti_code: "OC000038",
   eli_component_code: "2-016-0001",
   related_docs: ["TR000011 Canon Klystron E3730A Inspection Sheet SN 20J104", "GD000020 Canon Klystron Set E3730A CE Pre-Declaration of Conformity signed"]
 },
 {
   component_description: "Focusing Electromagnet VT-68922",
   module: "M2",
   location: "GP-07",
   subsystem: "HLRF",
   serial_number: "20J073",
   manufacturer: "Canon",
   lti_code: "OC000113",
   eli_component_code: "2-016-0002",
   related_docs: ["TR000012 Canon Electromagnet VT-68922 Inspection Sheet SN 20J073"]
 },
 {
   component_description: "X-Ray Shielding VT-69064",
   module: "M2",
   location: "GP-07",
   subsystem: "HLRF",
   serial_number: "20H033",
   manufacturer: "Canon",
   lti_code: "OC000114",
   eli_component_code: "2-016-0003",
   related_docs: ["TR000013 Canon X-Ray Shield VT-69064 Inspection Sheet SN 20H033"]
 },
 {
   component_description: "Klystron E3730A ",
   module: "M3",
   location: "GP-07",
   subsystem: "HLRF",
   serial_number: "20L106",
   manufacturer: "Canon",
   lti_code: "OC000038",
   eli_component_code: "2-017-0001",
   related_docs: ["TR000033 Canon Klystron E3730A Inspection Sheet SN 20L106", "GD000020 Canon Klystron Set E3730A CE Pre-Declaration of Conformity signed"]
 },
 {
   component_description: "Focusing Electromagnet VT-68922",
   module: "M3",
   location: "GP-07",
   subsystem: "HLRF",
   serial_number: "20K074",
   manufacturer: "Canon",
   lti_code: "OC000113",
   eli_component_code: "2-017-0002",
   related_docs: ["TR000034 Canon Electromagnet VT-68922 Inspection Sheet SN 20K074"]
 },
 {
   component_description: "X-Ray Shielding VT-69064",
   module: "M3",
   location: "GP-07",
   subsystem: "HLRF",
   serial_number: "20K037",
   manufacturer: "Canon",
   lti_code: "OC000114",
   eli_component_code: "2-017-0003",
   related_docs: ["TR000035 Canon X-Ray Shield VT-69064 Inspection Sheet SN 20K037"]
 },
 {
   component_description: "Klystron E3730A ",
   module: "M4",
   location: "GP-05",
   subsystem: "HLRF",
   serial_number: "20M107",
   manufacturer: "Canon",
   lti_code: "OC000038",
   eli_component_code: "2-018-0001",
   related_docs: ["TR000037 Canon Klystron E3730A Inspection Sheet SN 20M107", "GD000020 Canon Klystron Set E3730A CE Pre-Declaration of Conformity signed"]
 },
 {
   component_description: "Focusing Electromagnet VT-68922",
   module: "M4",
   location: "GP-05",
   subsystem: "HLRF",
   serial_number: "20H072",
   manufacturer: "Canon",
   lti_code: "OC000113",
   eli_component_code: "2-018-0002",
   related_docs: ["TR000038 Canon Electromagnet VT-68922 Inspection Sheet SN 20H072"]
 },
 {
   component_description: "X-Ray Shielding VT-69064",
   module: "M4",
   location: "GP-05",
   subsystem: "HLRF",
   serial_number: "20J035",
   manufacturer: "Canon",
   lti_code: "OC000114",
   eli_component_code: "2-018-0003",
   related_docs: ["TR000039 Canon X-Ray Shield VT-69064 Inspection Sheet SN 20J035"]
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
