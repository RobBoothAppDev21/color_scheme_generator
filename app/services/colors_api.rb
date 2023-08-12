require "httparty"

class ColorsApi
  include HTTParty

  base_uri "https://www.thecolorapi.com/"

  def initialize(color)
    @options = { query: {hex: color} }
  end

  def color
    self.class.get("/id", @options)
  end

  def scheme(scheme)
    @options[:query][:mode] = scheme
    self.class.get("/scheme", @options)
  end
end