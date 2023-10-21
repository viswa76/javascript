var sum=""
for (var a = 0; a < 1000; a++)
{
    if(a%3==0 &&a%5 ==0)
    {
        sum += a;
        sum += "\n"
    }
}
console.log(sum);
console.log(sum.length)
