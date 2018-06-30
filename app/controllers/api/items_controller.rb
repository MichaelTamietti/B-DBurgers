class Api::ItemsController < ApplicationController

  def index
    render json: Item.all
  end

  def create
    todo = Todo.create(:name, :price)
    render json: todo
  end

  def update
    todo = Todo.find(params[:id])
    render json: todo
  end

  def destroy
    Todo.find(params[:id]).destroy
  end

end