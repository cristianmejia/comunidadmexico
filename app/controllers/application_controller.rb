class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  
  protect_from_forgery with: :exception
  include Pundit
  helper_method :current_user
  helper_method :user_signed_in?
  helper_method :correct_user?
  before_action :set_locale

  private
    def set_locale
      I18n.locale = extract_locale || I18n.default_locale
    end

    def extract_locale
      parsed_locale = params[:locale]
      I18n.available_locales.map(&:to_s).include?(parsed_locale) ? parsed_locale : nil
    end

    def default_url_options
      { locale: I18n.locale }
    end

    def current_user
      begin
        # Temporary fix https://github.com/lynndylanhurley/devise_token_auth/issues/74
        # @current_user ||= User.find(session[:user_id]) if session[:user_id]
        @current_user ||= User.find(session['warden.user.user.key'][0]) if session['warden.user.user.key'][0]
      rescue Exception => e
        nil
      end
    end

    def user_signed_in?
      return true if current_user
    end

    def correct_user?
      @user = current_user
      unless current_user == @user
        redirect_to root_url, :alert => "Access denied."
      end
    end

    def authenticate_user
      if !current_user
        redirect_to root_url, :alert => 'You need to sign in for access to this page.'
      end
    end

end
