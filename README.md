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

Proposed Solution  
“Annapurna” derived from Sanskrit, means ‘the giver of food and nourishment . It is a centralized 
source of truth for farmers to gain insights into their land. Our software allows farmers to optimally 
plan farm layouts and maximize efficiency and revenue. The user is able to indicate plots of land 
where they want to plant and indicate the crop they want to plant there. Based on real-time data 
about air quality, soil and weather conditions, Annapurna will determine how suitable a particular 
area is for planting a particular crop, and provide a general estimation on the expected value of a 
plot. 
Step-by-Step 
1. Find your farm on Annapurna! 
2. Select the crops you want to plant, and plant them! 
3. Foresee future weather, future seasons, and future harvests with our prediction timeline. 
4. Click on any plot of land to get soil, fire, humidity, air, and pollen data about it. 
5. Check out our complete dashboard to get Annapurna's full statistics on your whole farm! 
Flowchart 
System Architecture 
Annapurna is built with four core components — the frontend, insight api aggregators, the apis 
themselves, and our custom analysis module. 
Tech Stack 
Research  
Annapurna wouldn’t be possible without the millennia of human research in agriculture. To make 
accurate predictions and provide the best insights for farmers, we gathered information on the 
most common crops used in both industrial and family farming, studied the different types of 
irrigation systems with a focus on the most affordable options, collected pricing data for seeding 
an acre of land for these crops, and learned how to properly factor in soil temperature, moisture 
levels, and weather data in order to generate reliable environmental scores. 
We collected a wide variety of data and learned a lot about agriculture 
Early Work 
We are developing low-fidelity prototypes.

