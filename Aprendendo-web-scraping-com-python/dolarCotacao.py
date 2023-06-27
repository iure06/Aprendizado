import requests
from bs4 import BeautifulSoup

url = "https://economia.uol.com.br/cotacoes/cambio/"
headers = {"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"}

request = requests.get(url, headers).content

site = BeautifulSoup(request, "html.parser")

dolar_cotacao = site.find("input",attrs={"name":"currency2"})

print(f'Hoje a cotação do dolar é de R$ {dolar_cotacao["value"]}')