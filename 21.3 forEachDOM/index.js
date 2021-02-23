const users = [
    {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
}, 
    {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
    },
{
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];

const start = document.querySelector ('body')

const ol = document.createElement ('ol')
document.body.appendChild(ol)
ol.setAttribute('style', 'list-style-type: none;')

users.forEach (user=>{
    ol.innerHTML += `<li data-id = "${user.id}">${user.firstName} ${user.lastName} </li>`;
})