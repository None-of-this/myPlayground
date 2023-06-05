require 'open-uri'
require 'nokogiri'


def scraping
    all_song=[]

    url = "https://open.spotify.com/playlist/37i9dQZF1DX4sWSpwq3LiO"
    html_file = URI.open(url).read
    html_doc = Nokogiri::HTML(html_file)
    html_doc.search(".Type__TypeElement-sc-goli3j-0").each do |element| #found the way to get to the class of all tilte
        # if (element.to_s.include? "Rating") && (all_song.length < 10)
            title = element.search(".card__title-text").text.strip
            p title
            all_song << title

        # end
    end
end

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


  