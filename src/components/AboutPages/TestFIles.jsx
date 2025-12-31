import React from 'react';
import { motion } from 'framer-motion';

const TestFIles = () => {
        const stats = [
        { number: '10+', label: 'Years Experience' },
        { number: '500+', label: 'Projects Completed' },
        { number: '100+', label: 'Happy Clients' },
        { number: '50+', label: 'Awards Won' }
    ];

    const skills = [
        { name: 'UI/UX Design', percentage: 95 },
        { name: 'Web Development', percentage: 90 },
        { name: 'Brand Identity', percentage: 85 },
        { name: 'Motion Graphics', percentage: 80 }
    ];

    const team = [
        { name: 'Alex Johnson', role: 'Creative Director', img: '👨‍💼' },
        { name: 'Sarah Chen', role: 'Lead Designer', img: '👩‍💻' },
        { name: 'Mike Davis', role: 'Developer', img: '👨‍💻' },
        { name: 'Emma Wilson', role: 'Project Manager', img: '👩‍💼' }
    ];

    return (
        <div>
             {/* Animated Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <motion.div 
                    className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px]"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div 
                    className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-800/20 rounded-full blur-[100px]"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />
            </div>

            {/* Hero Section */}
            <section className="relative z-10 container mx-auto px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6, type: "spring" }}
                        className="inline-block px-6 py-2 bg-purple-600/30 rounded-full mb-6 backdrop-blur-sm"
                    >
                        <span className="text-purple-300 font-medium">About Us</span>
                    </motion.div>
                    
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                        We Create Digital Experiences
                    </h1>
                    
                    <p className="text-xl text-gray-300 leading-relaxed">
                        We are a creative studio specializing in innovative digital solutions. 
                        Our passion is transforming ideas into beautiful, functional experiences 
                        that inspire and engage.
                    </p>
                </motion.div>

                {/* Stats Section */}
                <motion.div 
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10"
                            whileHover={{ scale: 1.05, borderColor: 'rgba(167, 139, 250, 0.5)' }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <motion.h3 
                                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ delay: index * 0.1, type: "spring" }}
                                viewport={{ once: true }}
                            >
                                {stat.number}
                            </motion.h3>
                            <p className="text-gray-400">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Mission & Vision Section */}
            <section className="relative z-10 container mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="p-8 bg-white/5 rounded-3xl backdrop-blur-sm border border-white/10"
                    >
                        <div className="text-4xl mb-4">🎯</div>
                        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                        <p className="text-gray-300 leading-relaxed">
                            To empower businesses and individuals with cutting-edge digital solutions 
                            that drive growth, innovation, and meaningful connections in an ever-evolving 
                            digital landscape.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="p-8 bg-white/5 rounded-3xl backdrop-blur-sm border border-white/10"
                    >
                        <div className="text-4xl mb-4">✨</div>
                        <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                        <p className="text-gray-300 leading-relaxed">
                            To be the leading creative force in digital innovation, recognized globally 
                            for our exceptional designs, transformative solutions, and unwavering commitment 
                            to excellence.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="relative z-10 container mx-auto px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Our Expertise</h2>
                    
                    <div className="space-y-8">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold">{skill.name}</span>
                                    <span className="text-purple-400">{skill.percentage}%</span>
                                </div>
                                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.percentage}%` }}
                                        transition={{ duration: 1, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Team Section */}
            <section className="relative z-10 container mx-auto px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Meet Our Team</h2>
                    <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
                        Talented individuals working together to create amazing digital experiences
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className="text-center p-6 bg-white/5 rounded-3xl backdrop-blur-sm border border-white/10"
                            >
                                <motion.div 
                                    className="text-6xl mb-4"
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    {member.img}
                                </motion.div>
                                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                                <p className="text-purple-400">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* CTA Section */}
            <section className="relative z-10 container mx-auto px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center p-12 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl backdrop-blur-sm border border-purple-500/30"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Ready to bring your ideas to life? Let's create something amazing together.
                    </p>
                    <motion.button
                        className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg"
                        whileHover={{ 
                            scale: 1.05,
                            boxShadow: '0 0 30px rgba(167, 139, 250, 0.6)'
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        Get In Touch
                    </motion.button>
                </motion.div>
            </section>
        </div>
    );
};

export default TestFIles;