$(()=>{

    $('#navbar').load('/components/navbar.html',loginIfNedded)
    $('#footer').load('/components/footer.html')
    $('#content').load('/components/all-posts.html')
    

})

function loginIfNedded()
{
    window.currentUser=window.localStorage.user ? JSON.parse(window.localStorage.user) : null
    if(!currentUser)
    {
        $.post('/api/users',{},(user)=>{
            if(user)
            {
                console.log("Registered As ",user.username)
                window.localStorage.user=JSON.stringify(user)
                currentUser=user
                $('#nav-user').text(currentUser.username)
            }

        })
    }
    else{
        console.log("Resuming Sesion as ",currentUser.username)
        $('#nav-user').text(currentUser.username)
    }
}

