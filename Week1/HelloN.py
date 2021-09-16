from flask import Flask

app = Flask(__name__)


@app.route('/')
def index():
    return '<hi>Hello World!</hi>'


@app.route('/user/<name>')
def user(name):
    return '<hi>Hello %s!<hi>' % name


if __name__ == '__main__':
    app.run(debug=True)
