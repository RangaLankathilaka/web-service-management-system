var loadpid=0;
var incid=loadpid;
$(document).ready(loadcusid);
function loadcusid() {
    var ajaxconfig={
        method:"GET",
        url:"api/customer.php?action=all",
        async:true
    }
    console.log(ajaxconfig);
    $.ajax(ajaxconfig).done(function (response) {
        response.forEach(function (customer) {

            var option = '';


            option += '<option value="' + customer.cid+ '">' + customer.cid+ '</option>'


            $("#cus").append(option);


        })
    });
}


$("#cus").click(function () {
    console.log("click on item");
    var agaxconfig={

        method:"GET",
        url:"api/customer.php?action=all" ,
        async:true



    };

    $.ajax(agaxconfig).done(function (response) {
        console.log(response);
        response.forEach(function (customer) {

            var xx =customer.cid;

            if ($("#cus :selected").text() == xx) {
                console.log(88888);
                $("#cname").val(customer.cname);
                }



        });



    });



});







var currentqoh=0;

$(document).ready(loadAllParts);

//$(document).ready(loadAllCustomers);
var lastpid=0;


function loadAllParts(){


    var agaxconfig={

        method:"GET",
        url:"api/parts.php?action=all" ,
        async:true



    };
    console.log(agaxconfig);
    $.ajax(agaxconfig).done(function (response) {
        console.log(response);
        console.log("array last");
        console.log(response.slice(-1));
        response.slice(-1).forEach(function (lastid) {
           lastpid=parseInt(lastid.pid);
           loadpid=lastpid+1
            incid =loadpid;
           $("#oid").val(loadpid);
        });

        response.forEach(function (parts) {
            var option = '';


    option += '<option value="' + parts.pid+ '">' + parts.pid+ '</option>'


$("#items").append(option);

        });

        console.log(loadpid);

    });


}
inc=loadpid;
console.log(loadpid);

$("#items").click(function () {
   console.log("click on item");
    var agaxconfig={

        method:"GET",
        url:"api/parts.php?action=all" ,
        async:true



    };

    $.ajax(agaxconfig).done(function (response) {
        console.log(response);
        response.forEach(function (parts) {

            var xx =parts.pid;

            if ($("#items :selected").text() == xx) {
                        console.log(88888);
                        $("#iname").val(parts.pname);
                        $("#uprice").val(parts.selling_price);
                        $("#qoh").val(parts.qty);
                currentqoh=parts.qty;
                    }



        });



    });



});



// function loadAllCustomerid(){
//
//
//     var agaxconfig1={
//         // E:\DEP\Web\Motor\api\customers.php
//         method:"GET",
//         url:"api/customers.php?action=all" ,
//         async:true
//
//
//
//     };
//     console.log(agaxconfig1);
//     $.ajax(agaxconfig1).done(function (response) {
//
// console.log("response of customer");
//
//     });
//
//
// }




var oid1;
var date1;
var cus1;
var cname1;
var items1;
var iname1;
var uprice1;
var qoh1;
var qty1;
var total1;


var codei;
var desi;
var qtyi;
var pricei;
var totali;

var itemobjs = new Array();
var trid = "";
var myarray2 = new Array();

var qoharray=new Array();

$("#itemidtext").addClass("hide");
var trvalue = false;
console.log(trvalue);

$(document).on("click", "#listtb tr", function () {

    var trvalue = true;
    console.log(trvalue);
});

// if($("#listtb tr").click()){
//     var trvalue=true;
// console.log(trvalue)
// }


//     var numbers = [1, 2, 3, 4, 5];
// var option = '';
// for (var i=0;i<numbers.length;i++){
//    option += '<option value="'+ numbers[i] + '">' + numbers[i] + '</option>';
// }
// $('#items').append(option);

// $('#items').click(function(){
//     console.log($('#items :selected').text());
//     console.log($('#items').val());

// });



// var numbers = ['c001', 'c002', 'c003', 'c004', 'c005'];
// var option = '';
// for (var i=0;i<numbers.length;i++){
//    option += '<option value="'+ numbers[i] + '">' + numbers[i] + '</option>';

// }
//  $('#cus').append(option);


var sum = 0;
$("#qty").click(function () {
    $(this).removeClass("bordercolor");
});
$("#date").click(function () {
    $(this).removeClass("bordercolor");
});

$("#cus").click(function () {
    $(this).removeClass("bordercolor");
});

$("#items").click(function () {
    $(this).removeClass("bordercolor");
});


$("#save").click(function () {

    var oid = $("#oid").val();
    var date = $("#date").val();
    var cus = $("#cus").val();
    var cname = $("#cname").val();
    var items = $("#items").val();
    var iname = $("#iname").val();
    var uprice = $("#uprice").val();
    var qoh = $("#qoh").val();
    var qty = $("#qty").val();
    var total = uprice * qty;
    var des=$("#description").val();




    if (oid.length == 0) {
        $("#oid").addClass("bordercolor");

        alert("click 'add new' to add new customer ! ");

        return;
    }

    // if (date1.length == 0) {
    //     $("#date").addClass("bordercolor");
    //     return;
    // }
    if (cus.length == 0) {
        $("#cus").addClass("bordercolor");
        return;
    }
    if (items.length == 0) {
        $("#items").addClass("bordercolor");
        return;
    }
    var qtytf = /(?<=\s|^)\d+(?=\s|$)/.test(qty);
    if (qtytf == false) {
        alert("Qty is an integer value");
    }

    if (qty.length == 0 || qtytf == false) {
        $("#qty").addClass("bordercolor");
        return;
    }

    // for(var i=1;i<$("#listtb tr").length;i++){
    //     console.log("i>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>... "+i);
    //     trid+=$(document).find("#listtb tr:nth-child("+i+") td:nth-child(1)").text();
    // }

    var qtyfrm=parseInt($("#qty").val());
    var qohfrm=parseInt($("#qoh").val());
    if(qohfrm>=qtyfrm){
        $("#qoh").val(qohfrm-qtyfrm);
    }else {
        alert("Entered qty is heigher than qty on hand");
        return;
    }

    var tbr = $(document).find("#listtb tr").length;
    console.log("tblength " + tbr);
    for (is = 0; is <= tbr - 1; is++) {
        var newis = is + 1;
        console.log(is + 1);
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>tb val " + $(document).find("#listtb tr:nth-child(" + newis + ") td:nth-child(1)").text());
        var tablecurrentcode = parseInt($(document).find("#listtb tr:nth-child(" + newis + ") td:nth-child(1)").text());

        if (tablecurrentcode == parseInt($("#items :selected").text())) {
            console.log("catch");
            var tableqty = parseInt($("#listtb tr:nth-child(" + newis + ") td:nth-child(3)").text());
            var formqty = parseInt($("#qty").val());
            $(document).find("#listtb tr:nth-child(" + newis + ") td:nth-child(3)").text(tableqty + formqty);
            //  $(document).find("#listtb tr td:nth-child(3)").text(tableqty+formqty);
            return;

        }


    }




    // console.log(">>>>ff>>"+trid);
    // var idset=parseInt(trid);

    //    if(parseInt($("#listtb tr td:nth-child(3)").text())==parseInt($("#items :selected").text())){
    //         console.log("catch");
    //         var tableqty= parseInt($("#listtb tr td:nth-child(3)").text());
    //         var formqty=parseInt($("#qty").val());
    //         $("#listtb tr td:nth-child(3)").text(tableqty+formqty);
    //         return;

    //     }



    var tablevalue = "<tr><td>" + items + "    </td><td> " + des + "  </td><td> " + qty + " </td><td> " + uprice + " </td><td> " + total + ' </td><td><img src="dist/img/recyclebin.png" style="height:30px;cursor: pointer;"></td></tr>'
    $("#listtb").append(tablevalue);


    var tablerowcount = $("#listtb tr").length;
    // console.log(tablerowcount);
    sum += total;

    $("#total").val(sum);
    hidefooter();
    var d = $("table tbody tr").length;
    console.log("delete " + d);
    $("#items").removeClass("hide");
    $("#itemidtext").addClass("hide");
    $("#saveitem").text("Save Item");
    console.log($("#saveitem").text());


    var trvalue = false;
    console.log(trvalue);
    console.log("bbb   " + $("#listtb tr td:nth-child(3)").text());
    if (trvalue) {
        var qtyval = parseInt($("#qty").val());
        var tb = parseInt($("#listtb tr td:nth-child(3)").text());
        $("#listtb tr td:nth-child(3)").text(qtyval + tb);
    }

    // testup();

    //     var testtd=parseInt($("#listtb tr:nth-child(2) td:nth-child(1)").text());
    // console.log("list value"+testtd);

    // var testtd=parseInt($("#listtb tr td:nth-child(1)").text());
    // console.log("list value"+testtd);






    $("#qty").val(null);

    //$(document).parents("#listtb tr td")


});



$("#place").click(function () {
    console.log(789);

    var oid = $("#oid").val();
    var date = $("#date").val();
    var cus = $("#cus").val();
    var cname = $("#cname").val();
    var total = $("#total").val();

    if ($("#listtb tr").length == 0) {
        alert("Table is empty !\n click 'add new' to add new items");
        return;
    }



    var tbval = '<tr><td>' + oid + '  </td><td>' + cus + '  </td><td>' + cname + '  </td><td>' + date + '  </td><td> ' + total + '  </td></tr>';
    $("#tbvalp").append(tbval);
});







function loadtocombo(customerid, customername) {


    this._customerid = customerid;
    this._customername = customername;





    this.getId = function () {
        return this._customerid;
    }
    this.getName = function () {
        return this._customername;
    }



}
var c = new loadtocombo("435", "Ranga");
var c1 = new loadtocombo("466", "Rangaaa");
var option = '';
var arr1 = [c, c1];
for (i = 0; i < arr1.length; i++) {
    option += '<option value="' + arr1[i].getId() + '">' + arr1[i].getId() + '</option>';
}

$('#cus').append(option);

// console.log(arr[0].getId()+" "+arr[1].getId());
$('#cus').click(function () {
        // xy++;


        console.log($('#cus :selected').text());

        for (idc = 0; idc < arr1.length; idc++) {

            var cumid = arr1[idc].getId();
            console.log("jkjk" + cumid);
            if ($("#cus :selected").text() == cumid) {


                $("#cname").val(arr1[idc].getName());
            }


        }




    }

);




// function loadtocomboit(itemid, itemname,unitprice,qtyonhand) {



//     this._itemid = itemid;
//     this._itemname = itemname;
//     this._unitprice=unitprice;
//     this._qtyonhand=qtyonhand;




//     this.getIdit = function () {
//         return this._itemid;
//     }
//     this.getNameit = function () {
//         return this._itemname;
//     }
//     this.getPrice = function () {
//         return this._unitprice;
//     }
//     this.getQtyOn = function () {
//         return this._qtyonhand;
//     }




// }
// var it = new loadtocombo("23", "vhvhk","32","3");
// var it1 = new loadtocombo("43", "bnbb","31","5");
// var option = '';
// var arr = [it, it1];
// for (i = 0; i < arr.length; i++) {
//     option += '<option value="' + arr[i].getIdit() + '">' + arr[i].getIdit() + '</option>';






// }

// $('#items').append(option);

// // console.log(arr[0].getId()+" "+arr[1].getId());
// $('#items :selected').text();
// $('#items').val();


// $('#items').click(function () {
//     // xy++;


//     console.log($('#items :selected').text());
//     if ($('#items :selected').text() == "43") {

//         $("#iname").val(arr[1].getNamet());
//        // $("#uprice").val(arr[1].getPrice());
//         console.log("price "+arr[1].getNamet());
//         //$("#qoh").val(arr[1].getQtyOn());


//     }
//     else if ($('#items :selected').text() == "23") {

//         $("#iname").val(arr[0].getNameit());
//         $("#uprice").val(arr[0].getPrice());
//         $("#qoh").val(arr[0].getQtyOn());



//     }




// }

// );


function hidefooter() {
    console.log($("table tbody tr").length);
    var len = $(document).parents("table").find("tbody").find("tr").length;
    console.log(">>" + len);
    // console.log($("#norec").text( ));
    if ($("table tbody tr").length > 0) {

        $("#norec").text(" ");

    }
    else {
        $("#norec").text("There are no records right now !");
    }

}



$(document).on("click", "#listtb tr td:last-child img", function () {

    if (!confirm("Are sure to delete")) {
        return;
    }

    var totalform = parseInt($("#total").val());
    var deleteval = parseInt($(this).parents("tr").find("td:nth-child(5)").text());
    var subtr = totalform - deleteval;
    console.log("mmmmmmmmmmmmmdelete" + subtr);
    $("#total").val(subtr);


    $(this).parents("tr").fadeOut(1000, function () {
        $(this).parents("tr").remove();
        var d = $("table tbody tr").length;
        console.log("delete " + d--);
        hidefooter();

    });

});




// });

$(document).on("mouseenter", "#listtb tr td:last-child img", function () {
    $(this).attr("src", "dist/img/recyclebin-hover.png");
});

$(document).on("mouseleave", "#listtb tr td:last-child img", function () {
    $(this).attr("src", "dist/img/recyclebin.png");
});

// $(document).on("click","table tbody tr",function(){
//     $(this).addClass("color");
// })
var x = 0;
$(document).on("click", "#listtb tr", function () {
    console.log("hi" + x++);
    $(this).addClass("color");

});


$("#addnew").click(function () {

    $("#oid").val(incid++);
    $("#date").focus();
    $("#oid").removeClass("bordercolor");
    //  $("#qty").val($(this).find("td:nth-child(2)").text());
});



function LoadItemID(itemid, itemname, unitprice, qtyonhand) {
    this._itemid = itemid;
    this._itemname = itemname;
    this._unitprice = unitprice;
    this._qtyonhand = qtyonhand;


    this.getItemID = function () {
        return this._itemid;
    }


    this.getItemName = function () {
        return this._itemname;
    }

    this.getUPrice = function () {
        return this._unitprice;
    }

    this.getQtyOn = function () {
        return this._qtyonhand;
    }


}
//
// var itemobj = new LoadItemID("12", "uuu", "41", "4");
// var itemobj1 = new LoadItemID("22", "aaa", "34", "6");
//
//
// var option = '';
// var arritem = [itemobj, itemobj1];
// for (it = 0; it < arritem.length; it++) {
//     option += '<option value="' + arritem[it].getItemID() + '">' + arritem[it].getItemID() + '</option>'
// }
//
// $("#items").append(option);

// $("#items").click(function () {
//     console.log(" hi item");
//     console.log($('#items :selected').text());
//
//
//     for (var id = 0; id < arritem.length; id++) {
//         var xx = arritem[id].getItemID();
//         console.log("hi " + xx);
//
//         if ($("#items :selected").text() == xx) {
//             console.log(88888);
//             $("#iname").val(arritem[id].getItemName());
//             $("#uprice").val(arritem[id].getUPrice());
//             $("#qoh").val(arritem[id].getQtyOn());
//         }
//     }
//
//
//
//
//
// });

// $("#listtb").mouseenter(function(){
//     $(this).addClass("mouse");


// });

// $(document).on("click", "#listtb tr", function () {
//     //  selectraw(this);
//     $("#listtb tr").removeClass("color");
//     $(this).addClass("color");
//     // $("#txtFullName").val("");
//     // $("#txtAddress").val("");
//     // $("#txtNIC").val("");

//     // $("#txtFullName").val($(this).find("td:nth-child(2)").text());
//     // $("#txtAddress").val($(this).find("td:nth-child(3)").text());
//     // $("#txtNIC").val($(this).find("td:nth-child(4)").text());

// });

$(document).on("click", "#listtb tr", function () {
    $("#listtb tr").removeClass("color");
    $(this).addClass("color");
    $("#qty").val($(this).find("td:nth-child(3)").text());
    $("#items").addClass("hide");
    $("#itemidtext").removeClass("hide");

    $("#itemidtext").val($(this).find("td:nth-child(1)").text());
    $("#iname").val($(this).find("td:nth-child(1)").text());
    $("#uprice").val($(this).find("td:nth-child(4)").text());
    $("#saveitem").text("Update Item");


});

$(document).on("mouseenter", "#listtb tr", function () {

    $(this).addClass("mouse");


});


function testup() {

    $(document).on("click", "#listtb tr", function () {
        // var deleteval=parseInt($(this).find("td:nth-child(5)").text());

        var qtyup = parseInt($(this).find("td:nth-child(3)").text());
        var newqty = parseInt($("#qty").val());
        console.log(newqty + qtyup);


    });
}

var itemtext = $("#itemidtext").val();


var testtd = parseInt($("#listtb tr td:nth-child(1)").text());
console.log("list value" + testtd);
var trid = "";

for (var i = 0; i < $("listtb tr").length; i++) {
    trid += $("#listtb tr:nth-child(" + i + ") td:nth-child(1)").text();
}
console.log(trid);



$('#place').click(function () {

    var oid =parseInt($("#oid").val()) ;
    var discription=$("#description").val();
    var cid=parseInt($("#cus").val());
    var total_amount=parseInt($("#total").val());

    var tbr = $(document).find("#listtb tr").length;
    console.log("tblength " + tbr);

    //myarray2=new Array();


    for (is = 0; is <= tbr - 1; is++) {
        var newis = is + 1;
        console.log(is + 1);


        var tablecurrentcode = parseInt($(document).find("#listtb tr:nth-child(" + newis + ") td:nth-child(1)").text());
        var tablecurrentdes = parseInt($(document).find("#listtb tr:nth-child(" + newis + ") td:nth-child(2)").text());
        var tablecurrentqty = parseInt($(document).find("#listtb tr:nth-child(" + newis + ") td:nth-child(3)").text());
        var tablecurrentprice = parseInt($(document).find("#listtb tr:nth-child(" + newis + ") td:nth-child(4)").text());
        var tablecurrenttotal = parseInt($(document).find("#listtb tr:nth-child(" + newis + ") td:nth-child(5)").text());


        itemobjs.push(new Item(oid, tablecurrentcode, tablecurrentdes, tablecurrentqty, tablecurrentprice, tablecurrenttotal));
        var ajaxconfig={

            method:"POST",
            url:"api/invoice.php",
            data:{
                pid:tablecurrentcode,
                iid:oid,
                qty:tablecurrentqty,
                sell:tablecurrentprice,
                total:tablecurrenttotal,
                discriptionajax:discription,
                cidajax:cid,
                totalajax:total_amount,
                action:"save"


            },



            async:true
        };
        console.log(ajaxconfig);
        $.ajax(ajaxconfig).done(function (response) {
            console.log("gkgkgkjgjkgkjhjkh");
            console.log(response);
        });





    }

    $(document).find("#listtb tr").remove();



});


$(document).on("click", "#tablelistsecond tr", function () {
    var tdoid = parseInt($(this).find("td:nth-child(1)").text());

    // console.log("ORDER ID : " + tdoid);
    console.log("LENGTH: " + itemobjs.length);
    for (var idx = 0; idx < itemobjs.length; idx++) {
        console.log("Came inside to loop");
        oidi = parseInt(itemobjs[idx].getoid());
        console.log("ORDER ID :" , oidi);
        if (oidi == tdoid) {

            console.log("Came Here");

            codei = itemobjs[idx].getcode();
            desi = itemobjs[idx].getdiscription();
            qtyi = itemobjs[idx].getiqty();
            pricei = itemobjs[idx].getiprice();
            totali = itemobjs[idx].getitotal();



            var tablevalue1 = "<tr><td>" + codei + "    </td><td> " + desi + "  </td><td> " + qtyi + " </td><td> " + pricei + " </td><td> " + totali + ' </td><td><img src="dist/img/recyclebin.png" style="height:30px;cursor: pointer;"></td></tr>'
            $("#listtb").append(tablevalue1);
        }
    }






});







function Customer(cusid, cusname) {

    this._cusid = cusid;
    this._cusname = cusname;


    this.getcusid = function () {
        return this._cusid;
    }

    this.getcusname = function () {
        return this._cusname;
    }
}


function Item(oid, code, discription, iqty, iprice, itotal) {
    this._oid = oid;
    this._code = code;
    this._discription = discription;
    this._iqty = iqty;
    this._iprice = iprice;
    this._itotal = itotal;

    this.getoid = function () {
        return this._oid;
    }

    this.getcode = function () {
        return this._code;
    }

    this.getdiscription = function () {
        return this._discription;
    }
    this.getiqty = function () {

        return this._iqty;

    }
    this.getiprice = function () {
        return this._iprice;
    }


    this.getitotal = function () {
        return this._itotal;
    }


}


//
// function Order(oid, cusdetail, date, ftotal, itemdetails) {
//
// }

//
// $('#place').click(invoiceajax);
//
//
// function invoiceajax() {
//
//     var iid=parseInt($("#oid").val());
//     var discription=$("#description").val();
//     var cid=parseInt($("#cus").val());
//     var total_amount=parseInt($("#total").val());
//
//     var ajaxconfig={
//
//         method:"POST",
//         url:"api/invoice.php",
//         data:{
//             iidajax:iid,
//             discriptionajax:discription,
//             cidajax:cid,
//             totalajax:total_amount,
//             action:"save"
//
//
//         },
//     };
//     console.log(ajaxconfig);
//
// }


// $("#saveitem").click(qohf);
//
// function qohf() {
//     var qoh=$("#qoh").val();
//     qoharray.push(qoh);
//
// }
// console.log(qoharray);


