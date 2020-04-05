const koa = require('koa')
const Router = require('koa-router')
// 实例化koa
const app  = new koa()
const router = new Router()
const bodyParser = require('koa-bodyparser')
const MongoClient = require('mongodb').MongoClient;
const { DB } = require('./config/index')
// const UserInfo = require('./models/users')
require('colors')




MongoClient.connect( DB, { useNewUrlParser: true,useUnifiedTopology:true }, function(err, db) {
//   if (err) throw err;
  console.log("数据库已创建!");
//   var dbcity = db.db("city");
  var myobj = { name: "测试" };
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
router.use("/bpi/users", users)
router.use("/bpi/warningcolor", warningcolor)
router.use("/bpi/workflow", workflow)
router.use("/bpi/casetype", casetype)
router.use("/bpi/notice", notice)
router.use("/bpi/peoplemanagement", peoplemanagement)
router.use("/bpi/question", question)
router.use("/bpi/usermanagement", usermanagement)
router.use("/bpi/menumanagement", menumanagement)
router.use("/bpi/insManagement", insManagement)
router.use("/bpi/rolemanagement", rolemanagement)

// 配置路由
app.use(router.routes()).use(router.allowedMethods())



const port = process.env.PORT || 5000;

app.listen(port,() =>{
    console.log(`server started on ${port}`)
})