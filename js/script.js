  var navbar=document.querySelector(".navbar");
// antes do carregamento
   (function(){
    var main=document.querySelector(".main-content");
  
    // var container=document.querySelector(".loading");
    var carregamento=document.querySelector(".loading");
    setTimeout(function(){
        // container.remove(carregamento);
        carregamento.setAttribute("class"," loading d-none");
        navbar.setAttribute("class","navbar navbar-expand-lg fixed-top ")
        main.setAttribute("class","main-content mt-5");
    // console.log(carregamento);  
    },3450);
    
   })();
   
//    navbar transparente
window.addEventListener('scroll', function(){
    if(this.window.pageYOffset>100)
       navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
});

// dowload de CV

function dowload(){
    var file='img/agua.png';
     
    var link= document.getElementById("dowloadlink");
    link.setAttribute('dowload',file);
    console.log(link);
     link.click();
    
    
}

// troca de imagens
    // minato=document.querySelector('.minato');
    // kunai1=document.querySelector('.img-kunai-1');
    // kunai2=document.querySelector('.img-kunai-2');
    kunai1.addEventListener('mouseover',function(){ 
    this.src="img/naruto/ligth-mode/minato (2).png";
        this.classList.remove('kunai-70');
        minato.src="img/naruto/ligth-mode/kunai.png";
        minato.classList.add("kunai-width");
        setTimeout(function(){
            kunai1.src="img/naruto/ligth-mode/kunai.png";
        kunai1.classList.add('kunai-70');
        minato.src="img/naruto/ligth-mode/minato (2).png";
        minato.classList.remove("kunai-width");
        },1000);
        
        // minato.classList.remove("img-fluid");
        
    });
    // kunai1.addEventListener('mouseout',function(){
    //     this.src="img/naruto/ligth-mode/kunai.png";
    //     kunai1.classList.add('kunai-70');
    //     minato.src="img/naruto/ligth-mode/minato (2).png";
    //     minato.classList.remove("kunai-width");
    // });
    kunai2.addEventListener('mouseover',function(){

    });