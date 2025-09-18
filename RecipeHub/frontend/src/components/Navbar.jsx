import PillNav from "./PillNav";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-center z-[999]">
      <PillNav
        items={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
        ]}
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#0a0a0a"
        pillColor="#fafafa"
        hoveredPillTextColor="#fafafa"
        pillTextColor="#0A0A0A"
      />
    </div>
  );
};

export default Navbar;
