var items = document.getElementById("gntd");
var letters = ["A","B","C","D","E","a","b","c","d","e","!","@","$"]; 
function generatePw(){
    console.log("clicked");
    randomPw();
}
function randomPw(){
    
    for(i=0;i<letters.length;i++){
        var ltr=(letters[i]);
        var l1 = letters[Math.floor(Math.random()*letters.length)];
        var l2 = letters[Math.floor(Math.random()*letters.length)];
        var l3 = letters[Math.floor(Math.random()*letters.length)];
        var l4 = letters[Math.floor(Math.random()*letters.length)];
        var l5 = letters[Math.floor(Math.random()*letters.length)];
        var l6 = letters[Math.floor(Math.random()*letters.length)];
        var all = l1+l2+l3+l4+l5+l6;

        console.log(all);

    }
    items.innerHTML=all;
}