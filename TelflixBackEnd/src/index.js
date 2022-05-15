import koa from 'koa'
import bodyParser from 'koa-body'
import router from './routes/index'

const Koa = require('koa');
const cors = require('@koa/cors');

const app = new Koa();
app.use(cors());

//const app = new koa()
const port = 4000

app.use(bodyParser({ multipart: true, urlencoded: true }))
app.use(router.routes())

app.listen(4000, () => {
    console.log(`Server is running on port ${port}`)
})