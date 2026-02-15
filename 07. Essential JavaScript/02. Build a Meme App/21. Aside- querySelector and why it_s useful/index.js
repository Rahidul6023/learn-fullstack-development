// We can much more easily target pseudo elements like :checked
const submitBtn = document.getElementById('submit-btn')

submitBtn.addEventListener('click', function(){
   let selected = document.querySelector("input[name=choice-radios]:checked")
   if(selected) console.log(selected.value)
   else console.log("nothing is selected")
})

/*
Challenge:
1. Muscle memory exercise: log out 
   the value of the checked radio 
   option.
*/