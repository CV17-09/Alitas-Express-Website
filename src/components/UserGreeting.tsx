"use client";

import { useEffect, useState } from "react";

export default function UserGreeting() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  if (!user) {
    return (
      <div className="text-[#F3E7D3]">
        Guest User
      </div>
    );
  }

  return (
    <div className="rounded-full bg-[#A61E1E] px-4 py-2 font-bold text-white">
      Welcome, {user.name}
    </div>
  );
}