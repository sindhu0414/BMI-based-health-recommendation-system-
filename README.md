**BMI Based Health Recommendation System**
   A simple and interactive frontend web application that calculates Body Mass Index (BMI) and provides health tips and a daily meal plan based on the user’s BMI category.

**Project Overview**
   The BMI Based Health Recommendation System helps users understand their body health by calculating BMI using height and weight.
Based on the BMI value, the system categorizes the user as Underweight, Normal Weight, Overweight, or Obesity and gives suitable health tips and diet suggestions.
   This project focuses on health awareness with a clean, modern, and user-friendly UI.

**Problem Statement**
   Many people are unaware of their BMI and its health impact.
Manual BMI calculation is confusing, and users do not get proper guidance after knowing their BMI value.
   This project solves the problem by:
        1. Automatically calculating BMI
        2. Showing BMI category clearly
        3. Providing health tips and a daily meal plan

**Objectives**
1. To calculate Body Mass Index (BMI) accurately
   The primary objective of this project is to calculate the BMI value correctly using the standard formula based on user-provided height and weight. This ensures reliable and meaningful health results.

2.To classify users into appropriate BMI categories
   The system aims to categorize users into Underweight, Normal Weight, Overweight, or Obesity based on WHO BMI standards. This helps users clearly understand their health condition.

3.To provide instant health feedback
   After calculating BMI, the application immediately displays the user’s BMI value, health status, and a visual progress bar to make the result easy to understand.

4.To suggest health tips based on BMI status
  The project provides simple and practical health tips tailored to each BMI category. These tips guide users towards healthier lifestyle habits.

5.To recommend a basic daily meal plan
  The system suggests a daily meal plan including breakfast, lunch, snacks, and dinner according to the user’s BMI category, promoting balanced nutrition.

6.To ensure proper input validation
   The application validates all user inputs to avoid incorrect calculations and ensures that height and weight values are logical and non-empty.

7.To create a user-friendly and attractive interface
   Another objective is to design a modern, responsive, and visually appealing interface using CSS so that users can easily interact with the application.

8.To increase health awareness among users
   The project aims to educate users about BMI and its importance in maintaining good health by presenting information in a simple and understandable way.

9.To demonstrate practical frontend development skills
   This project showcases the practical use of HTML, CSS, and JavaScript by combining UI design with real-time logic and dynamic content updates.

10.To build a scalable base for future enhancements
   The system is designed in such a way that it can be extended in the future with backend integration, database storage, user accounts, and personalized recommendations.    

**BMI Categories Used**
BMI Range	Category
< 18.5	        Underweight
18.5 – 24.9	    Normal Weight
25 – 29.9	      Overweight
≥ 30	          Obesity

**Technologies Used**
1.HTML – Page structure
2.CSS – Styling, layout, animations
3.JavaScript – BMI calculation & logic
4.Google Fonts – Typography
5.Font Awesome – Icons

**How It Works**
1.User Input Collection
  The application first displays an input form where the user enters:
    Name
    Age
    Gender
    Height (in centimeters)
    Weight (in kilograms)
  These inputs are required to calculate the BMI and personalize the result.

2.Input Validation
  When the user clicks the “Calculate BMI” button, JavaScript checks:
    All fields are filled
    Height and weight values are greater than zero
  If any field is empty or invalid, an alert message is shown to the user. This prevents incorrect BMI calculations.

3.BMI Calculation
  After successful validation:
    Height is converted from centimeters to meters
    BMI is calculated using the standard formula:
    BMI = Weight / (Height × Height)
  The calculated BMI value is rounded to two decimal places for accuracy and clarity.

4.Display User Details
  The system dynamically displays the user’s:
    Name
    Age
    Gender
    BMI value
  This creates a personalized experience for the user without reloading the page.

5.BMI Category Identification
  The calculated BMI value is compared with predefined BMI ranges:
    Underweight
    Normal Weight
    Overweight
    Obesity
  Based on the range, the system determines the user’s BMI category.

6.Dynamic UI Update
  Once the BMI category is identified:
    The BMI status label changes color
    A progress bar visually represents the BMI level
    Smooth animations make the result section appear
  This makes the output more engaging and easy to understand.

7.Health Tips Generation
  The application selects a set of health tips based on the BMI category.
These tips are displayed as a list to guide users toward healthier habits such as proper diet, exercise, hydration, and sleep.

8.Daily Meal Plan Recommendation
  The system suggests a simple daily meal plan consisting of:
    Breakfast
    Lunch
    Snacks
    Dinner
  Each meal recommendation is tailored according to the BMI category to support healthy weight management.

9.Result Display Without Page Reload
  All results are shown dynamically using JavaScript DOM manipulation.
  The page does not reload, ensuring a smooth and fast user experience.

10.Final Output
  The user receives:
    BMI value
    BMI category
    Health tips
    Daily meal plan
    Visual indicators
  This complete output helps the user easily understand their health status and next steps.

  **Project status**
  Day 1
   Task: Project Planning & Requirement Analysis
   Description: Understand the project idea, objectives, and BMI calculation logic. Finalize features, user flow, and     prepare project abstract and folder structure.

  Day 2 
   Task: UI Design (HTML Structure)
   Description: Design the basic web pages using HTML such as login/user input page and BMI result page. Add form fields for name, age, gender, height, and weight.
   
  Day 3:
   Task: Styling & Layout (CSS)
   Description: Apply CSS to improve the look and feel of the application. Add colors, fonts, icons, and responsive layout to make the UI professional.
   
  Day 4 :
   Task: BMI Calculation Logic (JavaScript)
   Description: Implement JavaScript to validate inputs and calculate BMI. Categorize users into underweight, normal, overweight, or obese based on BMI values.
   
  Day 5
   Task: Health Recommendation Module
   Description: Add health, diet, and lifestyle recommendations for each BMI category. Display personalized suggestions based on user results.
   
  Day 6 
   Task: Testing & Error Handling
   Description: Test the application with different inputs. Fix bugs, handle empty or invalid inputs, and ensure accurate BMI calculation and proper output.
  
  Day 7
   Task: Final Review & Documentation
   Description: Optimize the code, improve UI if needed, and prepare project documentation. Take screenshots, finalize output, and get the project ready for submission




