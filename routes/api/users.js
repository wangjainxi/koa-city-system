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

router.post("/register", async ctx =>{
    const {name, email,password} = ctx.request.body
  const res = await User.find()
 console.log('findResult res',res)
 if(res.length > 0){
    ctx.status = 200
    ctx.body ={
        res,
        code: 0,
        value: '邮箱已被占用',
        msg: 'success'
    }

 } else {
    const temp = new User({
        name,
        email,
        password
    })
  await  temp.save()
  ctx.status = 200
    ctx.body ={
        code: 0,
        value: '创建成功',
        msg: 'success'
    }
 }
})





module.exports  = router.routes()