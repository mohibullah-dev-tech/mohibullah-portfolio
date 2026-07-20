import { motion } from "framer-motion";

const SectionTitle = ({ badge, title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-16 text-center"
    >
      <span
        className="
        inline-block
        rounded-full
        border
        border-blue-500/30
        bg-blue-500/10
        px-4
        py-2
        text-sm
        font-semibold
        text-blue-400
      "
      >
        {badge}
      </span>

      <h2 className="mt-6 text-5xl font-bold">{title}</h2>

      <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">
        {subtitle}
      </p>
    </motion.div>
  );
};

export default SectionTitle;
