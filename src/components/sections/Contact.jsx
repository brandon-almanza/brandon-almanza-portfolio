import emailjs from 'emailjs-com';
import { useState } from 'react';
export const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
        });

    const handleSubmit = (e) => {
         e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then((result) => {
            alert("Message has been sent successfully!");
            setFormData({ name: "", email: "", phone: "", message: "" });
        }).catch(() => alert("Something went wrong. Please try again."));
    }

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <div className ="px-4 w-150">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent text-center">Contact Me</h2>
                <form action="" className="space-y-6" onSubmit={handleSubmit}>
                    <div className="relative">
                        <input type="text" name="name" id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"/>
                    </div>
                    <div className="relative">
                        <input type="email" id="email" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required placeholder="Your Email" className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"/>
                    </div>
                    <div className="relative">
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="Your Phone Number" className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"/>
                    </div>
                    <div className="relative">
                        <textarea name="message" id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required placeholder="Your Message" rows={5} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"></textarea>
                    </div>

                    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 cursor-pointer text-white font-bold py-3 rounded transition">Submit</button>
                </form>
            </div>
        </section>
    );
}