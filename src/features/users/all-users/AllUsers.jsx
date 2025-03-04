import { useEffect, useState } from "react";
import styles from "./AllUsers.module.scss";
import axiosInstance from '@/api/axiosInstance'
import BackTitle from "@/components/back-title/BackTitle";
const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data: { success, users } } = await axiosInstance.get("/users/all");
        if (success) {
          setUsers(users);
          setFilteredUsers(users);
        }
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const results = users.filter((user) =>
      user.username.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredUsers(results);
  }, [searchQuery, users]);

  return (
    <div className={styles.container}>
      <BackTitle text="All Users" />
      <input
        type="text"
        placeholder="Search by username"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={styles.searchBar}
      />

      <div className={styles.userList}>
        {filteredUsers.map((user) => (
          <div key={user._id} className={styles.userCard}>
            <p className={styles.username}>Username: {user.username}</p>
            <p className={styles.userEmail}>Email: {user.email}</p>
            <p className={styles.graduationYear}>Graduation Year: {user.gradYear}</p>
            <p className={styles.userType}>User Type: {user.userType}</p>
            <p className={user.active ? styles.active : styles.inactive}>
              Status: {user.active ? "Active" : "Inactive"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllUsers;
