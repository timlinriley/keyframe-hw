

const start = () =>{
    let ball = document.querySelector('.ball2')
    ball.classList.toggle('startball')
}

const pause = () => {
    let ball = document.querySelector('.ball2')
    let target = document.querySelector('.target1')
    ball.classList.toggle('paused')
    console.log('paused')
    console.log(ball.offsetLeft)
    if (ball.getBoundingClientRect().left >= target.getBoundingClientRect().left && ball.getBoundingClientRect().right <= target.getBoundingClientRect().right) {
        alert('You Win!')
        
    } else {
        alert('Try again!')
    }
    }
const spinningBox = () =>{
    let spinner = document.createElement('img')
    spinner.setAttribute('class', 'spin')
    spinner.setAttribute('src', "https://mobileimages.lowes.com/productimages/7bca1f21-76d4-4736-8a8c-678763956c15/42670260.jpg?size=xl")
    document.querySelector('.boxspin').appendChild(spinner)
    console.log('I am working')

}