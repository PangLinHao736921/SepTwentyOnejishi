$(function() {
	class Contact {
		constructor() {
			var self = this;
			this.init();
			this.bind();
		}
		init() {
			this.one();
		}
		bind() {
			var self = this;
			$(".btn").on("click", function() {
				$(this).children("a").addClass("cur").end().siblings().children("a").removeClass("cur");
				var ind = $(this).index();
				console.log(ind);
				$(".xs").eq(ind).css("display", "block").siblings(".xs").css("display", "none");
				if(ind == 1){
					self.two();
				}else if(ind == 2){
					self.three();
				}
			})
		}
		one() {
			$.get("json/site.json", function(data) {
				var data = typeof data == 'object' ? data : eval('(' + data + ')');
				var list = data.data;
				console.log(list[0]);
				for(var i = 0; i < list.length; i++) {
					$('#mytmpl').tmpl(list[i]).appendTo('.map1');
				}
			})
		}
		two() {
			$(".animated").css("margin-top","400px");
			$.get("json/didian.json",function(data){
				var data = typeof data == 'object' ? data : eval('(' + data + ')');
				var list = data.data;
				console.log(list);
				for(var i = 0; i < list.length; i++){
					var str = "allmap" + (i+1);
					console.log(str);
					var map = new BMap.Map(str);    
					var point = new BMap.Point(list[i].x, list[i].y);    
					map.centerAndZoom(point, 15);    
					var marker = new BMap.Marker(point);        // 创建标注    
					map.addOverlay(marker);
					var opts = {    
					    width : 20,     // 信息窗口宽度    
					    height: 10,     // 信息窗口高度    
					    title : list[i].title  // 信息窗口标题   
					}    
					var infoWindow = new BMap.InfoWindow("", opts);  // 创建信息窗口对象    
					map.openInfoWindow(infoWindow, map.getCenter());
					$(".animated").eq(i).animate({"margin-top":'0px'},300*(i+1),"swing");
				}
			})
			
		}
		three(){
			$(".con").css("width","100%");
			$(".con").animate({"width":"520px"});
		}
	}

	var contact = new Contact();
})