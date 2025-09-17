// Classes concretas
class Bicicleta {
    move() {
      return "Pedalando a bicicleta no pátio da UNISATC";
    }
  }
  
class Patinete {
    move() {
        return "Andando de patinete pelo estacionamento da UNISATC";
    }
}

class Onibus {
    move() {
        return "Andando de ônibus e chegando na UNISATC";
    }
}

// Factory Method
class TransportFactory {
    static types = {
        bicicleta: Bicicleta,
        patinete: Patinete,
        onibus: Onibus
    }; 

    static createTransport(type) {
        const TransportClass = this.types[type];
        if (!TransportClass) {
            throw new Error("Tipo de transporte ainda não suportado");
          }
        return new TransportClass();
    }
}

function main() {
    const transports = ["bicicleta", "patinete", "onibus"];
    try {
        transports.forEach((type) => {
            const transport = TransportFactory.createTransport(type);
            let response = transport.move();
            console.log(response);
      });
    } catch (error) {
      console.error("Erro ao criar transporte ...", error.message);
    }
  }
  
  main();
