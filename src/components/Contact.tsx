import styled from "styled-components";

import { Section, H3, P } from "../styles/StyledComponents";

const Contact = () => {
  return (
    <Section>
      <H3>let's continue the conversation</H3>
      <Text>
        Are you looking for a developer? Are you curious about my awesome projects? I would love to connect and chat! I'm also always eager to
        geek out about music production and keyboards 🙂
      </Text>
      <EmailForm>
        <label htmlFor="email">Email</label>
        <EmailInput type="email" id="email" />
        <label htmlFor="message">Message</label>
        <MessageArea id="message" />
        <EmailSubmitBtn>Send</EmailSubmitBtn>
      </EmailForm>
    </Section>
  );
};

const Text = styled(P)`
  margin-top: 32px;
`;

const EmailForm = styled.form`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const EmailInput = styled.input`
  height: 1rem;
  padding: 8px;
  border: none;
  border-radius: 8px;

  font-size: 1rem;
  font-family: inherit;
  background-color: var(--color-white);
`;

const MessageArea = styled.textarea`
  resize: none;

  height: 10rem;
  padding: 8px;
  border: none;
  border-radius: 8px;

  font-size: 1rem;
  font-family: inherit;
  background-color: var(--color-white);
`;

const EmailSubmitBtn = styled.button`
  align-self: flex-end;

  border: none;
  font-size: 1rem;
  line-height: 1rem;
  font-family: inherit;
  color: inherit;
  padding: 16px;
  background-color: var(--color-red);
  border-radius: 16px;

  &:hover {
    background-color: var(--color-aqua);
    color: var(--color-dark);
    cursor: pointer;
  }
`;

export default Contact;
