var loadpid=0;
var incid=loadpid;


$("#searchtype").click(function () {

   var searchtypeid=parseInt($("#searchtype").val()) ;



   if(searchtypeid==2){

       $("#searchtxt").attr("placeholder","Search by Part Name");
   }
    else if(searchtypeid==1){

        $("#searchtxt").attr("placeholder","Search by Part ID");
    }
});


$(document).ready(loadAllParts);

function loadAllParts(){


    var agaxconfig={

        method:"GET",
        url:"api/parts.php?action=all" ,
        async:true



    };
    $.ajax(agaxconfig).done(function (response) {
        console.log(response);
        response.forEach(function (parts) {
            loadpid=1;
            incid =loadpid;

            var partdata="<tr><td>" +  parts.pid +"</td><td>"+parts.pname+"   </td><td> "+parts.buying_price+"  </td><td>   "+parts.selling_price+"  </td><td> "+parts.qty+" </td><td> "+parts.supplier+" </td></tr>";
            $("#listtb").append(partdata);
        });



    });


}
incid =loadpid;

console.log(loadpid);




$("#psave").click(partsave);

function partsave() {
    if($("#saveitem").text()=="Save Parts") {

        var ajaxConfig = {

            // method:"POST",
            // url:"api/parts.php",
            // data:$("#partform").serialize()+"&action=save",
            // async:true

            method: "POST",
            url: "api/parts.php",
            data: $("#partform").serialize() + "&action=save",
            async: true

        }
        console.log(ajaxConfig);

        $.ajax(ajaxConfig).done(function (response) {
            if (response) {
                // $("#tblCustomers tbody tr").remove();
                loadAllCustomers();
                alert("Part is successfully saved");
                console.log(response);
            } else {
                alert("Failed to save the Part ");

            }
        });
    }

   else if($("#saveitem").text()=="Update Part"){

        var ajaxConfig={

            // method:"POST",
            // url:"api/parts.php",
            // data:$("#partform").serialize()+"&action=save",
            // async:true

            method:"POST",
            url:"api/parts.php",
            data: $("#partform").serialize() + "&action=update",
            async:true

        }
        console.log(ajaxConfig);

        $.ajax(ajaxConfig).done(function(response){
            if (response){
                // $("#tblCustomers tbody tr").remove();
                loadAllCustomers();
                alert("Part is successfully updated");
                console.log(response);
            }else{
                alert("Failed to update the Part ");

            }
        });
    }


//     $.ajax(ajaxconfig).done(function (res) {
//         if(res){
//             console.log("i am true");
//         }
//         else{
//             console.log("i am falsse");
//         }
//
//     });
// console.log(ajaxconfig);
//     $.ajax(ajaxconfig).done(function (response) {
// console.log("response"+response);
// console.log("I am response");
//         if(response){
//             loadAllParts();
//            alert("parts are successfully saved");
//            console.log(response);
//         }
//         else{
//             alert("failed to save details");
//             console.log(response);
//         }
//
//     });
//

}

$("#searchbtn").click(searchpart);

function searchpart() {
    console.log("remove")
    var searchtype=parseInt($("#searchtype").val());
    var enterid=$("#searchtxt").val();

    var agaxconfig={

        method:"GET",
        url:"api/parts.php?action=all" ,
        async:true



    };
    $.ajax(agaxconfig).done(function (response) {
        console.log(response);
        response.forEach(function (parts) {

            if(searchtype==1){
            if(parts.pid==enterid){
            var partdata="<tr><td>" +  parts.pid +"</td><td>"+parts.pname+"   </td><td> "+parts.buying_price+"  </td><td>   "+parts.selling_price+"  </td><td> "+parts.qty+" </td><td> "+parts.supplier+" </td></tr>";
                $(document).find("#listtb tr").remove();
            $("#listtb").append(partdata);
            }

            }

            else if(searchtype==2){
                if(parts.pname==enterid){
                    var partdata="<tr><td>" +  parts.pid +"</td><td>"+parts.pname+"   </td><td> "+parts.buying_price+"  </td><td>   "+parts.selling_price+"  </td><td> "+parts.qty+" </td><td> "+parts.supplier+" </td></tr>";
                    $(document).find("#listtb tr").remove();
                    $("#listtb").append(partdata);
                }
            }




        });



    });
    if($("#searchtxt").val().length==0){
        alert("search field is empty");
        $("#searchtxt").focus();

    }
}
$(document).on("click", "#listtb tr", function () {


    $("#pid").val($(this).find("td:nth-child(1)").text());
    $("#pname").val($(this).find("td:nth-child(2)").text());
    $("#supplier").val($(this).find("td:nth-child(6)").text());
    $("#bprice").val($(this).find("td:nth-child(3)").text());
    $("#sprice").val($(this).find("td:nth-child(4)").text());
    $("#qty").val($(this).find("td:nth-child(5)").text());

    $("#saveitem").text("Update Part");


});