import json
import unittest

from app.app import app

BASE_URL = '/api/v1/data_catalog'
BAD_URL = '/api/v1/data_cataloggg'


class TestFlaskApi(unittest.TestCase):
    def setUp(self):
        self.app = app.test_client()
        self.app.testing = True

    def test_get_data_catalog(self):
        response = self.app.get(BASE_URL)
        data = json.loads(response.get_data(as_text=True))
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(data['datacatalog']), 10)

    def test_url_not_exist(self):
        response = self.app.get(BAD_URL)
        self.assertEqual(response.status_code, 404)
        data = json.loads(response.get_data(as_text=True))
        self.assertEqual(data['error'], 'Not Found')


if __name__ == '__main__':
    unittest.main()
