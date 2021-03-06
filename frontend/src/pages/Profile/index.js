import React from 'react';
import { Form, Input, Textarea } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';

import { signOut } from '../../store/modules/auth/actions';
import { updateProfileRequest } from '../../store/modules/user/actions';

import AvatarInput from './AvatarInput';

import { Container } from './styles';

function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state=> state.user.profile);

  function handleSubmit(data){
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut(){
    dispatch(signOut());
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />
        <Input name="name" placeholder="Nome Completo"/>
        <Input name="email" type="email" placeholder="Seu endereço de e-mail" />
        <Textarea name="description" wrap="hard" type="text" placeholder="Descrição" />
        <Input name="address" type="text" placeholder="Endereço"/>

        <hr />

        <Input type="password" name="oldPassword" placeholder="Sua senha atual."/>
        <Input type="password" name="password" placeholder="Nova Senha."/>
        <Input type="password" name="confirmPassword" placeholder="Confirmação de senha."/>

        <button type="submit">Atualizar perfil</button>
      </Form>

      <button type="button" onClick={handleSignOut}>
        Sair do Doações
      </button>

    </Container>
  );
}

export default Profile;