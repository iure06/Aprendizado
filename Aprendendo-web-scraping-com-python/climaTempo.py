import re
import time
import requests
from bs4 import BeautifulSoup

url = "https://www.climatempo.com.br/previsao-do-tempo/cidade/53/pauloafonso-ba"

request = requests.get(url).content

soup = BeautifulSoup(request, "html.parser")

temperaturaMinima = soup.find(id="min-temp-1").get_text()
temperaturaMaxima = soup.find(id="max-temp-1").get_text()
print(f'A temperatura minima é {temperaturaMinima} e a temperatura máxima é {temperaturaMaxima}')