// Classe concreta
class Lanche {
    constructor() {
      this.pao = null;
      this.carne = null;
      this.queijo = null;
      this.salada = null;
      this.molho = null;
    }
  
    show() {
        console.log(`
        Lanche:
        Pão: ${this.pao ? this.pao : "Sem pão"}
        Carne: ${this.carne ? this.carne : "Sem carne"}
        Queijo: ${this.queijo ? this.queijo : "Sem queijo"}
        Salada: ${this.salada ? this.salada : "Sem salada"}
        Molho: ${this.molho ? this.molho : "Sem molho"}
        `);
    }
}

// Classe Builder que monta os lanches
class LancheBuilder {
    constructor() {
        this.lanche = new Lanche();
    }

    setPao(pao) {
        this.lanche.pao = pao;
        return this;
    }

    setCarne(carne) {
        this.lanche.carne = carne;
        return this;
    }

    setQueijo(queijo) {
        this.lanche.queijo = queijo;
        return this;
    }
    
    setSalada(salada) {
        this.lanche.salada = salada;
        return this;
    }

    setMolho(molho) {
        this.lanche.molho = molho;
        return this;
    }

    build() {
        return this.lanche;
    }
}

// Classe Director que monta configurações pré definidas dos lanches
class LancheDirector {
    static lancheSimples() {
        return new LancheBuilder()
            .setPao("Pão Simples")
            .setCarne("Carne Simples")
            .setQueijo("Queijo Simples")
            .setSalada("Salada Simples")
            .setMolho("Molho Simples")
            .build()
    }

    static lancheCompleto() {
        return new LancheBuilder()
            .setPao("Pão Completo")
            .setCarne("Carne Completo")
            .setQueijo("Queijo Completo")
            .setSalada("Salada Completo")
            .setMolho("Molho Completo")
            .build()
    }
}


// Utilizando a classe director que cria os lanches pré definidos
const lancheSimples = LancheDirector.lancheSimples();
const lancheCompleto = LancheDirector.lancheCompleto();
const lanchePersonalizado = new LancheBuilder().setPao("Pão Personalizado").setCarne("Carne Personalizada").setQueijo("Queijo Personalizado").build();

lancheSimples.show();
lancheCompleto.show();
lanchePersonalizado.show();
  