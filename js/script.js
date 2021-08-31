

const container=document.querySelector(".app");

const myApp=[
              { 
               type:" INICIAIS ",
               msg:"    ",
               path:"images/letraG",
               structure:[
                           {question:"GU",options:['GULOSEIMAS.jpg','GOLFE.jpg','GIGANTE.jpg','GALINHA.jpg'],key:0},

                           {question:"GA",options:['GIRAFA.jpg','GATO.jpg','GELATINA.jpg' ,'GIRASSOL.jpg'],key:1},

                           {question:"GI",options:['GIZ.jpg','GORILA.jpg','GOTA.jpg','GARFO.jpg'],key:0},
 
                           {question:"GA",options:['GELEIA.jpg','GOLFINHOS.jpg','GALO.jpg','GIGANTE.jpg'],key:2},
                     
                           {question:"GÊ",options:['GOIABA.jpg' ,'GULOSEIMAS.jpg','GARRAFA.jpg','GENIO.jpg'],key:3},

                           {question:"GA",options:['GAVETAS.jpg' ,'GINASTICA.jpg','GEMEAS.jpg','GELADEIRA.jpg'],key:0},
                              
                           {question:"GI",options:['GANGORRA.jpg','GOLA.jpg','GILETE.jpg','GELO.jpg'],key:2},
                              
                           {question:"GA",options:['GINCANA.jpg','GAIVOTA.jpg','GELEIA.jpg','GIRASSOL.jpg'],key:1},
                            
                           {question:"GE",options:['GOLFE.jpg','GAVIAO.jpg','GAVETAS.jpg','GELO.jpg'],key:3},

                           {question:"GA",options:['GARCA.jpg','GORILA.jpg','GOLFINHOS.jpg','GEMEAS.jpg'],key:0},   
               
                              
                           {question:"GI",options:['GINCANA.jpg','GORILA.jpg','GOMA.jpg','GOLA.jpg'],key:0},

                           {question:"GA",options:['GOLA.jpg','GENIO.jpg','GULOSEIMAS.jpg','GARFO.jpg'],key:3}


                          ]
              },

              { 
                   type:" SÍLABAS ",
                   msg:"   ",
                   path:"images/letraG",
                   structure:[
                              {question:"GULOSEIMAS",options:['GAVETAS.jpg','GULOSEIMAS.jpg','GALO.jpg','GARRAFA.jpg'],key:1},

                              {question:"GATO",options:['GATO.jpg','GARRAFA.jpg','GAIOLA.jpg' ,'GALHO.jpg'],key:0},

                              {question:"GIZ",options:['GOTA.jpg','GOLEIRO.jpg','GIZ.jpg','GOLA.jpg'],key:2},
 
                              {question:"GALO",options:['GEMA.jpg','GARAGEM.jpg','GAROTA.jpg','GALO.jpg'],key:3},
                     
                              {question:"GÊNIO",options:['GENIO.jpg' ,'GANGORRA.jpg','GARRAFA.jpg','GALHO.jpg'],key:0},

                              {question:"GAVETAS",options:['GAIVOTA.jpg' ,'GANGORRA.jpg','GAVETAS.jpg','GALHO.jpg'],key:2},
                 
                           
                              {question:"GÊMEAS",options:['GORILA.jpg','GOLFINHOS.jpg','GEMEAS.jpg', 'GIRASSOL.jpg',],key:2},

                              {question:"GARRAFA",options:['GIRASSOL.jpg','GARRAFA.jpg','GIRAFA.jpg','GELADEIRA.jpg'],key:1},

                              {question:"GEMA",options:['GOLFINHOS.jpg','GOLEIRO.jpg','GOTA.jpg','GEMA.jpg'],key:3},
                              
                              {question:"GINCANA",options:['GIZ.jpg','GINCANA.jpg','GORILA.jpg','GALOCHA.jpg'],key:1},

                              {question:"GARFO",options:['GARFO.jpg','GATO.jpg','GALOCHA.jpg','GAFANHOTO.jpg'],key:0}

              ]

             }             
           ]
 // create select element
     const select=document.createElement("select");
           select.setAttribute("onchange","load(this)") 
      for (let j=0;j<myApp.length;j++){
          const option=document.createElement("option");
                option.value=j;
                option.innerHTML=myApp[j].type;
                select.appendChild(option)
      }
     document.querySelector(".quiz-box").appendChild(select)

     //create class
     class App{
           constructor(myApp,container){
                this.app=myApp;
                this.container=container;
                this.index=0;
                this.score=0;
                this.quizSize=this.app.structure.length
                this.optionSize=this.app.structure[0].options.length;
                this.msgEle=this.container.querySelector(".msg"); 
                this.quizEle=this.container.querySelector(".quiz")
                this.optionEle=this.container.querySelector(".option-box");
                this.questionNumber=this.container.querySelector(".question-number");
                this.scoreEle=this.container.querySelector(".score-board"); 
                this.setQuestion();
                this.setOptions();
                this.scoreBoard();

           }

           setQuestion(){ 
               this.msgEle.innerHTML=this.app.msg;
               this.quizEle.innerHTML=this.app.structure[this.index].question;
               this.questionNumber.innerHTML=(this.index+1)+"/"+this.quizSize;
         }

           setOptions(){
                this.optionEle.innerHTML="";
                for(let i=0; i<this.optionSize; i++){
                  const button=document.createElement("button")
                        button.type="button";
                        button.id=i;
                  const img=document.createElement("img");
                        img.src=this.app.path+"/"+this.app.structure[this.index].options[i];
                        button.appendChild(img)
                    this.optionEle.appendChild(button)     
                }
                this.optionClick();

                
                
                
              

           }

           scoreBoard(){
              this.scoreEle.innerHTML=this.score;
           }

           optionClick(){
               const that=this;
               var options=this.optionEle.children;
               for (let i=0; i<options.length; i++) {
                   options[i].addEventListener("click",function(){
                      const span=document.createElement("span");
                     if(this.id==that.app.structure[that.index].key){
                         span.innerHTML="  =D  ";
                         this.classList.add("correta");
                         that.score++;
                         that.scoreBoard();
                      }
                      else{
                          span.innerHTML="  =(  ";
                          this.classList.add("errada");
                      }
                      this.appendChild(span);

                      
                     for (let j=0; j<that.optionEle.children.length; j++) {
                         
                          if(this.id==that.optionEle.children[j].id) {

                          }
                           // you can also show the correct answer when you click on wrong option
                           else if (that.optionEle.children[j].id==that.app.structure[that.index].key){
                                var span2=document.createElement("span")
                                span2.innerHTML=" =P ";
                                that.optionEle.children[j].appendChild(span2)
                               that.optionEle.children[j].classList.add("correta");
                          }
                          else{
                               that.optionEle.children[j].classList.add("hide"); 

                          }
                    
                    }
                    this.style.pointerEvents="none";
                    that.index++;
                    if(that.index>that.quizSize-1){
                        setTimeout(function(){
                          that.quizOver();
                        },2000);
                        that.quizOver();
                    }
                    else{
                    // next quiz update
                    setTimeout(function(){
                      that.setQuestion()
                      that.setOptions()
                    },2000)
                    }

                    })

                }

           }
           
           
           
           quizOver(){

              this.msgEle.innerHTML="";
              this.quizEle.innerHTML="";
              if (this.score > this.quizSize/2){
              this.optionEle.innerHTML="<h1><img src='images/over.png'/><br> </h1>";

              }
              else{
                this.optionEle.innerHTML="<h1><img src='images/game.png'/><br> </h1>";
           
  
            //28 - 06 - 2021 - 4 Tentativa - Desapareceu tudo novamente

              }
               
             //28-06-2021 - 3 Tentativa - Apareceu no gameover uma vez deu certo, na segunda vez os confetis.
           //Confetti começa aqui
           
              
       
       // Apagar até aqui
// custom js
 confetti.start();
 


           
              }


      //28-06-2021 - 2 Tentativa - SUMIU TUDO
      
 
     }
    // add 28 - 06 - 2021 - APARECEU DESTE A PRIMEIRA PÁGINA
      

       // create object without onchange of select
       const app1=new App(myApp[0],container) 
            
      function load(ele) {
        const app1=new App(myApp[ele.value],container)
      }

     



  
   
   
 


