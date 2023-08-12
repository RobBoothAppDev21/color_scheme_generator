class ColorsController < ApplicationController

  def index
    api = ColorsApi.new("0047AB")
    # color = api.color
    # @color_value = color["hex"]["value"]
    scheme = api.scheme("analogic")
    @scheme = scheme["colors"]
  end
end