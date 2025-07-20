import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";

export default function ContactUs() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Navbar />
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/20 to-purple-950/20" />

        {/* Animated Grid */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
          animate={{ backgroundPosition: ['0px 0px', '50px 50px'] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Animated Orbs */}
        <motion.div
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          style={{ left: "10%", top: "10%" }}
          animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute w-[400px] h-[400px] bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10 rounded-full blur-3xl"
          style={{ right: "5%", bottom: "10%" }}
          animate={{ x: [0, -80, 0], y: [0, 40, 0], scale: [1, 0.8, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center text-slate-200"
        >
          <Mail className="w-10 h-10 mx-auto text-cyan-400 mb-4" />
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-slate-400 mb-8">
            Have questions, ideas, or want to learn more about Daifend's AI-powered cybersecurity solutions?
            We'd love to hear from you.
          </p>

          <form className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-slate-900 text-slate-100 rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-slate-900 text-slate-100 rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 bg-slate-900 text-slate-100 rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            ></textarea>

            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-lg shadow-cyan-500/25">
              <Send className="w-5 h-5 mr-2" /> Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
