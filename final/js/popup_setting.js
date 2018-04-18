jQuery(init);

function init($) {
		 _popup();
		};

function _popup(){
    var $page_wrap			= $('#page_wrap');
	
	marginTop	= false; /* Y축 기준 가운데 정렬 사용시: true, 미사용시: false */
	marginLeft	= false; /* X축 기준 가운데 정렬 사용시: true, 미사용시: false */
	cookie		= true; /* 오늘하루 열지않기 사용시: true, 미사용시: false */
	cookieValue	= 'hangdong_jeil_cookie'; /*해당사이트 쿠키 이름 설정*/
		
		if($('body.main').length) {
		popSetting(1, '/final/img/main/popup_180213.jpg', ' ', 140, 10);
		/*(팝업박스넘버, 이미지 경로, 이미지 대체 텍스트, top값, left값)*/
			//addButton(1, 1, '/final/main/page-2.pdf', true, '폐관 안내문', 201, 46, 258, 59);
			//addButton(1, 2, '/final/main/guide_171011_02.pdf', true, '일반공급 당첨자', 118, 61, 167, 149);
			
			/*(팝업박스넘버, 버튼 넘버, 링크 경로, 새창여부(사용시 true), 버튼이름, 가로크기, 세로크기, top값, left값)*/
		//popSetting(2, '/final/img/main/popup_180126.jpg', ' ', 140, 331);
			//addButton(2, 1, '/final/main/guide_180129_01.pdf', true, '은행 대출 안내문', 151, 68, 369, 23);
			//addButton(2, 2, '/final/main/guide_180129_02.pdf', true, '제일건설 안내문', 151, 68, 369, 187);
		//popSetting(3, '/final/img/main/popup_0914_02.jpg', ' ', 444, -323);
		//popSetting(3, '/final/img/main/popup_1017.jpg', ' ', 140, 251);
			//addButton(3, 1, '/final/main/guide_171017.pdf', true, '예비당첨자 추첨일정 변경안내문', 195, 36, 290, 45);
		//popSetting(4, '/final/img/main/popup_1011.jpg', ' ', 140, -610);
			//addButton(4, 1, '/final/customer/prizewinner.asp', '', '당첨자조회', 195, 36, 191, 45);
			//addButton(1, 2, '../customercenter/event.asp?tab=pw', '', '친구추가 이벤트 당첨자', 112, 35, 117, 130);
			//addButton(1, 3, '../customercenter/event.asp', '', '사진 이벤트', 137, 35, 284, 59);
		//popSetting(5, '/final/img/main/popup_0922.jpg', ' ', 140, 251);
			//addButton(5, 1, '/final/main/list_0918.html', true, '당첨자명단', 195, 36, 301, 45);
		/*popSetting(6, '/final/img/main/popup_0920.jpg', ' ', 140, -610);
			addButton(6, 1, '/final/main/list_0920_01.pdf', true, '59 당첨자확인', 125, 35, 206, 11);
			addButton(6, 2, '/final/main/list_0920_02.pdf', true, '74 당첨자확인', 125, 35, 206, 143);
			addButton(6, 3, '/final/main/list_0920_03.pdf', true, '75 당첨자확인', 125, 35, 248, 11);
			addButton(6, 4, '/final/main/list_0920_04.pdf', true, '84a 당첨자확인', 125, 35, 248, 143);
			addButton(6, 5, '/final/main/cutLine_170921.pdf', true, '84b 당첨자확인', 258, 36, 300, 14);*/
			//addButton(6, 6, '/final/main/list_0920_06.pdf', true, '115 당첨자확인', 82, 36, 247, 206);
		//popSetting(4, '../img/main/popup_0819_2.jpg', ' ', 100, -580);
			//addButton(4, 1, '../sellinfo/subscription.asp', '', '청약안내', 180, 33, 286, 46);
			}
		else {
		
		popSetting(1, 'teaser/img/teaser/popup_0913.jpg', ' ', 100, -580);
		/*(팝업박스넘버, 이미지 경로, 이미지 대체 텍스트, top값, left값)*/
			addButton(1, 1, '#box_05', '', '관심고객등록', 195, 36, 290, 45);
			$('#popup_01 .btn_01').addClass('move');
			//addButton(1, 2, '#', '', '당첨자보기', 140, 43, 361, 162);
			
			/*(팝업박스넘버, 버튼 넘버, 링크 경로, 새창여부(사용시 true), 버튼이름, 가로크기, 세로크기, top값, left값)*/
		popSetting(2, 'teaser/img/teaser/popup_0913_02.jpg', ' ', 100, -293);
			addButton(2, 1, 'teaser/img/teaser/guide_170913_01.pdf', true, '특별공급안내문', 236, 36, 150, 25);
			addButton(2, 2, 'teaser/img/teaser/guide_170913_02.pdf', true, '인터넷청약안내', 236, 36, 187, 25);
			//addButton(2, 3, 'http://lake-xi.co.kr/teaser/teaser.asp?menu=ev2', '', '사진 이벤트', 137, 35, 176, 59);
			//addButton(2, 4, 'http://lake-xi.co.kr/teaser/teaser.asp?menu=ev', '', '쿨 이벤트', 137, 35, 284, 59);
		//popSetting(3, '../img/teaser/popup_03.jpg', ' ', 130, -450);
		    //addButton(3, 1, 'http://siheung-hoban.co.kr/teaser/teaser.asp#box_04', '', '이벤트참여하기', 200,90,230,85);
			
		}
		function popSetting(no, img_src, img_alt, ps_top, ps_left) {
			var $pop_box			= $('<div id="popup_0'+ no +'" class="popup_box popup_0'+ no + '"></div>'),
				$img				= $('<img src=""  alt=" " />'),
				imgAlt				= img_alt,
				$close_btn			= $('<a href="#" class="close_btn ir"><span>해당 팝업창 닫기</span></a>'),
				$cookie_btn			= $('<a href="#" class="cookie_btn ir"><span>오늘 하루 이창 열지 않기</span></a>');

			$page_wrap.append($pop_box);
				var	 $this				= $('#popup_0' + no);
				
			$this.append($img, $close_btn);
			$('#popup_0' + no).find('img').attr({'src': img_src, 'alt': img_alt});
			setTimeout(function(){
				var this_w				= $('#popup_0' + no).find('img').width(),
					this_h				= $('#popup_0' + no).find('img').height();
				
				$this.css({'width': this_w, 'height': this_h});
				}, 500);
			if(marginTop === true) {$this.css({'top': '50%', 'marginTop': ps_top});}
			else {$this.css({'top': ps_top});};
			
			if(marginLeft === true) {$this.css({'left': '50%', 'marginLeft': ps_left});}
			else {$this.css({'left': ps_left});};
			
			if(cookie === true) {
				cookiedata = document.cookie;    
				if ( cookiedata.indexOf(cookieValue+no+'=done') < 0 ){      
					$this.css('display', 'block');} 
				else {
					$this.css('display', 'none');};
	
				$this.append($cookie_btn);
				
				$this.find('.cookie_btn').click(function(){
					setCookie( cookieValue+no, "done" , 24 );
					$this.css('display', 'none');
					return false;});
				
				function setCookie( name, value, expirehours ) { 
					var todayDate = new Date(); 
					todayDate.setHours( todayDate.getHours() + expirehours ); 
					document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";" } 
			};
			
		};
		
		$('.popup_box .close_btn').click(function(){
			$(this).parent().css('display', 'none');
			return false;
		});
		
		function addButton(target, aNum, aLink, blank, aName, a_w, a_h, a_t, a_l){
			var $this		= $('#popup_0' + target),
				$anchor		= $('<a href="#" class="ir btn btn_0'+aNum +'"><span></span></a>');
			
			$this.append($anchor);
			$this.find('a.btn_0' + aNum).attr({'href': aLink});
			if(blank === true) {$this.find('a.btn_0' + aNum).attr({'target': '_blank'});}
			$this.find('a.btn_0' + aNum).css({
				'width': a_w,
				'height': a_h,
				'top': a_t,
				'left': a_l});
			$this.find('a.btn_0' + aNum +' span').text(aName);
			
		};
		

};
