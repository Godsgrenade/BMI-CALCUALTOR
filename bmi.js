function calc()
{
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var op = weight/(height*0.01*height*0.01);
    var ans=document.getElementById("ans");
    var cmt = document.getElementById("cmt");
    ans.innerHTML = ""
    ans.innerHTML += "Your BMI is "+op;
    var img = document.getElementById("img");
    if (op<18.5)
    {
        
        img.setAttribute("src","lean.jpeg");
        cmt.innerHTML='Tip: Go to gym and gain some weight';
    }
    else if (op>=18.5 && op<=25)
    {
        img.setAttribute("src","normal.jpeg");
        cmt.innerHTML='No tips needed.Keep it up chad';
    }
    else if (op>25&&op<=30)
    {
        img.setAttribute("src","overweight.jpeg");
        cmt.innerHTML='Dooooood... you are overweight!';
    }
    else if (op>30)
    {
        img.setAttribute("src","obesity.jpeg");
        cmt.innerHTML='Tip: Watch STR videos 1hr a day.'
    }
    
}
function clr()
{
    document.getElementById("weight").value='';
    document.getElementById("height").value='';
    document.getElementById("ans").innerHTML='';
    document.getElementById("img").setAttribute("src","");
    document.getElementById("cmt").innerHTML='';
}