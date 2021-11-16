let but = document.getElementById("next");
let video = document.getElementById("video");

let start = document.getElementById("start");
let cont= document.getElementById("container");
let div = document.getElementById("div");
let num1 = 0;
start.addEventListener("click",function(){
    if(num == 0){
    video.play();
    num = 1;

    }else{
         video.pause();
    num = 0;
    }
})

let arr = [
    {
        video:"./Assets/images/Genetics - The Transforming Principle - Lesson 12 _ Don't Memorise (online-video-cutter.com).mp4",
        cont:"#f1f5cb",
        div:"#f1f5cb",
        next:"Next",
    },
    {
        video:"./Assets/images/Genetics - The Transforming Principle - Lesson 12 _ Don't Memorise (online-video-cutter.com) (1).mp4",
        cont:"#f99897",
        div:"#f99897",
        next:"Back",


        

    },
    
]
let num = 0;
but.addEventListener("click",function(){
    num++;
    if(num == 1){
        video.src = arr[num].video;
    cont.style.background = arr[num].cont;
    div.style.background = arr[num].div;
    but.innerHTML = arr[num].next;
    num = -1;
    }else{
        video.src = arr[num].video;
    cont.style.background = arr[num].cont;
    div.style.background = arr[num].div;
    but.innerHTML = arr[num].next;

    }
    
});