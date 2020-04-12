class Api::AlbumsController < ApplicationController

    def index
        @albums = Album.all
        render :index
    end

    def show
        @album = Album.find(params[:id])
        render :show
    end

    private

    def artist_params
        params.require(:album).permit(
            :name,
            :artist_id,
            :featured,
            :genre,
            :release_date,
            :description)
    end
end