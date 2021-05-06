const {Users,Posts}=require("../db/models")

async function  createNewPost(userId,title,body)
{
      const post =await Posts.create({title,body,userId})
      return post
}

async function findAllPosts(query)
{
    const posts=await Posts.findAll({include:[Users]})

    return posts
}
/*   Test Code
async function task()
{
    //console.log(await createNewPost(1,'This is First','Hello Brother'))
    const posts=await showAllPosts()
    for(let p of posts)
     console.log(`${p.title}\nAuthor:${p.user.username}\n${p.body}\n`)

}

task()
*/

module.exports={createNewPost,findAllPosts}