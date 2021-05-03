var arr=[
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [1, 0, 1, 2],
];
console.log(arr)

document.write("<h1>Numeric Counting from 1 to 10</h1>")
for(var i=0; i<=10; i++)
{document.write("</br>",i)}


var j=+prompt("Enter a number to show its multiplication table")
var k=+prompt("Enter length of a multiplication table")
document.write("<h1>Table of ",j," is <br/></h1>")
for (i=0; i<=k;i++)
{document.write("</br>",j,"*",i,"=",i*j)}


var fruits=["apple","banana","orange","mango","strawberry"];
for(i=0;i<fruits.length;i++)
{document.write("</br>Element at index ",i," is ",fruits[i])}


var count;
document.write("<h1>Counting</h1><br/>")
for(count=1;count<=15;count++)
{document.write(count,",")};

document.write("<br/><h1>Reverse Counting</h1><br/>")
for(count=10;count>=1;count--)
{document.write(count,",")};

document.write("<br/><h1>Even</h1><br/>")
for(count=1;count<=20;count++)
{count++;
    document.write(count,",")};

    document.write("<br/><h1>Odd</h1><br/>")
for(count=1;count<=19;count=count+2)
{
    document.write(count,",")};

    document.write("<br/><h1>Series</h1><br/>")
    for(count=2;count<=20;count=count+2)
    {
        document.write(count,"k,")};

    var A=["cake","apple pie","cookie","chips","petties"];
        B=prompt("Welcome to ABC Bakery, What do you want to order Ma'am/Sir?")
        var b=true;
        for(i=0;i<A.length;i++)
        {if(B===A[i])
        {document.write("<br/><br/>",B, " is <b>available</b> at index  ",i,"  in our Bakery"),b=false;break;
        }}
        for(i=0;i<A.length;i++){
                if((B!==A[i]) && (b===true))
        {document.write("<br/><br/>We are sorry.",B," is  <b>not available</b> in our Bakery</h1>")}break;}
        
var arr=[24,53,78,91,12];var k=0;
for (i=0;i<arr.length;i++)
{for(j=0;j<arr.length;j++){if(arr[i]>arr[j]){k=arr[i];}}}
document.write("<br/>",k ," is the greatest number")

for (i=0;i<arr.length;i++)
{for(j=0;j<arr.length;j++){if(arr[i]<arr[j]){k=arr[i];}}}
document.write("<br/>",k ," is the smallest number</br>")

var k=0;
for(i=1;i<=20;i++){
    k=k+5;
document.write(k,",")}
