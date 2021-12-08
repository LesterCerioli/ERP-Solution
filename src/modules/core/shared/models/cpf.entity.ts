export class CPF {
    constructor(
        public cpfNumber: string,
        
    ) {

    }

    public static cpf(cpfNumber: string): boolean {
        if (cpfNumber == null) {
            return false;
        }

        if (cpfNumber.length != 11) {
            return false;
        }

        if ((cpfNumber == '00000000000') || (cpfNumber == '11111111111') || (cpfNumber == '22222222222') || (cpfNumber == '33333333333') ||
            (cpfNumber == '44444444444') || (cpfNumber == '55555555555') || (cpfNumber == '66666666666') || (cpfNumber == '77777777777') ||
            (cpfNumber == '88888888888') || (cpfNumber == '99999999999')) {
            return false;
        }

        let numero: number = 0;
        let caracter: string = '';
        let numeros: string = '0123456789';
        let j: number = 10;
        let somatorio: number = 0;
        let resto: number = 0;
        let digito1: number = 0;
        let digito2: number = 0;
        let cpfAux: string = '';
        cpfAux = cpfNumber.substring(0, 9);
        for (let i: number = 0; i < 9; i++) {
            caracter = cpfAux.charAt(i);
            if (numeros.search(caracter) == -1) {
                return false;
            }
            numero = Number(caracter);
            somatorio = somatorio + (numero * j);
            j--;
        }
        resto = somatorio % 11;
        digito1 = 11 - resto;
        if (digito1 > 9) {
            digito1 = 0;
        }
        j = 11;
        somatorio = 0;
        cpfAux = cpfAux + digito1;
        for (let i: number = 0; i < 10; i++) {
            caracter = cpfAux.charAt(i);
            numero = Number(caracter);
            somatorio = somatorio + (numero * j);
            j--;
        }
        resto = somatorio % 11;
        digito2 = 11 - resto;
        if (digito2 > 9) {
            digito2 = 0;
        }
        cpfAux = cpfAux + digito2;
        if (cpfNumber != cpfAux) {
            return false;
        }
        else {
            return true;
        }

    }
}