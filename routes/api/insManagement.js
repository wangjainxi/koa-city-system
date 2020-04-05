const Router = require('koa-router');
const router = new Router()
const User = require('../../models/users')
/**
 *   GET api/users/test
 */

router.get("/getData", async ctx =>{
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    ctx.status = 200
    ctx.body ={
        code: 0,
        data:  [
            { id: 1, code: '37120000', name: '测试机构', type: '监督控制中心', higthlevel: '1111', tel: '' },
            { id: 2, code: '14090032', name: '忻州经济技术开发区建设环境', type: '专业', higthlevel: '', tel: '' },
            { id: 3, code: '14090030', name: '忻州经济技术开发环卫队', type: '专业', higthlevel: '', tel: '' },
            { id: 4, code: '14090029', name: '忻州经济技术开发区城市综合监察', type: '专业部门', higthlevel: '', tel: '' },
            { id: 5, code: '14090028', name: '市建设局总工办', type: '专业部门', higthlevel: '', tel: '' },
            { id: 6, code: '14090027', name: '建管科', type: '专业部门', higthlevel: '', tel: '' },
            { id: 7, code: '14090026', name: '安全站', type: '专业部门', higthlevel: '', tel: '' },
            { id: 8, code: '14090025', name: '招标办', type: '专业部门', higthlevel: '', tel: '' },
            { id: 9, code: '14090024', name: '工程质量监督站', type: '专业部门', higthlevel: '', tel: '' },
            { id: 10, code: '14090023', name: '市城建监察支队', type: '专业部门', higthlevel: '', tel: '' }
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