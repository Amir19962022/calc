window.onload = function (){
    let btns = document.querySelectorAll('.btn')
    console.log(btns)
      for (let i=0; i < btns.length; i++){
       
        let button = btns[i]
       console.log(button)
       button.addEventListener('click', function (event) {
     console.log(event)
       })
       
       let buttons = Array.from(document.querySelectorAll ('.btn'))
       button.map (button => {
       button.addEventListener ('click,') function () {

        console.log('clicked')


       }
    

       
      })
      }
     
}