const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener("DOMContentLoaded", ()=>{
    fetch(imgUrl)
    .then(res => res.json())
    .then((images) => {
        let image = images.message;
        let imageContainer = document.getElementById("dog-image-container")
        
        for(let i= 0; i < images.message.length; i++){
            let img = document.createElement("img");
            img.src = image[i];
            imageContainer.appendChild(img)
        }
    })

    fetch(breedUrl)
    .then(res => res.json())
    .then(breeds => {
        let breedsObj = breeds.message;
        let breedList = document.getElementById("dog-breeds")

        for (let breed in breedsObj){
            let li = document.createElement("li");
            li.innerText = `${breed}`;
            breedList.appendChild(li);
            
        }
        liClick();
        dropDown();
    })
    
})

function liClick(){
    let list = document.getElementsByTagName("li")

    
    for(let li of list){
        li.style.cursor ='pointer';

        li.addEventListener("click", () => {
            li.style.color = 'red';
        })
        
    }
}

function dropDown(){
    let dropDownValues = document.getElementById("breed-dropdown").children;
    console.log(dropDownValues);
    let breedList = document.getElementById("dog-breeds");
    console.log(breedList);
    
   

    
    for (let val of dropDownValues){
        val = val.innerText;
        let list = document.getElementsByTagName("li")
        console.log(list);
        
        for(let breed of list){
            breed = breed.innerText
            console.log(breed);

        }
        if (breed.startsWith(val)){
        breedList.innerHTML = ``
                    let li = document.createElement("li");
                    li.innerText = breed
                    breedList.appendChild(li)
                }
        


        
    }
}