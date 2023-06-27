import time
import datetime
import pandas as pd
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
import os

diretorio_atual = os.getcwd()

data_atual = datetime.date.today()
try:
    base_de_dados = pd.read_excel(f"Celulares{data_atual}.xlsx")
    print("Planilha já existente")
except:
    dados = {"Marca": [], "Preço":[]}

    url = "https://www.amazon.com.br/s?k=celular+xiaomi&page=1&ref=sr_pg_1"

    chromedriver_path = r"/chromedriver"

    option = Options()
    option.add_argument('--headless')

    service = Service(executable_path=chromedriver_path)

    # driver = webdriver.Chrome(service=service, options=option)
    driver = webdriver.Chrome(service=service)

    driver.get(url)

    time.sleep(7)

    ultima_pagina = int(driver.find_element(By.XPATH, '//*[@id="search"]/div[1]/div[1]/div/span[1]/div[1]/div[64]/div/div/span/span[4]').text)



    for i in range(1,ultima_pagina + 1):
        driver.get(f'https://www.amazon.com.br/s?k=celular+xiaomi&page={i}&ref=sr_pg_{i}')
        produtos = driver.find_elements(By.CSS_SELECTOR, ".a-section.a-spacing-base")

        print(f'\n Página {i} \n')

        for produto in produtos:
            try:
                produto_name = produto.find_element(By.CSS_SELECTOR, "span.a-text-normal").text
                produto_price = produto.find_element(By.CSS_SELECTOR, ".a-price-whole").text
            except:
                produto_price = "Sem preço"
            
            dados["Marca"].append(produto_name)
            dados["Preço"].append(produto_price)
        
        time.sleep(5)
    
    df = pd.DataFrame(dados)

    nome_arquivo_excel = os.path.join(diretorio_atual, f'Celulares{data_atual}.xlsx')

    df.to_excel(nome_arquivo_excel, index=False)

    driver.quit()
