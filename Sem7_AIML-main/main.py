from flask import Flask, request, jsonify
import joblib
from flask_cors import CORS

# Load the machine learning model
model = joblib.load(
    "C:/Users/Tanuj Bordikar/OneDrive/Documents/Projects/student_health/model/model_updated.joblib"
)

app = Flask(__name__)
CORS(app)


@app.route("/", methods=["GET"])
def home():
    return "Hello from Tanuj"


@app.route("/predict", methods=["GET", "POST"])
def predict():
    if request.method == "POST":
        try:
            # Get input data from the request as JSON
            data = request.get_json()

            # Assuming the input data is a list of feature values
            input_data = [
                data["Choose your gender"],
                data["Age"],
                data["What is your course?"],
                data["Your current year of study"],
                data["Marital status"],
                data["Do you have Depression?"],
                data["Do you have Anxiety?"],
                data["Do you have Panic attack?"],
                data["Did you seek any specialist for treatment?"],
                data["CGPA Midpoint"],
            ]

            # Make predictions
            prediction = model.predict([input_data])

            # Return the prediction as JSON
            return jsonify({"prediction": prediction.tolist()})
        except Exception as e:
            return jsonify({"error": str(e)})

    else:
        return jsonify({"error": "Method Not Allowed"}), 405


if __name__ == "__main__":
    app.run(debug=True)
