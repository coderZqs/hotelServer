 const {
     HttpExcapeion
 } = require("../core/http-excapion");
 module.exports = async (ctx, next) => {
     try {
         await next()
     } catch (err) {
         console.log(err)
         if (err instanceof HttpExcapeion) {
             ctx.body = {
                 message: err.msg,
                 request: `${ctx.method} ${ctx.path}`
             }
             ctx.status = 403
         } else {
             console.log("111")
         }
     }
 }