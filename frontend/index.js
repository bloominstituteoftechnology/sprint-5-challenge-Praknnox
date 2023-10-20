async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇

  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`
  function create(learner,mentors){
    let card=document.createElement('div')
    card.classList.add('an-card')
    let nom=document.createElement('p')
    nom.textContent=learner.fullName
    let mails=document.createElement('p')
    mails.textContent=learner.email
    let mentos=document.createElement('p')
    let mnames=mentors.find(mentor=>mentor.id===learner.mentors)
    mentos.textContent=mnames
    [nom,mails,mentos].forEach(p=>{
      card.appendChild(p)
    })
    card.addEventListener('click',eve=>{
      document.querySelectorAll('.an-card').forEach(suit=>{
        suit.classList.remove('active')
      })
      card.classList.add('active')
    })
    return card
  }
let learners
axios.get('http://localhost:3003/api/learners').then(res=>{
  learners=res.data
})
learners.forEach(learner=>{
  let pickle=create(learner,mentors)
  document.querySelector('.cards').appendChild(pickle)
})

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
