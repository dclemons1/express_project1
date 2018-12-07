$(document).ready(function(){

$("#submit").click(function(){
    let lesser = $('#shorten_url').val()
    let web =  `https://www.googleapis.com/urlshortener/v1/url/insert?key=${key}`
    console.log(lesser)
    $.ajax({
        url:`https://www.googleapis.com/urlshortener/v1/url?key=${key}`,
        type:"POST",
        data:JSON.stringify({longUrl:lesser}),
        contentType:"application/JSON",
        dataType:"json",
        success: function(data){ 
            console.log(data)
            cb(data.id); }
   });
})
});