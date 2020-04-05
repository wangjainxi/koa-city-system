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
        data:[
            { title: '今天是第一', publish: '测试班长', publishdate: new Date(), roll: '3', checkbox: false, desc: '内容.....' },
            { title: '今天是6月26号', publish: 'admin', publishdate: new Date(), roll: '1', checkbox: false, desc: '内容.....' },
            { title: '222', publish: '测试班长', publishdate: new Date(), roll: '2', checkbox: false, desc: '内容.....' },
            { title: '1111', publish: '测试班长', publishdate: new Date(), roll: '1', checkbox: false, desc: '内容.....' },
            { title: '6666', publish: '贾苏', publishdate: new Date(), roll: '3', checkbox: false, desc: '内容.....' },
            { title: '发卷子了', publish: '测试班长', publishdate: new Date(), roll: '3', checkbox: false, desc: '内容.....' },
            { title: '测试的标题', publish: 'admin', publishdate: new Date(), roll: '5', checkbox: false, desc: '内容.....' },
            { title: '不发了', publish: '测试班长', publishdate: new Date(), roll: '2', checkbox: false, desc: '内容.....' },
            { title: '发给电工的公告', publish: '测试班长', publishdate: new Date(), roll: '3', checkbox: false, desc: '内容.....' },
            { title: '今天发卷子了', publish: '测试班长', publishdate: new Date(), roll: '1', checkbox: false, desc: '内容.....' }
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