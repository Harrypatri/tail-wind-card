export default function Card() {
  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center p-8">
      <div className="relative bg-white border border-stone-200 rounded-xl max-w-sm w-full p-8 shadow-sm overflow-hidden">

        {/* Gold accent bar at top */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#B7935A] via-[#D4B483] to-[#B7935A]" />

        {/* Eyebrow label */}
        <p className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#B7935A] mb-2.5">
          My React design
        </p>

        {/* Title */}
        <h2 className="font-serif text-[22px] font-semibold text-stone-900 leading-snug mb-3">
          Harry Patrick
        </h2>

        {/* Decorative divider */}
        <div className="w-8 h-px bg-[#B7935A] opacity-70 mb-3.5" />

        {/* Description */}
        <p className="text-sm font-light text-stone-500 leading-relaxed mb-6">
          Every aspect of design has it own meaning, React is  a front-end JavaScript library. It is primarily used for creating single page applications that update instantly without a full reload . This card  is to display an explanation of what react is all about.
        </p>

        {/* Button */}
        <a 
        href="https://github.com/Harrypatri"
  target="_blank"
  rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 text-[12px] font-medium tracking-[0.12em] uppercase text-[#B7935A] border border-[#B7935A] rounded-[2px] px-5 py-2.5 bg-transparent hover:bg-[#B7935A] hover:text-white transition-colors duration-150">
          Explore More
          <svg
            className="w-3 h-3 transition-transform duration-150 group-hover:translate-x-0.5"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 6h8M7 3l3 3-3 3"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

      </div>
    </div>
  );
}