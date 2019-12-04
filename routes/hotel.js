const Router = require('koa-router');
const router = new Router({
  prifix: "/hotel",
})

let {
  Hotel
} = require("../model/Hotel");

let {
  ServerError,
  PutError,
  FindError,
  DeleteError
} = require("../core/http-excapion")
//查
router.get("/", async ctx => {
  let hotel = await Hotel.findAll();
})

//增
router.put("/", async ctx => {
  let {
    id,
    hname,
    cid,
    level,
    address,
    intro,
    guestId
  } = ctx.request.body;
  let hasGuest = await Hotel.findOne({
    where: {
      guestId
    }
  })
  if (hasGuest) {
    throw new PutError("同款房间已存在")
  }
})

//改
router.patch("/", async ctx => {


})
//删
router.delete("/", async ctx => {

})

module.exports = router