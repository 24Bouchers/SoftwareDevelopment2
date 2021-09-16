from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return 'Hello World</hi>'


if __name__ == '__main__':
    app.run(debug=True)


@app.route('/index')
def index():
    return render_template('index.html')


@app.route('/user/<name>')
def user(name):
    return render_template('user.html', name=name)
