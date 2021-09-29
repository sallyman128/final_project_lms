class Api::V1::CoursesController < ApplicationController
  skip_before_action :authorized

  def index
    courses = Course.all
    render json: courses
  end
end
