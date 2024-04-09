from typing import Any, Text, Dict, List

from rasa_sdk import Action, Tracker, FormValidationAction # type: ignore
from rasa_sdk.executor import CollectingDispatcher # type: ignore
#from projects.models import UserResponse

class ActionSayData(Action):

    def name(self) -> Text:
        return "action_say_data"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        age = tracker.get_slot("age")
        gender = tracker.get_slot("gender")
        medical_conditions = tracker.get_slot("medical_conditions")
        physical_activity = tracker.get_slot("physical_activity")
        stress = tracker.get_slot("stress")
        diet = tracker.get_slot("diet")
        substance_use = tracker.get_slot("substance_use")
        family_history = tracker.get_slot("family_history")
        primary_goals = tracker.get_slot("primary_goals")
        


        potential_risks = []

        if int(age) >= 50:
            potential_risks.append("Risk of cardiovascular diseases increases with age.")
        if int(age) >= 40:
            potential_risks.append("Increased risk of hypertension and diabetes.")
        if int(age) <= 18:
            potential_risks.append("Teenagers may face risks related to growth and development.")
            
            
        if gender == "Female":
            if age <= 12:
                potential_risks.append("Childhood risks include growth and development disorders.")
            elif 13 <= age <= 19:
                potential_risks.append("Teenage girls may face risks related to puberty, mental health, and reproductive health.")
            elif 20 <= age <= 39:
                potential_risks.append("Young women may face risks related to reproductive health, mental health, and lifestyle choices.")
            elif 40 <= age <= 49:
                potential_risks.append("Women in their 40s may experience hormonal changes and increased risk of chronic diseases.")
            elif 50 <= age <= 59:
                potential_risks.append("Women in their 50s may face risks related to menopause, bone health, and heart disease.")
            elif age >= 60:
                potential_risks.append("Women aged 60+ may face risks related to bone health, heart disease, and cognitive decline.")
        elif gender == "Male":
            potential_risks.append("Men may face risks related to prostate health.")

        # Medical condition-related risks
        if medical_conditions:
            for condition in medical_conditions:
                if condition.lower() == "diabetes":
                    potential_risks.append("Risk of cardiovascular complications.")
                elif condition.lower() == "hypertension":
                    potential_risks.append("Increased risk of heart disease and stroke.")
                elif condition.lower() == "obesity":
                    potential_risks.append("Higher likelihood of developing type 2 diabetes and heart disease.")
                elif condition.lower() == "asthma":
                    potential_risks.append("Increased risk of respiratory infections.")
                    potential_risks.append("Decreased lung function.")
                elif condition.lower() == "depression":
                    potential_risks.append("Higher risk of cardiovascular diseases.")
                    potential_risks.append("Impaired immune function.")
                elif condition.lower() == "osteoporosis":
                    potential_risks.append("Increased risk of bone fractures.")
                elif condition.lower() == "cancer":
                    potential_risks.append("Risk of cancer development and related complications.")
                elif condition.lower() == "chronic kidney disease":
                    potential_risks.append("Progressive loss of kidney function.")
        
        # Nutrition-related risks
        if "unhealthy diet" in diet.lower():
            potential_risks.append("Increased risk of obesity, diabetes, and heart disease.")  
        if "high sugar intake" in diet.lower():
            potential_risks.append("Increased risk of diabetes and obesity due to high sugar intake.")
        if "low vegetable intake" in diet.lower():
            potential_risks.append("Insufficient intake of vegetables may increase the risk of various diseases.")
        if "high processed food consumption" in diet.lower():
            potential_risks.append("Frequent consumption of processed foods may lead to poor health outcomes.")
        if "excessive salt consumption" in diet.lower():
            potential_risks.append("High salt intake may lead to hypertension and heart disease.")
        if "low fiber intake" in diet.lower():
            potential_risks.append("Low fiber intake is associated with constipation and increased risk of digestive disorders.")
        if "low protein intake" in diet.lower():
            potential_risks.append("Inadequate protein intake may lead to muscle loss and impaired immune function.")
        if "high saturated fat intake" in diet.lower():
            potential_risks.append("Excessive saturated fat consumption may increase cholesterol levels and risk of heart disease.")
        if "low fruit intake" in diet.lower():
            potential_risks.append("Low fruit intake is associated with increased risk of chronic diseases and inadequate nutrient intake.")
        if "low calcium intake" in diet.lower():
            potential_risks.append("Inadequate calcium intake may lead to weakened bones and increased risk of osteoporosis.")
        

        if substance_use == "frequent": 
            potential_risks.append("Frequent substance use can lead to addiction, organ damage, mental health issues, and social problems.") 
        elif substance_use == "occasional": 
            potential_risks.append("Occasional substance use may still pose risks to physical and mental health.") 
        elif substance_use == "rare": 
            potential_risks.append("Rare substance use still carries potential health risks and may lead to harmful behaviors.") 
        else: 
            potential_risks.append("Substance use may have various health consequences depending on frequency and type.")
        
        # Family history-related risks
        if family_history.lower() == "yes":
            potential_risks.append("Family history of certain diseases may increase your risk of developing them as well.")

         # Exercise-related risks
        if physical_activity.lower() == "rarely":
            potential_risks.append("Lack of physical activity increases the risk of obesity, cardiovascular diseases, and other health problems.")
        elif physical_activity.lower() == "frequently":
            potential_risks.append("Excessive exercise without proper recovery may lead to overuse injuries and hormonal imbalances.")

    
        if stress.lower() == "Moderate": 
            potential_risks.append("Moderate stress levels can contribute to various health issues if not managed properly.") 
        elif stress.lower() == "High": 
            potential_risks.append("High stress levels may increase the risk of cardiovascular diseases, mental health disorders, and immune system suppression.")
            
        

        if primary_goals.lower() == "lose weight":
            potential_risks.append("Rapid weight loss may lead to muscle loss, nutrient deficiencies, and metabolic slowdown.")
        elif primary_goals.lower() == "improve fitness":
            potential_risks.append("Excessive exercise without proper nutrition and recovery may lead to overtraining and injuries.")
        elif primary_goals.lower() == "gain muscle":
            potential_risks.append("Overconsumption of protein supplements may strain the kidneys and lead to dehydration.")
        elif primary_goals.lower() == "reduce stress":
            potential_risks.append("Failure to address underlying stressors may lead to chronic stress and adverse health effects.")
        
        
        # UserResponse.objects.create(
        #     user=tracker.sender_id,
        #     age=age,
        #     gender=gender,
        #     medical_conditions=medical_conditions,
        #     physical_activity=physical_activity,
        #     stress=stress,
        #     diet=diet,
        #     substance_use=substance_use,
        #     family_history=family_history,
        #     primary_goals=primary_goals,
        #     potential_risks=', '.join(potential_risks) if potential_risks else None
        # )
        

        # Set potential_risks as a slot value
        if potential_risks:
            for risk in potential_risks:
                dispatcher.utter_message(text="Based on your responses, here are some potential health risks:- " + risk)
        else:
            dispatcher.utter_message(text="No specific health risks identified based on your responses.")

        return []


        