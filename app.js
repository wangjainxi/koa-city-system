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
  var dbcity = db.db("city");
  var myobj = { name: "测试" };
  dbcity.collection("site").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("文档插入成功");
      db.close();
  });
});

// app.use(async (ctx) => {
//     let data = await UserInfo.query()
//    ctx.body = data

// })

const users = require("./routes/api/users")
app.use(bodyParser())
// 路由
router.get('/', async ctx =>{
        ctx.body = {
            msg: 'hello koa citySystem'
        }
})

// 配置路由地址
router.use("/api/users", users)
// 配置路由
app.use(router.routes()).use(router.allowedMethods())






const port = process.env.PORT || 5000;

app.listen(port,() =>{
    console.log(`server started on ${port}`)
})