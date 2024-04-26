"use client";
import React from "react";
import Addtodo from "@/components/EmployeeForm";
import Displaytodo from "@/components/EmployeeList";

function TodoPage() {
  return (
    <div className="main-page wavy-background">
      <Addtodo />
      <Displaytodo />
    </div>
  );
}

export default TodoPage;
