// complete the function
          function palindrom(str) {
            let reg = /[\W_]/g;  // Regular expression to check for non alphanumeric characters in "str"
                // This line converts "str" to lowercase and replaces it 
            let string = str.toLowerCase().replace (reg, "");

            let reversed = string.split("").reverse().join(""); 
                   // This line splits, reverses and join  "str" 
            if (reversed == string) {     // Checks if "str" is thesame when read backwards
                return true;
            } else {
                return false;
            }
          }
  

function solution(arg) {
  return palindrom(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };
