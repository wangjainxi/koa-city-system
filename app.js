const koa = require('koa')
const Router = require('koa-router')
// 实例化koa
const app  = new koa()
const router = new Router()
const bodyParser = require('koa-bodyparser')
const MongoClient = require('mongoose');
const { DB } = require('./config/index')
// const UserInfo = require('./models/users')
require('colors')




MongoClient.connect( DB, { useNewUrlParser: true,useUnifiedTopology:true }, function(err, db) {
//   if (err) throw err;
  console.log("数据库已创建!");
//   var dbcity = db.db("city");
//   var myobj = { name: "测试" };
//   dbcity.collection("site").insertOne(myobj, function(err, res) {
//       if (err) throw err;
//       console.log("文档插入成功");
//       db.close();
//   });
});

// app.use(async (ctx) => {
//     let data = await UserInfo.query()
//    ctx.body = data

// })

const users = require("./routes/api/users")
const warningcolor = require("./routes/api/warningcolor")
const workflow = require("./routes/api/workflow")
const casetype = require("./routes/api/casetype")
const notice = require("./routes/api/notice")
const peoplemanagement = require("./routes/api/peoplemanagement")
const question = require("./routes/api/question")
const usermanagement = require("./routes/api/usermanagement")
const menumanagement = require("./routes/api/menumanagement")
const insManagement = require("./routes/api/insManagement")
const rolemanagement = require("./routes/api/rolemanagement")
app.use(bodyParser())
// 路由
router.get('/', async ctx =>{
        ctx.body = {
            msg: 'hello koa citySystem'
        }
})

// 配置路由地址
router.use("/api/users", users)
router.use("/api/warningcolor", warningcolor)
router.use("/api/workflow", workflow)
router.use("/api/casetype", casetype)
router.use("/api/notice", notice)
router.use("/api/peoplemanagement", peoplemanagement)
router.use("/api/question", question)
router.use("/api/usermanagement", usermanagement)
router.use("/api/menumanagement", menumanagement)
router.use("/api/insManagement", insManagement)
router.use("/api/rolemanagement", rolemanagement)

// 配置路由
app.use(router.routes()).use(router.allowedMethods())






const port = process.env.PORT || 5000;

app.listen(port,() =>{
    console.log(`server started on ${port}`)
})