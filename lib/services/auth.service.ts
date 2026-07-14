import { prisma } from "@/lib/prisma";
import { verifyPassword } from "@/lib/password";

export async function loginUser(
  username: string,
  password: string
) {
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  if (!user) {
    return {
      success: false,
      message: "Invalid username or password.",
    };
  }

  if (!user.isActive) {
    return {
      success: false,
      message: "Your account is inactive.",
    };
  }

  const passwordMatch = await verifyPassword(
    password,
    user.password
  );

  if (!passwordMatch) {
    return {
      success: false,
      message: "Invalid username or password.",
    };
  }

  // Update user login timestamp (if field exists in schema)
  // await prisma.user.update({
  //   where: {
  //     id: user.id,
  //   },
  //   data: {
  //     updatedAt: new Date(),
  //   },
  // });

  return {
    success: true,
    user,
  };
}