class CreateTeachers < ActiveRecord::Migration[6.1]
  def change
    create_table :teachers do |t|
      t.string :prefix
      t.string :first_name
      t.string :last_name
      t.string :email

      t.timestamps
    end
  end
end
