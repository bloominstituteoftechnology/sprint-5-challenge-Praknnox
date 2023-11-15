async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇
  
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`
  try {
    let learners=await axios.get('http://localhost:3003/api/learners')
    let mentorss=await axios.get('http://localhost:3003/api/mentors')
    console.log(learners)
    let alf=[]
    learners.data.forEach(learn=>{
      let bunger={
        id:learn.id,
        fullName:learn.fullName,
        email:learn.email,
        mentors:learn.mentors
      }
    })
    alf.push('???')
    
     
    /*learners.forEach(learner=>{
      let pickle=create(learner,mentorss)
      document.querySelector('.cards').appendChild(pickle)
    })*/
    
    
  } catch (error) {
    
  }
  function create(learner,mentor){
    let card=document.createElement('div')
    card.classList.add('card')
    let nom=document.createElement('p')
    nom.textContent='learner.fullName'
    let mails=document.createElement('p')
    mails.textContent='learner.email'
    let mentos=document.createElement('p')
    let mnames=mentor.find(ment=>ment.id===learner.mentors)
    mentos.textContent='mnames'
    [nom,mails,mentos].forEach(p=>{
      card.appendChild(p)
    })
    card.addEventListener('click',eve=>{
      document.querySelectorAll('.card').forEach(suit=>{
        suit.classList.remove('active')
      })
      card.classList.add('active')
    })
    return card
  }


  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
