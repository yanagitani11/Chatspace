## userテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|nul: false,unique: ture|
|email|string|nul: false,unique: ture|

### association
- has_many :group, through: :members
- has_many :members
- has_many :messages



## groupテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|nul: false|

### association
- has_many :users, through: :members
- has_many :members
- has_many :messages



## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group



## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|text|string|nul: false|
|image|string||
|user|references|unl: false, forgin_key|
|group|references|nul: false, forgin_key|

### Association
- belongs_to :user
- belongs_to :group