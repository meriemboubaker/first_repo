var j=0;
var i=0;
var s=0;
var ch='i love coding.'
do {
if ((ch[i]=='a')||(ch[i]=='e')||(ch[i]=='i')||(ch[i]=='y')||(ch[i]=='o')||(ch[i]=='u'))
{s=s+1;}
else if ((ch[i]==' ')&&(ch[i+1]!='.'))
{j=j+1;}
i=i+1;}
while (ch[i]!='.')
console.log(i)
console.log(j)
console.log(s)