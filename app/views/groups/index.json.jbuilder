json.array! @group_user.each do |user|
  json.name user.name
  json.id user.id
end