import csv
from urllib.request import urlopen
from bs4 import BeautifulSoup

file = "Details.csv"
f = open(file, "w")
Headers = "Name,Address,City,Phone,Website\n"
f.write(Headers)
for page in range(1,5):
    url = "https://www.tripadvisor.com/Airline_Review-d8729099-Reviews-JetBlue#REVIEWS".format(page)
    html = urlopen(url)
    soup = BeautifulSoup(html,"html.parser")
    Title = soup.find_all("div", {"class":"location-review-review-list-parts-SingleReview__reviewContainer--N7DSv"})
    '''
    for i in Title:
        try:
            name = i.find("div", {"class":"views-field-title"}).get_text() #Example: Cookiemonster123
            review_title = i.find("div", {"class":"views-field-address"}).get_text() #Example JetBlue trip was great!
            review_date = i.find("div", {"class":"views-field-city-state-zip"}).get_text() #Example: October 21st, 2019
            review = i.find("div", {"class":"views-field-work-phone"}).get_text() #Actual review
            rate = i.find("div", {"class":"views-field-website"}).get_text() #Example: 10,20,30,40,50 (50 being highest)
            location = i.find("div", {"class":"views-field-website"}).get_text() # Example: New Haven Airport
            ticket_class = i.find("div", {"class":"views-field-website"}).get_text() #Example: Economy
            type_flight = i.find("div", {"class":"views-field-website"}).get_text() #Example: Domestic 
            print(name, address, city, phone, website)
            f.write("{}".format(name).replace(",","|")+ ",{}".format(address)+ ",{}".format(city).replace(",", " ")+ ",{}".format(phone) + ",{}".format(website) + "\n")
        except: AttributeError
f.close()
'''