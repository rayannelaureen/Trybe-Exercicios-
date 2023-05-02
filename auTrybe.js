const studentRegister = (name, age) => {
    try {
        if( name === undefined || age === undefined){
            throw new Error ('Todas as informações são necessárias')
        } else if (age < 18) {
            throw new Error ('Ops, infelizmente nesse momento você não pode fazer as aulas')
        } else if (age >= 18){
            console.log(`${name}, seja bem-vindo(a) à AuTrybe!`);
        }
    } catch (error) {
        return error.message
    }
  }

  studentRegister('nany', 18)