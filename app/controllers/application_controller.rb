class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  # helper_method :current_user

  # def current_user
  #   @current_user ||= User.find(session[:user_id]) if session[:user_id]
  # end


  # Registrations JWT Custom Method
  def render_resource(resource)
    if resource.errors.empty?
      render json: resource
    else
      validation_error(resource)
    end
  end

  def validation_error(resource)
    render json: {
      errors: [
        {
          status: '400',
          title: 'Bad Request',
          detail: resource.errors,
          code: '100'
        }
      ]
    }, status: :bad_request
  end
end
