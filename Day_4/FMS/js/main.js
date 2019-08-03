$(function(){
    $("#search").keyup(function(){
        searchStr = $("#search").val()       
        if(searchStr.trim()!=""){
            showResult(searchStr)
        }
    })

    $("#IdViewAll").click(function(){
        $.ajax({
            url:"https://fms-mite.herokuapp.com/fms/",
            method:"GET",
            success:function(data){
                showTable(data)
            }
        })

    })

    $("#idBtnAdd").click(function(){
        name = $("#name").val();
        qual = $("#qualification").val();
        dept = $("#deptId").val();
        faculty = {"name":name,"qualification":qual,"deptId":dept,"active":true}
        $.ajax({
            url:"https://fms-mite.herokuapp.com/fms",
            type:"POST",
            contentType:"application/json",
            data:JSON.stringify(faculty),
            success:function(data){
                $("#name").val("");
                $("#qualification").val("");
                $("#deptId").val("");
                $("#idBtnClose").click()
            }
            
        })
    })
    $("#up_idBtnAdd").click(function(){
        up_name=$("#up_name").val();
        new_name = $("#new_name").val();
        qual = $("#up_qualification").val();
        dept = $("#up_DeptId").val();
        faculty = {"new_name":new_name,"qualification":qual,"deptId":dept,"active":true}
        $.ajax({
            url:"https://fms-mite.herokuapp.com/fms",
            type:"POST",
            contentType:"application/json",
            data:JSON.stringify(faculty),
            success:function(data){
                $("#new_name").val("");
                $("#up_qualification").val("");
                $("#up_DeptId").val("");
                $("#up_idBtnClose").click()
            }
            
        })
    })
    function showResult(searchStr){
        $.ajax({
            url:"https://fms-mite.herokuapp.com/fms/search/"+searchStr,
            method:"GET",
            success:function(data){
                showTable(data)
            }
        })
    }

    function showTable(data){
        str = "<table class='table'>";
        str += "<tr><th>Name</th><th>Qualification</th><th>Department</th><th>Status</th>"
        for(i=0;i<data.length;i++){
            str +="<tr>";
            str +="<td>"+data[i]["name"]+"</td>";
            str +="<td>"+data[i]["qualification"]+"</td>";
            str +="<td>"+data[i]["deptId"]+"</td>";
            str +="<td>"+data[i]["active"]+"</td>";
            str +="</tr>";
        }
        str +="</table>"
        $("#idTable").html(str);
    }
})