import json

food = []
files = {
    'allowed': 'yes',
    'not_allowed': 'no',
    'conditionally': 'conditionally',
}

for k, v in files.items():
    with open('food/' + k) as f:
        for l in f:
            food.append({'name': l.strip(), 'status': v})

print(json.dumps(food))
with open('src/data.json', 'w') as f:
    f.write(json.dumps(food))
