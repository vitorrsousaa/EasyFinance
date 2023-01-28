import React, { BaseSyntheticEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import Input from '../../components/Input';
import Logo from '../../components/Logo';
import { useAuthContext } from '../../context/AuthContext';
import useErrors from '../../hooks/useErrors';
import { api } from '../../services/api';
import isEmailValid from '../../utils/isEmailValid';
import { Container } from './styles';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const { errors, getErrorMessageByFieldName, removeError, setError } =
    useErrors();

  const navigate = useNavigate();
  const { handleLogin } = useAuthContext();
  const isFormValid = password && email && errors.length === 0;

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

    if (!event.target.value) {
      setError({
        field: 'passwordConfirmation',
        message: 'Confirmação de senha é obrigatória',
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

  function handleSubmit(event: React.BaseSyntheticEvent) {
    event.preventDefault();

    if (password !== passwordConfirmation) {
      setPasswordConfirmation('');
      setError({
        field: 'passwordConfirmation',
        message: 'Confirmação de senha incorreta',
      });
    }

    const user = { name, email, password };

    api
      .post('auth/register', user)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error.response.data));

    // navigate('/home');
  }

  return (
    <Container>
      <Logo />
      <form onSubmit={handleSubmit}>
        <h1>Registre-se agora</h1>
        <Input
          category="person"
          type="text"
          placeholder="Seu nome"
          value={name}
          onChange={handleNameChange}
          error={getErrorMessageByFieldName('name')}
        />

        <Input
          category="email"
          placeholder="Seu E-mail"
          type="email"
          value={email}
          onChange={handleEmailChange}
          error={getErrorMessageByFieldName('email')}
        />

        <Input
          category="password"
          placeholder="Sua senha"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          error={getErrorMessageByFieldName('password')}
        />

        <Input
          category="password"
          placeholder="Sua senha"
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