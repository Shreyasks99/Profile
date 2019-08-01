function factorial() {
    num = parseInt(document.getElementById("num").value)
    res = 1
    for(i=2;i<=num;i++){
        res *=i
    }
    message = "Factorial of "+num+" is "+res
    document.getElementById("res").innerHTML ="<h2>"+message+"<h2>"
}
function sum_of_digits(){
    num = parseInt(document.getElementById("num").value)
    sum = 0
    temp = num
    while (num!=0){
        sum +=num%10
        num = num /10
        num = parseInt(num)
    }
    message = "Sum of "+temp+" is "+sum
    document.getElementById("res").innerHTML ="<h2>"+message+"<h2>"   
}
function palindrome(){
    num = parseInt(document.getElementById("num").value)
    reverse = 0
    temp = num
    while(num!=0){
        remainder = num%10
        reverse = remainder + reverse*10
        num = num/10
        num = parseInt(num)
    }
    if(temp===reverse){
        message = temp+" is a palindrome"
    }
    else{
        message = temp+" is a not palindrome"
    }
        document.getElementById("res").innerHTML ="<h2>"+message+"<h2>"
}
function reverse_n(){
    num = parseInt(document.getElementById("num").value)
    res = 0
    temp = num
    while(num!=0){
        remainder = num%10
        res = remainder + res*10
        num = num/10
        num = parseInt(num)
    }
    message = "Reverse of "+temp+" is "+res
    document.getElementById("res").innerHTML ="<h2>"+message+"<h2>"
}