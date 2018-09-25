var personArr = [
    {
        "name": "Java高级开发",
        "src": "北京",
        "des": "开发类",
        "plic": "3",
        "time": "2018-06-09",
        "dies": "b"
    },
    {
        "name": "wem工程师",
        "src": "北京",
        "des": "开发类",
        "plic": "5",
        "time": "2018-06-09",
        "dies": "b",
        "clie": "k"
    },
    {
        "name": "C++语言",
        "src": "北京",
        "des": "开发类",
        "plic": "5",
        "time": "2018-06-09",
        "dies": "b"
    },
    {
        "name": "大数据开发",
        "src": "北京",
        "des": "开发类",
        "plic": "2",
        "time": "2018-06-09",
        "dies": "b"
    },
    {
        "name": "算法工程师",
        "src": "上海",
        "des": "开发类",
        "plic": "5",
        "time": "2018-06-09",
        "dies": "h"
    },
    {
        "name": "自动化测试",
        "src": "北京",
        "des": "开发类",
        "plic": "4",
        "time": "2018-06-09",
        "dies": "b"
    }

];
//渲染函数
function renderList(arr) {
    var str = "";
    arr.forEach(function (ele, index) {
        str += '<li>\
       <span>'+ ele.name + '</span>\
       <span class="username">'+ ele.src + '</span>\
       <span class="des">'+ ele.des + '</span>\
       <span class="des">'+ ele.plic + '</span>\
       <span class="des">'+ ele.time + '</span>\
   </li > '
    })

    $("#Catalog_ul").html(str)
}
renderList(personArr);

//根据名字渲染
var searchVal = "";
var diesVal = "a";
$("#Catalog_text").on("input", function () {
    searchVal = $(this).val();
    all()
})

// 根据按钮、添加样式
$(".Catalog_citys a").on("click", function () {
    $(this).addClass('Catalog_all').siblings().removeClass('Catalog_all');
    diesVal = $(this).attr("dies");
    all();
})

function nameFilter(name, arr) {
    return arr.filter(function (ele, index) {
        return ele.name.indexOf(name) != -1 ? true : false
    })
}

function diesFilter(dies, arr) {
    if (dies == "a") {
        return arr;
    }
    return arr.filter(function (ele, index) {
        return ele.dies == dies;
    })
}

function all() {
    var lastArr = nameFilter(searchVal, personArr);
    lastArr = diesFilter(diesVal, lastArr);
    renderList(lastArr);
}




// 员工关怀
function Sattff() {
    $.get('json/Sattff.json', function (data) {
        $('#Catalog_Pic ul').html('')
        // console.log(data.data);
        var Catalog_main_img = data.data;
        for (var i = 0; i < Catalog_main_img.length; i++) {
            var Catalog_img_list = $('<li class="Catalog_Pic_img"><a href="#" id="Catalog_a"><img src="' + Catalog_main_img[i].Catalog_src + '" alt=""></a><p class="Catalog_Pic_title">' + Catalog_main_img[i].Catalog_title + '</p></li>');
            $('.Catalog_Pic ul').append(Catalog_img_list);
        }
    })
}

var Catalog_Y = 1;
getYuan(Catalog_Y);
$('.Catalog_tab_mian li').click(function () {
    Catalog_Y = $(this).index() + 1;
    // console.log(Catalog_Y)
    getYuan(Catalog_Y);
})
function getYuan() {
    if (Catalog_Y == 1) {
        Sattff();
        $('.Catalog_cont_main').css('display', 'block');
        $('#Catalog_Pic').css('display', 'none');
    }
    else if (Catalog_Y == 2) {
        $('.Catalog_cont_main').css('display', 'none');
        $('#Catalog_Pic').css('display', 'block');
    }
}


$('.backtop').click(function() {
    $('html,body').animate({
        'scrollTop': '0px'
    }, 300);
});
$(window).scroll(function() {
    var scr = $(window).scrollTop();
    if (scr > $(window).height()) {
        $('.backtop').fadeIn();
    } else {
        $('.backtop').fadeOut();
    }
})
