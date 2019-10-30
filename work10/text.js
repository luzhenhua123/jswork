function stat(){
    let str = document.getElementById("str").value
    let obj = {}
    let n = str.split("").sort()
    console.log(n)
    for(var i=0;i<n.length;i++){
        box = n[i]
        if(obj[box]){
            obj[box]++;
        }else{
            obj[box] = 1;
        }
     

    }
    console.log(obj)
    document.getElementById('result').innerText = JSON.stringify(obj)
}