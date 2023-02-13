var navbar=document.querySelector(".navbar");
const mode=document.querySelector(".btn-mode");
var nav_toggle=document.querySelector(".navbar-toggler");
var nav_collapse=document.querySelector(".navbar-collapse");
// antes do carregamento
   (function(){
    var main=document.querySelector(".main-content");
    
    // var container=document.querySelector(".loading");
    var carregamento=document.querySelector(".loading");
    setTimeout(function(){
        // container.remove(carregamento);
        carregamento.setAttribute("class"," loading d-none");
        navbar.setAttribute("class","navbar navbar-expand-lg fixed-top");
        main.setAttribute("class","main-content mt-5");
        mode.classList.remove('d-none');
        

    // console.log(carregamento);  
    },3450);
    
   })();
   
//    navbar transparente
window.addEventListener('scroll', function(){
    if(this.window.pageYOffset>100 && !nav_collapse.classList.contains("d-none"))
    navbar.classList.add('scrolled','shadow-sm');
    else navbar.classList.remove('scrolled','shadow-sm');
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
    // kunai1.addEventListener('mouseover',function(){ 
    // this.src="img/naruto/ligth-mode/minato (2).png";
    //     this.classList.remove('kunai-70');
    //     minato.src="img/naruto/ligth-mode/kunai.png";
    //     minato.classList.add("kunai-width");
    //     setTimeout(function(){
    //         kunai1.src="img/naruto/ligth-mode/kunai.png";
    //     kunai1.classList.add('kunai-70');
    //     minato.src="img/naruto/ligth-mode/minato (2).png";
    //     minato.classList.remove("kunai-width");
    //     },1000);
        
    //     // minato.classList.remove("img-fluid");
        
    // });
    // kunai1.addEventListener('mouseout',function(){
    //     this.src="img/naruto/ligth-mode/kunai.png";
    //     kunai1.classList.add('kunai-70');
    //     minato.src="img/naruto/ligth-mode/minato (2).png";
    //     minato.classList.remove("kunai-width");
    // });
    // kunai2.addEventListener('mouseover',function(){

    // });



    // troca para dark mode
    mode.addEventListener('click',(event)=>{
        var body=document.querySelector("body");
        var img_mode=document.querySelector(".img-mode");
        var img_folha=document.querySelector(".img-folha");
        var img_uchiha=document.querySelector(".img-uchiha");
        var img_akatsuki=document.querySelector(".img-akatsuki");
        var experience=document.querySelector(".experience");
        var education=document.querySelector(".education");
        var title_skills=document.querySelector(".title-skills");

        if(body.classList.contains("light-mode")){
           
            img_mode.src="img/rinegan.png";
            img_folha.src="img/naruto/dark-mode/simbolo da folha.png";
            img_akatsuki.src="img/naruto/dark-mode/akatsuki.png";
            img_uchiha.src="img/naruto/dark-mode/cla uchiha.png";
            experience.classList.add("bg-info");
            education.classList.add("bg-info");
            // title_skills.classList.replace("text-danger","text-info");
            body.classList.replace("light-mode","dark-mode");
            return
        }else{
           
            img_mode.src="img/mangeki sharinga.png";
            img_folha.src="img/naruto/ligth-mode/simbolo da folha.png";
            img_akatsuki.src="img/naruto/ligth-mode/akatsuki.png";
            img_uchiha.src="img/naruto/ligth-mode/cla uchiha.png";
            experience.classList.remove("bg-info");
            education.classList.remove("bg-info");
            // title_skills.classList.replace("text-info","text-danger");
            body.classList.replace("dark-mode","light-mode");  
        }
    });
// function dark_mode(mode){
//     if(mode=="dark-mode"){

//     }
// }


nav_toggle.addEventListener('click',(event)=>{
    console.log(nav_collapse);
    if(nav_collapse.classList.contains("d-none")){
      nav_collapse.classList.remove("d-none"); 
      navbar.classList.toggle('scrolled');
      navbar.classList.add('shadow-sm')
      return
    }
    else {
        nav_collapse.classList.add("d-none");
        navbar.classList.toggle('scrolled');
        navbar.classList.remove("shadow-sm");
        return
    }
    
});