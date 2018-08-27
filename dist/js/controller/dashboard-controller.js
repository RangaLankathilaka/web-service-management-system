$(document).ready(function(){

    var ajaxConfig = {
        method:"GET",
        url:"api/parts.php",
        data:{
            action:"count"
        },
        async:true
    }

    $.ajax(ajaxConfig).done(function(response){
        $("#lblCustomersCount").text(response);
    });


});


$(document).ready(function(){

    var ajaxConfig = {
        method:"GET",
        url:"api/vehicle.php",
        data:{
            action:"countvehi"
        },
        async:true
    }

    $.ajax(ajaxConfig).done(function(response){
        $("#lblVehiCount").text(response);
    });


});

var totalamount=0;
$(document).ready(function(){

    var d=new Date();
    n=parseInt(d.getMonth())+1;
    console.log(n)

    var ajaxConfig = {
        method:"GET",
        url:"api/invoice.php",
        data:{
            action:"all"
        },
        async:true
    }

    $.ajax(ajaxConfig).done(function(response){
       // $("#lblVehiCount").text(response);
        console.log(response);
        response.forEach(function (invoice) {
// if(invoice.date.month){
            totalamount+=parseInt(invoice.total_amount);
            console.log(totalamount);
// }
        })
    });


});
