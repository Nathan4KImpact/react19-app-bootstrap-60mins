import { useState } from "react";

interface User {
  id: number;
  name: string;
}

function Users({ users = [] }: { users?: User[] }) {
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex justify-center p-8 bg-gray-50 ">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        {/* Header Tailwind */}
        <div className="bg-indigo-600 p-6">
          <h2 className="text-xl font-bold text-white text-center tracking-tight">
            Annuaire Utilisateurs
          </h2>
        </div>

        <div className="p-6">
          {/* Input Style Tailwind */}
          <input
            type="text"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 
                      outline-none ring-0
                      focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 
                      transition-all duration-300 ease-in-out
                      placeholder:text-gray-400 text-gray-600"
            placeholder="Rechercher un membre..."
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Liste Style Tailwind */}
          <ul className="divide-y divide-gray-100">
            {filteredUsers.map((user) => (
              <li 
                key={user.id} 
                className="py-3 px-2 hover:bg-indigo-50 hover:text-indigo-700 transition-colors rounded-lg cursor-pointer font-medium text-gray-700"
              >
                {user.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Users;