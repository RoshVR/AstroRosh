from google.oauth2 import service_account
from googleapiclient.discovery import build
from jinja2 import Template

# Cargar las credenciales de la cuenta de servicio desde el archivo JSON
credentials = service_account.Credentials.from_service_account_file(
    "./astrorosh-6bf4062d0394.json",
    scopes=["https://www.googleapis.com/auth/spreadsheets.readonly"]
)

# ID de la hoja de cálculo y rango de celdas que deseas obtener
spreadsheet_id = "12iJaiTGR61Uyo9s9-86onlWdm2XofEKkr8lDcHxq_zE"
range_name = "Cartas!A:B"

# Crear un objeto de servicio de Google Sheets
service = build("sheets", "v4", credentials=credentials)

# Obtener los datos de las celdas de la hoja de cálculo
result = service.spreadsheets().values().get(
    spreadsheetId=spreadsheet_id,
    range=range_name
).execute()

# Pasar los datos obtenidos a una plantilla HTML utilizando Jinja2
template = Template(open("./significado_dia.html").read())
rows = result.get("values", [])
html = template.render(rows=rows)

# Guardar el HTML generado en un archivo
with open("./significado_dia.html", "w") as f:
    f.write(html)

# Imprimir el HTML generado
#print(html)

# Imprimir los datos obtenidos
#values = result.get("values", [])
#for row in values:
 #   print(row[0], ":", row[1])