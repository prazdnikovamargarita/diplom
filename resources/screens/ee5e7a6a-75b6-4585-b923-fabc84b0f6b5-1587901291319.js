jQuery("#simulation")
  .on("click", ".s-ee5e7a6a-75b6-4585-b923-fabc84b0f6b5 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-sign_up")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "New_Users",
                    "fields": {
                      "user_name": {
                        "datatype": "property",
                        "target": "#s-your_name",
                        "property": "jimGetValue"
                      },
                      "user_password": {
                        "datatype": "property",
                        "target": "#s-password",
                        "property": "jimGetValue"
                      },
                      "user_email": {
                        "datatype": "property",
                        "target": "#s-Email",
                        "property": "jimGetValue"
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8e08114b-7203-4dfc-9a6f-cbb07dce80df"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("change", ".s-ee5e7a6a-75b6-4585-b923-fabc84b0f6b5 .change", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-your_name")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "New_Users",
                    "fields": {
                      "user_name": {
                        "datatype": "property",
                        "target": "#s-your_name",
                        "property": "jimGetValue"
                      },
                      "user_password": null,
                      "user_email": null
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Email")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "New_Users",
                    "fields": {
                      "user_name": {
                        "datatype": "property",
                        "target": "#s-your_name",
                        "property": "jimGetValue"
                      },
                      "user_password": {
                        "datatype": "property",
                        "target": "#s-password",
                        "property": "jimGetValue"
                      },
                      "user_email": {
                        "datatype": "property",
                        "target": "#s-Email",
                        "property": "jimGetValue"
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-password")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "New_Users",
                    "fields": {
                      "user_name": {
                        "datatype": "property",
                        "target": "#s-your_name",
                        "property": "jimGetValue"
                      },
                      "user_password": {
                        "datatype": "property",
                        "target": "#s-password",
                        "property": "jimGetValue"
                      },
                      "user_email": null
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });