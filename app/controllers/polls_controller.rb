class PollsController < ApplicationController
  before_action :set_poll, only: [:show, :edit, :update, :destroy]
  impressionist

  # GET /polls
  # GET /polls.json
  def index
    @polls = Poll.all
  end

  # GET /polls/1
  # GET /polls/1.json
  def show
    add_breadcrumb @poll.space.user.name, @poll.space.title, @poll.title
  end

  # GET /polls/new
  def new
    if user_signed_in?
      @poll = Poll.new
    else
      redirect_to root_url, :alert => "Acceso denegado"
    end
  end

  # GET /polls/1/edit
  def edit
    unless user_signed_in?
      redirect_to root_url, :alert => "Acceso denegado"
    end
  end

  # POST /polls
  # POST /polls.json
  def create
    # @poll = Poll.new(poll_params)
    # current_user.first.spaces.first.polls.new
    @poll = current_user.first.spaces.find(params[:space_id]).polls.create(poll_params)

    respond_to do |format|
      if @poll.save
        format.html { redirect_to user_space_poll_path(current_user, @poll.space, @poll), notice: 'Poll was successfully created.' }
        format.json { render :show, status: :created, location: @poll }
      else
        format.html { render :new }
        format.json { render json: @poll.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /polls/1
  # PATCH/PUT /polls/1.json
  def update
    respond_to do |format|
      if @poll.update(poll_params)
        format.html { redirect_to @poll, notice: 'Poll was successfully updated.' }
        format.json { render :show, status: :ok, location: @poll }
      else
        format.html { render :edit }
        format.json { render json: @poll.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /polls/1
  # DELETE /polls/1.json
  def destroy
    @poll.destroy
    respond_to do |format|
      format.html { redirect_to polls_url, notice: 'Poll was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_poll
      @poll = Poll.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def poll_params
      params.require(:poll).permit(:title, :name, :space_id, :description, :content, :author)
    end
end
