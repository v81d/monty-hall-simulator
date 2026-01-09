import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

// Create the main container used to insert content
const contentContainer: HTMLDivElement = document.createElement("div");
contentContainer.className =
  "w-full h-full flex flex-col justify items-center p-10";
app.appendChild(contentContainer);

const titleHeading: HTMLHeadingElement = document.createElement("h1"); // the title
titleHeading.textContent = "Monty Hall Simulator";
titleHeading.className = "text-3xl font-bold";
contentContainer.appendChild(titleHeading);
