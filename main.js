
var canvas = new fabric.Canvas('myCanvas');
block_y=1;
block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
   fabric.Image.fromURL(get_image, function(Img){
	   block_image_object = Img;

	   block_image_object.scaleToWidth(block_image_width);
	   block_image_object.scaleToHeight(block_image_height);
	   block_image_object.set({
		   top:block_y,
		   left: block_x
	   });
	   canvas.add(block_image_object);
   });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

   if(keyPressed == '82')
   {
	   new_image('rr1.png');
	   console.log("r");
   }
   if(keyPressed == '71')
   {
	   block_x = 200;
	   new_image('gr.png');
	   console.log("g");
   }
   
   if(keyPressed == '89')
   {
	   block_x =350;
	   new_image('yr.png');
	   console.log("y");
   }
   if(keyPressed == '80')
   {
	   block_x = 600;
	   new_image('pr.png');
	   console.log("p");
   }
   if(keyPressed == '66')
   {
	   block_x = 700;
	   new_image('https://o.remove.bg/downloads/ddfd8083-a73b-4609-8105-a40c6953f171/263-2638009_blue-power-ranger-png-blue-power-ranger-cartoon-removebg-preview.png');
	   console.log("b");
   }
   
}

