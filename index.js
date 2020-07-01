var isclicked = false;
function del(k)
{   if (isclicked == true)
    {
        return;
    }
    isclicked = true;
    pi=document.getElementById("main");   
    o=window.getComputedStyle(pi).getPropertyValue("opacity");
    if(o==1){
        return;
    }
    h=countLeft();
    w=0;
    x=1;
    while(x<=8)
    {
        y=getRnd(1,8);
        if (k==y)
        {
            y=getRnd(1,3);
            if (y==2)
            {
                w=1;
            }
            else if (y==3)
            {
                w=2;
            }
            x=8;
        }
        x=x+1;
    }
    if (w==0)
    {
        document.getElementById("main").src="win.gif";
        setTimeout(function(){
            document.getElementById("main").src="mp.jpg";
            var pic=document.getElementById(k);
            fadeOut(pic);
            if (h==1)
            {
                alert("YOU HAVE DESTROYED ALL THE GALAXIES");
                document.getElementById("note1").style.display="block";
                document.getElementById("note2").style.display="none";
                document.getElementById("ref").style.display="block";
            }
            isclicked = false
        },2500);
    }
    else if(w==1)
    {
        document.getElementById("main").src="draw.gif";
        setTimeout(function(){
            document.getElementById("main").src="mp.jpg";
            alert("YOU COULD NOT DESTROY THAT GALAXY");
            isclicked = false
        },2500);
    }
    else
    {
        document.getElementById("main").src="lose.gif";
        setTimeout(function(){
            document.getElementById("main").src="lost.jpg";
            document.getElementById("main").style.opacity=1;
            alert("YOU WERE DEFEATED");
            document.getElementById("note3").style.display="block";
            document.getElementById("note2").style.display="none";
            document.getElementById("ref").style.display="block";
            isclicked = false
        },2500);
    }
}
function fadeOut(element) {
    var op = 0.5;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}
function delrd()
{
    r=0
    while(true)
    {
        r=getRnd(1,8);
        var pic3=document.getElementById(r);
        var dis2=window.getComputedStyle(pic3).getPropertyValue("display");
        if (dis2!="none")
            break
    }
    del(r);
}
function countLeft()
{
    i=1
    c=0
    while(i<=8)
    {
        var pic2=document.getElementById(i);
        var dis=window.getComputedStyle(pic2).getPropertyValue("display");
        if (dis!="none")
        {
            c=c+1;
        }
        i=i+1;
    }
    return c;
}
function getRnd(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function refresh()
{
    location.reload();
}