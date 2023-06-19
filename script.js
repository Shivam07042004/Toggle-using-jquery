var black=false;
var image=$('#Toggle-images')
image.on('click',function()
{
    if(black==false)
    {
        black=true;
        image.html('<i class="fa-solid fa-toggle-on fa-2xl"></i>');
        $('#container').css({
            backgroundColor:"black",
            color:"white"
        });  
        image.css({
            color:"white"
        });  
        console.log('on');
    }
    else  
    {
        black=false;
        image.html('<i class="fa-solid fa-toggle-off fa-2xl"></i>');
        $('#container').css({
            backgroundColor:"white",
            color:"black"
        });
        image.css({
            color:"black"
        });  
       
        console.log('off');
    }
    
})