require 'open-uri'
require 'nokogiri'


def scraping
    all_song=[]
    i = 0

    url = "https://open.spotify.com/playlist/37i9dQZF1DX4sWSpwq3LiO"
    html_file = URI.open(url).read
    html_doc = Nokogiri::HTML(html_file)
    html_doc.search(".t_yrXoUO3qGsJS4Y6iXX").each do |element| #found the way to get to the class of all tilte
        if i < 1
            puts element
            puts ""
            p i
            i += 1
            puts element
            puts ""
            puts ""
            title = element.search("aria-label").text.strip
            puts ""
            puts "this"
            puts title
            sleep 1
        end
    end
end
puts "that"
scraping

    # class="Type__TypeElement-sc-goli3j-0 kHHFyx t_yrXoUO3qGsJS4Y6iXX standalone-ellipsis-one-line"
    # class="Type__TypeElement-sc-goli3j-0 kHHFyx t_yrXoUO3qGsJS4Y6iXX standalone-ellipsis-one-line"
    # class="Type__TypeElement-sc-goli3j-0 kHHFyx t_yrXoUO3qGsJS4Y6iXX standalone-ellipsis-one-line"


        # html_file = URI.open(element.attribute("href").value).read
        # html_doc = Nokogiri::HTML(html_file)
        # html_doc.search(".article-subheading").each do |description|
        # @description = description.text.strip

        # html_doc.search("#mntl-recipe-review-bar__rating_1-0").each do |rating|
        # @rating = rating.text.strip


  