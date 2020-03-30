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
            { checkbox: false, id: 1, max: 3, min: 0, color: { name: 'Red', color: '#ff0000' }, remark: '立案数较少' },
            { checkbox: false, id: 2, max: 6, min: 4, color: { name: 'Green', color: '#00ff00' }, remark: '立案数较少' },
            { checkbox: false, id: 3, max: 9, min: 7, color: { name: 'Blue', color: '#0000ff' }, remark: '立案数较少' },
            { checkbox: false, id: 4, max: 15, min: 10, color: { name: 'Yellow', color: '#ffff00' }, remark: '立案数较少' },
            { checkbox: false, id: 5, max: 20, min: 16, color: { name: 'purple', color: '#ff00ff' }, remark: '立案数较少' },
            { checkbox: false, id: 6, max: 600, min: 21, color: { name: 'Cyan', color: '#00ffff' }, remark: '立案数较少' }
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