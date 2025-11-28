function safeRun(fn,message){

    try{
        fn();
    }catch(err){
        throw new Error(`${message} : ${err.message}`);
    }
}

module.exports={safeRun};