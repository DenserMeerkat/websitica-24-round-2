import React from "react";
import { Calendar, SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/utils";

const Search = () => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className="max-w-8xl mx-auto py-10"
    >
      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="auto mx-auto flex max-w-6xl items-center justify-between rounded-xl bg-white/60 px-6 py-3 backdrop-blur-md"
      >
        <div className="flex items-center gap-0 border-none dark:border-none">
          <SearchIcon className="opacity-80" />
          <Input className="min-w-[500px]" />
        </div>
        <div className="flex gap-8 opacity-80">
          <Button variant="ghost">
            <Calendar className="mr-2 h-4 w-4" />
            Check In
          </Button>
          <Button variant="ghost">
            <Calendar className="mr-2 h-4 w-4" />
            Check Out
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Search;
