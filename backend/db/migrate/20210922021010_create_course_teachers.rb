class CreateCourseTeachers < ActiveRecord::Migration[6.1]
  def change
    create_table :course_teachers do |t|
      t.integer :course_id
      t.integer :teacher_id

      t.timestamps
    end
  end
end
