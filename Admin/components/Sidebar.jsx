import React from 'react';
import { TbSmartHome } from 'react-icons/tb';
import { AiOutlineUser, AiOutlineFundProjectionScreen, AiOutlineArrowRight } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';
import { BiChalkboard } from 'react-icons/bi';
import { FaMailBulk, FaUsers } from 'react-icons/fa';
import styles from '../../styles/admin/Sidebar.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { logout } from '../../redux/features/authSlice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

const Sidebar = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  function userLogout() {
    dispatch(logout());
    toast.success("Successfully Logged Out!")
    localStorage.removeItem('token');
    router.push('/');
  }

  const menuItems = [
    { href: '/admin/Dashboard', icon: <TbSmartHome className={styles.menuIcon} />, label: 'Dashboard' },
    // { href: '/admin/NewProfile', icon: <AiOutlineUser className={styles.menuIcon} />, label: 'Profile' },
    // Uncomment the users link if needed
    // { href: '/admin/Users', icon: <FiUsers className={styles.menuIcon} />, label: 'Users' },
    { href: '/admin/learn/BuildSee', icon: <AiOutlineFundProjectionScreen className={styles.menuIcon} />, label: 'Build' },
    { href: '/admin/learn', icon: <BiChalkboard className={styles.menuIcon} />, label: 'Learn' },
    { href: '/admin/community', icon: <FaUsers className={styles.menuIcon} />, label: 'Community' },
    { href: '/admin/BulkMail', icon: <FaMailBulk className={styles.menuIcon} />, label: 'BulkMail' },
  ];

  return (
    <div className={styles.wrapper}>
      <ul className={styles.menu}>
        {menuItems.map((item, index) => (
          <Link key={index} href={item.href} passHref>
            <li className={styles.item}>
              {item.icon}
              {item.label}
            </li>
          </Link>
        ))}
      </ul>
      <div className={styles.wrapperButton}>
        <button onClick={userLogout} className={styles.button}>
          Logout <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
