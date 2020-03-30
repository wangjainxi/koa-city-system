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
              id: 'admin',
              name: '构建维护',
              father: 'admin',
              menulink: 'wwwwwwwwwwww',
              imglink: ''
            },
            {
              checkbox: false,
              id: 'departmentadmin',
              name: '机构管理',
              father: 'admin',
              menulink: 'wwwwwwwwwwww',
              imglink: ''
            },
            {
              checkbox: false,
              id: 'groupadmin',
              name: '角色管理',
              father: 'admin',
              menulink: 'wwwwwwwwwwww',
              imglink: ''
            },
            {
              checkbox: false,
              id: 'personAdmin',
              name: '人员管理',
              father: 'admin',
              menulink: 'wwwwwwwwwwww',
              imglink: ''
            },
            {
              checkbox: false,
              id: 'userAdmin',
              name: '用户管理',
              father: 'admin',
              menulink: 'wwwwwwwwwwww',
              imglink: ''
            },
            {
              checkbox: false,
              id: 'MsgUserGroup',
              name: '用户分组',
              father: 'admin',
              menulink: 'wwwwwwwwwwww',
              imglink: ''
            },
            {
              checkbox: false,
              id: 'menuAdmin',
              name: '菜单管理',
              father: 'admin',
              menulink: 'wwwwwwwwwwww',
              imglink: ''
            },
            {
              checkbox: false,
              id: 'archiveAdmin',
              name: '案件管理',
              father: 'admin',
              menulink: 'wwwwwwwwwwww',
              imglink: ''
            },
            {
              checkbox: false,
              id: 'archivetype',
              name: '案件类型',
              father: 'admin',
              menulink: 'wwwwwwwwwwww',
              imglink: ''
            },
            {
              checkbox: false,
              id: 'menu——videolook',
              name: '视频组管理',
              father: 'admin',
              menulink: 'wwwwwwwwwwww',
              imglink: ''
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