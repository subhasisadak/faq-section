let a_id = "a_-1";
let flag = 0;
function showAns(id) {
    // console.log(id);
    // console.log("hi");
    let allAns = document.querySelectorAll(".ans");
    for(let i = 0; i < allAns.length; i++){
        allAns[i].style.height = "0";
    }
    let ans = document.getElementById(id);
    if(a_id === id && flag === 1){
        ans.style.height = "0";
        flag = 0;
    }
    else if(a_id === id && flag === 0){
        ans.style.height = "auto";
        flag = 1;
    }
    else{
        ans.style.height = "auto";
        flag = 1;
        a_id = id;
    }
    
}