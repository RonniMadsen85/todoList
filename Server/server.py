from flask import Flask, json
from flask_cors import CORS

tasks = [{"id": 1, "name": "Task 1"}, {"id": 2, "name": "Task 2"}]

api = Flask(__name__)
CORS(api)

@api.route('/todos', methods=['GET'])
def get_companies():
  return json.dumps(tasks)

if __name__ == '__main__':
    api.run()