json.extract! nominee, :id, :title, :avatar, :poll_id, :published, :description, :popular_vote, :created_at, :updated_at
json.url nominee_url(nominee, format: :json)
