import requests
from bs4 import BeautifulSoup
import csv

url = 'https://www.librerianacional.com/173?map=productClusterIds'

response = requests.get(url)

print(response.status_code)

# Status code 200 means the request was successful 
#status code 404 means the page was not found Error
#status code 500 means there is an internal server error
#status code 403 means access is forbidden
#status code 301 means the page has been moved permanently 

print(response.text) #Returns the HTML content of the page

if response.status_code == 200:
    soup = BeautifulSoup(response.text, 'html.parser')
    #print(soup.prettify()) #Prettifies the HTML content

    head = soup.find('title')
    print(head.text) #Prints the title of the page
else:
    print('Error al realizar la solicitud')


   

