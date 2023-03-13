import { App } from "./app";

const app = new App();

app.addInitializer(() => {
    let mainElement = document.getElementById("main");
    
    if (mainElement) {
        mainElement.innerHTML = "App is ready<br>" + mainElement.innerHTML;
    }
});
