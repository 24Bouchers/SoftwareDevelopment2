from flask import render_template

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


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404


@app.errorhandler(500)
def internal_server_error(e):
    return render_template('500.html'), 500
