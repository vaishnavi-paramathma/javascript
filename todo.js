let fwsa = [];

function vaishu() {
    event.preventDefault();
    let squad = document.getElementById("jeru").value;
    fwsa.push(squad);
    let freshschools = JSON.stringify(fwsa);//object changed to string
    localStorage.setItem("freshworks", freshschools);

    reversefunction();
}
function reversefunction() {
    const freshdesk = localStorage.getItem("freshworks");
    const reversefreshschools = JSON.parse(freshdesk);//string changed to object
    //object=array
    fwsa = reversefreshschools;

    let initialfwsalist = "";
    for(let i=0; i<reversefreshschools.length; i++){
      let fwsalist = "<li>"+reversefreshschools[i] +"</li>";
      initialfwsalist=initialfwsalist+fwsalist;  
    }
 let fwsamembers = document.getElementById("members");
 fwsamembers.innerHTML=initialfwsalist;
}
 reversefunction();
