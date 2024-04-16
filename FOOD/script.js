function myFun(){
    let searchVal = document.getElementById("inp").value .toUpperCase();
    let table = document.getElementsByTagName("Table")
    let tr = document.getElementsByTagName("tr");

    let front = document.querySelector(".main")

    for(let i = 0; i<tr.length; i++){
        let td = tr[i].getElementsByTagName("td")[0];
        if(td){
            let text = td.innerText;
            if(text.toLocaleUpperCase().indexOf(searchVal) > - 1){
                tr[i].style.display="";
                front.style.display="none"
            }else{
                tr[i].style.display="none"
            }
        }
    }
    if(searchVal == " "){
        front.style.display="flex"
    }
    console.log(searchVal);
}





function nav(){
    let nav = document.querySelector(".nav");
    nav.style.display="block";
    let login = document.querySelector(".login");
    login.style.display="none";
}

function login(){
    let login = document.querySelector(".login");
    login.style.display="block";
    let nav = document.querySelector(".nav");
    nav.style.display="none";
}





