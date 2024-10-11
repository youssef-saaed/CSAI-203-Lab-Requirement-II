from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "GET":
        return render_template("index.html")
    return render_template("result.html", name = request.form["firstname"] + ' ' + request.form["lastname"], email = request.form["email"], phone = request.form["tel"])

if __name__ == "__main__":
    app.run()