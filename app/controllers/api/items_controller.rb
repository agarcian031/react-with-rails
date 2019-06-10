class Api::ItemsController < ApplicationController
  before_action :set_item, only: [:update, :destroy]

  def index 
    # @items = Item.all 
    # ^^^ rendering the index template
    render json: Item.all.order("created_at") 
    # specifies that we will render a json item from our api
  end 

  # def new 
    # *** we're not rendering any templates in rails views, so new and edit are not necessary. 
  # end 

  def create 
    item = Item.new(item_params)
    if item.save
      render json: item  
    else 
      render json: { errors: item.errors}, status: :unprocessable_entity 
      # if it fails to save, we will render an error message. 
    end 
  end 

  # def edit
  # end

  def update
    @item.update(complete: !@item.complete)
    render json: @item 
  end 

  def destroy 
    @item.destroy
    render json: { message: "Item Deleted" }
  end 

  private 
  def item_params
    params.require(:item).permit(:name, :complete)
  end 

  def set_item
    #  needs to be an instance so we can access it in the update and destroy
    @item = Item.find(params[:id])
  end 
end
