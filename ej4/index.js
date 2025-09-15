const API_URL = "http://localhost:3000/users";
const usersList = document.getElementById("users");
const form = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const roleInput = document.getElementById("role");

// READ
async function getUsers() {
  const res = await fetch(API_URL);
  return await res.json();
}

// CREATE
async function createUser(user) {
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
}

// UPDATE (solo role)
async function updateUserRole(id, newRole) {
  await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ role: newRole }),
  });
}

// DELETE
async function deleteUser(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
}


function renderUsers(users) {
  usersList.innerHTML = ""; // limpiar lista antes de renderizar
  users.forEach((user) => {
    // crear elemento <li> por usuario
    const li = document.createElement("li");
    li.textContent = `${user.name} / ${user.role} / ${user.email} `;

    // Botón Promote/Demote
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = user.role === "Viewer" ? "Promote" : "Demote";
    toggleBtn.onclick = async () => {
      const newRole = user.role === "Viewer" ? "Editor" : "Viewer";
      await updateUserRole(user.id, newRole);
      loadUsers();
    };

    // Botón Delete
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = async () => {
      await deleteUser(user.id);
      loadUsers();
    };

    // agregar botones al <li>
    li.appendChild(toggleBtn);
    li.appendChild(delBtn);

    // insertar <li> dentro de la lista #users
    usersList.appendChild(li);
  });
}

//Formulario

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const newUser = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    role: roleInput.value.trim(),
  };

  if (!newUser.name || !newUser.email || !newUser.role) return;

  await createUser(newUser);
  form.reset();
  loadUsers();
});

//Inicializar

async function loadUsers() {
  const users = await getUsers();
  renderUsers(users);
}

loadUsers();
