# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170721070556) do

  create_table "comments", force: :cascade do |t|
    t.string "title"
    t.text "body"
    t.string "author"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "media", force: :cascade do |t|
    t.string "title"
    t.string "name"
    t.text "description"
    t.string "author"
    t.string "url"
    t.integer "space_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "published"
    t.index ["space_id"], name: "index_media_on_space_id"
  end

  create_table "nominees", force: :cascade do |t|
    t.string "title"
    t.string "avatar"
    t.integer "poll_id"
    t.boolean "published"
    t.text "description"
    t.integer "popular_vote"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["poll_id"], name: "index_nominees_on_poll_id"
  end

  create_table "notices", force: :cascade do |t|
    t.string "title"
    t.text "content"
    t.string "author"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "space_id"
    t.index ["space_id"], name: "index_notices_on_space_id"
  end

  create_table "polls", force: :cascade do |t|
    t.string "title"
    t.string "name"
    t.integer "space_id"
    t.text "description"
    t.text "content"
    t.string "author"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "published"
    t.index ["space_id"], name: "index_polls_on_space_id"
  end

  create_table "posts", force: :cascade do |t|
    t.string "title"
    t.string "name"
    t.text "description"
    t.boolean "published"
    t.text "content"
    t.string "photo"
    t.integer "space_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["space_id"], name: "index_posts_on_space_id"
  end

  create_table "spaces", force: :cascade do |t|
    t.string "title"
    t.string "name"
    t.text "description"
    t.boolean "published"
    t.text "content"
    t.string "avatar"
    t.string "lat"
    t.string "long"
    t.string "local"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "provider"
    t.string "uid"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "role"
  end

end
