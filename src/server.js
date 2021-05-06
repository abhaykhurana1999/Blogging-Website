const express=require('express')

const {db}=require('./db/models')


const{usersRoute}=require('./routes/users')
const{postsRoute}=require('./routes/posts')

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/users',usersRoute)
app.use('/api/posts',postsRoute)
app.use('/',express.static(__dirname+ '/public'))

db.sync({force:true}).then(()=>
{
    app.listen(5555,()=>{
        console.log('Server Started at http://localhost:5555')
    })
}).catch((err)=>{
    console.error(new Error('Could Not Start Database'))
    console.error(err)
})