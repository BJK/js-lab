class Todo < ActiveRecord::Base
  validates_presence_of :item
end
