function require ()
{ 
var rl = require ('readline');
var prompts = rl.createInterface(process.stdin, process.stdout);
prompts.question("Quelle est la taille de la pyramide : ");
}

function rows ()
 {
 if (rows<25)
  for (let i = 0; i < rows; i++) {
  	    console.log('voici  la pyramide')
        var output = '';
        for (let j =0; j < rows - i; j++) output += ' ';
        for (let k = 0; k <= i; k++) output += '* ';
        console.log(output);   
    }
    else {
      process.exit();   
      process.exit();}
 };
