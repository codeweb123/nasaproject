class Picture < ApplicationRecord
    has_many :reviews, :dependent => :destroy
end