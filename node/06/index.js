const Koa = require("koa");
const app = new Koa();

app.use((ctx) => {
  if (ctx.url === "/") {
    ctx.body = "<h2>INDEX SAYFASI</h2>";
  } else if (ctx.url === "/about") {
    ctx.body = "<h2>HAKKIMDA SAYFASI</h2>";
  } else if (ctx.url === "/contact") {
    ctx.body = "<h2>İLETİŞİM SAYFASI</h2>";
  }
});

app.listen(5000);
