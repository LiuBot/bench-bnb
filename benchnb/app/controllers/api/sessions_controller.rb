class Api::SessionsController < ApplicationController

	def create
		@user = User.find_by_credentials(
			params[:user][:username],
			params[:user][:password]
			)

		# identify user

		if @user
			log_in(@user)
			render "api/users/show" #need to specify path since it's not in the same directory
		else 
			render json: ["Either username or password is incorrect"], status: 401
		end 
	end 

	def destroy
			@user = current_user

		if @user 
			log_out(@user)
			render "api/users/show"
		else 
			render json: Hash.new
		end 

	end 
end
