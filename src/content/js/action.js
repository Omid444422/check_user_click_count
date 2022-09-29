var counter = document.getElementById("counter");
const btn_user_click = document.getElementById("btn_user_click");
const btn_reset = document.getElementById("btn_reset");
var txt_timer = document.getElementById("txt_timer");
var timer_count = document.getElementById("timer_count");
var time = 0;
var click_count = 0;
var isRunning = false;


function time_run(){
    if(time <= txt_timer.value){
        btn_user_click.removeAttribute("disabled");
        btn_user_click.classList.remove("btn-outline-danger");
        btn_user_click.classList.add("btn-outline-success");


        timer_count.innerHTML = `time: <b>${time}</b>`;
        counter.innerHTML = "click count: "+ click_count;

        txt_timer.setAttribute("disabled","disabled");

    }else{

        btn_user_click.setAttribute("disabled","disabled");
        btn_user_click.classList.remove("btn-outline-success");
        btn_user_click.classList.add("btn-outline-danger");

        timer_count.classList.remove("alert-success");
        timer_count.classList.add("alert-danger");

        timer_count.innerHTML = "ended";
        txt_timer.removeAttribute("disabled");
    }
}

btn_user_click.addEventListener("click",function(){
       
   if(!isRunning){
    isRunning = true;
    var interval = setInterval(() => { 
            time_run();
        time +=1;
    },1000);

   }

 var end_interval = setInterval(() => {
    if(time > txt_timer.value){
        clearInterval(interval);
        time_run();
    }
  },1000);

  if(time <= txt_timer.value){
    click_count+= 1;
  }

  if(time == txt_timer.value){
    time_run();
  }

 btn_reset.addEventListener("click",function(){
    clearInterval(interval);
    clearInterval(end_interval);
 });

});


btn_reset.addEventListener("click",function(){
    time = 0;
    isRunning = false;
    click_count = 0;

    timer_count.innerHTML = `time:`;
    counter.innerHTML = "click count: ";
    txt_timer.removeAttribute("disabled");

    btn_user_click.removeAttribute("disabled");
    btn_user_click.classList.remove("btn-outline-danger");
    btn_user_click.classList.add("btn-outline-success");

    timer_count.classList.add("alert-success");
    timer_count.classList.remove("alert-danger");

});


