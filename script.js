
const img = document.getElementById("img")
const title = document.getElementById("heading")
loadImage()

async function loadImage(){ 
    const myTimeout = setTimeout(sleep, 300);
    async function sleep() {
        img.src = "https://miro.medium.com/max/700/1*CsJ05WEGfunYMLGfsT2sXA.gif"
        setImage()
    }

}
 

async function setImage(){
    fetch('https://meme-api.herokuapp.com/gimme')
    .then(res => res.json())
    .then(data => {
        console.log(data.url);
        img.src = data.url
        let name =  data.title;
        if ((name == "me irl") || (name == "me_irl") || (name == "Me irl") || (name == "Me_irl")){
                title.innerText = "Memes"
        }else{
            title.innerText = name
        }



    }).catch(err => console.error(err));  
}
