const Router = require('koa-router');
const router = new Router()
const User = require('../../models/users')
/**
 *   GET api/users/test
 */

router.get("/test", async ctx =>{

    ctx.status = 200
    ctx.body ={
        data: 'users works'
    }
})

/**
 *   post api/users/register
 */

router.post("/register",  ctx =>{
    const {name, email} = ctx.request.body
 User.find({},(res,err) =>{
    console.log('findResult res',res)
    console.log('findResultmerr',err)
   })

    ctx.status = 200
    ctx.body ={
        code: 0,
        mas: 'users works',
        msg: 'success'
    }
})





module.exports  = router.routes()