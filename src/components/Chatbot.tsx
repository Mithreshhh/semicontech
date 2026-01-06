"use client";

import { useState } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-electric text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5" />
                <h3 className="font-semibold">Chat Support</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 rounded-full p-1 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-4">
              {/* Bot Message */}
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-electric/10 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-electric" />
                </div>
                <div className="flex-1">
                  <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-700">
                      Hello! How can I help you today?
                    </p>
                  </div>
                  <span className="text-xs text-gray-500 mt-1 block">Just now</span>
                </div>
              </div>

              {/* User Message */}
              <div className="flex gap-2 justify-end">
                <div className="flex-1 flex justify-end">
                  <div className="bg-electric text-white rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm">I need information about your courses</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-electric flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-semibold">U</span>
                </div>
              </div>

              {/* Bot Response */}
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-electric/10 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-electric" />
                </div>
                <div className="flex-1">
                  <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-700">
                      We offer various courses including Physical Design, Design & Verification, Analog Layout Design, and Design For Test. Would you like to know more about any specific course?
                    </p>
                  </div>
                  <span className="text-xs text-gray-500 mt-1 block">Just now</span>
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-gray-200 bg-white">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric/50 text-sm text-gray-700"
                  disabled
                />
                <Button
                  size="icon"
                  className="bg-electric text-white hover:bg-electric/90 rounded-lg"
                  disabled
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-electric text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </motion.button>
    </div>
  );
}

