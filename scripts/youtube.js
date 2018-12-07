
 $(document).ready(function(){
  console.log("ready")
  console.log(search)
  
  $('#results').on("click", function(){
    let search = $('#search').val()
    $.ajax({url: "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q="+search+`&type=video&key=${key}`, 
        success: function(data){
        console.log(data)
        query = data.items
        for(i=0;i<query.length;i++){
          
          $("#ytplayer" + i).attr("src", "https://www.youtube.com/embed/" + query[i].id.videoId + "?autoplay=1").show()
          
          
          
          
        }

        
        
      },
      error: function(request, error){
        console.log(error)
        console.log(request)
  
    }
    });
    });
    
 }) 