class NomineesController < ApplicationController
  before_action :set_nominee, only: [:show, :edit, :update, :destroy]
  impressionist

  # GET /nominees
  # GET /nominees.json
  def index
    @nominees = Nominee.all
  end

  # GET /nominees/1
  # GET /nominees/1.json
  def show
  end

  # GET /nominees/new
  def new
    unless user_signed_in?
      redirect_to root_url, :alert => "Acceso denegado"
    else
      @nominee = Nominee.new
    end
  end

  # GET /nominees/1/edit
  def edit
    unless user_signed_in?
      redirect_to root_url, :alert => "Acceso denegado"
    end
  end

  # POST /nominees
  # POST /nominees.json
  def create
    @nominee = Nominee.new(nominee_params)

    respond_to do |format|
      if @nominee.save
        format.html { redirect_to @nominee, notice: 'Nominee was successfully created.' }
        format.json { render :show, status: :created, location: @nominee }
      else
        format.html { render :new }
        format.json { render json: @nominee.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /nominees/1
  # PATCH/PUT /nominees/1.json
  def update
    respond_to do |format|
      if @nominee.update(nominee_params)
        format.html { redirect_to @nominee, notice: 'Nominee was successfully updated.' }
        format.json { render :show, status: :ok, location: @nominee }
      else
        format.html { render :edit }
        format.json { render json: @nominee.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /nominees/1
  # DELETE /nominees/1.json
  def destroy
    @nominee.destroy
    respond_to do |format|
      format.html { redirect_to nominees_url, notice: 'Nominee was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_nominee
      @nominee = Nominee.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def nominee_params
      params.require(:nominee).permit(:title, :avatar, :poll_id, :published, :description, :popular_vote)
    end
end
