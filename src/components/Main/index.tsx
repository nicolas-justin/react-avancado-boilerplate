import * as S from './styles';

export default function Main() {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo com a palavra React Avançado escrito ao seu lado direito."
      />
      <S.Title>React Avançado</S.Title>
      <S.Description>
        TypeScript, ReactJS, NextJS e Styled Components
      </S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Imagem de um desenvolvedor sentado em frente a um computador."
      />
    </S.Wrapper>
  );
}
