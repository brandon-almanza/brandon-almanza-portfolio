export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent text-center">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Banking System Simulation</h3>
                        <p className="text-gray-400 mb-4">banking system where you can deposit, withdraw, and manage accounts!
                             Includes safeguards like overdraft limits and minimum balance requirements.</p>
                        <div>
                            {["C#", ".NET"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                                {tech}
                                </span> 
                            ))}
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <a href="https://github.com/brandon-almanza/C-Sharp-Programming/tree/main/Banking%20System%20Simulation/A3_BrandonArgenalAlmanza" 
                            className="text-blue-400 hover:text-blue-300 transition-colors text-center">View Project </a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Bug Smasher Game</h3>
                        <p className="text-gray-400 mb-4">Interactive web game where you squash bugs to earn points! However your reaction speed will be tested.</p>
                        <div>
                            {["HTML", "CSS", "JavaScript"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                                {tech}
                                </span> 
                            ))}
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <a href="https://github.com/brandon-almanza/Client-Side-Web-Development/tree/main/Assignment%205%20(Bug%20Smasher%20Game)" 
                            className="text-blue-400 hover:text-blue-300 transition-colors text-center mt-6">View Project </a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Load Balancer & Web Server Hosting</h3>
                        <p className="text-gray-400 mb-4">Configured a load balancer with multiple web servers using CentOS virtual machines!
                             Used Nginx configurations to distribute traffic efficiently and ensure high availability.</p>
                        <div>
                            {["CentOS", "HTML", "NGINX"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                                {tech}
                                </span> 
                            ))}
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <a href="#projects" 
                            className="text-blue-400 hover:text-blue-300 transition-colors text-center">View Project </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};