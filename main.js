const frequent = document.querySelectorAll('.freq');

frequent.forEach(freq =>{
    freq.addEventListener('click',() => {   
        freq.classList.toggle('open');
    })
})

var myindex=0;
slideshow();
function slideshow(){
    var x=document.getElementsByClassName("slide");
    var i;
    for(i=0;i<x.length;i++){
        x[i].style.dislplay="none";

    }
    myindex++;
    if(myindex>x.length){
        myindex=1
    }
    x[myindex-1].style.display="block";
    setTimeout(slideshow,3000);
}
