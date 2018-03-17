class VisitorsController < ApplicationController
	def index
		@topSpaces = Space.all.order(cached_weighted_score: :desc).limit(4)
		@topPolls = Poll.all.order(cached_weighted_score: :desc).limit(4)
		@topNominees = Nominee.all.order(cached_weighted_score: :desc).limit(4)
		@allSpaces = Space.all
	end
end
