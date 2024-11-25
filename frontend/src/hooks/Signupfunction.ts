export const signUpfucntion = async (input: any) => {
  for (let [key, value] of Object.entries(input)) {
    if (!value) {
      return { status: "fail", message: "you missed " + key };
    }
  }
  if (input?.confirm !== input?.password) {
    return { status: "fail", message: "password and confirm are not same" };
  }

  try {
    const PostData = await fetch("http://localhost:4000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",

      body: JSON.stringify({
        username: input.username,
        email: input.email,
        confirm: input.confirm,
        password: input.password,
        gender: input.gender,
      }),
    });

    if (!PostData.ok) {
      const errorData = await PostData.json();
      throw new Error(errorData.message);
    }
  } catch (err) {
    return { status: "fail", message: err.message };
  }
};

export const loginfucntion = async (input: any) => {
  for (let [key, value] of Object.entries(input)) {
    if (!value) {
      return { status: "fail", message: "you missed " + key };
    }
  }

  try {
    const PostData = await fetch("http://localhost:4000/api/auth/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: input.email,

        password: input.password,
      }),
    });

    if (!PostData.ok) {
      const errorData = await PostData.json();
      throw new Error(errorData.message);
    } else {
      const data = await PostData.json();
      return { status: "success", message: data };
    }
  } catch (err) {
    return { status: "fail", message: err.message };
  }
};

export const logoutFunction = async () => {
  try {
    const PostData = await fetch("http://localhost:4000/api/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    if (!PostData.ok) {
      throw new Error("");
    }
    return true;
  } catch (err) {
    return false;
  }
};

export const getAllMessages = async (id: string) => {
  try {
    const PostData = await fetch(`http://localhost:4000/api/message/${id}`, {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    if (PostData.ok) {
      const data = await PostData.json();
      return data;
    }
    return false;
  } catch (err) {
    return false;
  }
};
