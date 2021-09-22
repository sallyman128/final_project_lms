class TeacherController < ApplicationController
  def index
    teachers = Teacher.all
    render json: teachers.to_json
  end

  def show
    teacher = Teacher.find_by(id: params[:id])
    render json: teacher.to_json
  end
end
