Case Study: Annapurna – Reimagine Farms
Problem Statement
Smallholder farmers form the backbone of Indian agriculture, but they face persistent challenges: - Unpredictable monsoons and climate variability. - Rising input costs and low bargaining power. - Lack of access to modern technology compared to large agribusinesses. - Complex farm management decisions — from crop choice to irrigation — that directly impact income and sustainability. As a result, millions of small farmers in India struggle to earn a stable livelihood despite farming being central to India’s growth.
Objective
To design and build a digital farming assistant that empowers small and marginal farmers with actionable insights, enabling them to: - Plan farm layouts efficiently. - Predict yields and profitability. - Make data-driven crop choices. - Reduce risks and ensure soil sustainability.
Solution: Annapurna
“Annapurna” — Sanskrit for the giver of food and nourishment — is a centralized digital platform that allows farmers to simulate the future of their farm before sowing a single seed. Key Features: 1. Locate land on an interactive digital map. 2. Select crops to grow. 3. Get insights on soil quality, rainfall forecasts, and weather conditions. 4. Receive predictions on yield, profitability, and crop rotation. 5. Explore a dashboard with soil, fire, humidity, air, and pollen data for each plot. Farmer Benefits: - Fewer risks with data-driven decisions. - Predictable profits through yield and price estimation. - Sustainable farming via crop rotation and soil-health insights.
Technology Architecture
- Frontend: React + Mapbox for farm visualization. - Backend: Node.js + Express for request handling. - APIs: Real-time soil, weather, and air quality data (Ambee, WeatherPlanner, etc.). - AI/ML Module: * Random Forests → yield prediction * Gradient
Boosted Trees → crop–soil matching * LSTMs → weather and seasonal forecasting
Implementation Highlights
- Built functional prototype in 24 hours during SIH Hackathon. - Developed Crop Suitability Score system (1–10) based on soil, humidity, and weather data. - Created a dashboard with real-time farm insights and color-coded visualizations. - Designed system for scalability and reusability — modular frontend, backend, and analysis layer.

