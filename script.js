const btn = document.getElementById('btn');
const jokeLine = document.getElementById('joke-line');
const jokecontainer = document.getElementById('jokecontainer');
const punchline = document.getElementById('punch-line');

const getJoke=async()=>{

    const res = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await res.json(); 
    return data
}

btn.addEventListener('click', () => {
    jokeLine.innerText = "getting Joke";
    btn.innerText = "Loading..."
    punchline.innerText = "";
    getJoke().then((data)=>{

        // console.log(data);
        jokeLine.innerText = data.setup;
        btn.innerText = "Get another joke"
        punchline.innerText = data.punchline;
        jokecontainer.appendChild(punchline);
        
        
    })
})