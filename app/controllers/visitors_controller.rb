class VisitorsController < ApplicationController
	def index
		@popularSpaces = Space.all.order(impressions_count: :desc).limit(5)
		@topSpaces = Space.all.order(cached_weighted_score: :desc).limit(5)
		@topPolls = Poll.all.order(cached_weighted_score: :desc).limit(5)
		@topNominees = Nominee.all.order(cached_weighted_score: :desc).limit(5)
		@allSpaces = Space.all.order(name: :asc).limit(5)
	end
end
