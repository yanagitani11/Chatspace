$(function() {
	$('.messages').scrollTop($('.messages')[0].scrollHeight);
	function buildHTML(message){
    var image = message.image ? `<img src="${message.image}" class="chat-main__message-body"> ` : "" ;
    var html = `<div class="message" data-message-id="${ message.id }">
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

  	$(function(){
  		setInterval(update, 5000);
  	});

  	function update(){
  		var message_id = $('.message').last().data("message-id");
  		$.ajax({
  		  url: location.href,
  			type: "GET",
  			data: {
  			  message: {id: message_id}
  			},
  			dataType: "json"
  		})
  		.done(function(data) {
  		  console.log(data)
          data.forEach(function(message) {
            $('.messages').append(buildHTML(message));
            $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight});
          });
        })
  	};
	$('#new_message').on('submit',function(e){
		e.preventDefault();
		var formData = new FormData(this);
		var url = $(this).attr('action')
		$(".form__submit").prop("disabled",false);
		$.ajax({
			url: url,
			type: "POST",
			data: formData,
			dataType: 'json',
			processData: false,
			contentType: false,
			disabled: false
		})
		.done(function(data){
			console.log(data);
      		var html = buildHTML(data);
      		$(".form__submit").prop("disabled",false);
      		clearBox(html);
		})
		.fail(function(){
			alert("errorr");
			$(".form__submit").prop("disabled",false);
		});
	});
});
