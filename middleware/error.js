class errorhandler extends Error {
    constructor(message,statuscode){
        super(message);
        this.statuscode=statuscode
    }
}



export const errormiddleware=(err,req,res,next)=>{

    return res.status(404).json({
       success:false,
       message:err.message,
     })
     
   
   }
   export default errorhandler