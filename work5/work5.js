var str = '<table border="1">'//9x9乘法空表

for(var i=1;i<=9;i++){
    str += '<tr>'
    for(j=1;j<=9;j++){
        str += '<td>&nbsp;</td>'
    }
    str += '</tr>'
}
 str += '</table>'
document.getElementById('table1').innerHTML =str

str = '<table border="1">' //倒九九乘法空表
for(i = 9;i>0;i--){
    str += '<tr>'
    for(var j=i;j>0;j--){
        str += '<td>&nbsp;</td>'
        //str += '<td>' +  j +'*' + i + '=' + j*i +'</td>'（乘法口诀命令）
    }
    str +='</tr>'
}
    str += '</table>'
document.getElementById('table2').innerHTML = str;

str = '<table border="1">' //倒九九乘法表
for(i = 9;i>0;i--){
    str += '<tr>'
    for(var j=i;j>0;j--){
        str += '<td>' +  j +'*' + i + '=' + j*i +'</td>'
    }
    str +='</tr>'
}
str += '</table>'
document.getElementById('table3').innerHTML = str;