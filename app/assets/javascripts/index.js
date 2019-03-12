$(function() {
	var Adduser_list = $("#user-search-result");
	var users_list = $(".chat-group-form__field--result")
  window.onload = firstscript;

    function appendUser(user){
      var html =  `<div class="chat-group-user clearfix">
                    <p class="chat-group-user__name">${user.name}</p>
                    <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
                  </div>`
      Adduser_list.append(html);
    };

    function appendAddUser(userId, userName){
      var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
                    <input name='group[user_ids][]' type='hidden' value='${ userId }'>
                    <p class='chat-group-user__name'>${ userName }</p>
                    <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
                  </div>`
      users_list.append(html);
    };

    function appendNoUser(user){
      var html = `<div class="chat-group-user clearfix">
                    <p class="chat-group-user__name">${user}</p>
                  </div>`
      Adduser_list.append(html);
    }

    $(document).on('click', '.user-search-add', function(){
      var id = $(this).data('user-id');
      var name = $(this).data('user-name');
      appendAddUser(id, name);
      $(this).parent().remove();
    })
    $(document).on('click', '.user-search-remove', function() {
      $(this).parent().remove();
    })
    function firstscript(){
      var user = document.getElementsByClassName('chat-group-user__name_a-part');
      console.log(user);
      for (var i = 0; user.length; i++){
        var member = user[i].outerText;
        console.log(member);
        var id = user[i].id;
        console.log(id);
        appendAddUser(id, member);
      }
    }

	$("#user-search-field").on("keyup",function() {
		var input = $(this).val();
		$.ajax({
			type: 'GET',
			url: "/users",
			data: { keyword: input},
			dataType: 'json'
		})

      .done(function(users){
        $("#user-search-result").empty();
        if (users.length !== 0) {
          users.forEach(function(user){
            appendUser(user);
          });
        }
        else {
          appendNoUser("一致するユーザーはいません");
        }
      })
      .fail(function(){
        alert('ユーザー検索に失敗しました')
      })
	});
});