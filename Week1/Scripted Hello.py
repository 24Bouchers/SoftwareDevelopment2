import app as app
from flask_script import Manager
from flask import Flask

manager = Manager(app)
app: Flask = Flask(__name__)


@app.route('/')
def index():
    return 'Hello World</hi>'


if __name__ == '__main__':
    app.run(debug=True)
