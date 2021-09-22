class Teacher < ApplicationRecord
  belongs_to :course
  has_many :students, through: :course
end
