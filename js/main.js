(function(){requirejs.config({shim:{waypoints:{deps:["jquery"]}},paths:{jquery:"//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.0/jquery.min",waypoints:"waypoints.min"}}),require(["jquery","waypoints"],function(a){return a(function(){return a(".icon").addClass("in"),a(window).scrollTop()>392&&a("#docnav").css({top:5}),a(window).on("scroll",function(){return a(window).scrollTop()>330?a("#docnav").css({top:5}):a("#docnav").css({top:330-a(window).scrollTop()})}),a(".docs h3").waypoint(function(){return a("#docnav li").removeClass("active"),a("a[href='#"+a(this).attr("id")+"']").parent().addClass("active")}),a("a[href*=#]:not([href=#])").on("click",function(){var b,c;if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")||location.hostname===this.hostname){c=a(this.hash).length?a(this.hash):a("[name="+this.hash.slice(1)+"]");if(c.length)return b=c.offset().top>a(window).scrollTop()?-1:1,a("html,body").animate({scrollTop:c.offset().top-b},500),!1}}),a('a[href^="http://"]').attr("target","_blank")})})}).call(this)