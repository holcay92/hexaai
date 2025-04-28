# HexaAI

HexaAI is a React Native application built with Expo, designed to generate and display AI-powered logo designs. The app integrates Firebase for backend services and uses modern React features like Context API for state management.

---

## Main Features

- **Prompt Input**: Users can enter a prompt to generate a logo design.
- **Logo Styles**: Displays a list of predefined logo styles fetched from Firebase.
- **Design Generation**: Simulates a design generation process
- **Error Handling**: Displays an error component with retry functionality if the generation fails.
- **Design Output**: Displays the generated design along with the entered prompt.

---

## App Structure

### **Contexts**

- **`ThemeContext`**: Provides theme colors and styles throughout the app.
- **`PromptContext`**: Manages the user-entered prompt globally.
- **`LogoContext`**: Fetches and manages logo styles from Firebase.

### **Components**

- **`PromptInput`**: A text input for users to enter their prompt.
- **`LogoStylesContainer`**: Displays a horizontal list of logo styles.
- **`LogoStyleItem`**: Represents a single logo style item.
- **`CreateButton`**: A button to start the logo generation process.
- **`LoadingComponent`**: Displays a loading indicator during the generation process.
- **`ErrorComponent`**: Displays an error message with a retry option.(%10 probability)
- **`DesignReadyComponent`**: Indicates that the design is ready and allows navigation to the output screen. (%90 probability)

### **Screens**

- **`index.tsx`**: The main screen where users can enter a prompt, view logo styles, and start the generation process.
- **`output.tsx`**: Displays the generated design and the entered prompt.

### **Utilities**

- **`fetchLogo.ts`**: Fetches logo styles from Firebase and restructures the data.
- **`utils.ts`**: Contains helper functions like `generateRandomDelay` and `initiateGenerationProcess`.

### **Firebase**

- **Firestore**: Stores logo styles and other app data.
- **Functions**: I added but got a problem regarding payment method. So i did not used cloud functions on this project

![alt text](<Screenshot 2025-04-28 at 14.03.25.png>)
![alt text](<Screenshot 2025-04-28 at 14.03.06.png>)
![alt text](<Screenshot 2025-04-28 at 14.05.21.png>)
![alt text](<Screenshot 2025-04-28 at 14.02.56.png>)
![alt text](<Screenshot 2025-04-28 at 14.05.00.png>)
![alt text](<Screenshot 2025-04-28 at 14.05.07.png>)

---
