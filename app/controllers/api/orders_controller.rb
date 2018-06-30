class Api::OrdersController < ApplicationController
  
  def index
    render json: Order.all
  end

  def create
    order = Order.new
    if order.save
      render json: order
    else
      render json: { errors: order.errors }, status: :unprocessable_entity
    end
  end

  def update
    order = Order.find(params[:id])
    render json: order
  end

  def destroy
    Order.find(params[:id]).destroy
    render json: { message: 'Order Deleted' }
  end

end
