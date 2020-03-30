const Router = require('koa-router');
const router = new Router()
const User = require('../../models/users')
/**
 *   GET api/users/test
 */

router.get("/getData", async ctx =>{

    ctx.status = 200
    ctx.body ={
        code: 0,
        data: [
            { checkbox: false, id: 201220629145151, name: '监督员上报' },
            { checkbox: false, id: 1, name: '监督员上报' },
            { checkbox: false, id: 2, name: '网上投诉' },
            { checkbox: false, id: 3, name: '市民来电' },
            { checkbox: false, id: 4, name: '巡查发现' },
            { checkbox: false, id: 5, name: '监控发现' },
            { checkbox: false, id: 6, name: '12345市长热线' }
          ],
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