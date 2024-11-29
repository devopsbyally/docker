from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello Ally, welcome to ECS World!"

if __name__ == "__main__":
    # Run the application on port 5010 (commonly used for web apps)
    app.run(host="0.0.0.0", port=5010)