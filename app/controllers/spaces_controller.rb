class SpacesController < ApplicationController
  before_action :set_space, only: [:show, :edit, :update, :destroy, :like, :unlike]
  impressionist

  # GET /spaces
  # GET /spaces.json
  def index
    @spaces = Space.all
  end

  # GET /spaces/1
  # GET /spaces/1.json
  def show
    add_breadcrumb @space.user.name, @space.title
  end

  # GET /spaces/new
  def new
    if user_signed_in?
      @space = Space.new
    else
      redirect_to root_url, :alert => "Acceso denegado"
    end
  end

  # GET /spaces/1/edit
  def edit
    unless user_signed_in?
      redirect_to root_url, :alert => "Acceso denegado"
    end
  end

  # POST /spaces
  # POST /spaces.json
  def create
    # TODO: create space from current_user
    @space = current_user.first.spaces.create(space_params)
    #@space = Space.new(space_params)

    respond_to do |format|
      if @space.save
        format.html { redirect_to user_space_path(current_user, @space), notice: 'Space was successfully created.' }
        format.json { render :show, status: :created, location: @space }
      else
        format.html { render :new }
        format.json { render json: @space.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /spaces/1
  # PATCH/PUT /spaces/1.json
  def update
    respond_to do |format|
      if @space.update(space_params)
        format.html { redirect_to user_space_path(current_user, @space), notice: 'Space was successfully updated.' }
        format.json { render :show, status: :ok, location: @space }
      else
        format.html { render :edit }
        format.json { render json: @space.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /spaces/1
  # DELETE /spaces/1.json
  def destroy
    @space.delete
    respond_to do |format|
      format.html { redirect_to spaces_url, notice: 'Space was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def like
    @space.liked_by current_user.first
    respond_to do |format|
      format.html { redirect_to user_space_path(current_user, @space), notice: 'Space was successfully liked.' }
      format.js { render layout: false }
    end
  end

  def unlike
    @space.unliked_by current_user.first
    respond_to do |format|
      format.html { redirect_to user_space_path(current_user, @space), notice: 'Space was successfully unliked.' }
      format.js { render layout: false }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_space
      @space = Space.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def space_params
      params.require(:space).permit(:title, :name, :description, :published, :content, :avatar, :lat, :long, :local)
    end
end
