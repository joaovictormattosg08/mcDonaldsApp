// Utilitarios de CPF(Validação com digitos verificadores brasileiros)
// Algoritmo clássico de CPF - não depende de API externa.
export const removeCpfPunctuation = (cpf: string) => {
    return cpf.replace(/[.-]/g, '');
}

export const isValidteCPF = (cpf: string): boolean => {
    let digits = cpf.replace(/\D/g, '');
    // Se tiver mais ou menos que 11 dígitos, não é válido
    if(digits.length !== 11){
        return false;
    };
    // Reprova sequencias iguais como 111.111.111-11;
    if(/^(\d)\1+$/.test(digits)){
        return false;
    }
    // 1° digito verificador (posicao 9)
    let sum = 0;
        for(let i = 0; i < 9; i++){ 
            sum += parseInt(digits.charAt(i)) * (10 - i);
        }

    let firstVerifier = (sum * 10) % 11;

    firstVerifier = firstVerifier === 10 ? 0 : firstVerifier;

    if(firstVerifier !== parseInt(digits.charAt(9),10)){
        return false;
    }  

    // 2° digito verificador (posicao 10)
    sum = 0;
    for(let i = 0; i < 10; i++){
        sum += parseInt(digits.charAt(i), 10) * (11 - i);
    }
    
    let secondVerifier = (sum * 10) % 11;
    secondVerifier = secondVerifier === 10 ? 0 : secondVerifier;

    return secondVerifier === parseInt(digits.charAt(10), 10);

    
};

