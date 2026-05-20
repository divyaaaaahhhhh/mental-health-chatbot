from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

responses = {
    "sad": "I'm here for you. Remember, difficult moments do not last forever.",
    "stress": "Try taking a short break and focus on your breathing.",
    "anxiety": "You are stronger than your anxious thoughts.",
    "happy": "That's wonderful to hear! Keep smiling."
}

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/chat", methods=["POST"])
def chat():
    user_message = request.json["message"].lower()

    for keyword in responses:
        if keyword in user_message:
            return jsonify({"reply": responses[keyword]})

    return jsonify({"reply": "I'm always here to listen and support you."})

if __name__ == "__main__":
    app.run(debug=True)