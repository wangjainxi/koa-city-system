const Router = require('koa-router');
const router = new Router()
const Casetype = require('../../models/casetype')
/**
 *   GET api/users/test
 */

router.get("/getData", async ctx =>{
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

  const res = await Casetype.find({})
  console.log('res',res)
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

// router.post("/register",  ctx =>{
//     const {name, email} = ctx.request.body
//  User.find({},(res,err) =>{
//     console.log('findResult res',res)
//     console.log('findResultmerr',err)
//    })

//     ctx.status = 200
//     ctx.body ={
//         mas: 'users works'
//     }
// })





module.exports  = router.routes()