const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!';
// }

for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy';
}

// const firstBold = document.querySelector('b')
// firstBold.parentElement
// const paragraph = firstBold.parentElement
// paragraph.childElementCount
// paragraph.children

// const squareImg = document.querySelector('.square')
// squareImg
// squareImg.nextSibling
// squareImg.previousSibling
// squareImg.nextElementSibling
// squareImg.previousElementSibling

// document.createElement('img')
// const newImg = document.createElement('img')
// console.dir(newImg)
// newImg.src = 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80'
// "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80"
// document.body.appendChild(newImg)
// newImg.classList.add('square')

// const newH3 = document.createElement('h3')
// newH3
// newH3.innerText = 'I am new!'
// document.body.appendChild(newH3)

// const p = document.querySelector('p')
// p.append('i am new text yaaaaaayyy!!!')
// p.appendChild('i am new text yaaaaaayyy!!!')
// p.append('i am new text yaaaaaayyy!!!', 'aasdfasdfasdf')
// const newB = document.createElement('b')
// newB.append('Hi!')
// newB
// p.prepend(newB)

// const h2 = document.createElement('h2')
// h2.append('Are adorable chickens')
// h2
// const h1 = document.querySelector('h1')
// h1.insertAdjacentElement('afterend', h2)
// h1.nextElementSibling
// const h3 = document.createElement('h3')
// h3.innerText = 'I am h3';
// h1.after(h3)

// const firstLi = document.querySelector('li')
// firstLi
// const ul = firstLi.parentElement
// ul
// ul.removeChild(firstLi)
// const b = document.querySelector('b')
// b
// b.parentElement.removeChild(b)

// const img = document.querySelector('img')
// img.remove()