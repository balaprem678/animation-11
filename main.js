function startAD(){
	setTimeout(function(){
			document.getElementById("plane").style.transform='translateX(0) translateY(0)';
			document.getElementById("plane").style.transition='all 1 ease';
      document.getElementById("plane").style.opacity='1';
		},250)
		setTimeout(function(){
			document.getElementById("text-1").style.opacity='1';
			document.getElementById("text-1").style.transform='translateX(0px)';
			document.getElementById("text-1").style.transition='all 1 ease';
		},750)
		setTimeout(function(){
			document.getElementById("text-2").style.opacity='1';
			document.getElementById("text-2").style.transform='scale(1)';
			document.getElementById("text-2").style.transition='all 0.5s ease 0s';
		},1250)
		setTimeout(function(){
			document.getElementById("text-3").style.opacity='1';
			document.getElementById("text-3").style.transform='translateX(0px)';
			document.getElementById("text-3").style.transition='all 1 ease';
		},1750)
		setTimeout(function(){
			document.getElementById("circle").style.opacity='1';
			document.getElementById("circle").style.transform='translateY(-100px)';
			document.getElementById("circle").style.transition='all 1 ease';
		},2250)
		setTimeout(function(){
			document.getElementById("logo").style.opacity='1';
			document.getElementById("logo").style.transform='translateY(0px)';
			document.getElementById("logo").style.transition='all 1 ease';
		},3250)
		setTimeout(function(){
			document.getElementById("button").style.opacity='1';
			document.getElementById("button").style.transform='translateY(0px)';
			document.getElementById("button").style.transition='all 1 ease';
		},3750)
		setTimeout(function(){	
		
		},4250)
		setTimeout(function(){
		
		},4750)
	
}Window.load=startAD();