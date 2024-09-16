import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

import Button from "../../components/Button";
import TopBackground from "../../components/TopBackground";
import DefaultTitle from "../../components/Title";
import Trash from "../../assets/trash.svg";

import {
  AvatarUser,
  CardUsers,
  Container,
  ContainerUsers,
  TrashIcon,
} from "./styles";

function ListUsers() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get("./usuarios");

      setUsers(data);
    }
    getUsers();
  }, []);

 async function deleteUsers(id){
   await api.delete(`/usuarios/${id}`)

   const updatedUsers = users.filter( user => user.id !== id)

   setUsers(updatedUsers)
 }

  return (
    <Container>
      <TopBackground />
      <DefaultTitle>Listagem de Usuários</DefaultTitle>

      <ContainerUsers>
        {users.map((user) => (
          <CardUsers key={user.id}>
            <AvatarUser
              src={`https://avatar.iran.liara.run/public?username=${user.id}`}
            />
            <div key={user.id}>
              <h3>{user.name}</h3>
              <p>{user.age}</p>
              <p>{user.email}</p>
            </div>
            <TrashIcon src={Trash} alt="Trash-icone" onClick={() => deleteUsers(user.id)}/>
          </CardUsers>
        ))}
      </ContainerUsers>
      <Button type="button" onClick={() => navigate("/")}>Voltar</Button>
    </Container>
  );
}

export default ListUsers;
