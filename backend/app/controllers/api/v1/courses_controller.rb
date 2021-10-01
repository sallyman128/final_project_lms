class Api::V1::CoursesController < ApplicationController
  skip_before_action :authorized

  def index
    courses = Course.all.map{ |course| CourseSerializer.new(course)}
    render json: {courses: courses}
  end

  def create
    course = Course.create(course_params)
    if course.valid?
      current_user.courses << course
      render json: {course: CourseSerializer.new(course)}, status: :created
    else
      render json: {error: "failed to save course", params: params}, status: :unprocessable_entity
    end
  end

  private

  def course_params
    params.require(:course).permit(:title, :description)
  end

end
