class Api::ItemsController < ApplicationController

  def index 
    # @items = Item.all 
    # ^^^ rendering the index template
    render json: Item.all 
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
    item = Item.find(params[:id])
    item.update(complete: !item.complete)
    render json: item 
  end 

  def destroy 
    Item.find(params[:id]).destroy
    render json: { message: 'Item deleted' }
  end 

  private 
  def item_params
    params_require(:item).permit(:name, :complete)
  end 
end
