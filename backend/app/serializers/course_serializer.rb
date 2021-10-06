class CourseSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :assignment_ids, :user_ids, :student_ids
end
