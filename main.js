console.log('Hello World!');
let i =0

setInterval(()=> {
let date = new Date()
    secAngle=date.getSeconds()*6
    

    let sec = document.querySelector('.sec')
    let min = document.querySelector('.min')
    let hour = document.querySelector('.hour')
    let hour_angle = (date.getHours() % 12) * 30 + date.getMinutes() * 0.5
  sec.style.transform=` rotate(${secAngle}deg)`
  let minAngle = date.getMinutes()*6
  
  min.style.transform=` rotate(${minAngle}deg)`
  hour.style.transform=` rotate(${hour_angle}deg)`
  
  
  
  
},1000)