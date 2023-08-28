const chartLists = document.querySelectorAll('#community .chat-list .row'),
      chartImages = document.querySelectorAll('#community .chat-img .img'),
      chartContainer = document.querySelector('#community .chat-container');

let count = 0;

window.onload = ()=>{
    chartLists[0].classList.add('active');
    chartImages[0].classList.add('active');
}

function removeList(){
    chartLists.forEach(list =>{
        list.classList.remove('active');
    })
    chartImages.forEach(image =>{
        image.classList.remove('active');
    })
}

chartLists.forEach((list , index) =>{
    list.onclick = ()=>{
        removeList();
        chartLists[index].classList.add('active');
        chartImages[index].classList.add('active');
        count = index;
    }
})

function  changeList(){
    if (count != chartLists.length - 1){
        count += 1;
    }else{
        count = 0;
    }
        removeList();
        chartLists[count].classList.add('active');
        chartImages[count].classList.add('active');
}
chartContainer.onmouseover = ()=>{
    chartContainer.classList.add('active');
}
chartContainer.onmouseout = ()=>{
    chartContainer.classList.remove('active');
}
setInterval(()=>{
    if(!chartContainer.classList.contains('active')){
        changeList();
    }
} , 5000)