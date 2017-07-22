class VisitorsController < ApplicationController
	@topSpaces = Space.all.order(cached_weighted_score: :desc).limit(4)
	@allSpaces = Space.all
	@topUsers = User.all.order(cached_votes_up: :desc).limit(4)
end
