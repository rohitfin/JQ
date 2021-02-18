


$(document).ready(function(){

// window.confirm('Want to learn!');    

// hide and show on laod
// $(".pop-area").hide();
$('#hidePop').click(function(){
    $(".pop-area").hide();
});



// hide    
$("#hide").on("click", function(){
    $("#hide-show").hide(2000);
});
// show
$("#show").click(function(){
    $("#hide-show").show(1000);
});
// stop
$("#stop").click(function(){
    $("#hide-show").stop();
});
// hide and show
var _showa = true;
$("#hideShow").click(function(){
    if(_showa == true) {
        $("#hide-show").hide(1000);
        _showa = false;
    }
     else {
        $("#hide-show").show(1000);
        _showa = true;
    }
});

// hover mouse enter

$("#hover").on("mouseenter", function(){
    $(this).addClass("bg-secondary text-white");
});

$("#hover").on("mouseleave", function(){
    $(this).removeClass("bg-secondary text-white");
});


// keypress
$("#keyboard").keypress(function(){
    $("#keyboardResult").addClass("bg-dark text-white");
});

// keydown
$("#keyboard").keydown(function(){
    $("#keyboardResult").removeClass("bg-dark text-white").addClass("bg-success");
});

// keyup
$("#keyboard").keyup(function(){
    $("#keyboardResult").removeClass("bg-dark bg-success text-white").addClass("bg-warning");
});

//---- form events ---//
// focus
$("#name").focus(function(){
    $(this).addClass("bg-warning");
});

$("input").change(function(){
    $(this).addClass("bg-light");
});



function getdata(){
    var name = $("#name").val();
    var email = $("#email").val();
    var number = $("#phone").val();
    var gender = $('input[type="radio"]:checked').val();
    var check = $('input[type="checkbox"]:checked');
    var sel = $('select option:selected').val();

    var val = [];
    check.each(function(i){
        val[i] = $(this).val();
    });
          

    $("#formResult").text('Name: ' + name + ", " + ' Email: ' + email + ", " + "Mobile no: " + number + ", "+'Gender: ' + gender + ", " + ' Learning: ' + val + ", " + "Education: " + sel ); 

}


$("#dataButton").click(function(){
    getdata()
   
});
$("#submit").click(function(e){
    e.preventDefault();
    getdata();
});

// $("input[type='submit']").submit(function(){
//     alert("Submit Event");
//     return false;
// });


// fade in
$("#fadeIn").click(function(){
    $("#fadeIn-content").fadeIn(2000);
});
// fade out
$("#fadeOut").click(function(){
    $("#fadeIn-content").fadeOut(2000);
});

// fade toggle
$("#fadeToggle").click(function(){
    $("#fadeToggle-content").fadeToggle(1000);
});

// slide up
$("#slideUP").click(function(){
    $("#fadeIn-content").slideUp(1000);
});

// slide Down
$("#slideDown").click(function(){
    $("#fadeIn-content").slideDown(2000);
});

// slide Toggle
$("#slideToggle").click(function(){
    $("#fadeToggle-content").slideToggle(2000);
});


// toggle class
$('#btn-toggleClass').on('click', function(){
    $('#addClass').toggleClass('alert alert-success p-3');
});

// add class
$('#btn-addClass').on('click', function(){
    $('#addClass').addClass('alert alert-success p-3');
});

// remove class
$('#btn-removeClass').on('click', function(){
    $('#addClass').removeClass('alert alert-success p-3');
});

// custom toggle class
$(document).on('click', '#btn-customClass', function(){
   
    var getCls = $('#addClass').attr('class');

    if(getCls !== 'alert alert-success p-3'){
        $('#addClass').attr('class','alert alert-success p-3');
    }else {
        $('#addClass').attr('class','card p-2 mb-2');
    }

});


// adding attribute
 $('#btn-add-attr').click(function(){
     $('#addAttr').attr({'href':'https://jsbin.com/?html,output', 'target':'_blank'});
     $('#addAttr').text('CLICK HERE!');

    //  $('#addAttr').attr('href','https ://jsbin.com/?html,output');
 });
    





 









 $('#JSON-btn').on('click', function(){

    $.ajax({
        // url: 'http://127.0.0.1:5500/JavaScript&jQuery/JQ/json-data.json',
        url: 'https://pokeapi.co/api/v2/pokemon/',
        type: 'get',

        error: function(error){
            console.log('error : ' + error);
        },

        success: function(res){
            // console.log(res);
            console.log(1);

            var viewResult = $('#JSON-Result');
            var table = $('#JSON-Result').append('<table class="table table-bordered table-striped"><thead class=""></thead><tbody></tbody></table>');
            var thead = $('#JSON-Result table thead'); 
            var tbody = $('#JSON-Result table tbody'); 

            // var theadShow = '<tr><th>' + res.count + '</th><th>' + res.next + '</th></tr>';
            var theadShow = '<tr><th> Name </th><th> URL </th></tr>';
            thead.html(theadShow);

            var tbodyShow = '';
            var urlLink = [];
            for(var i = 0; i < res.results.length; i++){
                urlLink.push(res.results[i].url);
                // tbodyShow += '<tr><td>' + res.results[i].name + '</td><td> <a href="'+res.results[i].url+'" target="_blank" class="anchor'+i+'">' + res.results[i].url + '</a></td></tr>';
                
                tbodyShow += '<tr><td>' + res.results[i].name + '</td><td> <a href="'+res.results[i].url+'" class="anchor'+i+'">' + res.results[i].url + '</a></td></tr>';
                
            }

            tbody.html(tbodyShow);
            // for(var i = 0; i < urlLink.length; i++){
            //         $('.anchor'+i).attr({'href': urlLink[i]});
            // }

            // $('.anchor').each(()=>{
            //     this.attr({'href':"hello"});
            // })





        }

    });
    console.log(2);
 });   // JSON BUTTON 



   
    $(document).on('click', 'a',function(e){
        e.preventDefault();

        var href = $(this).attr('href');

        $.ajax({
            url: href,
            type : 'get',
            error: function(error){
                console.log('error : ' + error);
            },
            success: function(res){

                var imgurl= res.sprites.other.dream_world.front_default;
                var name = res.name;
                var list = '';
            
                for(var i = 0; i < res.types.length; i++){
                    list += '<li>' + res.types[i].type.name + '</li>'
                }

                $('#img1').attr('src',imgurl);
                $('#name1').html(name);
                $('#list1').html(list);
                

                // second way
                 var template = $('.template .JSON-child-Result-2').html()
                 var _html = template.replace('__imagURL__',imgurl)
                                    .replace('__name__',name)
                                    .replace('__list__',list);
                $('#JSON-child-Result-2').append(_html);



                // third way
                var aa =`<div class="card" >
                <img  class="pok-img card-img-top p-2" src="${imgurl}" alt="Pok Name">
                <div class="card-body">
                   <h5 class="pok-title card-title">${name}</h5>
                   <ul class="types">
                   ${list}
                   </ul>
                </div>
                </div>`;
                $('#JSON-child-Result-3').append(aa);


                // One way
               $('#res-card').css('display','block');

            }
        });


    });





});


