class Api::V1::AuthController < ApplicationController
  skip_before_action :authorized, only: [:create, :destroy]

  def create
    user = User.find_by(email: user_login_params[:email])
    if user && user.authenticate(user_login_params[:password])
      token = encode_token( {user_id: user.id} )
      students = Student.all.map{ |student| StudentSerializer.new(student) }
      assignments = Assignment.all.map{ |assignment| AssignmentSerializer.new(assignment) }
      render json: { 
        user: UserSerializer.new(user), 
        jwt: token,
        user_course_ids: user.course_ids,
        students: students,
        assignments: assignments
      },
      status: :accepted
    else
      render json: {error: "Invalid email or password"}, status: :unauthorized
    end
  end

  private

  def user_login_params
    params.require(:user).permit(:email, :password)
  end
end
