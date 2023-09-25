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
        total.innerHTML='';
        total.style.background='#a00d02';
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
    showdata()
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
function showdata(){
    let table ='';
    for (let i =0 ; i< datapro.length;i++ ){
        table += `
        <tr>
        <td>${i}</td>
        <td>${datapro[i].title}</td>
        <td>${datapro[i].price}</td>
        <td>${datapro[i].taxes}</td>
        <td>${datapro[i].ads}</td>
        <td>${datapro[i].discount}</td>
        <td>${datapro[i].count}</td>
        <td>${datapro[i].category}</td>
        <td><button id="update">update</button></td>
        <td><button id="delete" onclick="deletedata(   ${i}   )">delete</button></td>

    </tr>

        `
        
    }
    document.getElementById('tbody').innerHTML=table;
    let btndelete =document.getElementById('deleteall')
    if(datapro.length > 0){
        btndelete.innerHTML=`<button onclick="alldelete()" >deleteALL</button>`;
    }
    else{
        btndelete.innerHTML='';
    }


}showdata()

// delete
function deletedata(i){
    datapro.splice(i,1);
    localStorage.proudct=JSON.stringify(datapro)
    showdata()
}

function alldelete(){
    localStorage.clear()
    datapro.splice(0)
    showdata()
}
//count 
// update 
//search 
// clean data
 