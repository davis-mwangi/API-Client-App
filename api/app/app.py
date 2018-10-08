import requests
import requests_cache
import time

from flask import Flask, request, jsonify, make_response
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

requests_cache.install_cache(
    'api_react_app.sqlite', backend='sqlite', expire_after=180)


@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not Found'}), 404)


@app.errorhandler(500)
def server_error(error):
    return make_response(jsonify({'error': 'Server Error'}), 500)


@app.errorhandler(400)
def bad_request(error):
    return make_response(jsonify({'error': 'Bad Request'}), 400)


@app.route('/api/v1/data_catalog', methods=['GET', 'POST'])
def data_catalog():
    if request.method == 'GET':
        url = "http://api.worldbank.org/v2/datacatalog?format=json"
        # now = time.ctime(int(time.time()))
        response_dict = requests.get(url)
        # print("Time: {0} / Used Cache: {1}".format(now,response_dict.from_cache))
        return jsonify(response_dict.json()), 200
