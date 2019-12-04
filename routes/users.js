const router = require('koa-router')({
  prefix: "/user",
});

const {
  ServerError,
  PutError,
  FindError
} = require("../core/http-excapion")

const MD5 = require("crypto").createHash('md5');
let {
  User
} = require("../model/User");

router.get("/", async ctx => {
  ctx.body = {
    a: 1
  }
})
router.post("/", async ctx => {

  let {
    uname,
    upwd,
  } = ctx.request.body;
  let user = await User.findAll({
    where: {
      uname,
      upwd
    }
  })
  if (user.length != 0) {
    ctx.session.id = 1;
    return ctx.body = {
      status: 200,
      msg: "登陆成功"
    }
  }
  throw new FindError("密码错误");
})


router.put("/", async ctx => {
  let {
    uname,
    upwd,
  } = ctx.request.body;
  let isRegistered = await User.findAll({
    where: {
      uname
    }
  })
  if (isRegistered.length === 0) {
    let isSuccess = await User.create({
      uname,
      upwd
    })
    if (isSuccess) {
      return ctx.body = {
        status: 200,
        msg: "注册成功"
      }
    } else {
      throw new ServerError();
    }
  } else {
    throw new PutError("用户已存在");
  }
})

module.exports = router