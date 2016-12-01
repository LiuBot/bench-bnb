class User < ActiveRecord::Base

	validates :password_digest, :session_token, presence: true 
	validates :username, uniqueness: true 
	validates :password, length: {minimum: 6, allow_nil: true}
	after_initialize :ensure_session_token

	attr_reader :password # makes it possible for validation to occur!! 
	# Ruby review: attr_reader makes instance variable accessible outside of the class 

	def self.find_by_credentials(username, password)
		@user = User.find_by_username(username)

		return @user if (@user && @user.is_password?(password))
		return nil
	end 


# Method to cipher the password when it is created.
	def password=(password) # sets @password equal to the argument so validation can be happen
		# also, encrypts and saves user's password_digest
		@password = password
		self.password_digest = BCrypt::Password.create(password)
	end 

	def generate_session_token
		SecureRandom::urlsafe_base64
		# generates a random URL-safe base64 string 
	end 

	def reset_session_token!
		self.session_token = generate_session_token 
		self.save! 
		self.session_token #return new session token 
	end 

	# Cipher password attempts and return a boolean for if it is a match.
	def is_password?(password)
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end 

	private 

	def ensure_session_token
		self.session_token ||= generate_session_token
	end 



end 

