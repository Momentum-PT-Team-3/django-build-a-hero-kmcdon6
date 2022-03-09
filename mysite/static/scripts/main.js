


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

function heroList(url) {
    fetch(heroURL, {

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
            for (let hero of heroArray) {
                console.log(hero)
                let heroItem = document.createElement('p')
                //create pk for each hero
                heroItem.dataset.pk = hero.pk
                console.log(hero.pk)
                //template literal below uses backtiks- similar to f string in python
                heroItem.innerText = `${hero.name}  ${hero.alias}`
                //add css class features from css file
                heroItem.classList.add('blue-border')
                heroDisplay.appendChild(heroItem)

                let deleteButton = document.createElement('button')
                deleteButton.type = 'button'
                deleteButton.className = "deleteButton"
                deleteButton.innerText = `delete`
                deleteButton.classList.add('button', 'is-danger')
                deleteButton.setAttribute('data-pk', hero.pk)
                heroItem.appendChild(deleteButton) //append instead of appendchild?
                deleteButton.addEventListener('click', event => {
                    console.log(event.target.dataset.pk)//target refers to specific item chosen for event listener

                    fetch(`api/heroes/${event.target.dataset.pk}`, {
                        method: 'DELETE',
                        credentials: 'same-origin',
                        //headers are HOW we are sending it
                        headers: {
                            'Accept': 'application/json',
                            'X-Request-With': 'XMLHttpRequest',
                            'X-CSRFToken': csrftoken,
                        },


                    })

                    // .then(response => {
                    //     return response.json()
                    // })

                    // .then(newHero => {
                    //     console.log(newHero)
                    //     let heroItem = document.createElement('p')


                    //     let deleteButton = document.createElement('button')
                    //     deleteButton.type = 'button'
                    //     deleteButton.className = "deleteButton"
                    //     deleteButton.innerText = `delete`
                    //     let spot = document.querySelector('ul')
                    //     spot.appendChild(deleteButton)
                    // console.log(deleteButton)



                    //template literal below uses backtiks- similar to f string in python
                    // heroItem.innerText = `${newHero.name}  ${newHero.alias} ${newHero.deleteButton}`
                    // heroItem.classList.add('blue-border')
                    // heroDisplay.appendChild(heroItem)


                })
            }
        })
    }


    function addHero(url) {

        let HeroForm = document.querySelector("#hero-form")
        console.log(HeroForm)

        HeroForm.addEventListener('submit', function (event) {
            event.preventDefault()  //prevents form's default behavior of reloading the page
            // console.log(event.target)
            let heroFormData = new FormData(HeroForm) //makes a formdata object - carries form to the backend


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
                    let heroItem = document.createElement('p')


                    let deleteButton = document.createElement('button')
                    deleteButton.type = 'button'
                    deleteButton.className = "deleteButton"
                    deleteButton.innerText = `delete`
                    let spot = document.querySelector('ul')
                    spot.appendChild(deleteButton)
                    // console.log(deleteButton)



                    //template literal below uses backtiks- similar to f string in python
                    heroItem.innerText = `${newHero.name}  ${newHero.alias} ${newHero.deleteButton}`
                    heroItem.classList.add('blue-border')
                    heroDisplay.appendChild(heroItem)
                })

            // formData.append('name', hero_name)
        })

    }

    function deleteHero(url) {
        let heroDelete = document.querySelectorAll(".deleteButton")
        console.log(heroDelete)

        heroDelete.forEach(button => {
            let parentOfChd = button.parentNode
            let heroPk = parentOfChd.dataset.pk
            // let heroDeleteURL = `api/heroes/${heroPk}/`


            button.addEventListener("click", function (event) {
                console.log("btn clicked!", btn.parentNode, heroPk)

                fetch(url, {
                    method: 'DELETE',
                    credentials: 'same-origin',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'X-Requested-With': 'XMLHttpRequest',
                        'X-CSRFToken': csrftoken,
                    },
                })
                    .then(data => {
                        console.log(data)
                    })

            })
        })
    }

heroList(heroURL)
addHero(heroURL)
deleteHero(heroURL)



