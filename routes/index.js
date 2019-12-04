const router = require("koa-router");

router.get("/", async ctx => {
    ctx.body = {
        a: 1
    }
})

module.exports = router;