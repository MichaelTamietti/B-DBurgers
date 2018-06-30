class ItemsController < ApplicationController

  def index
    render json: Item.all
  end

  def create
    item = Item.create(:name, :price)
    render json: item
  end

  def update
    item = Item.find(params[:id])
    render json: item
  end

  def destroy
    Item.find(params[:id]).destroy
  end

end