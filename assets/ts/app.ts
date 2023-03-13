/*
 * The App.
 * 
 * A self-initializing collection of general utilities and features.
 * 
 * - Feature: Initializer-Callbacks
 */
type ReadyCallback = () => void;

class App {
    isInitialized: boolean;
    readyActions: ReadyCallback[];
    
    constructor() {
        this.readyActions = [];
        this.isInitialized = false;

        const _init = () => {
            this.isInitialized = true;
            this.readyActions.forEach(action => action());
        };

        if (document.readyState === "complete") {
            _init();
        }
        else {
            document.addEventListener("DOMContentLoaded", _init);
        }
    }

    init() {
        this.isInitialized = true;
        this.readyActions.forEach(action => action());
    }
    addInitializer(action: ReadyCallback) {
        this.readyActions.push(action);
        if (this.isInitialized) {
            action();
        }
    }
}

export { App };