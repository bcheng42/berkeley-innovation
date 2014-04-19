$(document).ready(function(){
  
  $.getJSON('https://api-ssl.bitly.com/v3/bundle/bundles_by_user?access_token=05a8ff99765bdf9f5bd14d5cfcee8be033eeca39&user=berkeleyinnovation&callback=?', function(data){
    
    $.each(data, function(key, item){
      if (key=='data') {
        $.each(item.bundles, function(i, bundle_obj){
          $('.bitly').prepend('<div class="four columns"><a href="' + bundle_obj.bundle_link + '"><h3 class="bundle-title">' + bundle_obj.title + '</h3></a><p class="bundle-description">' + bundle_obj.description + '</p></div>')
        });
      };
    });
    
  });
  
});