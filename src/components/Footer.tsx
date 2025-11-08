import logo from "@/assets/empcode-logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          <img src={logo} alt="EmpCode Logo" className="h-16 w-auto opacity-90" />
          
          <p className="text-center text-sm opacity-80 max-w-2xl">
            Building a world where learning, empathy, and innovation coexist harmoniously.
          </p>
          
          <div className="text-center text-sm opacity-70">
            <p>&copy; {new Date().getFullYear()} EMPCODE. All rights reserved.</p>
            <p className="mt-1">Where Humanity Meets Tech</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
