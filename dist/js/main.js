$(document).ready(function(){function e(){$(".popup-bg").css("height",200+$(window).height())}function t(e,t){e.click(function(e){$(".popup-bg").addClass("active"),$("body").addClass("active"),t.addClass("active"),$("body").addClass("active"),e.preventDefault()}),$(".popup-bg").click(function(){$(this).removeClass("active"),t.removeClass("active"),$("body").removeClass("active")}),$(".popup-close").click(function(){$(".popup-bg").removeClass("active"),t.removeClass("active"),$("body").removeClass("active")}),t.click(function(e){e.preventDefault(),e.stopPropagation()})}$(window).resize(e()),e(),t($(".global-form"),$(".globalform")),t($(".polit-form"),$(".politform")),$(".phone").mask("+7 (999) 999-9999"),$(".map nav mark").click(function(){var e=$(this);$(".map nav mark").removeClass("active"),e.addClass("active"),$(".map .map__block").removeClass("active"),$(".map .map__block").each(function(){$(this).attr("data-block")==e.attr("data-block")&&$(this).addClass("active")}),$(".map .g_map").removeClass("active"),$(".map .g_map").each(function(){$(this).attr("data-block")==e.attr("data-block")&&$(this).addClass("active")})}),$(".sertificates__carousel.owl-carousel").owlCarousel({margin:25,dots:!1,loop:!0,mouseDrag:!0,nav:!1,nav:!0,pagination:!0,navText:["<span>&#8249;</span>","<span>&#8250;</span>"],responsive:{0:{items:1,center:!0},985:{items:3},1080:{items:6}}});var c=[{genre:"post",percentage:37},{genre:"prom",percentage:14},{genre:"torg",percentage:12},{genre:"sx",percentage:12},{genre:"transp",percentage:10},{genre:"stroit",percentage:8}];if(6<c.length){var a=0,n=_.slice(c,6);_.forEach(n,function(e,t){a+=e.percentage}),c.splice(6),c.push({genre:"other",percentage:a})}var l=d3.select("#flavour-graph");l.append("g").attr("class","chart-center").attr("transform","translate(250, 250)");for(var i=d3.pie().value(function(e){return e.percentage})(c),r=function(r){var o=c[r].genre,e=c[r].percentage;l.select(".chart-center").append("g").attr("class","chart-segment__"+o);var t={innerRadius:0,outerRadius:125,startAngle:i[r].startAngle,endAngle:i[r].endAngle},a=d3.arc()(t),s=d3.arc().centroid(t);if(s[0]=s[0]-7-2*r,r<6){l.select(".chart-segment__"+o).append("path").attr("d",a).attr("class","segment-"+r).attr("fill","#EA0028");var n=function(e,t,a){var n=a?s[0]+a-2*r:s[0];console.log("segment "+r+": "+n),l.select(".chart-segment__"+o).append("text").attr("x",n).attr("y",s[1]).attr("class",e).text(t)};n("segment-"+r+"__text",e.toFixed()),n("segment-"+r+"__text-percentage","%",40)}l.select(".segment-0__text").attr("x","49").attr("y","-18"),l.select(".segment-0__text-percentage").attr("x","95").attr("y","-18"),l.select(".segment-1__text").attr("y","130").attr("x","0"),l.select(".segment-1__text-percentage").attr("y","130"),l.select(".segment-2__text").attr("x","-110").attr("y","100"),l.select(".segment-2__text-percentage").attr("x","-74").attr("y","100"),l.select(".segment-3__text").attr("x","-140").attr("y","20"),l.select(".segment-3__text-percentage").attr("x","-104").attr("y","20"),l.select(".segment-4__text").attr("x","-100").attr("y","-50"),l.select(".segment-4__text-percentage").attr("x","-75").attr("y","-50"),l.select(".segment-5__text").attr("x","-40").attr("y","-87"),l.select(".segment-5__text-percentage").attr("x","-30").attr("y","-87")},o=0;o<c.length;o+=1)r(o);wow=new WOW({boxClass:"wow",animateClass:"animated",offset:0}),(new WOW).init();var s=new Date;function p(){$("*[data-anchor]").each(function(e){var t=$(this).attr("data-anchor");$(this).offset().top-400<=$(window).scrollTop()&&($(".fixed-nav ul li").removeClass("active"),$('[data-menuAnchor="'+t+'"]').addClass("active"))})}document.getElementById("copy").innerHTML=s.getFullYear(),$(".map .map__block").each(function(){var e=$(this).attr("data-block");$(window).on("load",function(){var n;0<(n=$(".g_map."+e)).length&&$.getScript("http://maps.google.com/maps/api/js?sensor=false",function(e,t,a){n.each(function(){var e=$(this),t=new google.maps.LatLng(e.attr("data-longitude"),e.attr("data-latitude")),a=e.attr("data-marker"),n=new google.maps.LatLng(e.attr("data-markerlng"),e.attr("data-markerlat")),r={zoom:17,center:t,mapTypeId:google.maps.MapTypeId.ROADMAP,mapTypeControl:!1,scrollwheel:!1,draggable:!0,panControl:!1,zoomControl:!1,disableDefaultUI:!0},o=new google.maps.Map(e[0],r);new google.maps.Marker({map:o,icon:{size:new google.maps.Size(36,48),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(18,48),url:a},position:n}),google.maps.event.addDomListener(window,"resize",function(){var e=o.getCenter();google.maps.event.trigger(o,"resize"),o.setCenter(e)})})})})}),$(".fixed-nav li").on("click",function(e){var t=$(this).attr("data-menuAnchor");e.preventDefault();var a=$('[data-anchor="'+t+'"]');$("html,body").stop().animate({scrollTop:$(a).offset().top},1e3)}),p(),$(window).scroll(function(){p()}),$(window).resize(function(){p()})});