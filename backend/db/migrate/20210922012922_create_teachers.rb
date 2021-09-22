class CreateTeachers < ActiveRecord::Migration[6.1]
  def change
    create_table :teachers do |t|
      t.string :name
      t.string :email
      t.integer :course_id

      t.timestamps
    end
  end
end
