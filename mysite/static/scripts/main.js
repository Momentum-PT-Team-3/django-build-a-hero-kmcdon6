


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


    let heroDisplay = document.querySelector("#hero-form")

    let heroURL = "api/heroes"

    // HeroForm.addEventListener('submit', function (event){
    //     event.preventDefault()  //prevents form's default behavior of reloading the page
    //     // console.log(event.target)
    //     formData = new FormData(HeroForm)
    //     let score = 2
    //     formData.append('name', hero_name)
      
    fetch(heroURL,{
        console.log('in fetch')  
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
    .then(data => {    //json gets loaded and then can be used in second then
        console.log(data)
    })

 


