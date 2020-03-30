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
            {
              checkbox: true,
              username: 'aaa',
              name: '值班长',
              role: '',
              PDA: 2412424,
              status: true
            },
            {
              checkbox: false,
              username: 'aaa',
              name: '刘美丽',
              role: '',
              PDA: 121212,
              status: false
            },
            {
              checkbox: false,
              username: 'aaa',
              name: '专业部门',
              role: '',
              PDA: 2121244,
              status: false
            },
            {
              checkbox: false,
              username: 'ccc',
              name: '监督员',
              role: '',
              PDA: 32234234,
              status: false
            },
            {
              checkbox: false,
              username: 'aaa',
              name: '专业部门',
              role: '',
              PDA: 3242342,
              status: false
            },
            {
              checkbox: false,
              username: 'aaa',
              name: '值班长',
              role: '',
              PDA: 3424,
              status: false
            },
            {
              checkbox: false,
              username: 'asdsada',
              name: '值班长',
              role: '',
              PDA: 453,
              status: false
            },
            {
              checkbox: false,
              username: 'sdas',
              name: '环卫刘丽',
              role: '',
              PDA: 3434,
              status: false
            },
            {
              checkbox: false,
              username: 'aaa',
              name: '城管局',
              role: '',
              PDA: 23242,
              status: false
            },
            {
              checkbox: false,
              username: 'aaa',
              name: '城管局',
              role: '',
              PDA: 3242,
              status: false
            }
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