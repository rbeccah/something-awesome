import csv
from io import StringIO

# Function to parse CSV data and create a dictionary
def parse_csv_data(csv_data):
    data_dict = {}
    reader = csv.reader(StringIO(csv_data))
    for row in reader:
        if len(row) == 2:
            email, name = row
            data_dict[email] = name
    return data_dict