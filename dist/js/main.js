$(document).ready(function(){function e(){$(".popup-bg").css("height",200+$(window).height())}function t(e,t){e.click(function(e){$(".popup-bg").addClass("active"),$("body").addClass("active"),t.addClass("active"),$("body").addClass("active"),e.preventDefault()}),$(".popup-bg").click(function(){$(this).removeClass("active"),t.removeClass("active"),$("body").removeClass("active")}),$(".popup-close").click(function(){$(".popup-bg").removeClass("active"),t.removeClass("active"),$("body").removeClass("active")}),$(".custom-click").click(function(){$(".customform").removeClass("active")}),t.click(function(e){e.preventDefault(),e.stopPropagation()})}$(window).resize(e()),e(),t($(".global-form"),$(".globalform")),t($(".polit-form"),$(".politform")),t($(".custom-form"),$(".customform")),t($(".popup-sertificate1"),$(".popupsertificate1")),t($(".popup-sertificate2"),$(".popupsertificate2")),t($(".popup-sertificate3"),$(".popupsertificate3")),t($(".popup-sertificate4"),$(".popupsertificate4")),$(".phone").mask("+7 (999) 999-9999"),$(".sertificates__carousel.owl-carousel").owlCarousel({margin:25,dots:!1,loop:!0,mouseDrag:!0,nav:!1,nav:!0,pagination:!0,navText:["<span>&#8249;</span>","<span>&#8250;</span>"],responsive:{0:{items:2,center:!0},985:{items:3},1080:{items:6}}});var i=[{genre:"post",percentage:37,name:"Поставки на АЗС"},{genre:"prom",percentage:14,name:"Промышленность"},{genre:"torg",percentage:12,name:"Предприятия",name2:"торгового комплекса"},{genre:"sx",percentage:12,name:"Сельскохозяйственные",name2:"предприятия"},{genre:"transp",percentage:10,name:"Транспорт"},{genre:"stroit",percentage:8,name:"Строительство"}];if(6<i.length){var a=0,n=_.slice(i,6);_.forEach(n,function(e,t){a+=e.percentage,otherName+=e.name,otherName2+=e.name2}),i.splice(6),i.push({genre:"other",percentage:a,name:otherName,name2:otherName2})}var p=d3.select("#flavour-graph");p.append("g").attr("class","chart-center").attr("transform","translate(350, 250)");for(var m=d3.pie().value(function(e){return e.percentage})(i),r=function(r){var o=i[r].genre,e=i[r].percentage,t=i[r].name,a=i[r].name2;p.select(".chart-center").append("g").attr("class","chart-segment__"+o);var n={innerRadius:0,outerRadius:125,startAngle:m[r].startAngle,endAngle:m[r].endAngle},s=d3.arc()(n),c=d3.arc().centroid(n);if(c[0]=c[0]-7-2*r,r<6){p.select(".chart-segment__"+o).append("path").attr("d",s).attr("class","segment-"+r).attr("fill","#EA0028");var l=function(e,t,a){var n=a?c[0]+a-2*r:c[0];console.log("segment "+r+": "+n),p.select(".chart-segment__"+o).append("text").attr("x",n).attr("y",c[1]).attr("class",e).text(t)};l("segment-"+r+"__text",e.toFixed()),l("segment-"+r+"__text-percentage","%",40),l("segment-"+r+"__text-name",t),l("segment-"+r+"__text-name2",a)}p.select(".segment-0__text").attr("x","40").attr("y","-18"),p.select(".segment-0__text-percentage").attr("x","95").attr("y","-18"),p.select(".segment-1__text").attr("x","-5").attr("y","130"),p.select(".segment-1__text-percentage").attr("y","130"),p.select(".segment-2__text").attr("x","-110").attr("y","100"),p.select(".segment-2__text-percentage").attr("x","-74").attr("y","100"),p.select(".segment-3__text").attr("x","-140").attr("y","20"),p.select(".segment-3__text-percentage").attr("x","-104").attr("y","20"),p.select(".segment-4__text").attr("x","-105").attr("y","-50"),p.select(".segment-4__text-percentage").attr("x","-75").attr("y","-50"),p.select(".segment-5__text").attr("x","-45").attr("y","-87"),p.select(".segment-5__text-percentage").attr("x","-30").attr("y","-87"),p.select(".segment-0__text-name").attr("x","197").attr("y","-172"),p.select(".segment-1__text-name").attr("x","102").attr("y","235"),p.select(".segment-2__text-name").attr("x","-305").attr("y","136"),p.select(".segment-2__text-name2").attr("x","-305").attr("y","152"),p.select(".segment-3__text-name").attr("x","-350").attr("y","8"),p.select(".segment-3__text-name2").attr("x","-350").attr("y","22"),p.select(".segment-4__text-name").attr("x","-245").attr("y","-82"),p.select(".segment-5__text-name").attr("x","-170").attr("y","-172")},o=0;o<i.length;o+=1)r(o);wow=new WOW({boxClass:"wow",animateClass:"animated",offset:0}),(new WOW).init();var s=new Date;function c(){$("*[data-anchor]").each(function(e){var t=$(this).attr("data-anchor");$(this).offset().top-400<=$(window).scrollTop()&&($(".fixed-nav ul li").removeClass("active"),$('[data-menuAnchor="'+t+'"]').addClass("active"))})}document.getElementById("copy").innerHTML=s.getFullYear(),$(".map .map__block").each(function(){var e=$(this).attr("data-block");$(window).on("load",function(){var n;0<(n=$(".g_map."+e)).length&&$.getScript("http://maps.google.com/maps/api/js?sensor=false",function(e,t,a){n.each(function(){var e=$(this),t=new google.maps.LatLng(e.attr("data-longitude"),e.attr("data-latitude")),a=e.attr("data-marker"),n=new google.maps.LatLng(e.attr("data-markerlng"),e.attr("data-markerlat"));if(801<=jQuery(window).width())var r={zoom:17,center:t,mapTypeId:google.maps.MapTypeId.ROADMAP,mapTypeControl:!1,scrollwheel:!1,draggable:!0,panControl:!1,zoomControl:!1,disableDefaultUI:!0};else r={zoom:17,center:n,mapTypeId:google.maps.MapTypeId.ROADMAP,mapTypeControl:!1,scrollwheel:!1,draggable:!0,panControl:!1,zoomControl:!1,disableDefaultUI:!0};var o=new google.maps.Map(e[0],r);new google.maps.Marker({map:o,icon:{size:new google.maps.Size(36,48),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(18,48),url:a},position:n}),google.maps.event.addDomListener(window,"resize",function(){var e=o.getCenter();google.maps.event.trigger(o,"resize"),o.setCenter(e)})})})})}),$(".fixed-nav li").on("click",function(e){var t=$(this).attr("data-menuAnchor");e.preventDefault();var a=$('[data-anchor="'+t+'"]');$("html,body").stop().animate({scrollTop:$(a).offset().top},1e3)}),c(),$(window).scroll(function(){c()}),$(window).resize(function(){c()})});