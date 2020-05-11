(function(window, undefined) {
  var dictionary = {
    "ee5e7a6a-75b6-4585-b923-fabc84b0f6b5": "Sign up",
    "797b1b7d-b07d-4940-9571-ebff9a3681fb": "Show7",
    "817fafc1-ee54-482a-9177-1e926bd9ab68": "Show6",
    "cdae96b0-bb27-4d95-9844-2116bf2bdf05": "Profile",
    "6668d59e-c8f2-4b42-b1e5-bcf6181587de": "Show5",
    "ab7ce2ac-b269-4fb6-a68f-bec6a14d1b63": "Show4",
    "ed7e415f-ede8-4a3a-aedc-017c7c1b1cdf": "Show3",
    "47fd8486-84b6-4e72-a339-61d08aa410c8": "calendar",
    "8da8ac58-447d-4134-a662-34cfec799d1d": "Show2",
    "e882e870-6e0a-427e-9496-0c6eb77993ea": "Show1",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "First Page",
    "8e08114b-7203-4dfc-9a6f-cbb07dce80df": "List of Shows",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Shiw1",
    "1c8bde89-b9b5-483f-b49d-b244a19c63bc": "Show5",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);