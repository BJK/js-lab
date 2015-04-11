class Todo < ActiveRecord::Base
  attr_accessor
  validates_presence_of :item
end
