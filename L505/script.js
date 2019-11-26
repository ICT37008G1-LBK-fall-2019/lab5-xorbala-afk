var s = prompt("laptop/desktop ?");

if(s=="laptop"){
    var l = document.querySelectorAll(".latop-item");
    for(var i=0;i<l.length;i++){
    	l[i].style = "background-color : green";
    }
}

if(s=="desktop"){
    var l = document.querySelectorAll(".desktop");
    for(var i=0;i<l.length;i++){
    	l[i].style = "background-color : blue";
    }
}