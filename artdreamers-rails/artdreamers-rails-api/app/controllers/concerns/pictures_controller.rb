class PicturesController < ApplicationController
    before_action :set_params, only: [:show, :update, :destroy]
    
    def index
        @pictures = Picture.all
        render json: @pictures, only: [:id, :title, :author, :image]
    end
    
    def create
        @picture = Picture.create(picture_params)
        render json: @picture
    end

    def show 
        render json: @picture
    end

    def update
        @picture.update(picture_params)
        if @picture.save
            render json: @picture
        else
            render json: {errors: @picture.errors.full_messages }
        end
    end
    
    def destroy
        @picture.destroy
        render json: {pictureId: @picture.id}
    end

    private

    def picture_params
        params.require(:picture).permit(:title, :author, :image)
    end

    def set_params
        @picture = Picture.find(params[:id])
    end   
end
