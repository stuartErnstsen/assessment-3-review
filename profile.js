
const bts = document.querySelectorAll('button')

const myFavs = {
    color: 'blue',
    place: 'SLC',
    ritual: 'Sleep'
}


const rests = ['wendys', 'deltaco', 'mcdees']

const alertFave = (e) => {
    const message = myFavs[e.target.id]

    const alertDiv = document.createElement('li')

    alertDiv.id = 'alert-li'

    alertDiv.innerHTML = `<a href='https://www.wendys.com/' target='_blank'>${message}</a>`

    const body = document.querySelector('body')

    body.append(alertDiv)

    setTimeout(() => {
        alertDiv.remove()
    }, 3000)
}

bts.forEach((button) => {
    button.addEventListener('click', alertFave)
})



//The code below will toggle class to show/hide nav bar
// const nav = document.getElementById('nav-profile')
// const toggleBtn = document.getElementById('toggle-nav-button')


// function toggleNav() {
//     nav.classList.toggle('hide-nav')
// }

// toggleBtn.addEventListener('click', toggleNav)





//Code to send user to random restaurant 
const list = ['https://wendys.com', 'https://deltaco.com', 'https://tacobell.com']

const randomBtn = document.getElementById('random-button')


function goToRandomRestaurant() {
    const num = Math.floor(Math.random() * list.length);
    //The line below will redirect to a new page. 
    window.location.href = list[num]
}

toggleBtn.addEventListener('click', goToRandomRestaurant)