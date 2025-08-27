interface Iprop {
    setOpen: React.Dispatch<boolean>
}
export default function ContactForm({ setOpen }: Iprop) {

    return (
        <div
            className="absolute top-0 left-0 w-full z-20 min-h-screen bg-black/40 flex items-center justify-center p-6"
            onClick={() => setOpen(false)} // only closes when clicking backdrop
        >
            <form
                className="w-full max-w-lg bg-[#0f0f10]/20 border border-[#fcfdff]/20 p-6 space-y-5 backdrop-blur-sm font-jetbrains relative"
                onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside form
            >

                {/* Full Name */}
                <div className="flex flex-col">
                    <label className="text-lg text-gray-300 uppercase mb-1">
                        Full Name <span className="text-blue-400">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="John Smith"
                        className="w-full px-3 py-2 bg-transparent backdrop-blur-2xl outline-none border border-zinc-600 placeholder-[#fcfdff]/50 text-[#fcfdff] focus:border-zinc-400"
                    />
                </div>

                {/* Organization */}
                <div className="flex flex-col">
                    <label className="text-lg text-gray-300 uppercase mb-1">
                        Organization <span className="text-blue-400">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Acme Inc."
                        className="w-full px-3 py-2 bg-transparent backdrop-blur-2xl outline-none border border-zinc-600 placeholder-[#fcfdff]/50 text-[#fcfdff] focus:border-zinc-400"
                    />
                </div>

                {/* Email */}
                <div className="flex flex-col">
                    <label className="text-lg text-gray-300 uppercase mb-1">
                        Email <span className="text-blue-400">*</span>
                    </label>
                    <input
                        type="email"
                        placeholder="johnsmith@acme.inc"
                        className="w-full px-3 py-2 bg-transparent backdrop-blur-2xl outline-none border border-zinc-600 placeholder-[#fcfdff]/50 text-[#fcfdff] focus:border-zinc-400"
                    />
                </div>

                {/* Phone */}
                <div className="flex flex-col">
                    <label className="text-lg text-gray-300 uppercase mb-1">
                        Phone <span className="text-blue-400">*</span>
                    </label>
                    <input
                        type="tel"
                        placeholder="+1 (111) 111-1111"
                        className="w-full px-3 py-2 bg-transparent backdrop-blur-2xl outline-none border border-zinc-600 placeholder-[#fcfdff]/50 text-[#fcfdff] focus:border-zinc-400"
                    />
                </div>

                {/* Nature of Request */}
                <div className="flex flex-col">
                    <label className="text-lg text-gray-300 uppercase mb-1">
                        Nature of Request <span className="text-blue-400">*</span>
                    </label>
                    <textarea
                        rows={4}
                        placeholder="Please provide any relevant details about your request."
                        className="w-full px-3 py-2 bg-black border border-gray-600 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-gray-400 resize-none"
                    ></textarea>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full py-2 bg-transparent border border-gray-500 text-gray-300 uppercase tracking-wider hover:bg-gray-800"
                >
                    Submit
                </button>

                {/* Corner Decorations */}
                <div className="border-t-2 border-l-2 border-zinc-500 w-5 h-5 z-30 absolute top-0 left-0 -translate-x-[2px] -translate-y-[2px]" />
                <div className="border-t-2 border-l-2 border-zinc-500 w-5 h-5 z-30 absolute top-0 right-0 translate-x-[2px] -translate-y-[2px] rotate-90" />
                <div className="border-t-2 border-l-2 border-zinc-500 w-5 h-5 z-30 fixed bottom-0 right-0 translate-y-full -rotate-180" />
                <div className="border-t-2 border-l-2 border-zinc-500 w-5 h-5 z-30 fixed left-0 bottom-0 -rotate-90" />
            </form>
        </div>
    );
}
