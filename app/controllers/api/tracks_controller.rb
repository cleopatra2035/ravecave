class Api::TracksController < ApplicationController

    def index
        @tracks = Track.all
        render :index
    end

    def show
        @track = Track.find(params[:id])
        render :show
    end

    private

    def track_params
        params.require(:track).permit(:name, :ord, :artist_id, :album_id)
    end
end