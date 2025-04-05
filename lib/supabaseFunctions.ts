import { PrismaClient } from "@prisma/client";
import { Users } from "../src/schema/form";
import { supabase } from "./supabase";

// すべてのUserを取得するための非同期関数
export const getAllUsers = async (): Promise<Users[]> => {
  const prisma = new PrismaClient();
  const users = await prisma.user.findMany();
  console.log(users);
  // Userテーブルからすべてのカラムを取得し、todosに代入します。
  const { data, error } = await supabase.from("User").select("*");

  if (error || !data) {
    console.error("Error fetching users:", error?.message);
    return [];
  }

  return data;
};

// Userを追加するための非同期関数
export const addUser = async (
  name: FormDataEntryValue,
  email: FormDataEntryValue
) => {
  // Userテーブルにmailを追加します。
  await supabase.from("User").insert({ name, email });
};
