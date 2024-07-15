const display=document.querySelector('.display');
const range =document.querySelector('#range');
const rangeDisplay =document.querySelector('#range-display');
const InsertionSort =document.querySelector('#InsertionSort');
const BubbleSort =document.querySelector('#BubbleSort');


let rangeFlag=true;
let sortFlag=true;


let barsLen=[];
let bars=[];

//handle slider
let rangeValue=30;
createBars();
function setRange(){
    range.value = rangeValue;
    rangeDisplay.innerText = rangeValue;
    createBars();
}
range.addEventListener('input', (e) => {
        if(rangeFlag===true)
        {
            rangeValue = e.target.value;
            setRange();
        }
        
    })
//creating bars
function createBars(){
    console.log(rangeValue);
    //bars=[];
         barsLen=[];
         bars=[];
    display.innerHTML='';
    for(let i=0;i<rangeValue;i++){
        const newDiv=document.createElement("div");
        newDiv.className="bar";
        display.appendChild(newDiv);
        let h=generateHeight();
        barsLen.push(h);
        h=h+"px";
        newDiv.style.height=h;
        bars.push(newDiv);
        
    }
    
    //
}
//generate bar height
function generateHeight(){
    let height=Math.floor(Math.random()*(400-50)+50);
    return height;
}
//callback function for delay
async function delay(milliseconds) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, milliseconds);
      });
    }
//swap function
    function swap(el1, el2) {
        let temp = el1.style.height;
        el1.style.height = el2.style.height;
        el2.style.height = temp;
        
    }

//sorting algorithms and buttons
    BubbleSort.addEventListener('click',bubbleSort);
   
    InsertionSort.addEventListener('click',insertionSort);
async function bubbleSort(){
    if(sortFlag===true){ 
    makeDisable();
     
    let n=barsLen.length;
    for(let i=0;i<n-1;i++){
       
        for(let j=0;j<n-i-1;j++)
        {
            
            bars[j].style.backgroundColor="red";
            bars[j+1].style.backgroundColor="red";
            if(parseInt(bars[j].style.height)>parseInt(bars[j+1].style.height)){
                
                await delay(500);
                swap( bars[j],bars[j+1]);
            }
                 bars[j].style.backgroundColor="black";
                bars[j+1].style.backgroundColor="black";
            
        }
        bars[n-i-1].style.backgroundColor="green";
    }
    bars[0].style.backgroundColor="green";
    makeInable();
  
    }
}
async function insertionSort(){
    if(sortFlag===true){ 
    makeDisable();
     
    let n=barsLen.length;
    bars[0].style.backgroundColor="green";
    for(let i=1;i<n;i++){
       let j=i-1;
       let key=bars[i].style.height;
       bars[i].style.backgroundColor="blue";
       while(j>=0 && parseInt(bars[j].style.height)>parseInt(key))
       {
        bars[j].style.backgroundColor="blue";
        bars[j+1].style.height=bars[j].style.height;
        await delay(500);
        j--;
        for(let k = i; k >= 0; k--){
            bars[k].style.background = 'green';
        }
        
        
       }
       bars[j + 1].style.height = key;
       // color
       bars[i].style.background = 'green';
        
    }
   
    makeInable();
  
    }
}
function makeDisable(){
    
    range.disabled=true;
    sortFlag=false;
    
    
}
function makeInable(){
   
     sortFlag=true;
     range.disabled=false;
}