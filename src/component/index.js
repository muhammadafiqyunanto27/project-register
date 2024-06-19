import { useEffect, useState } from "react";

export function RegisterFunction() {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("data");
    return savedData ? JSON.parse(savedData) : [];
  });

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [alamat, setAlamat] = useState("");

  useEffect(() => {
    if (data.length) {
      localStorage.setItem("data", JSON.stringify(data));
    }
  }, [data]);

  const handleDelete = (id) => {
    const filteredData = data.filter((register) => register.id !== id);
    setData(filteredData);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const newRegister = {
      id: Date.now(),
      name: name,
      phone: phone,
      email: email,
      alamat: alamat,
    };
    const updatedData = [...data, newRegister];
    setData(updatedData);
    setName("");
    setPhone("");
    setEmail("");
    setAlamat("");
    localStorage.setItem("data", JSON.stringify(updatedData));
    alert("Anda Berhasi Menambahkan data")
  };

  return (
    <div>
      <h1> Form Register</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
        onSubmit={handleAdd}
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          style={{ width: "80%", padding: "10px" }}
          required
        />
        <input
          type="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
          style={{ width: "80%", padding: "10px" }}
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          style={{ width: "80%", padding: "10px" }}
          required
        />
        <input
          type="text"
          value={alamat}
          onChange={(e) => setAlamat(e.target.value)}
          placeholder="Adress"
          style={{ width: "80%", padding: "10px" }}
          required
        />
        <button
          type="submit"
          style={{
            width: "80%",
            padding: "10px",
            backgroundColor: "#2b2c34",
            borderRadius: "10px",
            border: "none",
            color:"white"
          }}
        >
          Register
        </button>
      </form>

      <hr style={{ width: "90%" }} />

      <h1>Data Register</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "20px",
          padding: "30px",
          justifyContent: "center",
        }}
      >
        {data.map((register, index) => (
          <div
            key={register + index}
            style={{
              border: "1px solid",
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              width: "40%",
              borderRadius: "10px",
            }}
          >
            <p>ID:{Date.now()}</p>
            <p>Name: {register.name}</p>
            <hr style={{ width: "100%" }} />
            <p>Phone: {register.phone}</p>
            <hr style={{ width: "100%" }} />
            <p>Email: {register.email}</p>
            <hr style={{ width: "100%" }} />
            <p>Alamat: {register.alamat}</p>
            <hr style={{ width: "100%" }} />
            <button
              style={{
                backgroundColor: "#8c7851",
                borderRadius: "10px",
                padding: "8px 18px",
                border: "none",
              }}
              onClick={() => handleDelete(register.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
