class Api::V1::CoursesController < ApplicationController
  skip_before_action :authorized, only: [:index]


  def index
    courses = Course.all.map{ |course| CourseSerializer.new(course)}
    render json: {
      courses: courses
    }
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

  def destroy
    course = Course.find_by(id: course_params['id'])
    if current_user.courses.include?(course)
      course.destroy
    else
      render json: {error: "failed to delete course", params: params}
    end
  end

  private

  def course_params
    params.require(:course).permit(:title, :description, :id)
  end

end
