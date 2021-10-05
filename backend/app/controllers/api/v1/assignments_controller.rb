class Api::V1::AssignmentsController < ApplicationController
  def create
    assignment = Assignment.create(assignment_params)
    if assignment.valid?
      render json: {assignment: AssignmentSerializer.new(assignment)}, status: :accepted
    else
      render json: {error: "failed to create assignment"}, status: :unprocessable_entity
    end
  end

  private
  def assignment_params
    params.require(:assignment).permit(:title, :description, :course_id)
  end
end
