/*let a= parseInt(prompt("Enter number: "));
let b= parseInt(prompt("Enter number: "));
let sum=a+b;
console.log(sum);

let c= parseInt(prompt("Enter number: "));
let d= parseInt(prompt("Enter number: "));
let sub=c-d;
console.log(sub);

let a= parseInt(prompt("Enter number: "));
let b= parseInt(prompt("Enter number: "));
let mul=a*b;
console.log(mul);

let c= parseInt(prompt("Enter number: "));
let d= parseInt(prompt("Enter number: "));
let div=c/d;
console.log(div);

let age=10;
let phone= 7463548037;
console.log(age);
console.log(phone);

let a=7;
let b=5;
let perimeter=2*(a+b);
let area=a*b;
console.log(perimeter);//rectangle
console.log(area);//rectangle 

let pie=3.14;
let r=6;
let perimeter=2*pie*r;
let area=pie*r**2;
console.log(perimeter);//circle
console.log(area);//circle

let hours=parseInt(prompt("enter hours"));
let minute=parseInt(prompt("enter minnute"));
let transfer1=hours*60**2;
let transfer2=minute*60;
console.log(transfer1);
console.log(transfer2);

let meter=parseInt(prompt("enter meter"));
let centimeter=meter*100;
let kilometer=meter/1000;
console.log(centimeter);
console.log(kilometer);

let a=50;
let b=10;
let angle=180-(a+b);
console.log(angle);

let cent=prompt("entercent");
let farehite= (cent*9/5)+32;
console.log(farehite);

let pie=3.14;
let r=prompt("enter r");
let area=pie*r**2;
console.log(area);
let perimeter=2*pie*r;
console.log(perimeter);
let diameter=pie*r;
console.log(diameter);

let volume=prompt("enter");
let pie=3.14;
let sphere= ((4/3)*pie)*volume**3;
console.log(sphere);

let h=15;
let perhours=0.621371*h;
console.log(perhours);

//let amount=prompt("enter amount");
let b=(2000,500,200,100,50,20,10,5,2,1);
for(let i=1;i<=2000;i++){

}

let second=prompt("enter second");
let hour=Math.round(second/3600);
let minute=Math.round(second%3600/60);
let sec=Math.round(second%3600%60);
console.log(hour);
console.log(minute);
console.log(sec);

/*let days=prompt("enter days" );
let year=Math.round(days/365);
let month=Math.round(days%365/30);
let day= Math.round(days%365%30);
console.log(year);
console.log(month);
console.log(day);*/


/*let a=prompt("enter number");
let square=a**2;
console.log(square);
let qube=a**3;
console.log(qube);

let a=2;
let b=3;
let temp;
 temp=a;
 a=b;
 b=temp;
console.log(a);
console.log(b);

let a=2;
let b=3;
a=a+b;
b=a-b;
a=a-b;
console.log(a);
console.log(b);

let u=prompt("enter");
let t=prompt("enter");
let f=prompt("enter");
let s=u*t+(1/2)*f*t**2;
console.log(s);

let a=4;
let b=6;
let moduls=a%b;
console.log(moduls); 

let p=prompt("enter");
let t=prompt("enter");
let r=prompt("enter");
let a=p*(1+r*t);
console.log(a); 

let p=prompt("enter");
let t=prompt("enter");
let r=prompt("enter");
let n=prompt("enter");
let a=p*(1+r/n)**n*t;
console.log(a); 

let base=prompt("enter");
let height=prompt("enter");
let triangle=(1/2)*base*height;
console.log(triangle); 

let a=6,b=2;
let c=9,d=3;
let point=(a-b)**2 + (c-d)**2;
console.log(point); 

let hour1=5,minute1=50;second1=40;
let hour2=2,minute2=20;second2=50;
let sum1=(hour1+hour2);
let sum2=(minute1+minute2)
let sum3=(second1+second2)
console.log(sum1);
console.log(sum2);
console.log(sum3); 

let a=prompt("enter no.");
let b=prompt("enter no");
if(a>b){
    alert("maximum");
}
else{
    alert("minimum");
} 

function div5(number) {
    return number % 5 === 0;
}
const num = prompt("enter no");
   if (div5(num)) {
        console.log(` is divisible `);
   } else {
        console.log(`is not divisible `);
   } 

let a=prompt("enter no");
if(a>0){
    console.log("positive");
}
else{
    console.log("negative"); 
} 

let a=prompt("enter no");
let b=prompt("enter no");
if (a%b===0) {
    console.log(` is divisible `);
} else {
    console.log(`is not divisible `);
} 

let a=prompt("enter no");
let i=9;
    if(a>i){
        console.log("double digit");
    }
    else{
        console.log("single digit"); 
    } 

 let year=prompt("enter year");
 if(year%4==0){
    console.log("leap year");
 }
 else{
    console.log("not leap year");
 } 

 let num=prompt("enter num");
 if(num%2==0){
    console.log("even");
 }
 else{
    console.log("odd");
 } 

let a=prompt("enter no");
let b=prompt("enter no");
if(a==b){
    console.log("equal");
 }
 else{
    console.log("not equal");
 } 

let a=3;
let b=3;
let rectarea=a*b; //9
let r=3;
let circlearea=3.14*r**2; //28.26
if(rectarea>circlearea){
    console.log("big rectangle");
}
else{
    console.log("big circle");
} 

let a=50;
let b=50;
let c= 40;
if(a+b+c==180){
    console.log("posible");
}
else{
    console.log(" not posible");
}

let buy=prompt("enter");
let sell=prompt("enter");
if(buy<sell){
    console.log("profit"); 
}
else{
    console.log("loss"); 
} 

let a=50;
let b=10;
let c= 40;
if(a>b && a>c){
    console.log("max a"); 
}
else if(b>a && b>c){
    console.log("max b"); 
}
else if(c>a && c>b){
    console.log("max c"); 
}
else{
    console.log("min"); 
} 
if(a<b && a<c){
    console.log("min a"); 
}
else if(b<a && b<c){
    console.log("min b"); 
}
else if(c<a && c<b){
    console.log("min c"); 
}
else{
    console.log("min"); 
} 

let age=prompt("enter age");
let address= "india";
let stay =prompt("stay in india")
if(age<18 || stay>5){
 console.log("eligeble")
}
else{
    console.log("not eligeble")
} 

let age=prompt("enter age");
let address= "india";
let stay =prompt("stay in india")
if(age<18 || stay>5){
 console.log("eligeble for apply adhar card")
}
else{
    console.log("not eligeble for apply adhar card ")
} 

let year=prompt("enter year");
 if((year%4==0 && year%100!=0)||(year%400==0)){
    console.log("leap year");
 }
 else{
    console.log("not leap year");
} 

let a=prompt("enter");
let b=prompt("enter");
let c= prompt("enter");
if(a==b==c){
    console.log("equilateral");
}
else if(a==b || b==c || a==c){
    console.log(" isosceles");
}
else{
    console.log("scalene");
} 

let a=prompt("enter");
let b=prompt("enter");
let c= prompt("enter");
if(a**2+b**2>c**2){
    console.log("acute");
}
else if(a**2+b**2==c**2){
    console.log(" obtuse");
}
else{
    console.log("right triangle");
} 

let num=prompt("enter")
if(num==12 || num==1 || num==2){
    console.log("winter")
}
else if(num==3 || num==4 || num==5){
    console.log("summer")
}
else if(num==6 || num==7 || num==8){
    console.log("monsoon")
}
else if(num==9 || num==10 || num==11){
    console.log("autumn")
} 

let m=prompt("enter")
if(m>80){
    console.log("a")
}
else if(m>60 && m<80){
    console.log("b")
}
else if(m>40 && m<60){
    console.log("c")
}
else{
    console.log("d")
} 

let a=3,b=4,c=5;
let x=6;
let d=a*x**2+b*x+c
console.log(d) 

let year=prompt("enter year")
let a=prompt("enter")
if((year%4==0 && year%100!=0)||(year%400==0)){
    if(a==31){
        console.log("jan")
        console.log("march")
        console.log("may")
        console.log("july")
        console.log("august")
        console.log("december")
    }
    else if(a==30){
        console.log("april")
        console.log("june")
        console.log("sep")
        console.log("nov")
    }
    else if(a==29){
        console.log("feb")
    }
}
else{
    if(a==31){
        console.log("jan")
        console.log("march")
        console.log("may")
        console.log("july")
        console.log("august")
        console.log("december")
    }
    else if(a==30){
        console.log("april")
        console.log("june")
        console.log("sep")
        console.log("nov")
    }
    else if(a==28){
        console.log("feb")
    }
} 

let charge=prompt("enter")
if(charge<=50){
    final=charge*0.50
    console.log(final)
}
else if(charge<=100){
    final=charge*0.75
    console.log(final)
}
else if(charge<=110){
    final=charge*1.20
    console.log(final)
}
else if(charge>250){
    final=charge*1.50
    console.log(final)
} */

let basic=prompt("enter")
if(basic<=10000){
    gross=basic+20%+80%
    console.log(gross)
}
else if(basic<=20000){
    gross=basic+25%+90%
    console.log(gross)
}
else if(basic<20000){
    gross=basic+30%+95%
    console.log(gross)
}