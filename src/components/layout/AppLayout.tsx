import styles from "./AppLayout.module.css";
import { ReactNode } from "react";
import { useAuthStore } from "../../services/store/auth/authStore";
// import Header from "../components/header/Header";

interface IProps {
  children: ReactNode;
}

const AppLayout = ({ children }: IProps) => {
  const { isLoggedIn } = useAuthStore();

  return (
    <div className={styles.appLayout}>
      {isLoggedIn && (
        <div className={styles.headerContainer}>
          {/* <Header /> */}
          Header
        </div>
      )}
      <main
        style={{ margin: isLoggedIn ? "100px 17px 10px" : "0px" }}
        className={styles.mainContent}
      >
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
