function loadPosts()
{
    $.get('/api/posts',(posts)=>{
        for(let p of posts)
        {
            $('#posts-container').append(
                $(`<div class="col-4">
                <div class="card m-2">
                <div class="card-body">
                  <h5 class="card-title">${p.title}</h5>
                  <p class="card-text">${p.body.substr(0,200)}...</p>
                  <a href="#" class="btn btn-primary">Read Here</a>
                </div>
            </div>
          </div> 
               `)
            )
        }
    })
}