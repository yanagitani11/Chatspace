if @new_message.present?
  json.array! @new_message do |message|
  	json.id message.id
  	json.content message.content
  	json.time message.create_at
  	json.name message.user.name
  	json.image message.image.url
  end
end
