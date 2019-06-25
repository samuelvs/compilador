let code = `
if ( x == 2 )
{
x + 4
}`;

const dicionario = [
  {type: "operator", words: ["+", "-", "/", "="]},
  {type: "int", words: ["0-9"]},
  {type: "first-conditional", words: ["if"]},
  {type: "ob", words: ["("]}, //opens brackets
  {type: "cb", words: [")"]}, //close brackets
  {type: "open-key", words: ["{"]}, //opens keys
  {type: "close-key", words: ["}"]}, //close keys
  {type: "variable", words: ["a-z"]},
];

const operators = ["+", "-", "*", "/", "="];

const createTokensLexicon = string => {
  const tokens = string.split(/[\s]/gi);
  return tokens;
}

const typingAndVerifyTokensLexicon2 = tokens => { 
  return tokens.map(token => {
    let obj = { "token": token};
   
    dicionario.forEach(classes => {
      classes.words.forEach( word_pattern => {
        if(token.match(new RegExp("^["+word_pattern+"]+$", "gi"))){
          obj["type"] =  classes.type;
        }
      });
    });
    if(typeof obj["type"] == "undefined"){
      obj["type"] = "error";
    }
    return obj;
  });
}
const typingAndVerifyTokensLexicon = tokens => { 
  return tokens.map(token => {
    let obj = { "token": token};
    
    if(operators.indexOf(token) != -1){
      obj["type"] = "operator";
    }
    if(typeof obj["type"] == "undefined"){
      obj["type"] = "error";
    }
    return obj;
  });
}
const tokens = createTokensLexicon(code);

// const tokens_typed = typingAndVerifyTokensLexicon(tokens);
const tokens_typed2 = typingAndVerifyTokensLexicon2(tokens);
console.log(tokens_typed2);