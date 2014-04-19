$(document).ready(function(){
  $.getJSON('http://www.behance.net/v2/users/berkeleyinnovation/projects?api_key=rzBecI8VB7TziF4RVeppwOFsHSBN6QFr&callback=?', function(data){
    $.each(data, function(i, item){
      $.each(item, function(j, project){ // iterate over projects
        if (j == 16) return false;
        // console.log(project)
        var url = project.url;
        var name = project.name;
        var covers = project.covers;
        var imgURL;
        $.each(project.covers, function(key, value){
          if (key == 202) imgURL = value;
        });
        $('.behance').append('<div class="four columns"><a href="' + url + '" target="_blank"><img src="' + imgURL + '"><p class="project-title">' + name + '</p></a></div>');
      });
    });
  });
});
