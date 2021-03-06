class ExperiencesController < ApplicationController
  before_action :set_experience, only: [:show, :edit, :update, :destroy]
  impressionist

  # GET /experiences
  # GET /experiences.json
  def index
    @experiences = Experience.all
  end

  # GET /experiences/1
  # GET /experiences/1.json
  def show
  end

  # GET /experiences/new
  def new
    if user_signed_in?
      @experience = current_user.first.spaces.find(params[:space_id]).experiences.new
    else
      redirect_to root_url, :alert => "Acceso denegado"
    end
  end

  # GET /experiences/1/edit
  def edit
    unless user_signed_in?
      redirect_to root_url, :alert => "Acceso denegado"
    end
  end

  # POST /experiences
  # POST /experiences.json
  def create
    # @experience = Experience.new(experience_params)
    # current_user.first.spaces.first.experiences.new
    @experience = current_user.first.spaces.find(params[:space_id]).experiences.create(experience_params)

    respond_to do |format|
      if @experience.save
        format.html { redirect_to user_space_experience_path(@experience.space.user, @experience.space, @experience), notice: 'Experience was successfully created.' }
        format.json { render :show, status: :created, location: @experience }
      else
        format.html { render :new }
        format.json { render json: @experience.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /experiences/1
  # PATCH/PUT /experiences/1.json
  def update
    respond_to do |format|
      if @experience.update(experience_params)
        format.html { redirect_to @experience, notice: 'Experience was successfully updated.' }
        format.json { render :show, status: :ok, location: @experience }
      else
        format.html { render :edit }
        format.json { render json: @experience.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /experiences/1
  # DELETE /experiences/1.json
  def destroy
    @experience.destroy
    respond_to do |format|
      format.html { redirect_to experiences_url, notice: 'Experience was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_experience
      @experience = Experience.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def experience_params
      params.require(:experience).permit(:title, :name, :space_id, :description, :content, :author)
    end
end
