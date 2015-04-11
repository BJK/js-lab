class TodosController < ApplicationController
  skip_before_filter :verify_authenticity_token
  respond_to :json

  def index
    respond_with Todo.all
  end

  def show
    respond_with Todo.find(params[:id])
  end

  def update
    todo = Todo.find(params[:id]).update_attributes(safe_params)
    respond_with todo
  end

  def create
    respond_with Todo.create(safe_params)
  end

  def safe_params
    params.permit(:item, :completed, :format)
  end
end
