function onclickCal() {

    let productView = document.querySelector('#productView');
    productView.style.display="block";

    let size1 = document.querySelector('#f_boxsize').value;
    let size2 = document.querySelector('#s_boxsize').value;
    let size3 = document.querySelector('#t_boxsize').value;

    let plyVal;
    let packOfVal;

    let ply = document.querySelectorAll('.plySizeCheck:checked');
    ply.forEach((checkbox) => {
        plyVal = checkbox.value
    });

    let packof = document.querySelectorAll('.packOfCheck:checked');
    packof.forEach((checkbox) => {
        packOfVal = checkbox.value
    });


    let fbox = document.querySelectorAll('.fbox');
    let sbox = document.querySelectorAll('.sbox');
    let tbox = document.querySelectorAll('.tbox');
    
    let plySize = document.querySelectorAll('.plySize');
    let packOf = document.querySelectorAll('.packOf');


    let fboxCM = document.querySelectorAll('.fboxCM');
    let sboxCM = document.querySelectorAll('.sboxCM');
    let tboxCM = document.querySelectorAll('.tboxCM');

    fbox.forEach((item)=>{
        item.innerHTML = size1;
    })
    sbox.forEach((item)=>{
        item.innerHTML = size2;
    })
    tbox.forEach((item)=>{
        item.innerHTML = size3;
    })

    

    plySize.forEach((item)=>{
        item.innerHTML = plyVal;
    })
    packOf.forEach((item)=>{
        item.innerHTML = packOfVal;
    })

    

    fboxCM.forEach((item)=>{
        item.innerHTML = size1 *  2.54;
    })

    sboxCM.forEach((item)=>{
        item.innerHTML = size2 *  2.54;
    })

    tboxCM.forEach((item)=>{
        item.innerHTML = size3 *  2.54;
    })

}


function ProductDetails(){   
    
    let ProductDetails = document.querySelector('#ProductDetails');
    let Offers = document.querySelector('#Offers');
    let SafetyCompliance = document.querySelector('#SafetyCompliance');

    
    ProductDetails.classList.add('active');
    Offers.classList.remove('active');
    SafetyCompliance.classList.remove('active');


    let ProductDetails1 = document.querySelector('.ProductDetails');
    let Offers2 = document.querySelector('.Offers');
    let SafetyCompliance3 = document.querySelector('.SafetyCompliance');

    ProductDetails1.style.display = "block";
    Offers2.style.display = "none";
    SafetyCompliance3.style.display = "none";
}

function Offers(){
       
    let ProductDetails = document.querySelector('#ProductDetails');
    let Offers = document.querySelector('#Offers');
    let SafetyCompliance = document.querySelector('#SafetyCompliance');

    
    ProductDetails.classList.remove('active');
    Offers.classList.add('active');
    SafetyCompliance.classList.remove('active');
    
    let ProductDetails1 = document.querySelector('.ProductDetails');
    let Offers2 = document.querySelector('.Offers');
    let SafetyCompliance3 = document.querySelector('.SafetyCompliance');

    ProductDetails1.style.display = "none";
    Offers2.style.display = "block";
    SafetyCompliance3.style.display = "none";
}

function SafetyCompliance(){
       
    let ProductDetails = document.querySelector('#ProductDetails');
    let Offers = document.querySelector('#Offers');
    let SafetyCompliance = document.querySelector('#SafetyCompliance');

    
    ProductDetails.classList.remove('active');
    Offers.classList.remove('active');
    SafetyCompliance.classList.add('active');
    
    let ProductDetails1 = document.querySelector('.ProductDetails');
    let Offers2 = document.querySelector('.Offers');
    let SafetyCompliance3 = document.querySelector('.SafetyCompliance');

    ProductDetails1.style.display = "none";
    Offers2.style.display = "none";
    SafetyCompliance3.style.display = "block";
}