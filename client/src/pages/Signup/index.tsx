import React, { BaseSyntheticEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Loader from '../../components/Loader';
import Logo from '../../components/Logo';
import { useAuthContext } from '../../context/AuthContext';
import useErrors from '../../hooks/useErrors';
import isEmailValid from '../../utils/isEmailValid';
import { Container } from './styles';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { errors, getErrorMessageByFieldName, removeError, setError } =
    useErrors();

  const navigate = useNavigate();
  const { handleLogin, authenticated } = useAuthContext();
  const isFormValid =
    password && passwordConfirmation && email && errors.length === 0;

  function handleEmailChange(event: BaseSyntheticEvent) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      return setError({ field: 'email', message: 'E-mail inválido' });
    } else {
      removeError('email');
    }
  }

  function handlePasswordChange(event: BaseSyntheticEvent) {
    setPassword(event.target.value);

    if (!event.target.value) {
      setError({ field: 'password', message: 'Senha é obrigatória' });
    } else {
      removeError('password');
    }
  }

  function handlePasswordConfirmationChange(event: BaseSyntheticEvent) {
    setPasswordConfirmation(event.target.value);

    console.log(event.target.value);

    if (password !== event.target.value) {
      setError({
        field: 'passwordConfirmation',
        message: 'Confirmação de senha incorreta',
      });
    } else {
      removeError('passwordConfirmation');
    }
  }

  function handleNameChange(event: BaseSyntheticEvent) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório' });
    } else {
      removeError('name');
    }
  }

  async function handleSubmit(event: React.BaseSyntheticEvent) {
    setIsLoading(true);
    event.preventDefault();

    const user = { name, email, password };

    const err: any = await handleLogin({ name, email, password });

    if (err) {
      setPassword('');
      setPasswordConfirmation('');
      setError({ field: 'email', message: 'Esse email já foi cadastrado' });
    }

    setIsLoading(false);
  }

  useEffect(() => {
    if (authenticated) {
      navigate('/home');
    }
  }, [authenticated]);

  return (
    <Container>
      <Loader isLoading={isLoading} />
      <Logo />
      <form onSubmit={handleSubmit}>
        <h1>Registre-se agora</h1>
        <Input
          category="person"
          type="text"
          placeholder="Digite seu nome"
          value={name}
          onChange={handleNameChange}
          error={getErrorMessageByFieldName('name')}
        />

        <Input
          category="email"
          placeholder="Digite seu e-mail"
          type="email"
          value={email}
          onChange={handleEmailChange}
          error={getErrorMessageByFieldName('email')}
        />

        <Input
          category="password"
          placeholder="Digite sua senha"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          error={getErrorMessageByFieldName('password')}
        />

        <Input
          category="password"
          placeholder="Confirme sua senha"
          type="password"
          value={passwordConfirmation}
          onChange={handlePasswordConfirmationChange}
          error={getErrorMessageByFieldName('passwordConfirmation')}
        />

        <Button variant="primary" type="submit" disabled={!isFormValid}>
          Registre-se
        </Button>
      </form>

      <a href="">Esqueci minha senha</a>
      <Link to="/">
        Já tem uma conta? <strong>Faça login</strong>
      </Link>
    </Container>
  );
};

export default SignUp;
