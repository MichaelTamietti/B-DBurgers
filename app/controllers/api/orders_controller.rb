class Api::OrdersController < ApplicationController

  def index
    render json: Order.all
  end

  def create
    order = Order.new(item_params)
    if order.save
        render json: order
    else
        render json: { errors: item.errors }, status: :unprocessable_entity
    end
  end

  def update
    item = Item.find(params[:id])
    render json: item
  end

  def destroy
      Item.find(params[:id]).destroy
      render json: { message: 'Item Deleted' }
  end

end
