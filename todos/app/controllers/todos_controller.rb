class TodosController < ApplicationController
  skip_before_filter :verify_authenticity_token
  after_filter :cors_set_access_control_headers

  respond_to :json
  
  def cors_set_access_control_headers
    origin = request.headers['origin'] || 'localhost'
    headers['Access-Control-Allow-Origin'] = origin
    headers['Access-Control-Allow-Methods'] = 'POST, GET, PUT, DELETE, OPTIONS'
    headers['Access-Control-Allow-Headers'] = 'X-api-key, Origin, Content-Type, Accept, Authorization, Token'
    headers['Access-Control-Allow-Credentials'] = 'true'
    headers['Access-Control-Max-Age'] = "1728000"
  end

  def preflight
    ## special method that only matches to OPTIONS requets. 
    ## Just render nothing, and let the after_filter set the cors headers 
    render nothing: true, status: :ok
  end


  

  def index
    respond_with Todo.all
    #render json: "oops", status: 422
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
