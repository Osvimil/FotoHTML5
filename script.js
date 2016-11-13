window.addEventListener('load',init);

function init(){
	var video = document.querySelector('#video');
	var img = document.querySelector('#imagen');
	var canvas = document.querySelector('#canvas');
	var btn = document.querySelector('#camara');

	navigator.getUserMedia =(
		navigator.getUserMedia ||
		navigator.webkitGetUserMedia ||
		navigator.mozGetUserMedia ||
		navigator.msGetUserMedia
		);

	if(navigator.getUserMedia){
		navigator.getUserMedia({video:true},function(vid){
			video.src = window.URL.createObjectURL(vid);
			video.play();
		},function(e){
			console.log(e);
		});

	}else{
		alert('Your browser does not support the tag video');
	}

	video.addEventListener('loadedmetadata',function(){
		canvas.width= video.videoWidth;
		canvas.height = video.videoHeight;
		},false);

	btn.addEventListener('click',function(){
	canvas.getContext('2d').drawImage(video,0,0);
	var imgData = canvas.toDataURL('image/png');
	img.setAttribute('src',imgData);
	});
	

}