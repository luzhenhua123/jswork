$("input:last").click(function(){
    console.log(123123)
    $.post("/ajax",$('form').serialize(),function(res){
        result = res.reverse().map((val)=>{return JSON.stringify(val) + "<br>"})
        $("#result").empty().append($("<div></div>").html(result))
    })
})