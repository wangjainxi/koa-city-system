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
  // console.log('MongoClient', MongoClient.models.casetype.find({}))
  // MongoClient.getCollection('casetype').find({}).then(res =>{
  //   console.log('Casetype find res11', res)
  // }).catch(err =>{
  //   console.log('Casetype find err', err)
  // })
  const res = await Casetype.find({})
  console.log('res',res)
    ctx.status = 200
    ctx.body ={
      res,
        code: 0,
        data: [
            // { id: 1,
            //   label: '事件',
            //   children: [
            //     { id: 40, label: '市容环境', children: [
            //       { id: 15, label: '市容环境1-1' },
            //       { id: 16, label: '市容环境1-2' },
            //       { id: 17, label: '市容环境1-3' }
            //     ] },
            //     { id: 3, label: '宣传广告', children: [
            //       { id: 18, label: '宣传广告1-1' },
            //       { id: 19, label: '宣传广告1-2' },
            //       { id: 20, label: '宣传广告1-3' }
            //     ] },
            //     { id: 4, label: '施工管理', children: [
            //       { id: 21, label: '施工管理1-1' },
            //       { id: 22, label: '施工管理1-2' },
            //       { id: 23, label: '施工管理1-3' }
            //     ] },
            //     { id: 5, label: '突发事件', children: [
            //       { id: 24, label: '突发事件-1' },
            //       { id: 25, label: '突发事件-2' },
            //       { id: 26, label: '突发事件-3' }
            //     ] },
            //     { id: 6, label: '街面秩序', children: [
            //       { id: 14, label: '扩展事件' }
            //     ] },
            //     { id: 7, label: '热线问题', children: [
            //       { id: 33, label: '热线问题-1' },
            //       { id: 34, label: '热线问题-2' },
            //       { id: 35, label: '热线问题-3' }
            //     ] },
            //     { id: 8, label: '违法建设类', children: [
            //       { id: 36, label: '违法建设' }
            //     ] }
            //   ]
            // },
            // { id: 2,
            //   label: '部件',
            //   children: [
            //     { id: 9, label: '公共设施', children: [
            //       { id: 27, label: '公共设施-1' },
            //       { id: 28, label: '公共设施-2' },
            //       { id: 29, label: '公共设施-3' }
            //     ] },
            //     { id: 10, label: '道路交通', children: [
            //       { id: 30, label: '道路交通-1' },
            //       { id: 31, label: '道路交通-2' },
            //       { id: 32, label: '道路交通-3' }
            //     ] },
            //     { id: 11, label: '市容环境', children: [] },
            //     { id: 12, label: '园林绿化', children: [] },
            //     { id: 13, label: '房屋土地', children: [] }
            //   ]
            // }
          ],
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