const SocialIcon = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
  <a
    href={href}
    className="bg-primary-800 dark:bg-white/100 dark:text-yellow-500 dark:hover:bg-black hover:bg-yellow-500 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

export default SocialIcon;