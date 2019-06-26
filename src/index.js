document.addEventListener('DOMContentLoaded',() => {

console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


fetch(imgUrl)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        let image_array = data
        let img_container = document.querySelector('#dog-image-container')

        image_array.message.forEach(function(image){
        let img =  document.createElement('img')
        img.src = image
        img_container.append(img)
    });
    });

fetch(breedUrl)
    .then(function(response) {
        return response.json()
})
.then(function(data) {
    console.log(data.message)
    
    let arr_breed = Object.entries(data.message)
    arr_breed.forEach(function(breed){
        function change_color(element) {
            element.setAttribute('style', 'color: red;')
        }
        let b = breed[0]
        let li = document.createElement('li')
        li.innerText = b
        li.addEventListener('click', function() {change_color(li)} )
        let ul = document.querySelector('#dog-breeds')

        ul.append(li)
    })
    // list_items = document.querySelectorAll('li')

})
// let list_items
// console.log(list_items)


// function change_color(element) {
//     element.setAttribute('style', 'color: red;')
// }

// for (let i = 0; i < list_items.length; i++) {
//     this.addEventListener('onclick', change_color(this));
// }

let menu = document.querySelector('#breed-dropdown')

menu.addEventListener("change",(e) => {
    // console.log(e);
    let list_items = document.querySelectorAll('li')

    selection = e.target.value
    for(let i of list_items){
        console.log(selection)
        console.log(i)
        if (selection === i.innerText.charAt(0)){
            i.style.display = "block"
        }
        else {
            i.style.display = "none"
        }
    }
})

})