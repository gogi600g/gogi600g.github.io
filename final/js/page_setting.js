jQuery(init);

function init($) {
		 _page();
		 _nav();
		 _mainRolling();
		 _tab();
		 _banner();
		 _rolling2();
		 _rolling3();
		};

function _page() {
	var $win				= $(window),
		$body				= $('body'),
		$page				= $('#page_wrap'),
		$con_wrap			= $page.find('#content_wrap'),
		$visual				= $page.find('.visual_wrap, .rolling_wrap li'),
		$pt_wrap			= $page.find('.photo_wrap'),
		$quick_menu			= $page.find('.quick_menu'),
		$paper				= $page.find('img.paper');

	function main_position(){
		var $win		= $(window),
			win_w		= $win.width(),
			win_h		= $win.height(),
			min_w		= 1240,
			max_w		= 1400;

			if (win_w > min_w) {
				$page.width('100%');
				$page.removeClass('minWidth');
				}
			else {
				$page.width(min_w);
				$page.addClass('minWidth');
				}
		};

	function sub_position(){
		var $win		= $(window),
			win_w		= $win.width(),
			win_h		= $win.height(),
			min_w		= 1240,
			max_w		= 1400,
			$visual		= $('.main_con').height();

			if (win_w > min_w) {
				$page.width('100%');}
			else {
				$page.width(min_w);}


		function _scroll(){
			var win_w	= $win.width(),
				win_h	= $win.height();

			if($win.scrollTop()> 320) {$quick_menu.stop().animate({'top': $win.scrollTop() }, 300);}
			else {$quick_menu.stop().animate({'top': 208 }, 300);}

		};

		//_scroll();
		//$(window).scroll(_scroll);

		};

	if ($('body.main').length) {
		main_position();
		$(window).resize(main_position);
		//$('.rolling_wrap li').eq(0).addClass('view');
		//$('div.radio_wrap').flashObj({data: '../flash/radio2.swf', width: 226, height: 40});
		}

	else {
		sub_position();
		$(window).resize(sub_position);	}

};

function _pano() {

	var $iframe		= $('<iframe src="http://changwon-eileen.co.kr/flv/player.html" width="1400px" height="600px" scrolling="no" frameborder="0" title="360도 조망체험"></iframe>');

	$('.pano_wrap').css('display','block');
	if($('.vr_wrap iframe').length) { return;}
	else {$iframe.appendTo('.vr_wrap');}

}

function _nav(){
	var $win			= $(window),
		$body			= $('body'),
		$page			= $body.find('#page_wrap'),
		$header			= $page.find('#header'),
		$nav_wrap		= $header.find('.nav_wrap'),
		$content		= $page.find('#content_wrap'),
		$nav_li			= $nav_wrap.find('li.one_d'),
		$nav_1d			= $page.find('ul.nav h3 a'),
		$nav_2d			= $page.find('.two_d'),
		$sub_menu		= $page.find('ul.sub_menu'),
		$quick_menu		= $page.find('ul.quick_menu'),
		$nav_bg			= $page.find('#header span.nav_bg, #header span.nav_bg2');


		$nav_1d.bind('mouseover focusin',function(){
			$nav_1d.removeClass('on');
			$(this).addClass('on');
			$nav_2d.removeClass('hide');
			$nav_bg.css('display', 'block');
			$header.addClass('hd_on');
			});

		$nav_2d.find('a').bind('mouseover focusin',function(){
			$nav_1d.removeClass('on');
			$(this).parent().parent().siblings('h3').find('a').addClass('on');
			$nav_2d.removeClass('hide');
			$nav_bg.css('display', 'block');
			$header.addClass('hd_on');
			});

		if ($('body.main').length) {
			$content.mouseover(function(){
				$nav_1d.removeClass('on');
				$nav_2d.addClass('hide');
				$nav_bg.css('display', 'none');
				$header.removeClass('hd_on');
				});
		}

		$('.popup_box').mouseover(function(){
			$nav_1d.removeClass('on');
			$nav_2d.addClass('hide');
			$nav_bg.css('display', 'none');
			$header.removeClass('hd_on');
			});


		//slideUpDown($nav_2d, -27, 150);
		//slideUpDown($sub_menu, -40, 100);
		//slideUpDown($quick_menu, -61, 150);

		function navSlideUpDown (parent, marginValue, speed){
			parent.find('li a.n_menu').each(function(){
				$(this).before($(this).clone().removeClass().addClass('h_menu ir'));
			});

			parent.find('li').hover(function(){
				$(this).find('a.h_menu').stop().animate({marginTop:'0px'},speed);
				$(this).parent().siblings('a').addClass('on');
			},
			function(){
				$(this).find('a.h_menu').stop().animate({marginTop: marginValue},speed);
				$(this).parent().siblings('a').removeClass('on');
			});
		};

		function slideUpDown (parent, marginValue, speed){
			parent.find('li a.n_menu').each(function(){
				$(this).before($(this).clone().removeClass().addClass('h_menu ir'));
			});

			parent.find('li').hover(function(){
				$(this).find('a.h_menu').stop().animate({marginTop:'0px'},speed);
			},
			function(){
				$(this).find('a.h_menu').stop().animate({marginTop: marginValue},speed);
			});
		};

};

function _banner(){
	var $win			= $(window),
		$body			= $('body'),
		$page			= $body.find('#page_wrap'),
		$banner			= $page.find('.bn_01 .r_wrap'),
		$prev_btn		= $page.find('.bn_01 .btn_wrap a:eq(0)'),
		$next_btn		= $page.find('.bn_01 .btn_wrap a:eq(1)');

		pause2 = true;


		setInterval(rolling2, 5000);

		function rolling2(){
			var $this		= $banner.find('.view');

			if (pause2 === false) {return;};

				$this.animate({opacity:0},600,function(){
					$this.removeClass('view');
					});
				if ($this.next().length) {
					$this.next().animate({opacity:1},600).addClass('view');}
				else {
					$banner.find('li:first-child').animate({opacity:1},600).addClass('view');};
			};

};

function _tab(){
	var $win			= $(window),
		$body			= $('body'),
		$page			= $body.find('#page_wrap'),
		$con_wrap		= $page.find('#content_wrap'),
		$tab_wrap		= $page.find('.tab_wrap'),
		$tab_link		= $tab_wrap.find('a'),
		$tab_box		= $con_wrap.find('.tab_box');

		$tab_link.bind('click focusin',function(){
			var $this		= $(this),
				list_length	= $this.parent('li').index();

				$tab_link.removeClass('on');
				$this.addClass('on');
				$tab_box.addClass('hide');
				$tab_box.eq(list_length).removeClass('hide');


				return false;
			});
};



function _mainRolling() {
	var $win			= $(window),
		$html			= $('html'),
		$body			= $html.find('body'),
		$page			= $body.find('#page_wrap'),
		$rolling		= $page.find('.rolling_wrap'),
		$num_list		= $page.find('.num_list'),
		$menu_btn		= $num_list.find('a'),
		$btn_list		= $page.find('.roll_btn li a'),
		win_w			= $win.width(),
		win_h			= $win.height(),
		$obj			= $page.find('.info_box h4, .info_box p, .info_box .ibg');

		pause = true;
		page_num = 0;
		mFocus = false;


		$menu_btn.click(function(){
			var curPosition = ($(window).width()) * -1,
				$thisvs		= $rolling.find('.view')
				$this    	= $(this),
				$rolltarget	= $(this).parent().siblings('.rolling_wrap'),
				this_index	= $this.index()+1,
				$target2	= $rolltarget.find('li.list_0' + this_index),
				$piece1		= $target2.find('.vsTxt1'),
				$piece2		= $target2.find('.vsTxt2');

			pause = false;
			page_num = $this.parent().index();
			mFocus = true;

			if ($this.attr('class') === 'ir on') { return false;}

			$rolltarget.find('li').removeClass('view');

			$thisvs.fadeOut(1000,function(){
				$this.removeClass('view');
				$target2.find('.vsTxt1, .vsTxt2').css('opacity', 0);
				});

			$piece1.css('top',parseInt($piece1.css('top'))-100);
			$piece1.stop().animate({top: parseInt($piece1.css('top'))+100, opacity: 1}, 700);
			$piece2.css('top',parseInt($piece2.css('top'))-100);
			$piece2.stop().animate({top: parseInt($piece2.css('top'))+100, opacity: 1}, 700);

			$target2.fadeIn(1000).addClass('view');


			$this.mouseout(function(){setTimeout(function(){pause = true}, 4000);});

			$this.siblings().removeClass('on');
			$this.addClass('on');

			return false;

		});

		//setInterval(rolling, 5000);
		$('.rolling_wrap .list_01').addClass('view');

		function rolling(){
			var curPosition = ($(window).width()) * -1,
				$this		= $rolling.find('.view'),
				img_length	= $rolling.find('li').length,
				$target		= ($this.next().length ? $this.next() : $rolling.find('li:first-child')),
				$piece1		= $target.find('.vsTxt1'),
				$piece2		= $target.find('.vsTxt2'),
				$mCkecked	= ($num_list.find('.on').next().length ? $num_list.find('.on').next() : $num_list.find('a:first-child'));

			if (pause === false) {return;};


				$this.animate({opacity: 0}, 1000, function(){
					$this.removeClass('view');
					$this.css('visibility', 'hidden');
					$num_list.find('a').removeClass('on');
					$mCkecked.addClass('on');
					})

				if ($this.next().length) {
					$this.next().animate({opacity: 1}, 1000).addClass('view');;
					$this.next().css('visibility', 'visible');
					$num_list.find('a').removeClass('on');
					$mCkecked.addClass('on');
					}
				else {
					$rolling.find('li:first-child').animate({opacity: 1}, 1000).addClass('view');
					$rolling.find('li:first-child').css('visibility', 'visible');
					$num_list.find('a').removeClass('on');
					$mCkecked.addClass('on');
					};

			};

};

function _rolling2() {

	function slideNext(num) {
		var _prev = $('#slide').find('.slide-active');
		var _next = (num>-1) ? $('#slide').find('.slide'+(num+1)) : ( _prev.is('.slide_img:last') ) ? $('#slide').find('.slide1') : _prev.next('.slide_img');
		var _idx = _next.index('.slide_img');
		_prev.removeClass('slide-active').fadeOut('600');
		_next.addClass('slide-active').fadeIn('600');
		$('#slide_nav').find('a').removeClass('on');
		$('#slide_nav').find('a').eq(_idx).addClass('on');
	};
	var slideAct= setInterval(slideNext, 5000);


	$('#slide_nav a').click(function() {
		var _idx = $(this).index();
		slideNext(_idx);
		return false;
	});

};

function _rolling3() {

	function slideNext2(num) {
		var _prev = $('#slide2').find('.slide-active');
		var _next = (num>-1) ? $('#slide2').find('.slide2'+(num+1)) : ( _prev.is('.slide_img2:last') ) ? $('#slide2').find('.slide21') : _prev.next('.slide_img2');
		var _idx = _next.index('.slide_img2');
		_prev.removeClass('slide-active').fadeOut('600');
		_next.addClass('slide-active').fadeIn('600');
		$('#slide_nav2').find('a').removeClass('on');
		$('#slide_nav2').find('a').eq(_idx).addClass('on');
	};
	var slideAct= setInterval(slideNext2, 3000);


	$('#slide_nav2 a').click(function() {
		var _idx = $(this).index();
		slideNext2(_idx);
		return false;
	});

};

(function($) {
	$.fn.preventLinks = function() {
		return this.each(function() {
			$(this).on('click', function(e){
				e.preventDefault();
				alert('아카이브 웹사이트에서 제공되지 않는 기능 또는 링크 입니다.')
			});
		});
	};

	$.warnPopup = function() {
		var $popup = $('<div/>', {
			css: {
				position: 'fixed',
				top: 10,
				right: 10,
				width: 215,
				padding: 14,
				zIndex: 100,
				backgroundColor: '#ffde72',
				borderRadius: 5
			},
			append: [
				$('<p/>', {
					css: {
						fontFamily: 'sans-serif;',
						fontSize: 11
					},
					html: [
						'이곳은 ',
						'<a href="http://hangdong-jeil.co.kr" target="_blank" style="text-decoration: underline;">',
						'서울 항동지구 제일풍경채 웹사이트</a>에 ',
						'게시된 자료를 보관하기 위한 목적으로 제작되었습니다.'
					].join('')
				}),
				$('<p/>', {
					css: {
						marginTop: 5,
						fontSize: 11,
						color: '#9b812c'
					},
					text: '보관일: 2018년 4월 18일'
				})
			],
			appendTo: document.body
		});
	};

	$(document).ready(function() {
		$('.prevent').preventLinks();
		$.warnPopup();
	});

})(jQuery);

