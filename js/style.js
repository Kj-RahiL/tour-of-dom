// indirectly section add

const mainContainer = document.getElementById('main-container')
 const section = document.createElement('section')
 mainContainer.appendChild(section)

 const h1 = document.createElement('h1')
 h1.innerText  = 'The food i like it'
 section.appendChild(h1)

 const ul = document.createElement('ul')
 section.appendChild(ul)

 const li1 = document.createElement('li')
 li1.innerText = "biriyani"
 ul.appendChild(li1)
 const li2 = document.createElement('li')
 li2.innerText = "salad"
 ul.appendChild(li2)
 const li3 = document.createElement('li')
 li3.innerText = "borhani"
 ul.appendChild(li3)


//  directly section add 

const sectionDress = document.createElement('section')
sectionDress.innerHTML = `
<h1> My Dress Section</h1>
<ul>
    <li>T-Shirt</li>
    <li>Lungi</li>
    <li>Cosma</li>
</ul>
`
mainContainer.appendChild(sectionDress)