
const quote = document.getElementById('quote')
quote.textContent = '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ” '

const author = document.getElementById('author')
author.textContent = 'Tanya Sinclair'

const role = document.getElementById('role')
role.textContent = 'UX Engineer'

const image = document.getElementById('image')
image.src="/assets/image-tanya.jpg"

const toggle = document.getElementById('slider-button')
toggle.addEventListener('click', transitionContent)

// const leftSection = document.getElementById('left-section')

    function transitionContent() {
    if (author.textContent === 'Tanya Sinclair') {
        author.textContent = 'John Tarkpor'
        quote.textContent = '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”'
        role.textContent = 'Junior Front-end Developer'
        image.src="/assets/image-john.jpg"
        // leftSection.classList.add('transition')

    } else {
        author.textContent = 'Tanya Sinclair'
        role.textContent = 'UX Engineer'
        quote.textContent = '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ” '
        image.src="/assets/image-tanya.jpg"
    }
   
}