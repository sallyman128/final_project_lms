class AssignmentSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :course_id
end
