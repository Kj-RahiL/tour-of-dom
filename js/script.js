console.log('this is javaScript')
console.log('this is Js string')

// style as like css with javaScript
const sections = document.querySelectorAll('section')
 for (const section of sections) {
    section.style.border = "2px solid steelblue"
    section.style.marginBottom = "5px"
    section.style.borderRadius = "10px"
    section.style.backgroundColor = "lightgray"
    section.style.paddingLeft = '40px'
    
 }
// input field gave value change html text
 document.getElementById('btn-update').addEventListener('click', function(){
   const inputField = document.getElementById('input-field');
   const inputText =inputField.value;
   
   const p =document.getElementById('input-text');
   p.innerText = inputText;
   
 })


//  text area comment add
document.getElementById('post-button').addEventListener('click', function(){
   const commentBox = document.getElementById('text-area');
   const newComment = commentBox.value;

   const commentContainer =document.getElementById('comment-container');
   const p = document.createElement('p');
   p.innerText = newComment;
   commentContainer.appendChild(p);
   commentBox.value = ' ';

})