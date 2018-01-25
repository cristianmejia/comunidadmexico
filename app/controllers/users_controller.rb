class UsersController < ApplicationController
  before_action :authenticate_user, :except => [:show]
  before_action :correct_user?, :except => [:index]
  #after_action :verify_authorized

  def index
    @users = User.all
    # authorize current_user
  end

  def edit
    @user = User.find(params[:id])
  end

  def destroy
    user = User.find(params[:id])
    authorize user
    user.destroy
    redirect_to users_path, :notice => "User deleted."
  end

  def finish_signup_path(resource)
    finish_signup
  end

  # GET/PATCH /users/:id/finish_signup
  def finish_signup
    # authorize! :update, @user 
    if request.patch? && params[:user] #&& params[:user][:email]
      if @user.update(user_params)
        @user.skip_reconfirmation!
        sign_in(@user, :bypass => true)
        redirect_to @user, notice: 'Your profile was successfully updated.'
      else
        @show_errors = true
      end
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(secure_params)
      redirect_to @user
    else
      render :edit
    end
  end

  def show
    @user = User.find(params[:id])
    #authorize @user
  end

  private

  def secure_params
    params.require(:user).permit(:email)
  end

end
