json.array! @new_messages.each do |new_message|
    json.message     new_message.content
    json.create_time new_message.created_at
    json.user_name   new_message.user.name
    json.image       new_message.image.url
    json.group_id    new_message.group_id
    json.id          new_message.id
  end

