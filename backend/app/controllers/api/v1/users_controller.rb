class Api::V1::UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def profile
    render json: { user: UserSerializer.new(current_user) }, status: :accepted
  end

  def create
    user = User.create(user_params)
    if user.valid?
      session[:user_id] = user.id
      token = encode_token(user_id: user.id)
      students = Student.all.map{ |student| StudentSerializer.new(student) }
      assignments = Assignment.all.map { |assignment| AssignmentSerializer.new(assignment)}
      render json: {
        user: UserSerializer.new(user),
        jwt: token,
        user_course_ids: user.course_ids,
        students:students,
        assignments: assignments
      }, status: :created
    else
      render json: { error: 'failed to create user', params: params }, status: :unprocessable_entity
    end
  end

  def user_courses
    user_courses = current_user.courses
    render json: user_courses, include: [:assignments, :students, :users]
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :name)
  end
end
