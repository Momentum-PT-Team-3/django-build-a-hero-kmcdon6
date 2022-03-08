


    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    const csrftoken = getCookie('csrftoken');


    // let heroDisplay = document.querySelector("#hero-form")
    // console.log(heroDisplay)  

    let heroURL = "api/heroes/" //this url is the API endpoint
    let heroDisplay = document.querySelector('#hero-display')

function heroList(url){
    fetch(heroURL,{
        
                method: 'GET',
                credentials: 'same-origin',
                headers: { 
                    'Accept': 'application/json',
                    'X-Request-With': 'XMLHttpRequest',
                    'X-CSRFToken': csrftoken,
     },
        
        })
    .then(response => {
        return response.json()
    })
    .then(heroArray => {    //json gets loaded and then can be used in second .then
        // console.log(data)
        
        console.log(heroDisplay)
        for (let hero of heroArray){
            console.log(hero)
            let heroItem= document.createElement('p')
            //create pk for each hero
            heroItem.dataset.pk = hero.pk
            console.log(hero.pk)
            //template literal below uses backtiks- similar to f string in python
            heroItem.innerText = `${hero.name}  ${hero.alias}` 
            //add css class features from css file
            heroItem.classList.add('blue-border')
            heroDisplay.appendChild(heroItem)  
        }
    })
}

function addHero(url){

    let HeroForm = document.querySelector("#hero-form")
    console.log(HeroForm)

        HeroForm.addEventListener('submit', function (event){
        event.preventDefault()  //prevents form's default behavior of reloading the page
        // console.log(event.target)
        let heroFormData = new FormData(HeroForm) //makes a formdata object - carries form to the backend
        heroFormData.append(hi, hello)

        console.log(heroFormData)
        
        fetch(heroURL, {
            method: 'POST',
        credentials: 'same-origin',
        //headers are HOW we are sending it
        headers: { 
            'Accept': 'application/json',
            'X-Request-With': 'XMLHttpRequest',
            'X-CSRFToken': csrftoken,
        },

        body: heroFormData //content of what you send

        })

        .then(response => {
            return response.json()
        })

        .then(newHero => {
            console.log(newHero)
            let heroItem= document.createElement('p')
            // heroItem.dataset.deleteButton = newHero.deleteButton

            let deleteButton = document.createElement('button')
            deleteButton.className = "deleteButton"
            deleteButton.innerText = `delete`
            heroItem.appendChild(deleteButton)
            console.log(deleteButton)



            //template literal below uses backtiks- similar to f string in python
            heroItem.innerText = `${newHero.name}  ${newHero.alias} ${newHero.deleteButton}` 
            heroItem.classList.add('blue-border')
            heroDisplay.appendChild(heroItem) 
        })
        
        // formData.append('name', hero_name)
        })
        
    }

heroList(heroURL)
addHero(heroURL)
 


