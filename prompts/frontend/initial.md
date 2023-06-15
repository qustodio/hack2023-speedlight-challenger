## Prompt

## Iteration one: Trying to make the AI infer the type of architecture.

1. Create a simple web app with react and typescript: A minimalistic web app is to be developed that accepts a prompt and a difficulty level (ranging from 1 to 5) from the user. The app is then to use these inputs to request a challenge from OpenAI's API. The returned challenge will be displayed to the user, who can choose to either accept the challenge or request a new one.
2. The project is now in TypeScript. I need you to provide a way for me to view it on the web.
3. The prompt component should be separated from the application.
4. The application state should be managed with Redux and Redux Observable
5. Add how to request the HTTP call when the prompt component is loaded.
6. Give me all the dependencies you are using for the package.json.
7. Now I want you to generate everything mentioned above using TypeScript.
8. The project is now in TypeScript. I need you to provide a way for me to view it on the web.

Conclusion: The AI fails miserably in defining the tooling and architecture type; apparently, it struggles to relate the environment with the code and needs guidance.

## Iteration 2: Defining the architecture type based on the tooling defined as Vite/Create React App.

1. Create a Vite application with TypeScript. The application should manage state with Redux and Redux Observable. Its functionality is as follows: it accepts a prompt and a difficulty level (ranging from 1 to 5) from the user. The app then uses these inputs to request a challenge from OpenAI's API. The returned challenge will be displayed to the user, who can choose to either accept the challenge or request a new one.
2. Modify the code to manage state with Redux and Redux Observable.

Conclusion: It is similar to the previous approach, where changes are requested iteratively, but since it is created with the Vite scaffold, the build process is more consistent in terms of construction.