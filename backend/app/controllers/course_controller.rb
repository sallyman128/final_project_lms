class CourseController < ApplicationController
  def index
    courses = Course.all
    render json: courses.to_json
  end

  def show
    course = Course.find_by(id: params[:id])
    render json: course.to_json
  end
end
