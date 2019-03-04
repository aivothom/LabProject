from flask import Flask, render_template, url_for


app = Flask(__name__)

@app.route('/index')
def index():
    return render_template("index.html")


@app.route('/leaderboard')
def leaderboard():
    return url_for('static', filename='leaderboard.js')


@app.route('/game')
def game():
    return url_for('static', filename='game.js')

if __name__ == '__main__':
    app.run(debug=True)

app.run(debug=True, host='0.0.0.0', port=8080)