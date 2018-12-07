## userテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|nul: false,unique: ture|
|name|string|nul: false,unique: ture|
|email|string|nul: false,unique: ture|
|password|string|nul: false,unique: ture|

### association
- has_many :group, through: :members
- has_many :members
- has_many :comments



## groupテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|nul: false,unique: ture|
|name|string|nul: false|

### association
- has_many :user, through: :members
- has_many :members
- has_many :comments



## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group



## commentsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|nul: false, unique: ture|
|text|string|nul: false|
|image|string||
|user_id|integer|unl: false, forgin_key|
|group_id|integer|nul: false, forgin_key|

### Association
- belongs_to :user
- belongs_to :group