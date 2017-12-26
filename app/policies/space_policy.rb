class SpacePolicy < ApplicationPolicy
  attr_reader :current_user, :model
  def initialize(current_user, model)
    raise Pundit::NotAuthorizedError, "must be logged in" unless user
    @current_user = current_user
    @post = post
  end

  def index?
    @current_user.admin?
  end

  def show?
    @current_user.admin? or @current_user == @user
  end

  def edit?
    @current_user.admin? or @current_user == @user
  end

  def resolve
    scope
  end
  class Scope < Scope
  end
end
