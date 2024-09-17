$(document).ready(function(){
    var act = 0;
    var mana = 0;
    var actPlus = 1;
    var SELLONE = 1;
    var SELLTEN = 10;
    var SELLALL;
    var energy = 0;
    var autoAct = 100;
    var Wandprice = 10;
    var menu;
    // var is used to create variables for math form


// when clicked on button-(backend) action make it go up by 1
    $("#action").click(function(){      //name button name + click(function what is suppose to be there)
        act += actPlus;                 //add 1 per click
        changeInventory();              //execute function changeInventory
    });

    $("#visit").click(function(){
        menu = switchMenu("tavern");
    });

    $("#return").click(function(){
        menu = switchMenu("main");
    });

    function changeInventory(){         // making function changeInventory
        $("#mana").html("MANA: " + mana + " POWER.");
                                        // making the mana section not move but included in app.js

        if (act == 1) {                 // if act is added make the time to times for plural
            $("#act").html("ACT: " + act + " TIME.");
        } else {
            $("#act").html("ACT: " + act + " TIMES.");
        }
    }


    function switchMenu(menu){
        $(" .menu").children().css("display","none");
        $("." + menu).css("display","block");
        return menu;
    }
});


