const Router = require('koa-router');
const router = new Router()
const Notice = require('../../models/notice')
/**
 *   GET api/users/test
 */

router.get("/getData", async ctx =>{
    const res  = await Notice.find()

    console.log('Notice res',res)
    ctx.status = 200
    ctx.body ={
        code: 0,
        data: res,
        msg: 'success'
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
        mas: 'users works'
    }
})





module.exports  = router.routes()