var loadpid=0;
var i=loadpid;

$(document).ready(loadAllVehicle);

//$(document).ready(loadAllCustomers);
;


function loadAllVehicle(){


    var agaxconfig={

        method:"GET",
        url:"api/vehicle.php?action=all" ,
        async:true



    };
    console.log(agaxconfig);
    $.ajax(agaxconfig).done(function (response) {
        console.log(response);
        console.log("array last");
        console.log(response.slice(-1));
        response.slice(-1).forEach(function (lastid) {
            lastpid=parseInt(lastid.vid);
            loadpid=lastpid+1
            i =loadpid;
            $("#vid").val(loadpid);
        });


        console.log(loadpid);

    });


}












var vid=0;
var nic=0;
//$(document).ready(loadAllCustomers);



$("#csave").click(savecustomer);


function savecustomer() {

    var ajaxConfig = {
        method:"POST",
        url:"api/customers.php",
        data: $("#csaveform").serialize() + "&action=save",
        async:true
    }

    console.log(ajaxConfig);


    $.ajax(ajaxConfig).done(function(response){
        if (response){
           // $("#tblCustomers tbody tr").remove();
           //loadAllCustomers();
            alert("Customer is successfully saved");
            console.log(response);
        }else{
            alert("Failed to save the customer ");

        }
    })

    // response.forEach(function (customer){
    //     $id=customer.id;
    //      $name=customer.name;
    //    $address=customer.address;
    //
    //
    //
    // $.ajax({
    //     method:"POST",
    //     url:"api/customers.php",
    //     data:{
    //         $id,
    //         $name,
    //         $address
    //     },
    //     async: true
    // }).done(function(response){
    //     if (response){
    //         alert("Customer has been successfully save");
    //               } else{
    //         alert("Failed to save the customer");
    //     }
    // });
    // });
}
$(document).ready(hideelement);
function hideelement() {
    // $("#vid").hide();
    // $("#date").hide();
    // $("#vnum").hide();
    // $("#vtype").hide();
    // $("#vidlbl").hide();
    // $("#datelbl").hide();
    // $("#vnumlbl").hide();
    // $("#vtypelbl").hide();
    // $("#issue").hide();
    // $("#issuelbl").hide();
    $("#vehihide").hide();
    $("#hidesfee").hide();
}


$("#addnewvehi").click(function () {

         $("#vid").val(i++);
    //     $("#vid").show();
    //     $("#date").show();
    //     $("#vnum").show();
    //     $("#vtype").show();
    //     $("#issue").show();
    //     $("#issuelbl").show();
    // $("#vidlbl").fadeIn(1000, function () {
    //
    //     $("#vidlbl").show();
    //
    // });
    //     $("#datelbl").show();
    //     $("#vnumlbl").show();
    //     $("#vtypelbl").show();



    $("#vehihide").fadeIn(1000, function () {

        $("#vehihide").show();

    });
    $("#hidesfee").fadeIn(1000, function () {

        $("#hidesfee").show();

    });

    //
    // $("#vehihide").animate({
    //
    //     height: '450px',
    //     width: '450px'
    // });

});


$(document).ready(loadVehicle);
function loadVehicle() {
    var ajaxconfig={

        method:"GET",
        url:"api/vehicle.php?action=all",
        async:true
    };

    $.ajax(ajaxconfig).done(function (response) {
        response.forEach(function (vehicle) {
            var vtblval="<tr><td>  "+vehicle.vid+"  </td><td> "+vehicle.type+"  </td><td>    "+vehicle.cid+"    </td><td> "+vehicle.vnum+"    </td><td>  <button id=\"release\" type=\"button\" class=\"btn btn-primary\">Release</button> </td></tr>";
            $("#vlisttb").append(vtblval);
        })
    });
}

$(document).on("click","#release",function () {
    // $(this).find("#vlisttb tr").remove();
    console.log("releaes");
    vid=parseInt($(this).parents("tr").find("td:nth-child(1)").text());
    nic=parseInt($(this).parents("tr").find("td:nth-child(3)").text());
    console.log(vid);
    if (confirm("Are you sure you want to release this Vehicle?")) {
        var ajaxconfig = {
            method: "DELETE",
            url: "api/vehicle.php?vid=" + vid,
            async: true
        };
        console.log(ajaxconfig);
        $.ajax(ajaxconfig).done(function (response) {
            if (response) {
                alert("Fill out the Service fee");
                console.log(response);
            }
        });

    }

    $("#sfee").focus();
    $(this).parents("tr").fadeOut(1000, function () {
    $(this).parents("tr").remove();
    });

});

$("#sfeebtn").click(function () {
console.log("srhhhhhhhh");
 var sfee=parseInt($("#sfee").val());
    var ajaxconfig={
        method:"POST",
        url: "api/vehicledetail.php",
        data:{
            action:"save",
            ajcid:nic,
            ajvid:vid,
            ajsfee:sfee

        },
        async:true
    }
    console.log(ajaxconfig);
    $.ajax(ajaxconfig).done(function (response) {
        console.log(response);
    });
});