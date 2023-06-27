import requests
from bs4 import BeautifulSoup
import re

url = "https://www.amazon.com.br/s?k=Fones+de+Ouvido+para+Jogos+para+PC&i=videogames&rh=n%3A16253414011&page=1&c=ts&ts_id=16253414011&ref=sr_pg_1"

headers = {'User-Agent':'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'}

request = requests.get(url, headers).content
soup = BeautifulSoup(request, "html.parser")
totalDePags = int(soup.find(class_="s-pagination-item s-pagination-disabled").get_text())

for i in range(1, totalDePags + 1):
    print(f'\n Página {i} \n')
    new_url = f'https://www.amazon.com.br/s?k=Fones+de+Ouvido+para+Jogos+para+PC&i=videogames&rh=n%3A16253414011&page={i}&c=ts&ts_id=16253414011&ref=sr_pg_{i}'
    request = requests.get(new_url, headers).content
    soup = BeautifulSoup(request, "html.parser")

    fones = soup.find_all(class_=re.compile("s-card-border"))

    for fone in fones:
      try:
        marca = fone.find(class_="a-size-medium a-color-base a-text-normal").get_text()
        preco = fone.find(class_="a-price-whole").get_text()
        index = preco.find(",")
      except:
        marca = "NULL"
        preco = "0.0"

      print(f'{marca}, R${preco[:index]}')

