class MessagesController < ApplicationController
  before_action :set_group

  def index
    @message = Message.new
    @messages = @group.messages.includes(:user)
    @group_user = @group_users.map(&:name)
    respond_to do |format|
      format.html
      format.json { @new_messages = Message.where('id > ?', params[:message][:id])}
    end
  end

  def create
    @message = @group.messages.new(message_params)
    if @message.save
      respond_to do |format|
        format.html
        format.json
      end
    else @message.nill?
    end
  end

  private

  def message_params
    params.require(:message).permit(:content, :image).merge(user_id: current_user.id)
  end

  def set_group
    @group = Group.find(params[:group_id])
    @group_users = @group.users
  end

end
