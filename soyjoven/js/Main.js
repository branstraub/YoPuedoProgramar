			
(function(){
	

		var app = {};
			app.settings = {};
			app.ev;
		app.settings.states = {
			
			load : "cargando",
			intro : "intro",
			navigation : "navegable"

		}
		
		var o = app.settings;
		app.currentState = o.states.load
		
		
		
				
		var controller = function(){
		
			switch(app.currentState){
				
				case o.states.load :
					//console.log("cargando")
					
						$(document).on("ready",function(){
							$(window).scrollTop(0)
							app.ev = $({});
							setListeners();
							
							app.currentState = o.states.intro;
							app.ev.trigger("changeState");
							
						});
				
				break
				
				case o.states.intro :
					//console.log("intro");
					
					animateIntro()
				
				break
				
				case o.states.navigation :
					
					$("body").css({
						
						overflowY: "auto"
					
					});
					
					$(".wrapper_twitter").show(300);
					$(".wrapper_fb").show(300);
					
				
				break

			}
		
		
		}
		
		var setListeners  = function (){
			app.ev.on("changeState",controller)

		}
		
		var animateIntro  = function(){
			//console.log("animateIntro")
			
			var activeNav = function(){
			
				app.currentState = o.states.navigation;
				app.ev.trigger("changeState");
				$(".blackout").remove();
				navigationF();
			}
			var intro = new TimelineMax();
				var showHand = function(){
				
					$(".blackout .mano").css("display","block")
					
				}
                intro.add( TweenMax.from(".blackout .mano", 1, {delay:1,y:"400",onStart:showHand}) );
                intro.add( TweenMax.to(".blackout .mano,.blackout .cabo,.blackout .tirante", .5, {delay:1,y:15}) );
				intro.add( TweenMax.staggerTo(".blackout .glow", .2, {alpha:1},.1) );
				intro.add( TweenMax.staggerTo(".blackout .glow, .blackout .bg", .1, {alpha:0, backgroundColor:"#FFF"},.1) );
				intro.add( TweenMax.to(".tirante, .cabo, .bombillo", .5, {top:-200, }) );
				intro.add( TweenMax.to(".blackout .mano", .5, {y:400,onComplete:activeNav}) );
				intro.add( TweenMax.staggerFrom($("header .row > *"), 1, {delay:.2,rotationX:90,rotationY:5,transformOrigin: "bottom center",ease:Bounce.easeOut},.5) );
                intro.play();
		
		}
		
		
		controller(app.currentState)
	
	
	
		var navigationF = function(){

			var scenePar = document.getElementById('scene');
 			var parallax = new Parallax(scenePar);		
			 
			var scenePar2 = document.getElementById('scene_lamparas');
 			var parallax2 = new Parallax(scenePar2);

			var scenePar3 = document.getElementById('nuvesAnimate');
 			var parallax3 = new Parallax(scenePar3);
			
			
			
			
			var controllerScroll = new ScrollMagic();
	
			var _log1 = $(window).height();
			
			var tween2 =  TweenMax.from("#cursos > #scene_lamparas", 0.8, {alpha:0});
			var tween3 =  TweenMax.staggerFrom(".boxi", 0.8, {delay:1,rotationX:-90,rotationY:10,transformOrigin: "bottom center",ease:Bounce.easeOut}, 0.3);
			
			
			
			var scene1 = new ScrollScene({triggerElement: "#trigger1",duration:_log1-100}).addTo(controllerScroll);
			
			var scene2 = new ScrollScene({triggerElement: "#trigger2"}).addTo(controllerScroll);
			scene2.setTween(tween2)
			var scene3 = new ScrollScene({triggerElement: "#trigger3"}).addTo(controllerScroll);
			scene3.setTween(tween3)
			var scene4 = new ScrollScene({triggerElement: "#trigger4"}).addTo(controllerScroll);	


			scene1.on("start", function (event) {
				        //console.log("Hit start point of scene. uno");
						var tl = new TimelineMax({repeat:-1,repeatDelay:5});
						tl.add( TweenMax.to(".hash", .5, {rotation:5}) );
						tl.add( TweenMax.to(".hash", .5, {rotation:0}) );
						tl.play();
						//timeline hombre
						var tl2 = new TimelineMax({repeat:-1,repeatDelay:0});
							tl2.add( TweenMax.to(".hombre", 1.9, {y:-50}) );
							tl2.add( TweenMax.to(".hombre", 1.9, {y:0}) );
						tl2.play();
				       
				});
			scene2.on("start", function (event) {
				        //console.log("Hit start point of scene. dos");
				         
				});			
			scene3.on("start", function (event) {
				       //console.log("Hit start point of scene. tres");/* 
				       
				});
			scene4.on("start", function (event) {
				        //console.log("Hit start point of scene. cuatro");
				});				

		}
		
	
	
	var ajustSizes = function(){
		var _log1 = $(window).height();

		if(_log1 < 700 ){

			_log1 = 700;

		}
		$("header, section").height(_log1)	
	};
	$(window).on("resize",function(){
		
		ajustSizes();

	})
	
	ajustSizes();

})();