// validar campos vazios
export default function notFields(first_name, last_name, email, password, cpf, username) {
    if (first_name === '' || last_name === '' || email === '' || password === '' || cpf === '' || username === '') {
        return { message: "Não deixe nenhum campo obrigatório vazio" };
    }
}