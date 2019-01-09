$(function() {
	$('.messages').scrollTop($('.messages')[0].scrollHeight);
});
$(function() {
	function buildHTML(message){
    var image = message.image ? `<img src="${message.image}" class="chat-main__message-body"> ` : "" ;
    var html = `<div class="message">
    			  <div class="upper-message">
                    <div class="upper-message__user-name">
                      ${message.name}
                    </div>
                    <div class="upper-message__date">
                      ${message.time}
                    </div>
                  </div>
                  <div class="lower-meesage">
                    <p class="lower-message__content">${message.body}</p>
                    ${image}
                  </div>
                </div>`
	return html;
	}
	  function clearBox(html){
    	$('.messages').append(html)
    	$('.form__message').val('')
    	$('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast')
  	}

	$('#new_message').on('submit',function(e){
		e.preventDefault();
		var formData = new FormData(this);
		var url = $(this).attr('action')
		$.ajax({
			url: url,
			type: "POST",
			data: formData,
			dataType: 'json',
			processData: false,
			disabled: false,
			contentType: false
		})
		.done(function(data){
      		var html = buildHTML(data);
      		clearBox(html);
		})
		.fail(function(){
			alert("errorr");
		});
	});
});
