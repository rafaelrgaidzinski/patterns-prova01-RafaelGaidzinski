class Config {
    constructor() {
        if (Config.instance) {
        return Config.instance;
        }  

        this.settings = {};
        Config.instance = this;
    }

    setConfig(key, value) {
        this.settings[key] = value;
    }

    getConfig(key) {
        return this.settings[key];
    }

    getAllConfig() {
        Object.entries(this.settings).forEach(([key, value])=> {
            console.log(key + ": " + value)
        });
        console.log();
    }
}
  
const c1 = new Config();
c1.setConfig("firstLang", "pt-BR");
console.log(c1.getConfig("firstLang"));
c1.getAllConfig();


const c2 = new Config();
c2.setConfig("secondLang", "en-US");
console.log(c2.getConfig("secondLang"));
c2.getAllConfig();
