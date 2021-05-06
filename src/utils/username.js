const Adjectives=[
    'realistic',
    'bashful',
    'whispering',
    'drab',
    'sophisticated',
    'dependent',
    'oafish',]

const Objects=['horoscope',
    'responsible',
    'freighter',
    'earwax',
    'accurate',
    'epicalyx',
    'inhabitant',]

    function getRandomUser()
    {
        const adj=Adjectives[Math.floor(Math.random()*7)]
        const obj=Objects[Math.floor(Math.random()*7)]

        return `${adj}-${obj}`
    }

    module.exports={getRandomUser}
    /*

      For Testing 
    console.log(getRandomUser())
    console.log(getRandomUser())
    console.log(getRandomUser())
    console.log(getRandomUser())

    */