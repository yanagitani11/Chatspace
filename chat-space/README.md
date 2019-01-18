## members table

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false,foreign_key: true|

## Association
- belongs_to :group
- belongs_to :user

## users table

|Column|Type|Options|
|------|----|-------|
|name|string|index:true, null:false, unique:true|
|mail|string|null:false|

## Association
- has_many :groups, through: members
- has_many :messages
- has_many :members

## groups table

|Column|Type|Option|
|------|----|------|
|name|string|index:true, null:false, unique:true|

## Association
- has_many :users, through: members
- has_many :members
- has_many :messages

## messeges table

|Colum|Type|Option|
|-----|----|------|
|body|text|
|image|string|
|group_id|integer|index:true, null:false|
|user_id|integr|index:true, null:false|

## Assocoation
- belongs_to :user
- belongs_to :group


