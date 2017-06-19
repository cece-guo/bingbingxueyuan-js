//插入
var queue = [];
function draw(){
	var str=""
	for(var i=0;i<queque.length;i++){
		str += "<div class='child' height='"+ queue[i]+"px'></div>"
	}
	show.innerHTML = str;
}

//插入是检测input里内容是否满足要求
function checkIn(){
	var inputNum = document.getElementById("input");
//	var inputNum = txt.value;
	if(inputNum == ""){
		alert("是空的~~");
		return 1;
	}
	if(inputNum >= 100 || inputNum <= 10){
		alert("请输入10~100之间的数~");
		return 1;
	}
	if(queue.lenth>60){
		alert("长度不能超过60~");
		return 1;
	}
	return 0;
}

//左侧插入
function leftIn(txt){
	if(!checkIn()){
		queue.unshift(parseInt(txt));
	}
	draw();
}

function Init(){
	var queue=[];
	var txt = document.getElementById("input");
	document.getElementById("LeftIn").onclick=function(){
		var txt = document.getElementById("input").value;
		leftIn(txt);
	};
	document.getElementById("LeftIn").onclick=leftIn;
	var LeftOut = document.getElementById("LeftOut");
	var RightIn = document.getElementById("RightIn");
	var RightOut = document.getElementById("RightOut");
	var show = document.getElementById("show");
	var RandomData = document.getElementById("RandomData");
	var BubbleSort = document.getElementById("BubbleSort");
	var SelectSort = document.getElementById("SelectSort");
}

Init();