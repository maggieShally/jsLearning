



function Hunter(name) {
  this.name = name
  this.list = []
}

Hunter.prototype.subscribe = function(target, fn) {
  target.list.push(fn)
}

Hunter.prototype.publish = function(money) {
 this.list.forEach(item => {
   item(money)
 }) 
}

const HunterHM = new Hunter('XM') 


const HunterMM = new Hunter('MM')
HunterMM.subscribe(HunterHM, function (money) {
  console.log(money)
  if(money > 200) {
    console.log('done it')
  }  
})

HunterHM.publish(202)
