const fs = require('fs'),
 Lexer = require('./lexer/lexer').Lexer,
 Parser = require('./parser/parser').Parser;

fs.readFile('../test/index.sin', 'utf-8', function(err, data){
      
    if(err){
        throw err
    }
    if(Lexer(data).import.length) {

        var DataArray
        Lexer(data).import.map(function (importObj) {
            this.DA = new Array();
            fs.readFile(`../${importObj.path}.sin`, 'utf-8',(err, dataImport) => {
                
            if(!this.DA.length){this.DA.push(data);}
                if(err){throw err}
                
                this.DA.push(dataImport)
                if(Lexer(data).import.length === (this.DA.length - 1)) {
                Lexer(this.DA)
            }
            }
            )
            
        })
        
        
        
    } else {
        var DataArray = new Array();
    DataArray.push(data)
    fs.writeFile('singleScript.js', Parser(Lexer(DataArray)), function(err){
        if(err) {
            throw err
        }
    
    })
    }
    
    
})


