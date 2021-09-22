class Student < ApplicationRecord
  belongs_to :course
  belongs_to :teacher, through: :course
end
