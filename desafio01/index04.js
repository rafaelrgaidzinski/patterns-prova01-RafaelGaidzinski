// Classes concretas
class LightButton {
    render() {
      return "Botão branco criado";
    }
  }
  class DarkButton {
    render() {
      return "Botão preto criado";
    }
  }
  
  class LightWindow {
    render() {
      return "Janela clara aberta";
    }
  }
  class DarkWindow {
    render() {
      return "Janela escura aberta";
    }
}

// Classe Abstract Factory
class ComponentFactory {
    createDarkComponents() {
      throw new Error("Método abstrato deve ser implementado");
    }
    createLightComponents() {
      throw new Error("Método abstrato deve ser implementado");
    }
}

// Classe Concreta que herda da componente factory
class ButtonFactory extends ComponentFactory {
    createDarkComponents() {
      return new DarkButton();
    }

    createLightComponents() {
      return new LightButton();
    }
}

// Classe Concreta que herda da componente factory
class WindowFactory extends ComponentFactory {
    createDarkComponents() {
        return new DarkWindow();
    }

    createLightComponents() {
        return new LightWindow();
    }
}

const factories = {
    button: new ButtonFactory(),
    window: new WindowFactory(),
};

// Classe que constrói os componentes
class BuildComponents {
    constructor(factory) {
      this.darkComponent = factory.createDarkComponents();
      this.lightComponent = factory.createLightComponents();
    }
  
    createComponent() {
      console.log(this.darkComponent.render());
      console.log(this.lightComponent.render());
    }
}

// Função principal que criar as factories
function main() {
    const types = ["button", "window"];
  
    types.forEach((type) => {
      console.log(`\n>> Fábrica selecionada: ${type} <<`);
      const factory = factories[type];
      if (!factory) throw new Error("Tipo de fábrica desconhecido");
  
      const component = new BuildComponents(factory);
      component.createComponent();
    });
  }
  
  main();