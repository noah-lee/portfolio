import styled from "styled-components";

const AboutMe = () => {
  const me = {
    name: "Noah",
    job: undefined,
  };

  return (
    <VSCodeWindow>
      <IndentZero>
        <Blue>const</Blue> <Aqua>me</Aqua> = <Lavendar>{"{"}</Lavendar>
      </IndentZero>
      <IndentOne>
        <Lb>name:</Lb> <Tan>'Noah Lee'</Tan>,
      </IndentOne>
      <IndentOne>
        <Lb>title:</Lb> <Tan>'Web Developer'</Tan>,
      </IndentOne>
      <IndentOne>
        <Lb>job:</Lb> <Aqua>undefined</Aqua>,
      </IndentOne>
      <IndentOne>
        <Lb>description:</Lb>
      </IndentOne>
      <IndentTwo>
        <Tan>
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.'
        </Tan>
        ,
      </IndentTwo>
      <IndentZero>
        <Lavendar>{"}"}</Lavendar>
        {";"}
      </IndentZero>
    </VSCodeWindow>
  );
};

const VSCodeWindow = styled.div`
  padding: 32px;

  font-family: "Consolas";
  font-size: 1rem;
  background-color: var(--vs-code-background);
  color: white;
`;

const IndentZero = styled.p``;

const IndentOne = styled.p`
  margin-left: calc(32px * 1);
`;

const IndentTwo = styled.p`
  margin-left: calc(32px * 2);
  max-width: 800px;
`;

const Blue = styled.span`
  color: var(--vs-code-blue);
`;

const Aqua = styled.span`
  color: var(--vs-code-aqua);
`;

const Lavendar = styled.span`
  color: var(--vs-code-lavendar);
`;

const Tan = styled.span`
  color: var(--vs-code-tan);
`;

const Lb = styled.span`
  color: var(--vs-code-lightblue);
`;

export default AboutMe;
