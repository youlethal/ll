'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'

export default function Hero() {
  const businessName = "LL";
  const category = "Hairdresser";
  
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-primary to-primary/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Welcome to{' '}
              <span className="text-accent">{businessName}</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-white/90 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Professional {category.toLowerCase()} services tailored to your needs. 
              We deliver exceptional quality and outstanding results.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a
                href="#services"
                className="bg-accent text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-accent/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Our Services
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              
              <motion.a
                href="#contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-white hover:text-primary transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Quote
              </motion.a>
            </motion.div>

            <motion.div 
              className="flex items-center gap-4 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white/80">5.0 rating from 100+ clients</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">🏢</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Professional {category}</h3>
                <p className="text-white/80">Quality service guaranteed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}