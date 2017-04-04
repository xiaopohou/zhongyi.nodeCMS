/**
 * 通用函数
 */
$(function () {

    //全局初始化
    $(':checkbox').prop('checked',false);
    $('#targetIds').val('');

    $("#chkSelectAll").change(function () {
        if($(this).prop("checked")){
            $(".datalist input[name='chkItem']").prop("checked",true);
        }else{
            $(".datalist input[name='chkItem']").prop("checked",false);
        }
        getSelectValues();
    });

});

function getSelectValues() {
    var ids=[];
    var chks= $(".datalist input[name='chkItem']:checkbox");
    if(chks.length>0){
        $(chks).each(function (i) {
            if($(this).prop('checked')){
                ids.push($(this).prop('value'));
                console.log('is checked'+$(this).prop('value'));
            }
        });
        $("#targetIds").val(ids.join(','));
    }
}
 
 