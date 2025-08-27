import joblib
import pandas as pd

model = joblib.load("../models/crop_model.pkl")

user_input = {
    "N": 90,
    "P": 42,
    "K": 43,
    "temperature": 26,
    "humidity": 80,
    "ph": 6.5,
    "rainfall": 200
}

df = pd.DataFrame([user_input])

prediction = model.predict(df)[0]
print("🌱 Recommended Crop:", prediction)
