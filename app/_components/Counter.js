"use client";

import { useState } from "react";

export default function Counter({ users }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>当前有{users.length}人</p>
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>;
    </div>
  );
}
