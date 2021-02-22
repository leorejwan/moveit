interface ButtonProps{
    color: string;
}

export function Button(props: ButtonProps){
    return (
        <button type="button">Botão <strong>Teste</strong></button>
    )
}