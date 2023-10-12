const tweets = [{
        handler: '@usuario',
        date: new Date().toISOString(),
        message: 'Contenido twett 1',
        likes: 40
    },
    {
        handler: '@usuario',
        date: new Date().toISOString(),
        message: 'Contenido twett 2',
        likes: 24
    },
    {
        handler: '@usuario',
        date: new Date().toISOString(),
        message: 'Contenido twett 3',
        likes: 34
    },
    {
        handler: '@usuario',
        date: new Date().toISOString(),
        message: 'Contenido twett 4',
        likes: 14
    }
]

//modelo de datos de los tweets arriba

//recorrer el array de los tweets
// for (const tweet of tweets) {

// }
tweets.forEach(tweet => {
    //crear estructura html
    const tweetContainer = document.createElement('div')

    tweetContainer.innerHTML = ` 
        <span>${tweet.handler}</span>
        <span>${tweet.date}</span>
        <p>${tweet.message}</p>
        <p>${tweet.likes} likes</p>
        `
        //crear estructura de html con los datos de los tweets


    //lo anadimos al arbol dom

    const tweetList = document.getElementById('tweets')
    tweetList.appendChild(tweetContainer)

})