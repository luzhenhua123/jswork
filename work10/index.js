function monkey(){
    let total = document.getElementById("monkeytotal").value
    let kick = document.getElementById("monkeykick").value
    total = parseInt(total) && Number(total)
    kick = parseInt(kick) && Number(kick)
    if(isNaN(total)|| isNaN(kick)){
        alert('请输入数字')
        return
    }
   let monkey=[]
   for (let i=1;i<=total;i++ ){
       monkey.push(i)
   }
   let i=0
   while(monkey.length>1){
       i++;
       head = monkey.shift()
       if(i%kick!=0){
           monkey.push(head);

       }
   }
   document.getElementById('monkeyking').innerText = monkey[0]

    }

    function stat(){
        let str = document.getElementById("str").value
        let obj = {}
    }
        var newObj = {};
        for (var i = 0; i < str.length; i++) {
            if (!newObj[str.charAt(i)])
                newObj[str.charAt(i)] = 1;
            else
                newObj[str.charAt(i)] += 1;
        }
        console.log(newObj )
        var maxObj ={
            maxkey :"",
            maxvalue:0
        }
        for (var k in newObj) {
            if (newObj[k] > maxObj.maxvalue) {
                maxObj.maxvalue = newObj[k];
                maxObj.maxkey = k;
            }
        }
        return maxObj;
    }
    var result =getmaxObj("zhangpeiyue.com");
    // 出现最多的字符:e
    console.log("出现最多的字符:"+result.maxkey);
    // 出现次数:2
    console.log("出现次数:"+result.maxvalue);
}
 