const pairs = {
    "(" : ")",
    "[" : "]",
    "{" : "}"
  };
  
  var isValid = function(s) {
  
    stack = [];
    if ((s.length % 2) === 1) return false;
  
    if (s[0] === "}" || s[0] === ")" || s[0] === "]") return false;
  
    if (s[s.length - 1] === "{" || s[s.length - 1] === "(" || s[s.length - 1] === "[") return false;
  
    for (var c in s) {
      if(s[c] === "(" || s[c] === "[" || s[c] === "{") {
        stack.push(s[c]);
      } else if (pairs[stack.pop()] !== s[c]) {
        return false;
      } 
    }
    return stack.length === 0;
  };