class CreateAssignments < ActiveRecord::Migration[6.1]
  def change
    create_table :assignments do |t|
      t.string :title
      t.text :description
      t.integer :course_id

      t.timestamps
    end
  end
end
