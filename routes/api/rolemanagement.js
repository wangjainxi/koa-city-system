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
        data:  [
            { checkbox: false, id: 201220629145151, code: 'monitor', name: '值班长' },
            { checkbox: false, id: 1, code: 'leader', name: '领导' },
            { checkbox: false, id: 2, code: 'department', name: '专业部门' },
            { checkbox: false, id: 3, code: 'ADunit', name: '执法大队' },
            { checkbox: false, id: 4, code: 'admin', name: '管理员' },
            { checkbox: false, id: 5, code: 'ADdepartment', name: '法规科' },
            { checkbox: false, id: 6, code: '005', name: '值班员' },
            { checkbox: false, id: 6, code: '004', name: '接线员' },
            { checkbox: false, id: 6, code: '003', name: '监督员' },
            { checkbox: false, id: 6, code: '0015', name: '坐席员' }
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