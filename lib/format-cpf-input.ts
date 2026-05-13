export function digitsOnly(cpf: string): string {
    return cpf.replace(/\D/g, '').slice(0, 11);
}

export function formatCPFDisplay(digits: string): string {
    const d = digitsOnly(digits);
    if(d.length <= 3) return d;
    if(d.length <= 6) return `${d.slice(0, 3)}.${d.slice(3)}`;
    if(d.length <= 9) return `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6)}`;
    return `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6, 9)}-${d.slice(9)}`;
    // // Recebe o valor do CPF
    // const digits = digitsOnly(cpf);
    // // Corta nas posições 0 e 3
    // const part1 = digits.slice(0, 3);
    // // Corta nas posições 3 e 6
    // const part2 = digits.slice(3, 6);
    // // Corta nas posições 6 e 9
    // const part3 = digits.slice(6, 9);
    // // Corta nas posições 9 e 11
    // const part4 = digits.slice(9, 11);
    // // Formata o CPF no formato XXX.XXX.XXX-XX
    // return `${part1}.${part2}.${part3}-${part4}`;
}