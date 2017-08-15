$(function(){
	// 搜索栏 焦点离开搜索栏内没输入内容还原 输入内容则保存
	$("#inputSearch").focus(function(){
		$(this).addClass("focus");
		if ($(this).val()==this.defaultValue) {
			$(this).val("");
		}
	}).blur(function(){
		$(this).removeClass("focus");
		if ($(this).val()=='') {
			$(this).val(this.defaultValue); //defaultVlue 返回文本框初始值
		}
	}).keyup(function(e){
		if(e.which==13){ //使用回车键触发
			alert("回车提交表单！");
		}
	})

	//导航效果
	$(function(){
		$("#nav li").hover(function() {
			$(this).find(".jnNav").show();
		},function(){
			$(this).find(".jnNav").hide();
		})
	})

	//商品分类热销效果
	$(function(){
		$(".jnCatainfo .promoted").append('<s class="hot"><s/>')
	})

	//广告大图切换效果

	// var index= 0;
	// $("#jnImageroll div a").mouseover(function(){
	// 	// alert(10);
	// 	index = $("#jnImageroll div a").index(this);
	// 	showImg(index);
	// }).eq(0).mouseover();

	// function showImg(index){
	// 	var $rollobj = $("#jnImageroll");
	// 	var $rolllist = $rollobj.find("div a");
	// 	var newhref = $rolllist.eq(index).attr("href");
	// 	$("#JS_imgWrap").attr("href","newhref")
	// 					.find("img").eq(index).stop(true,true).fadeIn()
	// 					.siblings().fadeOut();
	// 	$rolllist.removeClass("chos").css("opacity","0.7")
	// 			 .eq(index).addClass("chos").css("opacity","1") 				
	// }

	// //添加自动切换广告效果
	// adTime = setInterval(function(){
	// 	showImg(index)
	// 	index++;
	// 	if(index==len){index=0;}
	// },5000);

	$(function(){
		var $imgrolls = $("#jnImageroll div a"); //获得id为jn下的div 下的所有a标签
		$imgrolls.css("opacity","0.7"); //设置a标签不透明度为0.7
		var len = $imgrolls.length;	//取得a标签的总个数
		var index = 0;  //表示当前要显示图片的索引
		var adTime = null;	
		$imgrolls.mouseover(function(){
			index = $imgrolls.index(this);
			showImg(index);
		}).eq(0).mouseover();

		//滑入 停止动画 画出开始动画
		$('#jnImageroll').hover(function(){
			if(adTime){
				clearInterval(adTime);
			}
		},function(){
			adTime = setInterval(function(){
				showImg(index);
				index++;
				if(index==len){index=0;}
			},3000);
		}).trigger("mouseleave");
	})

	//显示不同幻灯片
	function showImg(index){
		var $rollobj = $("#jnImageroll");
		var $rolllist = $rollobj.find("div a");
		var newhref = $rolllist.eq(index).attr("href");
		$("#JS_imgWrap").attr("href", newhref)
						.find("img").eq(index).stop(true,true).fadeIn()
						.siblings().fadeOut();
		$rolllist.removeClass("chos").css("opacity","0.7")
						.eq(index).addClass("chos").css("opacity","1");
	}
	
	$(function(){
		var x= 10;
		var y= 20;
		$("a.tooltip").mouseover(function(e){

			this.myTitle = this.title;
			this.title="";
			var tooltip = "<div id='tooltip'>"+ this.myTitle +"</div>";
			$("body").append(tooltip);
			$("#tooltip")
				.css({
					"top":(e.pageY + y)+"px",
					"left":(e.pageX + x)+"px"
				}).show("fast");
		}).mouseout(function(){
			this.title = this.myTitle;
			$("#tooltip").remove();
		}).mouseover(function(e){
			//alert("la");
			$("#tooltip")
				.css({
					"top":(e.pageY+y)+"px",
					"left":(e.pageX+x)+"px"
				});
		});
	})


	$(function(){
		$("#jnBrandTab li a ").click(function(){
			$(this).parent().addClass("chos")
				   .sibling().removeClass("chos");
			var idx = $("#jnBrandTab li a").index(this);
			showBrandList(idx);
			return false;
		}).eq(0).click();
	});
	function showBrandList(index){
		var $rollobj = $("#jnBrandList");
		var rollwidth = $rollobj.find("li").outerWidth();
		rollWidth = rollWidth * 4 ;
		$rollobj.stop(true,false).animate({left: -rollWidth*index},1000);
	}
	
})

javascript:void(0);