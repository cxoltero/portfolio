$(function(){
	jQuery.fn.blogRSS = function(url){
		this.each(function(){
			var $element = $(this);
			var image = "";
			var title = "";
			var content ="";
			var link ="";

			$.getJSON(url, function(data){
				$.each(data.feed.entry, function(i, entry){
					// console.log(entry);
					link = "<a href='" + entry.link[2].href+"' target='_blank' >";
					title = "<h4>"+ entry.title.$t	+"</h4>";
					image = "<img src='"+ entry.media$thumbnail.url+ "/>";
					content += link + "<div class='rss-container'>";
					content += title + image + "</div></a>"; 
				});
				$element.html(content);
			});
		});
	}

})