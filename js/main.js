let title =document.getElementById('title');
let price =document.getElementById('price');
let taxes =document.getElementById('taxes');
let ads =document.getElementById('ads');
let discount =document.getElementById('discount');
let total =document.getElementById('total');
let count =document.getElementById('count');
let category =document.getElementById('category');
let submint =document.getElementById('submint');




//get total

function gettotal(){
    if(price.value != ''){
        let result = (+price.value + +taxes.value + +ads.value)
        - +discount.value;
        total.innerHTML=result;
        total.style.background='#040';
    }else{
        total.innerHTML=''
        total.style.background='#a00d02'
    }

}

//creat product



let datapro ;

if(localStorage.proudct != null){
    datapro=JSON.parse(localStorage.proudct)
}else{
    datapro=[];
}

submint.onclick=function(){
    let newpro = {
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value,
    };
    datapro.push(newpro)

    //save lockalstorge
    
    localStorage.setItem('proudct', JSON.stringify(datapro) )
    
    cleardata()
}

//clear inputs


function cleardata(){
    title.value='';
    price.value='';
    taxes.value='';
    ads.value='';
    discount.value='';
    total.innerHTML='';
    count.value='';
    category.value='';

}
//read 
//count 
// delete
// update 
//search 
// clean data