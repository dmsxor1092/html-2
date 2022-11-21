let aq = $('.tab-button');
var car = { name : '소나타', price : 50000, year : 2030 };

// for(let i=0; i<aq.length; i++){
//     aq.eq(i).on('click', function(){
//         탭열기(i);
//     });
// }

// $('.list').click(function(e){
//     if(e.target == aq.get(0)){
//         탭열기(0);
//     }else if(e.target == aq.get(1)){
//         탭열기(1);
//     }else{
//         탭열기(2);
//     }
// })

$('.list').click(function(e){
     let 값 = parseInt(e.target.dataset.id);
    
    탭열기(값);
});

function 탭열기(구멍){
    aq.removeClass('orange');
        aq.eq(구멍).addClass('orange');
        aq.removeClass('show');
        aq.eq(구멍).addClass('show');
}

var pants = [28, 30, 32];

$('.form-select').eq(0).on('input', function(){
    //var a = $('.form-select').eq(0).val();
    if (this.value == '셔츠'){
        $('.form-select').eq(1).removeClass('show1');
        $('.form-select').eq(1).html('<option>95</option><option>100</option>');
        
    }else if(this.value == '바지'){
        $('.form-select').eq(1).removeClass('show1');
        $('.form-select').eq(1).html('');
    //  for(var i=0; i < pants.length; i++){
    //     $('.form-select').eq(1).append(`<option>${pants[i]}</option>`);
    //  }
        pants.forEach(function(i){
            $('.form-select').eq(1).append(`<option>${i}</option>`);
        });

    }else{
        $('.form-select').eq(1).addClass('show1');
    }
})

var obj = {name : 'kim', age : 20}
for (var key in obj){
    console.log(obj[key]);//오브젝트 반복문
}

// var 템플릿 = '<p>안녕</p>';
//     document.querySelector('#test').insertAdjacentHTML('beforeend',템플릿);
//     $('#test').append(템플릿);

