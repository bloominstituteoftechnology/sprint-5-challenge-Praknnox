async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇

  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`
  function create(arg1,arg2){
    let card=document.createElement('div')
    card.classList.add('an-card')
    let nom=document.createElement('p')
    nom.textContent=arg1.fullName
    let mails=document.createElement('p')
    mails.textContent=arg1.email
    let mentos=document.createElement('p')
    let mnames=arg2.find(mentor=>mentor.id===arg1.mentors)
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
  try {
    let learners=await axios.get('http://localhost:3003/api/learners')
    let mentors=await axios.get('http://localhost:3003/api/mentors')
    learners.forEach(learner=>{
      let pickle=create(learner,mentors)
      document.querySelector('.cards').appendChild(pickle)
    })
    
    
  } catch (error) {
    
  }


  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
