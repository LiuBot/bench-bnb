class Bench < ActiveRecord::Base
	validates :lat, :lng, :description, presence: true

	def self.in_bounds(bounds)
		#  returns all the benches that are within the 
		#boundaries specified by the argument. 
		# lat_range = bounds[:southWest][:lat].to_f..bounds[:northEast][:lat].to_f 
		# lng_range = bounds[:southWest][:lng].to_f..bounds[:northEast][:lng].to_f
		# # this is like User.where(id: 14000...150000)
		# Bench.where(lat: lat_range).where(lng: lng_range).all
	
		self.where("lat < ?", bounds[:northEast][:lat])
				.where("lat > ?", bounds[:southWest][:lat])
				.where("lng < ?", bounds[:northEast][:lng])
				.where("lng > ?", bounds[:southWest][:lng])
	end
end 