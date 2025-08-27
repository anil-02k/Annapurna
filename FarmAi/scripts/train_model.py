import os
import pandas as pd
import numpy as np
import joblib

from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report

# ------------------------
# 1. Load dataset
# ------------------------
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_PATH = os.path.join(BASE_DIR, "data", "Crop_recommendation.csv")

data = pd.read_csv(DATA_PATH)

print("✅ Dataset loaded:", data.shape)

X = data.drop("label", axis=1)
y = data["label"]

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

model = RandomForestClassifier(n_estimators=200, random_state=42)
model.fit(X_train, y_train)

y_pred = model.predict(X_test)
print("Accuracy:", accuracy_score(y_test, y_pred))
print("\nClassification Report:\n", classification_report(y_test, y_pred))

MODEL_PATH = os.path.join(BASE_DIR, "models", "crop_model.pkl")
os.makedirs(os.path.dirname(MODEL_PATH), exist_ok=True)
joblib.dump(model, MODEL_PATH)

print(f"✅ Model trained and saved to {MODEL_PATH}")

sample_input = np.array([[90, 42, 43, 20, 80, 200, 6.5]])  # example values
print("🌱 Recommended Crop:", model.predict(sample_input)[0])
