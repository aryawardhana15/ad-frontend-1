import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { getUserByUsername, updateUser, deleteUser } from "/src/services/api/userApi";
import "/src/stylesberanda.css";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (!username) {
      navigate("/");
      return;
    }

    getUserByUsername(username).then((users) => {
      if (users.length > 0) {
        setUser(users[0]);
      } else {
        navigate("/");
      }
    });
  }, [navigate]);

  const handleChangePassword = async () => {
    if (!newPassword || !confirmPassword) {
      alert("Kata sandi baru harus diisi.");
      return;
    }
    if (newPassword !== confirmPassword) {
      alert("Konfirmasi kata sandi tidak cocok.");
      return;
    }
    if (!isValidPassword(newPassword)) {
      alert("Kata sandi harus minimal 8 karakter, mengandung huruf besar, angka, dan simbol.");
      return;
    }

    const updated = await updateUser(user.id, {
      ...user,
      password: newPassword,
    });
    setUser(updated);
    alert("Kata sandi berhasil diperbarui!");
    navigate("/home");
  };

  const handleDeleteAccount = async () => {
    const confirm = window.confirm("Apakah kamu yakin ingin menghapus akun ini?");
    if (confirm) {
      await deleteUser(user.id);
      localStorage.clear(); // remove username, auth flags, dll.
      alert("Akun telah dihapus.");
      navigate("/");
    }
  };

  const isValidPassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  return (
    <div className="container">
      <h2>Profil</h2>
      {user && <p><strong>Username:</strong> {user.username}</p>}
      <div className="form_group">
        <label>Kata Sandi Baru</label>
        <input
          className="form_input"
          type="password"
          placeholder="Masukkan kata sandi baru"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <div className="form_group">
        <label>Konfirmasi Kata Sandi</label>
        <input
          className="form_input"
          type="password"
          placeholder="Konfirmasi kata sandi baru"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button className="form_button" onClick={handleChangePassword}>
        Ubah Kata Sandi
      </button>
      <button
        className="form_button"
        onClick={handleDeleteAccount}
      >
        Hapus Akun
      </button>
    </div>
  );
};

export default Profile;
