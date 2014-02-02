$(window).load(function() {
  $('#featured').orbit();
});

$(document).ready(function(){
  
  function relative_time(time_value) {
    var values = time_value.split(" ");
    time_value = values[1] + " " + values[2] + ", " + values[5] + " " + values[3];
    var parsed_date = Date.parse(time_value);
    var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
    var delta = parseInt((relative_to.getTime() - parsed_date) / 1000);
    delta = delta + (relative_to.getTimezoneOffset() * 60);

    var r = '';
    if (delta < 60) {
    r = '1 minute ago';
    } else if(delta < 120) {
    r = '2 minutes ago';
    } else if(delta < (45*60)) {
    r = (parseInt(delta / 60)).toString() + ' minutes ago';
    } else if(delta < (90*60)) {
    r = '1 hour ago';
    } else if(delta < (24*60*60)) {
    r = '' + (parseInt(delta / 3600)).toString() + ' hours ago';
    } else if(delta < (48*60*60)) {
    r = '1 day ago';
    } else {
    r = (parseInt(delta / 86400)).toString() + ' days ago';
    }

    return r;
  }

  String.prototype.linkify = function() {
    return this.replace(/[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&\?\/.=]+/, function(m) {
      return m.link(m);
    });
  };

  $(function(){
    $.ajax({
      url: 'http://graph.facebook.com/168163223241202/albums?fields=photos.fields(source,%20link)',
      dataType: 'jsonp',
      success: function(data){ 
        var i = 0;
        $.each(data.data, function(k1, album){
          var pictureArray = album.photos.data;
          $.each(pictureArray, function(k2, pictureObject){
            if (i > 20) return true;
            var $img = $('<img/>').prop({ src: pictureObject.source }).appendTo('.fb').wrap('<a href="' + pictureObject.link + '"></a>').wrap('<div class="four-thirds column"></div>');
            i++;
          });
        });
      }
    });
  });
  
});