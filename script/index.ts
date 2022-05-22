class Input{
  inp;
  btns;
  constructor(){
      this.inp = document.querySelector('#value') as HTMLInputElement;
      this.btns = document.querySelectorAll('.container button') as NodeListOf<Element>;
  }
  _Inp(){
      this.btns.forEach(ele => {
          ele.addEventListener('click',(e) =>{
              const data = e.target as HTMLElement;
              const state_1 = data.innerText.toLowerCase().includes('c');
              const state_2 = data.innerText.toLowerCase().includes('d');

              switch ( state_1){
                  case false:
                      this.inp.value += data.innerText;
                      break;
                  case true:
                      this.inp.value = '';                        
                      break;
              }
              switch (state_2){
                  case true:
                      this.inp.value = this.inp.value.slice(0,this.inp.value.length-2);                        
                      break;
              }
          })
      })
      
  }
}

class Calc extends Input{
  constructor(){
      super();
  }
  _Calcer(){
      this.btns.forEach(ele => {
          ele.addEventListener('click',(e) => {
              const data = e.target as HTMLElement;
              if(data.innerText.includes('=')){
                  this.inp.value = this.inp.value.slice(0,this.inp.value.length-1);
                  try{
                      this.inp.value = eval(this.inp.value);
                  }catch(e){
                      this.inp.value = 'Error!';
                      setTimeout(() => {
                          this.inp.value = '';
                      }, 800);
                  }
              }
          })
      })
  }
}


class Animater extends Input{
  constructor() {
      super();
  }
  Animater(){
      const randomData = Math.floor(Math.random() * this.btns.length);
      this.btns[randomData].classList.contains('active') ? 
      this.btns[randomData].classList.remove('active'):
      this.btns[randomData].classList.add('active');
  }
}

const inputs = new Input();
inputs._Inp();


const clac = new Calc();
clac._Calcer();


const animate = new Animater();
setInterval(function() {
  animate.Animater();
}, 100);


