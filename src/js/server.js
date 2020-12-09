const http = require('http');
const Koa = require('koa');
const koaBody = require('koa-body');

const app = new Koa();

app.use(koaBody({
  urlencoded: true,
}));
app.use(async (ctx) => {
  ctx.response.set({
    'Access-Control-Allow-Origin': '*',
  });
  // console.log(ctx.request.querystring);
  // console.log(ctx.request.body);
  console.log(ctx);
  ctx.response.body = 'server response';
});

const server = http.createServer(app.callback()).listen(7070);
