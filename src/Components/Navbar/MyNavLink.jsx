import Link from "next/link";
import { usePathname } from "next/navigation";

const MyNavLink = ({ href, children }) => {
  const pathName = usePathname();
  return (
    <>
      <li>
        <Link
          href={href}
          className={`${pathName === href ? "font-bold text-[#469165]" : ""} text-lg`}
        >
          {children}
        </Link>
      </li>
    </>
  );
};

export default MyNavLink;
