import psycopg2

# Conectando ao banco de dados PostgreSql
conn = psycopg2.connect("")
cursor = conn.cursor()

# Função para criar uma nova tabela de contatos
def criar_tabela():
    cursor.execute('''CREATE TABLE IF NOT EXISTS contatos (
                        id SERIAL PRIMARY KEY,
                        nome VARCHAR(255) NOT NULL,
                        telefone VARCHAR(20) NOT NULL
                    )''')
    print("Tabela 'contatos' criada com sucesso!")

# Função para criar um novo contato
def criar_contato(nome, telefone):
    sql = "INSERT INTO contatos (nome, telefone) VALUES (%s, %s)"
    values = (nome, telefone)
    cursor.execute(sql, values)
    conn.commit()
    print("Contato criado com sucesso!")

# Função para listar todos os contatos
def listar_contatos():
    cursor.execute("SELECT * FROM contatos")
    contatos = cursor.fetchall()
    if contatos:
        for contato in contatos:
            print("ID:", contato[0])
            print("Nome:", contato[1])
            print("Telefone:", contato[2])
            print("--------------------")
    else:
        print("Nenhum contato encontrado.")

# Função para atualizar um contato existente
def atualizar_contato(id, nome, telefone):
    sql = "UPDATE contatos SET nome = %s, telefone = %s WHERE id = %s"
    values = (nome, telefone, id)
    cursor.execute(sql, values)
    conn.commit()
    print("Contato atualizado com sucesso!")

# Função para excluir um contato
def excluir_contato(id):
    sql = "DELETE FROM contatos WHERE id = %s"
    value = (id,)
    cursor.execute(sql, value)
    conn.commit()
    print("Contato excluído com sucesso!")

# Menu principal
def menu():
    print("-------- Gerenciador de Contatos --------")
    print("1. Criar uma nova tabela de contatos")
    print("2. Criar um novo contato")
    print("3. Listar todos os contatos")
    print("4. Atualizar um contato")
    print("5. Excluir um contato")
    print("6. Sair")
    opcao = input("Selecione uma opção: ")

    if opcao == '1':
        criar_tabela()
    elif opcao == '2':
        nome = input("Digite o nome do contato: ")
        telefone = input("Digite o telefone do contato: ")
        criar_contato(nome, telefone)
    elif opcao == '3':
        listar_contatos()
    elif opcao == '4':
        id = input("Digite o ID do contato que deseja atualizar: ")
        nome = input("Digite o novo nome do contato: ")
        telefone = input("Digite o novo telefone do contato: ")
        atualizar_contato(id, nome, telefone)
    elif opcao == '5':
        id = input("Digite o ID do contato que deseja excluir: ")
        excluir_contato(id)
    elif opcao == '6':
        cursor.close()
        conn.close()
        print("Saindo do programa...")
        return
    else:
        print("Opção inválida. Tente novamente.")

    print()
    menu()

# Executando o menu principal
menu()
