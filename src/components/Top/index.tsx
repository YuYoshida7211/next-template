"use client";
import { useId, useState } from "react";
import { addUser, getAllUsers } from "../../../lib/supabaseFunctions";
import { Users } from "../../schema/form";

type Props = {
  inituUsers: Users[];
};

export const Top = ({ inituUsers }: Props) => {
  const nameId = useId();
  const mailId = useId();
  const [name, setName] = useState<string>("");
  const [email, setMail] = useState<string>("");
  const [users, setUsers] = useState<Users[]>(inituUsers);
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleMailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMail(e.target.value);
  };
  const handleSubmit = async () => {
    await addUser(name, email);
    const users = await getAllUsers();
    setUsers(users);
  };
  return (
    <div>
      <h1>会員登録</h1>
      <form action={handleSubmit}>
        <div>
          <label htmlFor={nameId}>氏名</label>
          <input
            id={mailId}
            name="name"
            placeholder="氏名"
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor={mailId}>メールアドレス</label>
          <input
            id={mailId}
            placeholder="メールアドレス"
            name="mail"
            onChange={handleMailChange}
          />
        </div>
        <button type="submit">送信</button>
      </form>
      <h2>会員一覧</h2>
      {users.map((li, i) => (
        <p key={i}>{`id:${li.id} name:${li.name} email:${li.email} `}</p>
      ))}
    </div>
  );
};
