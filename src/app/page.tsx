import { Top } from "../components/Top";
import { getAllUsers } from "../../lib/supabaseFunctions";

export default async function Home() {
  const users = await getAllUsers();
  return (
    <div>
      <main>
        <Top inituUsers={users} />
      </main>
    </div>
  );
}
