$(function(){

  var search_list = $('#user-search-result')

  function appendUser(user) {
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user.name}</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
                </div>`
    search_list.append(html);
  }

  function  appendNoUser(user) {
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user}</p>
                </div>`
    search_list.append(html);
  }

  function addUser(id,name) {
    var html =`<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
                 <input name='group[user_ids][]' type='hidden' value='${id}'>
                 <p class='chat-group-user__name'>${name}</p>
                 <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
               </div>`
    $('#chat-group-users').append(html);
  }

  $("#user-search-field").on("keyup", function(){
    var input = $("#user-search-field").val();
    $.ajax({
      type: 'get',
      url: '/users',
      data: {keyword: input},
      dataType: 'json'
    })

    .done(function(users){
      $("#user-search-result").empty();
      if (users.length !== 0){
        users.forEach(function(user){
          appendUser(user);
        });
      }else{
        appendNoUser("一致する名前はありません");
      }
    })
    .fail(function(){
      alert('error');
    })
  })

  $(document).on("click", ".user-search-add", function(){
    var user_id = $(this).attr("data-user-id");
    var name = $(this).attr("data-user-name");
    addUser(user_id,name);
    $(this).parent().remove();
  });
  $(document).on("click", ".user-search-remove", function(){
    $(this).parent().remove();
  });
});
