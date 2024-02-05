import jwt from 'jsonwebtoken'
export const genrateToken =(user)=>{
    return jwt.sign({
        _id:user._id,
        name:user.name,
        eamil:user.email,
        isAdmin:user.isAdmin,
    },'SiddharthKumar',{
        expiresIn:'30d',
    })
}
export const isAuth=(req,res,next)=>{
    const authorization=req.headers.authorization
   
    if(authorization){
      const token = authorization.slice(7,authorization.length) //bearer token value
      jwt.verify(token,'SiddharthKumar',(err,decode)=>{
          if(err){
              res.status(401).send({message:err.message})
          }
          else{
              req.user=decode
              next()
          }
      })
    }
    else{
        res.status(401).send({message:'No token'})

    }
}

