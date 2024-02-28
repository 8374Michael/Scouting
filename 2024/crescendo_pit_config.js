var config_data = `
{
  "dataFormat": "tsv",
  "title": "Bongo Scout-Matic 2000",
  "page_title": "Crescendo",
  "pitConfig": "true",
  "prematch": [
    { "name": "Team Number",
      "code": "t",
      "type": "number"
    },
    { "name": "Width",
      "code": "wid",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Weight",
      "code": "wei",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Drivetrain",
      "code": "drv",
      "type": "radio",
      "choices": {
        "s": "Swerve<br>",
        "w": "West Coast/Tank<br>",
        "b": "Butterfly/Grashopper<br>",
        "m": "Mechanum<br>",
        "o": "Other"
      },
      "defaultValue": "o"
    },
    { "name": "Other Drivetrain",
      "code": "odt",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Swerve Ratio",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "L1 (8.14:1)<br>",
        "2": "L2 (6.75:1)<br>",
        "3": "L3 (6.12:1)<br>",
        "4": "L4 (5.14:1)<br>",
        "o": "Other ratio (put in comments)<br>",
        "x": "Not Swerve"
      },
      "defaultValue":"x"
    },
    { "name": "Drivetrain Motor",
      "code": "mot",
      "type": "radio",
      "choices": {
        "n": "Neo<br>",
        "f": "Falcon<br>",
        "c": "CIM<br>",
        "x": "Other<br>"
      },
      "defaultValue":"x"
    },
    { "name": "# of Batteries",
      "code": "nob",
      "type": "number"
    },
    { "name": "Floor pickup Notes",
      "code": "fpu",
      "type": "bool"
    },
    { "name": "Autos",
      "code": "aut",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "Scouting Method /<br>Program (ScoutingPASS?)",
      "code": "sct",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    {
            "name": "Can thier robot score on the Amp?",
            "code": "ampScore",
            "type": "bool"
        },
        {
            "name": "Can thier robot score on the Speaker?",
            "code": "speakScore",
            "type": "bool"
        },
        {
            "name": "Can thier robot hang?",
            "code": "hang",
            "type": "bool"
        },
        {
            "name": "Hanger Type",
            "code": "hangtyp",
            "type": "text"
        },
        {
            "name": "Can thier robot score Trap?",
            "code": "trapScore",
            "type": "bool"
        },
        {
            "name": "Can thier robot go under the Stage?",
            "code": "undStage",
            "type": "bool"
        },
        {
            "name": "How experienced is thier human player?",
            "code": "humanSkill",
            "type": "radio",
            "choices": {
                "1": "1<br>",
                "2": "2<br>",
                "3": "3<br>",
                "4": "4<br>",
                "5": "5<br>"
            },
            "defaultValue": "3"
        },
        {
            "name": "How often can thier human player score the High Note?",
            "code": "humanHigh",
            "type": "text",
            "size": 20
        },
        {
            "name": "Do they have a communication system with thier human player?",
            "code": "comms",
            "type": "checkbox"
        }
  ],
  "auton": [
  ],
  "teleop": [
  ],
  "endgame": [
  ],
  "postmatch": [
  ]
}`;
