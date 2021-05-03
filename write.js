var fs=require('fs');
//const { argv } = require('process');
const argv=require('yargs/yargs')(process.argv.slice(2)).argv;
global.chk=0;
//console.log(args._[0]);
fs.readFile('filenames.txt',function(err,data){
    global.chk=0;
    if(err){
        return console.error(err);
    }
    else{
        
        var array=data.toString().split("\n");
        for(i in array){
        
           if(array[i]==(argv._[0])){
               
                chk=1;
                console.error("File name already exists, please provide new file name!");
                
                
                break;
            }
        }
        if(global.chk==0){
            fs.writeFile(argv._[0],'You are awesome',function(err){
                if(err){
                    return console.error(err);
                }
                else{
                    console.log("Data written succesfully");
                }
            })
            
            
            
            fs.appendFile('filenames.txt',argv._[0]+"\n",function(err){
                if(err){
                    return console.error(err);
                }
                else{
                    //console.log("Data written succesfully");
                }
            })
            
        }
    }
})




