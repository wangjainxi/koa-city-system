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

             checkbox: false,

             sex: '男',

             name: '监督员',

             tel: 13911111111,

             belongIns: '忻州经济技术开发区建设环境保护局'

            },

            {

             checkbox: false,

             sex: '男',

             name: '专门部门',

             tel: 13911111111,

             belongIns: '忻州经济技术开发区环卫队'

            },

            {

             checkbox: false,

             sex: '男',

             name: '值班长',

             tel: 13911111111,

             belongIns: '忻州经济技术开发区建设环境保护局'

            },

            {

             checkbox: false,

             sex: '男',

             name: '值班员',

             tel: 13911111111,

             belongIns: '忻州经济技术开发区建设环境保护局'

            },

            {

             checkbox: false,

             sex: '女',

             name: '环卫刘丽',

             tel: 13911111111,

             belongIns: '忻州市市容环境卫生管理处'

            },

            {

             checkbox: false,

             sex: '女',

             name: '刘美丽',

             tel: 13911111111,

             belongIns: '忻州市邮政局'

            },

            {

             checkbox: false,

             sex: '男',

             name: '城管局',

             tel: 13911111111,

             belongIns: '城管局'

            },

            {

             checkbox: false,

             sex: '男',

             name: '执法二大',

             tel: 13911111111,

             belongIns: '执法二大'

            },

            {

             checkbox: false,

             sex: '男',

             name: '执法三大大',

             tel: 13911111111,

             belongIns: '执法三大队'

            },

            {

             checkbox: false,

             sex: '男',

             name: '值班员',

             tel: 13911111111,

             belongIns: '城管局'

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