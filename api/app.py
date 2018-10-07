import requests
import requests_cache
import time

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

requests_cache.install_cache(
    'github_cache', backend='sqlite', expire_after=180)


@app.route('/api/v1/data_catalog', methods=['GET', 'POST'])
def data_catalog():
    if request.method == 'GET':
        url = "http://api.worldbank.org/v2/datacatalog?format=json"
        #now = time.ctime(int(time.time()))
        response_dict = requests.get(url)
        #print ("Time: {0} / Used Cache: {1}".format(now, response_dict.from_cache))
        return jsonify(response_dict.json())
    return jsonify({"message": "Error Occured"}),500


if __name__ == '__main__':
    app.run(debug=True)
