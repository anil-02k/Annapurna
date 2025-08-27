import joblib
import numpy as np
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MODEL_PATH = os.path.join(BASE_DIR, "models", "crop_model.pkl")

model = joblib.load(MODEL_PATH)

sample_input = np.array([[37,78,79,19.9526,14.8263,7.78,88.681]])  

prediction = model.predict(sample_input)
print("Recommended Crop:", prediction[0])